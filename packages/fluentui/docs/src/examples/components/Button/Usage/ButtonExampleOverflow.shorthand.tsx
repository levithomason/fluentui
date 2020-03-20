import * as React from 'react';
import { Button } from '@fluentui/react-northstar';
import * as _ from 'lodash';

class ButtonExampleOverflow extends React.Component {
  state = {
    density: 1,
    whiteSpace: 1
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <style>
          {`
            :root {
              ${_.map(this.state, (val, key) => `--fui-${_.kebabCase(key)}: ${val};`).join('\n')}
            }
          `}
        </style>

        {_.map(this.state, (val, key) => (
          <div key={key}>
            <div>{key}</div>
            <input type="range" value={this.state[key]} min={0} max={2} step={0.01} onChange={this.handleChange} name={key} />
          </div>
        ))}

        <hr />
        <Button content="Click Me" />
        <Button content="Profile" />
        <Button content="Call" />
        <Button content="This is what extremely long text will look like inside of a button." />
      </div>
    );
  }
}

export default ButtonExampleOverflow;
