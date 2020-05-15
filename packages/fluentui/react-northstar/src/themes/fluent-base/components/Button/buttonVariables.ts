export interface ButtonVariables {
  density?: string;

  // TEXT Font
  textFontSize?: string;
  textFontLetterSpacing?: string;
  // TODO how to interpret this unit?  Also, typically line heights are unitless.
  textFontLineHeight?: string;
  textFontWeight?: string;
  textFontFontFamily?: string;
  // TEXT Fill
  textFillColorRest?: string;
  textFillColorHover?: string;
  textFillColorPressed?: string;
  textFillColorDisabled?: string;

  // TEXT Layout
  textFontAlignHorizontal?: string;
  textFontLayoutHorizontal?: string;
  // TODO wrapping
  // TODO truncation

  // ROOT Fill
  rootFillColorRest?: string;
  rootFillColorHover?: string;
  rootFillColorPressed?: string;
  rootFillColorDisabled?: string;

  // ROOT Stroke
  rootStrokeColorRest?: string;
  rootStrokeColorHover?: string;
  rootStrokeColorPressed?: string;
  rootStrokeColorDisabled?: string;
  rootStrokeWidth?: string;

  // ROOT Layout - Wide Item
  rootLayoutWideMinWidth?: string;
  rootLayoutWideMaxWidth?: string;
  rootLayoutWidePadding?: string;

  // ROOT Layout - Square Item
  rootLayoutSquareMinWidth?: string;
  rootLayoutSquareMaxWidth?: string;
  rootLayoutSquarePadding?: string;

  // ROOT Layout - Corner
  rootCornerRadius?: string;
  // ROOT Layout - Shadow
  rootShadowHeightRest?: string;
  rootShadowHeightHover?: string;
  rootShadowHeightPressed?: string;
  rootShadowHeightDisabled?: string;

  // FOCUS OUTER Stroke, Corner, Layout
  focusOuterStrokeColor?: string;
  focusOuterStrokeWidth?: string;
  focusOuterCornerRadius?: string;

  // FOCUS INNER Stroke, Corner, Layout
  focusInnerStrokeColor?: string;
  focusInnerStrokeWidth?: string;
  focusInnerCornerRadius?: string;
}

// // Line Height
// const globalFontLineHeight = (textFontSize, multiplier) => {
//   return (
//     // scale up, then round up to the nearest multiple of 4
//     (Math.ceil((parseInt(textFontSize, 10) * multiplier) / 4) +
//       //
//       Math.ceil(parseInt(textFontSize, 10) % 4 > 0 ? 1 : 0)) *
//     // get an even multiple of 4
//     4
//   );
// };
//
// const globalFontLineHeightSmall = textFontSize => globalFontLineHeight(textFontSize, 1.25);
// const globalFontLineHeightMedium = textFontSize => globalFontLineHeight(textFontSize, 1.5);
// const globalFontLineHeightLarge = textFontSize => globalFontLineHeight(textFontSize, 1.75);

export default siteVars => {
  // const textFontSize = '14px';

  // TODO: Ask Travis about how variants are being handled e.g. "buttonNeutralBackgroundFill"

  return {};

  // return {
  //   density: siteVars?.density,
  //
  //   // TEXT: Font
  //   textFontSize,
  //   textFontLetterSpacing: '',
  //   // TODO: how to interpret this unit?  Also, typically line heights are unitless.
  //   textFontLineHeight: `${globalFontLineHeightSmall(textFontSize)}px`,
  //   textFontWeight: '',
  //   textFontFontFamily: '',
  //   // TEXT: Fill
  //   textFillColorRest: '#333',
  //   textFillColorHover: '#333',
  //   textFillColorPressed: '#333',
  //   textFillColorDisabled: '#555',
  //
  //   // TEXT: Layout
  //   textFontAlignHorizontal: '',
  //   textFontLayoutHorizontal: '',
  //   // TODO: wrapping
  //   // TODO: truncation
  //
  //   // ROOT: Fill
  //   rootFillColorRest: '#CCC',
  //   rootFillColorHover: '#BBB',
  //   rootFillColorPressed: '#AAA',
  //   rootFillColorDisabled: '#DDD',
  //
  //   // ROOT: Stroke
  //   rootStrokeColorRest: '#333',
  //   rootStrokeColorHover: '#444',
  //   rootStrokeColorPressed: '#000',
  //   rootStrokeColorDisabled: '#666',
  //   rootStrokeWidth: '',
  //
  //   // ROOT: Layout - Wide Item
  //   rootLayoutWideMinWidth: '',
  //   rootLayoutWideMaxWidth: '',
  //   rootLayoutWidePadding: '8px',
  //
  //   // ROOT: Layout - Square Item
  //   rootLayoutSquareMinWidth: '32px',
  //   rootLayoutSquareMaxWidth: '32px',
  //   rootLayoutSquarePadding: '8px',
  //
  //   // ROOT: Layout - Corner
  //   rootCornerRadius: '4px',
  //   // ROOT: Layout - Shadow
  //   rootShadowHeightRest: '3px',
  //   rootShadowHeightHover: '4px',
  //   rootShadowHeightPressed: '2px',
  //   rootShadowHeightDisabled: '0px',
  //
  //   // Focus Outer: Stroke, Corner, Layout
  //   focusOuterStrokeColor: '#fff',
  //   focusOuterStrokeWidth: '1px',
  //   focusOuterCornerRadius: '4px',
  //
  //   // Focus Inner: Stroke, Corner, Layout
  //   focusInnerStrokeColor: '#000',
  //   focusInnerStrokeWidth: '1px',
  //   focusInnerCornerRadius: '1px',
  // };
};
