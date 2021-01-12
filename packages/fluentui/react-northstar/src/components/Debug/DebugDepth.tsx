import * as React from 'react';

export type DebugDepthProps = {};

const depthSelectors = {
  notFluent: '*:not([class*=ui-])',
  fluentOnly: '[class*=ui-]',
  allElements: '*',
  virtualDepth: '[data-depth]',
};

export const DebugDepth: React.FC<DebugDepthProps> = props => {
  const [depthSelector, setDepthSelector] = React.useState(depthSelectors.allElements);
  const [hideContent, setHideContent] = React.useState(false);

  return (
    <div
      data-debug-depth
      style={{
        position: 'fixed',
        display: 'flex',
        inset: '-25% 0px 0px 0px',
        padding: '10px',
        margin: 'auto',
        width: '500px',
        height: '40px',
        justifyContent: 'space-evenly',
        background: 'black',
        zIndex: 999999,
      }}
    >
      <style>{`
        ${depthSelector !== 'no-element' &&
          `
          html, body {
            background: rgb(128, 85, 255)  !important;
          }
          
          [data-depth]::before {
            content: attr(data-depth);
            position: absolute;
            padding: 2px 1px;
            font-size: 10px;
            font-family: monospace;
            color: white;
            background: black;
          }
        `}
        ${depthSelector}:not([data-debug-depth]) {
          background: rgba(48, 32, 96, 0.2) !important;
          box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.5) !important;
          color: rgba(255, 255, 255, 0.75) !important;
        }
        ${hideContent &&
          `*:not([data-debug-depth]) {
          color: transparent !important;
          border: none !important;
          box-shadow: none !important;
          fill: transparent !important;
          }
        `}
      `}</style>
      <button
        style={{ background: depthSelector === 'no-element' ? 'green' : 'unset' }}
        onClick={() => setDepthSelector('no-element')}
      >
        off
      </button>
      <button
        style={{ background: depthSelector === depthSelectors.notFluent ? 'green' : 'unset' }}
        onClick={() => setDepthSelector(depthSelectors.notFluent)}
      >
        notFluent
      </button>
      <button
        style={{ background: depthSelector === depthSelectors.virtualDepth ? 'green' : 'unset' }}
        onClick={() => {
          setDepthSelector(depthSelectors.virtualDepth);
        }}
      >
        virtualDepth
      </button>
      <button
        style={{ background: depthSelector === depthSelectors.fluentOnly ? 'green' : 'unset' }}
        onClick={() => setDepthSelector(depthSelectors.fluentOnly)}
      >
        fluentOnly
      </button>
      <button
        style={{ background: depthSelector === depthSelectors.allElements ? 'green' : 'unset' }}
        onClick={() => setDepthSelector(depthSelectors.allElements)}
      >
        allElements
      </button>
      <button style={{ background: hideContent ? 'green' : 'unset' }} onClick={() => setHideContent(!hideContent)}>
        hideContent
      </button>
    </div>
  );
};
