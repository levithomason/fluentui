import * as React from 'react';
import { Button, ButtonWC } from '@fluentui/react-components';

const style = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
};

const Compare: React.FC<{ react: React.ReactNode; wc: React.ReactNode }> = props => {
  const refReact = React.useRef();
  const refWC = React.useRef();

  const [didPassHTML, setDidPassHTML] = React.useState(null);

  React.useLayoutEffect(() => {
    setDidPassHTML(refReact.current.innerHTML === refWC.current.innerHTML);
  });

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div style={style} ref={refReact}>
          {props.react}
        </div>
        <div style={style} ref={refWC}>
          {props.wc}
        </div>
      </div>
      <hr />
      <div>{didPassHTML === null ? '⌛' : didPassHTML === false ? '❌' : '✅'} HTML Matches</div>
    </div>
  );
};

export const Appearance = () => {
  return (
    <Compare
      react={
        <>
          <Button>Default</Button>
          <Button appearance="primary">Primary</Button>
          <Button appearance="outline">Outline</Button>
          <Button appearance="subtle">Subtle</Button>
          <Button appearance="transparent">Transparent</Button>
        </>
      }
      wc={
        <>
          <ButtonWC>Default</ButtonWC>
          <ButtonWC appearance="primary">Primary</ButtonWC>
          <ButtonWC appearance="outline">Outline</ButtonWC>
          <ButtonWC appearance="subtle">Subtle</ButtonWC>
          <ButtonWC appearance="transparent">Transparent</ButtonWC>
        </>
      }
    />
  );
};
Appearance.parameters = {
  docs: {
    description: {
      story:
        '- `(undefined)`: the button appears with the default style\n' +
        '- `primary`: emphasizes the button as a primary action.\n' +
        '- `outline`: removes background styling.\n' +
        '- `subtle`: minimizes emphasis to blend into the background until hovered or focused\n' +
        '- `transparent`: removes background and border styling.\n',
    },
  },
};
