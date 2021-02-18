import { useMergedRefs } from '@fluentui/react-hooks';
import { makeStaticStyles, createDOMRenderer } from '@fluentui/make-styles';
import { PartialTheme, Theme } from '@fluentui/react-theme';
import { internal__ThemeContext, ThemeProviderState, useThemeProviderState } from '@fluentui/react-theme-provider';
import { getSlots, makeMergeProps } from '@fluentui/react-utils';
import * as React from 'react';

import { internal__FluentProviderContext, Telemetry, useFluent } from './context';

export interface ProviderProps {
  /** Sets the direction of text & generated styles. */
  dir?: 'ltr' | 'rtl';

  /** Provides the document, can be undefined during SSR render. */
  document?: Document | undefined;

  theme?: PartialTheme;

  telemetry?: Telemetry;
}

export interface ProviderState {
  dir: 'ltr' | 'rtl';
  document: Document | undefined;
  theme: Theme;
  telemetry: Telemetry | undefined;
}

const mergeProps = makeMergeProps<ProviderState>();

export function useFluentProviderState(draftState: ProviderState & { style?: React.CSSProperties }) {
  const parentContext = useFluent();

  useThemeProviderState(draftState as ThemeProviderState);

  // TODO: add merge functions
  draftState.document = draftState.document || parentContext.document;
  draftState.dir = draftState.dir || parentContext.dir;
  draftState.telemetry = draftState.telemetry || parentContext.telemetry;

  // TODO: we should have a formal ProviderRoot or other component which:
  //        - can call makeStyles
  //        - has access to theme
  //        - can apply class for root of provider
  draftState.style = {
    ...draftState.style,
    fontFamily: draftState.theme.global.type.fontFamilies.base,
    fontSize: draftState.theme.global.type.fontSizes.base[400],
    lineHeight: draftState.theme.global.type.lineHeights.base[400],
  };
}

const useStaticStyles = makeStaticStyles([
  // TODO: this should be from a package or something
  `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
  html{line-height:1.15;-webkit-text-size-adjust:100%}
  body{margin:0}
  main{display:block}
  h1{font-size:2em;margin:.67em 0}
  hr{box-sizing:content-box;height:0;overflow:visible}
  pre{font-family:monospace,monospace;font-size:1em}
  a{background-color:transparent}
  abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}
  b,strong{font-weight:bolder}
  code,kbd,samp{font-family:monospace,monospace;font-size:1em}
  small{font-size:80%}
  sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}
  sub{bottom:-.25em}
  sup{top:-.5em}
  img{border-style:none}
  button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}
  button,input{overflow:visible}
  button,select{text-transform:none}
  [type=button],[type=reset],[type=submit],button{-webkit-appearance:button}`,
  // TODO:
  //   This browser throws when trying to insert these lines (latest normalize.css, at time of writing)
  //   due to "-moz-focusring" and similar.
  //   The call is in createDOMRenderer.ts at `renderer.styleElement.sheet.insertRule`
  // eslint-disable-next-line @fluentui/max-len
  // [type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}
  // eslint-disable-next-line @fluentui/max-len
  // [type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}
  `fieldset{padding:.35em .75em .625em}
  legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}
  progress{vertical-align:baseline}
  textarea{overflow:auto}
  [type=checkbox],[type=radio]{box-sizing:border-box;padding:0}
  [type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}
  [type=search]{-webkit-appearance:textfield;outline-offset:-2px}
  [type=search]::-webkit-search-decoration{-webkit-appearance:none}
  ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}
  details{display:block}
  summary{display:list-item}
  template{display:none}
  [hidden]{display:none}`,
  {
    body: {
      padding: 0,
      margin: 0,
    },

    '*': {
      boxSizing: 'border-box',
    },

    '*:before': {
      boxSizing: 'border-box',
    },

    '*:after': {
      boxSizing: 'border-box',
    },

    // Adding priority for HTML 'hidden' attribute to be applied correctly
    '[hidden]': {
      display: 'none!important',
    },
  },
]);

export function renderFluentProvider(state: ProviderState) {
  const { slots, slotProps } = getSlots(state);
  const { dir, document, telemetry, theme } = state;

  // TODO: why are we disabling rules-of-hooks?
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const value = React.useMemo(() => ({ dir, document, telemetry }), [dir, document, telemetry]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const renderer = React.useMemo(() => createDOMRenderer(document), [document]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useStaticStyles({ renderer });

  return (
    <internal__FluentProviderContext.Provider value={value}>
      <internal__ThemeContext.Provider value={theme}>
        <slots.root {...slotProps.root} />
      </internal__ThemeContext.Provider>
    </internal__FluentProviderContext.Provider>
  );
}

/**
 * Returns the ThemeProvider render function and calculated state, given user input, ref, and
 * a set of default prop values.
 */
export function useFluentProvider(props: ProviderProps, ref: React.Ref<HTMLElement>) {
  const rootRef = useMergedRefs(ref, React.useRef<HTMLElement>(null));
  const state = mergeProps(
    {
      ref: rootRef,
      as: 'div',
    },
    {},
    props,
  );

  useFluentProviderState(state);

  return {
    state,
    render: renderFluentProvider,
  };
}

/**
 * A React provider that allows to define theme, text direction and context for rendering for children components.
 */
export const FluentProvider: React.FunctionComponent<ProviderProps> = React.forwardRef<HTMLDivElement, ProviderProps>(
  (props: ProviderProps, ref: React.Ref<HTMLDivElement>) => {
    const { render, state } = useFluentProvider(props, ref);

    return render(state);
  },
);

FluentProvider.displayName = 'FluentProvider';
