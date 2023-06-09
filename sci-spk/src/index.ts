import path from 'path';

import { OpenAIChat } from 'langchain/llms/openai';

import { OpenAIEmbeddings } from 'langchain/embeddings/openai';

import { DirectoryLoader } from 'langchain/document_loaders/fs/directory';
import { TextLoader } from 'langchain/document_loaders/fs/text';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';

import { FaissStore } from 'langchain/vectorstores/faiss';

import { loadQAStuffChain, loadQARefineChain, loadQAMapReduceChain } from 'langchain/chains';

type Commands = 'index' | 'ask' | 'query';
const COMMAND = process.argv[2] as Commands;
const QUERY = COMMAND === 'ask' || 'query' ? process.argv[3] : '';

const usage = () => {
  console.log(
    `Usage: yarn ai <command> [query]

Commands:
    ask     Get an answer to a question about Fluent UI
    query   Query the vector store for relevant documents
    index   First run only. Creates a local vector store from documents.
    
Examples:
    yarn ai query "contributing setup"
    yarn ai ask "How do I use the Breadcrumb component?"
    yarn ai index
`,
  );
};

if (!COMMAND) {
  usage();
  console.error('Error: Must provide a command.');
  console.error();
  process.exit(1);
}
if (COMMAND !== 'index' && COMMAND !== 'ask' && COMMAND !== 'query') {
  usage();
  console.error('Error: Command must be "index" or "query".');
  console.error();
  process.exit(1);
}
if ((COMMAND === 'ask' || COMMAND === 'query') && !QUERY) {
  usage();
  console.error('Error: Must provide a query.');
  console.error();
  process.exit(1);
}

const VECTOR_STORE_DIRECTORY = path.resolve(__dirname, 'storage');

const OPEN_AI_MODEL_CONFIG = {
  // openAIApiKey: process.env.AZURE_OPENAI_API_KEY,
  azureOpenAIApiKey: process.env.AZURE_OPENAI_API_KEY,
  azureOpenAIApiVersion: process.env.AZURE_OPENAI_API_CHAT_VERSION,
  azureOpenAIApiInstanceName: process.env.AZURE_OPENAI_API_INSTANCE_NAME,
  azureOpenAIApiDeploymentName: process.env.AZURE_OPENAI_API_CHAT_DEPLOYMENT_NAME,
};

const OPEN_AI_EMBEDDINGS_CONFIG = {
  ...OPEN_AI_MODEL_CONFIG,
  modelName: process.env.AZURE_OPENAI_API_EMBEDDINGS_MODEL_NAME,

  azureOpenAIApiVersion: process.env.AZURE_OPENAI_API_EMBEDDINGS_VERSION,
  azureOpenAIApiEmbeddingsDeploymentName: process.env.AZURE_OPENAI_API_EMBEDDINGS_DEPLOYMENT_NAME,

  // Per Azure guidance for code files: false
  stripNewLines: false,

  // Documents contain a pageContent property which is the text of the document
  // The batchSize concatenates N number of document pageContent's together to form a single embeddings request
  // The total length of the embedding input can't exceed 2048 tokens for Azure OpenAI API text-embedding-ada-002
  // We already split the documents by pageContent length ensuring each document contains < 2048 tokens
  // So, we batch 1 document at a time to Azure Open AI text-embedding-ada-002
  // Default (undocumented): 512
  batchSize: 1,
};
const EMBEDDINGS = new OpenAIEmbeddings(OPEN_AI_EMBEDDINGS_CONFIG);

