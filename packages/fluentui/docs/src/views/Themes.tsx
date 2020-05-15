import * as React from 'react';
import { Button, Checkbox, Dropdown, Input, Provider, Slider } from '@fluentui/react-northstar';
// import { ThemeInput } from '@fluentui/styles';
import { ButtonVariables } from 'src/themes/fluent-base/components/Button/buttonVariables';

// import {
//   BaseButton as BaseButtonReact,
//   // BasePicker as BasePickerReact,
//   // BaseTextField as BaseTextFieldReact,
//   // Slider as SliderReact,
//   // Checkbox as CheckboxReact,
// } from '@fluentui/react';

// https://hackmd.io/2lHy4oK-Sq6s2YBw8Aq61A?both
// Reference: https://codesandbox.io/s/token-fun-o2gh8?file=/src/themes/costco.css

// TODO: make the dev/debug page look like this below grid of inherited themes
// Use a provider for each "theme in a box"
//

// @fluentui/themes (all the themes, tree shakable)
//
//     @fluentui/base-theme
//              |
//              v
//     @fluentui/m365-base-theme  ...  @fluentui/github-theme
//              |
//              v
//     @fluentui/teams-shell20-theme ...  @fluentui/odsp-theme
//              |
//              v
//    @fluentui/teams-theme    @fluentui/teams-coke-theme  @fluentui/teams-ikea-theme ...

type ThemeNames =
  | 'base'
  | 'm365Base'
  | 'odsp'
  | 'teamsShell20Base'
  | 'teamsShell20'
  | 'teamsCoke'
  | 'teamsIKEA'
  | 'github'
  | 'linkedin'
  | 'amazon'
  | 'material';

type Tokens = {
  [key: string]: string;
};

type SiteVariables = {
  componentHeight?: string;
  cornerRadius?: string;

  density?: string;
  designUnit?: string;
};

const designUnit = '4';
const density = '1';
const cornerRadius = '2';

