const cp = require('child_process');

const versionA = '9.0.0-alpha.45';
const versionB = '9.0.0-alpha.60';

const filesBlockList = [
  [/^change\//, false],
  [/^packages\/react-\//, false],
  [/^packages\/react-docsite-components/, false],
  [/^packages\/react-charting/, false],
  [/^packages\/react-examples/, false],
  [/^packages\/react-experiments/, false],
  [/^packages\/react-conformance/, false],
  [/^packages\/react-flex/, false],
  [/^packages\/react-hooks/, false],
  [/^packages\/react-monaco-editor/, false],
  [/^packages\/react-icons-mdl2/, false],
  [/^packages\/react-storybook/, false],

  [/\.npmignore$/, false],
  [/just.config.ts$/, false],
  [/.storybook\//, false],
  [/\.js$/, false],
  [/\.md$/, false],
  [/\.png$/, false],
  [/\.PNG$/, false],
  [/LICENSE$/, false],
  [/\.snap$/, false],
  [/\.e2e\.ts$/, false],
  [/\.e2e\.tsx$/, false],
  [/isConformant.ts$/, false],
  [/\.test\.ts$/, false],
  [/\.test\.tsx$/, false],
  [/\.stories\.tsx$/, false],
  [/\.json$/, false],

  [/^packages\/react-/, true],
];

function getFilesInCommit(commit) {
  return cp.execSync(`git diff-tree --no-commit-id --name-only -r ${commit}`).toString('utf8').trim().split('\n');
}

function filterFilesFromCommit(files) {
  return files.filter(file => {
    return filesBlockList.every(item => item[0].test(file) === item[1]);
  });
}

async function run() {
  const tagA = `@fluentui/react-components_v${versionA}`;
  const tagB = `@fluentui/react-components_v${versionB}`;

  const diffCommand = `git log ${tagA}..${tagB} --oneline --no-decorate`;
  const result = cp.execSync(diffCommand).toString('utf8').trim().split('\n');

  const commits = result.map(line => ({
    commit: line.substr(0, line.indexOf(' ')),
    message: line.substr(line.indexOf(' ') + 1),
  }));
  const nonReleaseCommits = commits.filter(commit => commit.message !== 'applying package updates');

  console.log(`Difference between ${tagA} & ${tagB}`);
  console.log(`  - all commits: ${commits.length}`.padStart(5));
  console.log(`  - non release commits: ${nonReleaseCommits.length}`);

  const commitsWithFiles = nonReleaseCommits.reduce((acc, commit) => {
    const files = filterFilesFromCommit(getFilesInCommit(commit.commit));

    if (files.length) {
      return [...acc, { ...commit, files }];
    }

    return acc;
  }, []);

  console.log(`  - commits affecting v9: ${commitsWithFiles.length}`);

  console.log(commitsWithFiles);
}

run()
  .then()
  .catch(e => console.log(e));