const createVectorStore = async () => {
  //
  // Document loader
  //
  const loader = new DirectoryLoader(
    '../packages/react-components',
    {
      // '.json': path => new TextLoader(path),
      '.md': path => new TextLoader(path),
      // '.tsx': path => new TextLoader(path),
      // '.ts': path => new TextLoader(path),
      // '.js': path => new TextLoader(path),
    },
    true,
    'ignore',
  );

  //
  // Create documents
  //
  console.log(`Loading documents: ${loader.directoryPath}`);
  const docs = await loader
    .loadAndSplit(
      new RecursiveCharacterTextSplitter({
        chunkSize: 2048 * 3, // 2048 token max, ~4 words per token
        chunkOverlap: 200,
      }),
    )
    // Filter unwanted docs
    .then(docs => {
      // console.log(JSON.stringify(docs.slice(0, 20), null, 2));
      console.log(`...Loaded ${docs.length} documents`);
      const filteredDocs = docs.filter(doc => {
        return (
          // ignore node_modules
          !/node_modules/.test(doc.metadata.source) &&
          !/MIGRATION|README|CHANGELOG|SPEC|API/i.test(doc.metadata.source) &&
          // empty docs return undefined and make the splitter throw
          typeof doc.pageContent !== 'undefined'
        );
      });
      console.log(`...Filtered ${filteredDocs.length} documents`);
      return filteredDocs;
    })
    // Report results
    .then(docs => {
      console.log(`...Split ${docs.length} documents`);

      let longDocs = 0;
      let min = Infinity;
      let max = 0;
      let total = 0;
      for (const doc of docs) {
        max = Math.max(max, doc.pageContent.length);
        min = Math.min(min, doc.pageContent.length);
        total += doc.pageContent.length;
      }
      // sort by doc.pageContent.length
      docs
        .sort((a, b) => a.pageContent.length - b.pageContent.length)
        .forEach(doc => {
          // if (doc.pageContent.length > 0 && doc.pageContent.length < 100) {
          console.log(doc.pageContent.length, path.relative(process.cwd(), doc.metadata.source));
          // longDocs++;
          // if (longDocs > 100) process.exit();
          // }
        });

      console.log(`   max len: ${max.toLocaleString()}, (~${Math.round(max / 4).toLocaleString()} tokens)`);
      console.log(`   min len: ${min.toLocaleString()}, (~${Math.round(min / 4).toLocaleString()} tokens)`);
      console.log(
        `   avg len: ${Math.round(total / docs.length).toLocaleString()}, (~${Math.round(
          total / docs.length / 4,
        ).toLocaleString()} tokens)`,
      );
      console.log(`   total len: ${total.toLocaleString()}, (~${Math.round(total / 4).toLocaleString()} tokens)`);

      return docs;
    });

  process.exit();
  //
  // Create vector store
  //
  console.log(`Creating vector store:`);
  console.log(`...Creating embeddings from documents`);
  const store = await FaissStore.fromDocuments(docs, EMBEDDINGS);

  console.log(`...Saving to ${VECTOR_STORE_DIRECTORY}`);
  await store.save(VECTOR_STORE_DIRECTORY);

  console.log(`...Done!`);
  console.log();

  return store;
};

const getVectorStore = async () => {
  // console.log(`Loading vector store: ${VECTOR_STORE_DIRECTORY}`);
  const store = await FaissStore.load(VECTOR_STORE_DIRECTORY, EMBEDDINGS);
  // console.log(`...Done!`);
  // console.log();
  return store;
};

const run = async () => {
  switch (COMMAND) {
    case 'index': {
      await createVectorStore();
      break;
    }

    case 'query': {
      console.log(`...Searching`);
      const store = await getVectorStore();
      const relevantDocs = await store.similaritySearch(QUERY);
      console.log(`...Found ${relevantDocs.length} docs`);
      console.log(JSON.stringify(relevantDocs, null, 2));
      break;
    }

    case 'ask': {
      console.log(`...Searching`);
      const store = await getVectorStore();
      const relevantDocs = await store.similaritySearch(QUERY, 5);

      console.log(`...Reading ${relevantDocs.length} docs`);
      const model = new OpenAIChat({
        ...OPEN_AI_MODEL_CONFIG,
        temperature: 0.5,
      });

      const chain = loadQARefineChain(model);

      const result = await chain.call({
        input_documents: relevantDocs,
        question: QUERY,
      });

      console.log();
      // console.log('🤖:', result.text.trim()); // for stuff chain
      console.log('🤖:', result.output_text.trim()); // for refine chain
      console.log();

      break;
    }
  }
};

run();