const themes: {
  [K in ThemeNames]: {
    siteVariables: SiteVariables;
    componentVariables: {
      Button: (siteVariables: SiteVariables) => ButtonVariables;
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

type TokenCategories = 'color' | 'range' | 'text';
type TokenValues = string | number;
const getTokenCategory: (name: string, val: string) => TokenCategories = (name, val) => {
  if (/Font/i.test(name)) return 'font';
  if (/Fill/i.test(name)) return 'fill';
  if (/Stroke/i.test(name)) return 'stroke';
  if (/Corner/i.test(name)) return 'corner';
  if (/Shadow/i.test(name)) return 'shadow';
  if (/Layout/i.test(name)) return 'layout';
  if (/Motion/i.test(name)) return 'motion';

  return 'UNKNOWN';
};

const TokenEditor: React.FC<{
  label: string;
  tokens: Tokens;
  onChange: (tokens: Tokens) => void;
}> = ({ label, tokens, onChange }) => {
  const initialTokens = React.useRef(tokens);
  const [localTokens, setLocalTokens] = React.useState(tokens);

  const tokensPairsGroupedByCategory: {
    [key in TokenCategories]?: Array<[string, TokenValues]>;
  } = Object.entries(localTokens).reduce((acc, [key, val]) => {
    const category = getTokenCategory(key, val);
    acc[category] = (acc[category] || []).concat([[key, val]]);
    return acc;
  }, {});

  const handleTokenChange = React.useCallback(
    (name, value) => {
      console.log('handleTokenChange', { name, value });
      const newTokens = { ...localTokens, [name]: String(value) };
      setLocalTokens(newTokens);
      onChange(newTokens);
    },
    [onChange, localTokens, setLocalTokens],
  );

  const getInputProps = React.useCallback<(tokenName: string, tokenValue: string) => React.HTMLProps<HTMLInputElement>>(
    (tokenName, tokenValue) => {
      if (/color/i.test(tokenName) || /^#|rgb|hsl|hvs/.test(tokenValue)) {
        return {
          name: tokenName,
          type: 'color',
          value: tokenValue,
          style: { border: 'none', background: 'transparent' },
          onChange: e => {
            handleTokenChange(tokenName, e.target.value);
          },
        };
      }

      if (/^\d/.test(tokenValue) || /width/i.test(tokenValue)) {
        const numberValue = parseFloat(tokenValue);
        const unitString = String(tokenValue).replace(String(numberValue), '');
        const hasDecimal = numberValue % 1 !== 0;

        return {
          name: tokenName,
          type: 'range',
          step: hasDecimal ? 0.001 : 1,
          min: 0,
          max: Math.max(4, parseInt(String(initialTokens.current[tokenName]), 10) * 2),
          value: numberValue,
          style: { width: '100%' },
          onChange: e => {
            handleTokenChange(tokenName, e.target.value + unitString);
          },
        };
      }

      return {
        name: tokenName,
        type: 'input',
        value: tokenValue,
        style: { border: 'none' },
        onChange: e => {
          handleTokenChange(tokenName, e.target.value);
        },
      };
    },
    [handleTokenChange],
  );

  console.log('TokenEditor render', localTokens);

  return (
    <div>
      <h3 style={{ position: 'sticky', top: '24px', background: '#333', zIndex: 2 }}>{label}</h3>
      {Object.entries(tokensPairsGroupedByCategory).reduce((acc, [tokenKind, tokens]) => {
        acc.push(
          <h4
            key={tokenKind}
            style={{ position: 'sticky', top: '42px', background: '#333', borderBottom: '1px solid #888', zIndex: 1 }}
          >
            {tokenKind}
          </h4>,
        );

        tokens
          .filter(([key, val]) => {
            const isDebug = key === '_debug';
            const isComplexToken = Array.isArray(val) || typeof val === 'object';

            return !isDebug && !isComplexToken;
          })
          .forEach(([key, value]) => {
            const inputProps = getInputProps(key, value);
            const isOverridden = String(value) !== String(initialTokens.current[key]);

            acc.push(
              <div key={key} style={{ position: 'relative', display: 'block', padding: '4px' }}>
                {/* Label */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ padding: '0 4px', marginRight: 'auto' }}>{key}</span>
                  {isOverridden && (
                    <button
                      style={{
                        marginLeft: 'auto',
                        color: 'salmon',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                      }}
                      onClick={() => {
                        handleTokenChange(key, initialTokens.current[key]);
                      }}
                    >
                      &otimes;
                    </button>
                  )}
                  {isOverridden && <strong style={{ padding: '0 4px', color: 'salmon' }}>{value}</strong>}
                  <span
                    style={{
                      padding: '0 4px',
                      textDecoration: isOverridden ? 'line-through' : 'none',
                      opacity: isOverridden ? 0.5 : 1,
                    }}
                  >
                    {initialTokens.current[key]}
                  </span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {/* Input */}
                  <input {...inputProps} />
                  {inputProps.type === 'range' && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '0 10px' }}>
                      {_.times(Number(inputProps.max) - Number(inputProps.min) + 1, i => (
                        <div
                          key={i}
                          style={{
                            flex: '0 0 auto',
                            height: '4px',
                            width: '1px',
                            background: '#777',
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>,
            );
          });

        return acc;
      }, [])}
    </div>
  );
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

const Themes: React.FC<any> = () => {
  return (
    <ThemeExample themeName="base">
      <ThemeExample themeName="m365Base">
        <ThemeExample themeName="odsp" />
        <ThemeExample themeName="teamsShell20Base">
          <ThemeExample themeName="teamsShell20" />
          <ThemeExample themeName="teamsCoke" />
          <ThemeExample themeName="teamsIKEA" />
        </ThemeExample>
      </ThemeExample>
      <ThemeExample themeName="github" />
      <ThemeExample themeName="linkedin" />
      <ThemeExample themeName="amazon" />
      <ThemeExample themeName="material" />
    </ThemeExample>
  );
};

export default Themes;
