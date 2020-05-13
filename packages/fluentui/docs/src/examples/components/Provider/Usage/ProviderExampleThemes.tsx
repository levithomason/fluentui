import * as React from 'react';
import { Button, Checkbox, Dropdown, Input, Provider, Slider } from '@fluentui/react-northstar';
import { ThemeInput } from '@fluentui/styles';

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
  [key: string]: number | string;
};

const themes: { [K in ThemeNames]: ThemeInput } = {
  // the missing user agent for web application components
  base: {
    siteVariables: {},
    componentVariables: {},
  },

  // m365ish by default, for our apps to build on
  m365Base: {
    siteVariables: {},
    componentVariables: {},
  },

  odsp: {
    siteVariables: {},
    componentVariables: {},
  },

  teamsShell20Base: {
    siteVariables: {},
    componentVariables: {},
  },

  teamsShell20: {
    siteVariables: {},
    componentVariables: {},
  },

  teamsCoke: {
    siteVariables: {},
    componentVariables: {},
  },

  teamsIKEA: {
    siteVariables: {},
    componentVariables: {},
  },

  github: {
    siteVariables: {},
    componentVariables: {},
  },

  linkedin: {
    siteVariables: {},
    componentVariables: {},
  },

  amazon: {
    siteVariables: {},
    componentVariables: {},
  },

  material: {
    siteVariables: {},
    componentVariables: {},
  },
};

type TokenKinds = 'color' | 'range' | 'text';
type TokenValues = string | number;
const getTokenType: (name: string, val: string | number) => TokenKinds = (name, val) => {
  if (/color/i.test(name) || /^#|rgb|hsl|hvs/.test(val)) return 'color';
  if (/^\d/.test(val)) return 'range';

  return 'text';
};

const TokenEditor: React.FC<{
  label: string;
  tokens: Tokens;
  onChange: (tokens: Tokens) => void;
}> = ({ label, tokens, onChange }) => {
  const initialTokens = React.useRef(tokens);
  const [localTokens, setLocalTokens] = React.useState(tokens);

  const tokensPairsGroupedByType: {
    [key in TokenKinds]?: Array<[string, TokenValues]>;
  } = Object.entries(localTokens).reduce((acc, [key, val]) => {
    const type = getTokenType(key, val);
    acc[type] = (acc[type] || []).concat([[key, val]]);
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

  const getInputProps = React.useCallback(
    (tokenName, tokenValue) => {
      if (/color/i.test(tokenName) || /^#|rgb|hsl|hvs/.test(tokenValue)) {
        return {
          type: 'color',
          value: tokenValue,
          style: { border: 'none', background: 'transparent' },
          onChange: e => {
            handleTokenChange(tokenName, e.target.value);
          },
        };
      }

      if (/^\d/.test(tokenValue)) {
        const numberValue = parseFloat(tokenValue);
        const unitString = String(tokenValue).replace(String(numberValue), '');
        const hasDecimal = numberValue % 1 !== 0;

        return {
          type: 'range',
          step: hasDecimal ? 0.001 : 1,
          min: 0,
          max: Math.max(4, parseInt(String(initialTokens.current[tokenName]), 10) * 4),
          value: numberValue,
          style: { width: '100%' },
          onChange: e => {
            // debugger;
            handleTokenChange(tokenName, e.target.value + unitString);
          },
        };
      }

      return 'input';
    },
    [handleTokenChange],
  );

  console.log('TokenEditor render', localTokens);

  return (
    <div>
      <h3>{label}</h3>
      {Object.entries(tokensPairsGroupedByType).reduce((acc, [tokenKind, tokens]) => {
        acc.push(<h4 style={{ borderBottom: '1px solid #888' }}>{tokenKind}</h4>);

        tokens
          .filter(([key, val]) => {
            const isDebug = key === '_debug';
            const isComplexToken = Array.isArray(val) || typeof val === 'object';

            return !isDebug && !isComplexToken;
          })
          .forEach(([key, value]) => {
            const inputProps = getInputProps(key, value);
            const isOverridden = value !== initialTokens.current[key];

            acc.push(
              <div key={key} style={{ position: 'relative', display: 'block', padding: '4px' }}>
                {/* Label */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ padding: '0 4px', marginRight: 'auto' }}>{key}</span>
                  {isOverridden && (
                    <button
                      style={{ marginLeft: 'auto', color: 'salmon', background: 'none', border: 'none' }}
                      onClick={() => {
                        setLocalTokens({ ...localTokens, [key]: initialTokens.current[key] });
                        onChange(localTokens);
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
                <div style={{ display: 'flex' }}>
                  {/* Input */}
                  <input name={key} {...inputProps} />
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

  const handleComponentVariablesChange = React.useCallback(newTokens => {
    console.log('ThemeExample handleComponentVariablesChange', newTokens);
    setComponentVariables(newTokens);
  }, []);

  console.log('ThemeExample render', { siteVariables, componentVariables });

  return (
    <Provider
      styles={{ position: 'relative', border: '2px solid black', margin: '1rem 0' }}
      theme={{
        siteVariables,
        componentVariables,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          background: '#333',
          color: '#eee',
          fontFamily: 'monospace',
          padding: '1rem',
          // margin: '-1rem -1rem 1rem',
        }}
      >
        <div style={{ flex: '0 0 auto', top: 0, left: 0, width: '100%', color: 'salmon' }}>{themeName}</div>
        <Provider.Consumer
          render={theme => (
            <div>
              <TokenEditor label="siteVariables" tokens={theme.siteVariables} onChange={handleSiteVariablesChange} />
              {Object.entries(theme.componentVariables).map(([componentName, componentTokens]) => {
                return (
                  <TokenEditor
                    key={componentName}
                    label={componentName}
                    tokens={componentTokens(theme.siteVariables)}
                    onChange={handleComponentVariablesChange}
                  />
                );
              })}
            </div>
          )}
        />
      </div>

      <div style={{ padding: '1rem', margin: '1rem' }}>
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

const ProviderExampleThemes: React.FC<any> = () => {
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

export default ProviderExampleThemes;
