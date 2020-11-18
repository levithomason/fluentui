import * as React from 'react';
import { /* AppLayout, */ BrowserWindow } from '@fluentui/react-northstar';

const AppLayoutLayoutExample = () => (
  <BrowserWindow>
    Next is to get this working again:
    <br />
    <code>
      {`
        <AppLayout
          template={\`
            "header header header" 60px
            "left   main   right"  1fr /
            300px   1fr    200px
          \`}
          slots={{
            header: { content: 'HEADER' },
            left: { content: 'left' },
            main: { content: 'main' },
            right: { content: 'right' },
          }}
        />
      `}
    </code>
  </BrowserWindow>
);

export default AppLayoutLayoutExample;
