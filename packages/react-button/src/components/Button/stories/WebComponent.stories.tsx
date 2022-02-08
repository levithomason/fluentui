import * as React from 'react';

import './ButtonWC.stories';

const Heading: React.FC<{ title: string }> = ({ title }) => (
  <div style={{ margin: '20px 0', borderTop: '1px solid #000000D', fontWeight: 'bold' }}>{title}</div>
);

export const WebComponent = () => (
  <div>
    <h1>Fluent UI Web Components</h1>
    <p style={{ fontSize: '20px' }}>
      These components are built with Lit. They adopt the full styles and design tokens from the host.
    </p>
    <br />

    <Heading title="Default" />
    <fui-button>Button</fui-button>

    <Heading title="Size" />
    <fui-button size="small">Small</fui-button>
    <fui-button size="medium">Medium</fui-button>
    <fui-button size="large">Large</fui-button>

    <Heading title="Block" />
    <fui-button block>Block</fui-button>

    <Heading title="Appearance" />
    <fui-button appearance="primary">Primary</fui-button>
    <fui-button appearance="outline">Outline</fui-button>
    <fui-button appearance="subtle">Subtle</fui-button>
    <fui-button appearance="transparent">Transparent</fui-button>
  </div>
);

WebComponent.parameters = {
  docs: {
    description: {
      story: 'Web Component implementation',
    },
  },
};
