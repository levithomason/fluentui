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
          rootRootStrokeColorRest: '#333',
          rootRootStrokeColorHover: '#444',
          rootRootStrokeColorPressed: '#000',
          rootRootStrokeColorDisabled: '#666',
          rootRootStrokeWidth: '',

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
          rootShadowHeightRest: '4px',
          rootShadowHeightHover: '8px',
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
          lineHeight: v.textFontLineHeight,
          borderRadius: v.rootCornerRadius,
          color: v.textFillColorRest,
          background: v.rootFillColorRest,
          ':hover': {
            color: v.textFillColorHover,
            background: v.rootFillColorHover,
          },
          ':active': {
            color: v.textFillColorPressed,
            background: v.rootFillColorPressed,
          },
          ':focus': {
            // TODO: there are missing tokens here for focus
            color: v.textFillColorPressed,
            background: v.rootFillColorPressed,
            outlineColor: v.focusOuterStrokeColor,
            outlineWidth: v.focusOuterStrokeWidth,
            // TODO: there is no outline radius, only border radius
            borderRadius: v.focusOuterCornerRadius,
          },
          ...(p.disabled && {
            color: v.textFillColorDisabled,
            background: v.rootFillColorDisabled,
          }),
        }),
      },
    },
  },
  'fluent-base',
);

export default fluentBaseTheme;
