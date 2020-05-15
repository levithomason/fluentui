import * as React from 'react';
import { Button, Checkbox, Dropdown, Input, Provider, Slider } from '@fluentui/react-northstar';
import { SiteVariables, ThemeNames, Tokens } from './types';
import { ButtonVariables } from 'src/themes/fluent-base/components/Button/buttonVariables';
import TokenEditor from './TokenEditor';

const designUnit = '4';
const density = '1';
const cornerRadius = '2';

const themes: {
  [K in ThemeNames]: {
    siteVariables: SiteVariables;
    componentVariables: {
      Button: (siteVariables: SiteVariables) => ButtonVariables;
      Input: (siteVariables: SiteVariables) => Tokens;
    };
  };
} = {
  // the missing user agent for web application components
  base: {
    siteVariables: {
      componentHeight: `${+designUnit * 8}px`,
      cornerRadius,

      density,
      designUnit: `${designUnit}px`,
    },

    componentVariables: {
      Button: sv => ({}),
      Input: sv => ({}),
    },
  },

  // m365ish by default, for our apps to build on
  m365Base: {
    siteVariables: {},
    componentVariables: {
      Button: sv => ({}),
      Input: sv => ({}),
    },
  },

  odsp: {
    siteVariables: {},
    componentVariables: {
      Button: sv => ({}),
      Input: sv => ({}),
    },
  },

  teamsShell20Base: {
    siteVariables: {},
    componentVariables: {
      Button: sv => ({}),
      Input: sv => ({}),
    },
  },

  teamsShell20: {
    siteVariables: {},
    componentVariables: {
      Button: sv => ({}),
      Input: sv => ({}),
    },
  },

  teamsCoke: {
    siteVariables: {},
    componentVariables: {
      Button: sv => ({}),
      Input: sv => ({}),
    },
  },

  teamsIKEA: {
    siteVariables: {},
    componentVariables: {
      Button: sv => ({}),
      Input: sv => ({}),
    },
  },

  github: {
    siteVariables: {},
    componentVariables: {
      Button: sv => ({}),
      Input: sv => ({}),
    },
  },

  linkedin: {
    siteVariables: {},
    componentVariables: {
      Button: sv => ({}),
      Input: sv => ({}),
    },
  },

  amazon: {
    siteVariables: {},
    componentVariables: {
      Button: sv => ({}),
      Input: sv => ({}),
    },
  },

  material: {
    siteVariables: {},
    componentVariables: {
      Button: sv => ({}),
      Input: sv => ({}),
    },
  },
};

const ThemeExample: React.FC<{
  children?: React.ReactNode;
  themeName: ThemeNames;
}> = ({ children, themeName }) => {
  const [siteVariables, setSiteVariables] = React.useState<Tokens>(themes[themeName].siteVariables);
  const [componentVariables, setComponentVariables] = React.useState<{ [key: string]: Tokens }>(
    themes[themeName].componentVariables,
  );

  const handleSiteVariablesChange = React.useCallback(newTokens => {
    console.log('ThemeExample handleSiteVariablesChange', newTokens);
    setSiteVariables(newTokens);
  }, []);

  const handleComponentVariablesChange = React.useCallback(
    componentName => newTokens => {
      console.log('ThemeExample handleComponentVariablesChange', componentName, newTokens);
      setComponentVariables({ ...componentVariables, [componentName]: newTokens });
    },
    [setComponentVariables],
  );

  console.log('ThemeExample render', { siteVariables, componentVariables });

  return (
    <Provider
      styles={{ position: 'relative', display: 'flex', border: '2px solid black', margin: '1rem 0' }}
      theme={{
        siteVariables,
        componentVariables,
      }}
    >
      <Provider.Consumer
        render={theme => (
          <div
            style={{
              flex: '0 0 auto',
              padding: '0 0 300px',
              height: '300px',
              fontFamily: 'monospace',
              color: '#eee',
              background: '#333',
              overflowY: 'auto',
            }}
          >
            <h2
              style={{
                position: 'sticky',
                flex: '0 0 auto',
                margin: 0,
                top: 0,
                color: 'salmon',
                background: '#333',
                zIndex: 3,
              }}
            >
              {themeName}
            </h2>
            <TokenEditor label="siteVariables" tokens={theme.siteVariables} onChange={handleSiteVariablesChange} />
            {Object.entries(theme.componentVariables).map(([componentName, componentTokens]) => {
              return (
                <TokenEditor
                  key={componentName}
                  label={componentName}
                  tokens={componentTokens(theme.siteVariables)}
                  onChange={handleComponentVariablesChange(componentName)}
                />
              );
            })}
          </div>
        )}
      />

      <div style={{ flex: 1, padding: '1rem', margin: '1rem' }}>
        <Button content="Click Me" />
        <Dropdown items={['One', 'Two', 'Three']} />
        <Slider />
        <Checkbox label="I accept the terms" />

        <Input placeholder="First name" />

        {/*
        <BaseButtonReact />
        <BasePickerReact />
        <BaseTextFieldReact />
        <SliderReact />
        <CheckboxReact />
      */}

        {children}
      </div>
    </Provider>
  );
};

export default ThemeExample;
