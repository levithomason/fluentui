import { createTheme } from '@fluentui/styles';
// import { pxToRem } from 'src/utils'
import { ThemeInput } from '@fluentui/styles/src';

const designUnit = 4;
const density = 1;
const whiteSpace = 1;

// density

const cornerRadius = 2;

// Line Height
const globalFontLineHeight = (textFontSize, multiplier) => {
  return (
    // scale up, then round up to the nearest multiple of 4
    (Math.ceil((parseInt(textFontSize, 10) * multiplier) / 4) +
      //
      Math.ceil(parseInt(textFontSize, 10) % 4 > 0 ? 1 : 0)) *
    // get an even multiple of 4
    4
  );
};

const globalFontLineHeightSmall = textFontSize => globalFontLineHeight(textFontSize, 1.25);
const globalFontLineHeightMedium = textFontSize => globalFontLineHeight(textFontSize, 1.5);
const globalFontLineHeightLarge = textFontSize => globalFontLineHeight(textFontSize, 1.75);

const fluentBaseTheme: ThemeInput = createTheme(
  {
    siteVariables: {
      designUnit: `${designUnit}px`,
      density,
      whiteSpace,

      componentHeight: designUnit * 8,
      cornerRadius,
    },

    componentVariables: {
      // See: https://www.figma.com/file/fBEvmvicrdjkB5ljK5nAaF/Tokens-(Working)
      Button: siteVars => {
        const textFontSize = '14px';

        // TODO: Ask Travis about how variants are being handled e.g. "buttonNeutralBackgroundFill"

        return {
          density: siteVars?.density,

          // TEXT: Font
          textFontSize,
          textFontLetterSpacing: '',
          // TODO: how to interpret this unit?  Also, typically line heights are unitless.
          textFontLineHeight: `${globalFontLineHeightSmall(textFontSize)}px`,
          textFontWeight: '',
          textFontFontFamily: '',
          // TEXT: Fill
          textFillColorRest: '#333',
          textFillColorHover: '#333',
          textFillColorPressed: '#333',
          textFillColorDisabled: '#555',

          // TEXT: Layout
          textFontAlignHorizontal: '',
          textFontLayoutHorizontal: '',
          // TODO: wrapping
          // TODO: truncation

          // ROOT: Fill
          rootFillColorRest: '#CCC',
          rootFillColorHover: '#BBB',
          rootFillColorPressed: '#AAA',
          rootFillColorDisabled: '#DDD',

          // ROOT: Stroke
          rootStrokeColorRest: '#333',
          rootStrokeColorHover: '#444',
          rootStrokeColorPressed: '#000',
          rootStrokeColorDisabled: '#666',
          rootStrokeWidth: '',

          // ROOT: Layout - Wide Item
          rootLayoutWideMinWidth: '',
          rootLayoutWideMaxWidth: '',
          rootLayoutWidePadding: '8px',

          // ROOT: Layout - Square Item
          rootLayoutSquareMinWidth: '32px',
          rootLayoutSquareMaxWidth: '32px',
          rootLayoutSquarePadding: '8px',

          // ROOT: Layout - Corner
          rootCornerRadius: '4px',
          // ROOT: Layout - Shadow
          rootShadowHeightRest: '3px',
          rootShadowHeightHover: '4px',
          rootShadowHeightPressed: '2px',
          rootShadowHeightDisabled: '0px',

          // Focus Outer: Stroke, Corner, Layout
          focusOuterStrokeColor: '#fff',
          focusOuterStrokeWidth: '1px',
          focusOuterCornerRadius: '4px',

          // Focus Inner: Stroke, Corner, Layout
          focusInnerStrokeColor: '#000',
          focusInnerStrokeWidth: '1px',
          focusInnerCornerRadius: '1px',
        };
      },
    },

    componentStyles: {
      Button: {
        root: ({ variables: v, props: p }) => ({
          padding: `0 ${v.rootLayoutWidePadding}`,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          // height: `calc(${v.textFontLineHeight} + ${v.rootLayoutWidePadding})`,
          minHeight: v.minHeight,
          // TODO: Buttons that will go into a loading state should use v.loadingMinWidth
          minWidth: v.rootLayoutWideMinWidth,
          maxWidth: v.rootLayoutWideMaxWidth,
          fontSize: v.textFontSize,
          lineHeight: v.textFontLineHeight,
          borderRadius: v.rootCornerRadius,
          color: v.textFillColorRest,
          background: v.rootFillColorRest,
          // TODO: missing tokens or logic for X/Y, blur, and color
          boxShadow: `0 ${v.rootShadowHeightRest} ${v.rootShadowHeightRest} rgba(0, 0, 0, 0.2)`,
          ':hover': {
            color: v.textFillColorHover,
            background: v.rootFillColorHover,
            boxShadow: `0 ${v.rootShadowHeightHover} ${v.rootShadowHeightHover} rgba(0, 0, 0, 0.2)`,
          },
          ':active': {
            color: v.textFillColorPressed,
            background: v.rootFillColorPressed,
            boxShadow: `0 ${v.rootShadowHeightPressed} ${v.rootShadowHeightPressed} rgba(0, 0, 0, 0.2)`,
          },
          ':focus': {
            // TODO: there are missing tokens here for focus
            color: v.textFillColorPressed,
            background: v.rootFillColorPressed,
            boxShadow: `0 ${v.rootShadowHeightPressed} ${v.rootShadowHeightPressed} rgba(0, 0, 0, 0.2)`,
            outlineColor: v.focusOuterStrokeColor,
            outlineWidth: v.focusOuterStrokeWidth,
            // TODO: there is no outline radius, only border radius
            borderRadius: v.focusOuterCornerRadius,
          },
          ...(p.disabled && {
            color: v.textFillColorDisabled,
            background: v.rootFillColorDisabled,
            boxShadow: `0 ${v.rootShadowHeightDisabled} ${v.rootShadowHeightDisabled}`,
          }),
        }),
      },
    },
  },
  'fluent-base',
);

export default fluentBaseTheme;
