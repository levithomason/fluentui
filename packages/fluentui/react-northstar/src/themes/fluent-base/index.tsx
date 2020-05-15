import { createTheme } from '@fluentui/styles';
// import { pxToRem } from 'src/utils'
import { ICSSInJSStyle, ThemeInput } from '@fluentui/styles/src';

import * as componentVariables from './componentVariables';
import * as componentStyles from './componentStyles';

const fluentBaseTheme: ThemeInput = createTheme(
  {
    siteVariables: {},

    componentVariables,

    componentStyles: {
      ...componentStyles,
      Input: {
        root: ({ props: p, variables: v }): ICSSInJSStyle => ({
          display: 'inline-block',
        }),

        input: ({ props: p, variables: v }): ICSSInJSStyle => ({
          backgroundColor: v.backgroundColor,
          lineHeight: 'unset',

          color: v.fontColor,

          // borderColor: v.borderColor,
          // borderRadius: v.borderRadius,
          // borderStyle: 'solid',
          // borderWidth: v.borderWidth,

          outline: 'none',
          padding: v.inputPadding,
          position: 'relative',

          // Overrides for "disabled" inputs
          ...(p.disabled && {
            color: v.colorDisabled,
            boxShadow: 'none',
          }),

          '::placeholder': {
            color: v.placeholderColor,
            opacity: 1, // undo Firefox default opacity
            ...(p.disabled && {
              color: v.colorDisabled,
            }),
          },

          ':focus': {
            borderColor: v.inputFocusBorderColor,
          },
        }),
      },
    },
  },
  'fluent-base',
);

export default fluentBaseTheme;
