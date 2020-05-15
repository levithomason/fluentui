import * as _ from 'lodash';
import * as React from 'react';
import { TokenCategories, Tokens, TokenValue } from './types';

const getTokenCategory: (name: string, val: TokenValue) => TokenCategories = (name, val) => {
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
    [key in TokenCategories]?: Array<[string, TokenValue]>;
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

  const getInputProps = React.useCallback<
    (tokenName: string, tokenValue: TokenValue) => React.HTMLProps<HTMLInputElement>
  >(
    (tokenName, tokenValue) => {
      if (/color/i.test(tokenName) || /^#|rgb|hsl|hvs/.test(tokenValue)) {
        return {
          name: tokenName,
          type: 'color',
          value: tokenValue,
          style: { border: 'none', background: 'transparent' },
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
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
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            handleTokenChange(tokenName, e.target.value + unitString);
          },
        };
      }

      return {
        name: tokenName,
        type: 'input',
        value: tokenValue,
        style: { border: 'none' },
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
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

export default TokenEditor;
