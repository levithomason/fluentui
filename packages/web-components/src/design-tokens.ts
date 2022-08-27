import { DesignToken } from '@microsoft/fast-foundation';

const { create } = DesignToken;

/**
 * @public
 */
export const borderRadiusNone = create<number>('borderRadiusNone').withDefault(0);

/**
 * @public
 */
export const borderRadiusSmall = create<string>('borderRadiusSmall').withDefault('2px');

/**
 * @public
 */
export const borderRadiusMedium = create<string>('borderRadiusSmall').withDefault('4px');

/**
 * @public
 */
export const borderRadiusLarge = create<string>('borderRadiusSmall').withDefault('6px');

/**
 * @public
 */
export const borderRadiusXLarge = create<string>('borderRadiusSmall').withDefault('8px');

/**
 * @public
 */
export const borderRadiusCircular = create<string>('borderRadiusSmall').withDefault('10000px');

/**
 * @public
 */
export const fontSizeBase100 = create<string>('fontSizeBase100').withDefault('10px');

/**
 * @public
 */
export const fontSizeBase200 = create<string>('fontSizeBase200').withDefault('12px');

/**
 * @public
 */
export const fontSizeBase300 = create<string>('fontSizeBase300').withDefault('14px');

/**
 * @public
 */
export const fontSizeBase400 = create<string>('fontSizeBase400').withDefault('16px');

/**
 * @public
 */
export const fontSizeBase500 = create<string>('fontSizeBase500').withDefault('20px');

/**
 * @public
 */
export const fontSizeBase600 = create<string>('fontSizeBase600').withDefault('24px');

/**
 * @public
 */
export const fontSizeHero700 = create<string>('fontSizeHero700').withDefault('28px');

/**
 * @public
 */
export const fontSizeHero800 = create<string>('fontSizeHero800').withDefault('32px');

/**
 * @public
 */
export const fontSizeHero900 = create<string>('fontSizeHero900').withDefault('40px');

/**
 * @public
 */
export const fontSizeHero1000 = create<string>('fontSizeHero1000').withDefault('68px');

/**
 * @public
 */
export const lineHeightBase100 = create<string>('lineHeightBase100').withDefault('14px');

/**
 * @public
 */
export const lineHeightBase200 = create<string>('lineHeightBase200').withDefault('16px');

/**
 * @public
 */
export const lineHeightBase300 = create<string>('lineHeightBase300').withDefault('20px');

/**
 * @public
 */
export const lineHeightBase400 = create<string>('lineHeightBase400').withDefault('22px');

/**
 * @public
 */
export const lineHeightBase500 = create<string>('lineHeightBase500').withDefault('28px');

/**
 * @public
 */
export const lineHeightBase600 = create<string>('lineHeightBase600').withDefault('32px');

/**
 * @public
 */
export const lineHeightHero700 = create<string>('lineHeightHero700').withDefault('36px');

/**
 * @public
 */
export const lineHeightHero800 = create<string>('lineHeightHero800').withDefault('40px');

/**
 * @public
 */
export const lineHeightHero900 = create<string>('lineHeightHero900').withDefault('52px');

/**
 * @public
 */
export const lineHeightHero1000 = create<string>('lineHeightHero1000').withDefault('92px');

/**
 * @public
 */
export const fontFamilyBase = create<string>('fontFamilyBase').withDefault(
  '"Segoe UI", "Segoe UI Web (West European)", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
);

/**
 * @public
 */
export const fontFamilyMonospace = create<string>('fontFamilyMonospace').withDefault(
  'Consolas, "Courier New", Courier, monospace',
);

/**
 * @public
 */
export const fontFamilyNumeric = create<string>('fontFamilyNumeric').withDefault(
  'Bahnschrift, "Segoe UI", "Segoe UI Web (West European)", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
);

/**
 * @public
 */
export const fontWeightRegular = create<number>('fontWeightRegular').withDefault(400);

/**
 * @public
 */
export const fontWeightMedium = create<number>('fontWeightMedium').withDefault(500);

/**
 * @public
 */
export const fontWeightSemibold = create<number>('fontWeightSemibold').withDefault(600);

/**
 * @public
 */
export const strokeWidthThin = create<string>('strokeWidthThin').withDefault('1px');

/**
 * @public
 */
export const strokeWidthThick = create<string>('strokeWidthThick').withDefault('2px');

/**
 * @public
 */
export const strokeWidthTicker = create<string>('strokeWidthThicker').withDefault('3px');

/**
 * @public
 */
export const strokeWidthThickest = create<string>('strokeWidthThickest').withDefault('4px');

/**
 * @public
 */
export const spacingHorizontalNone = create<string>('spacingHorizontalNone').withDefault('0');

/**
 * @public
 */
export const spacingHorizontalXXS = create<string>('spacingHorizontalXXS').withDefault('2px');

/**
 * @public
 */
export const spacingHorizontalXS = create<string>('spacingHorizontalXS').withDefault('4px');

/**
 * @public
 */
export const spacingHorizontalSNudge = create<string>('spacingHorizontalSNudge').withDefault('6px');

/**
 * @public
 */
export const spacingHorizontalS = create<string>('spacingHorizontalS').withDefault('8px');

/**
 * @public
 */
export const spacingHorizontalMNudge = create<string>('spacingHorizontalMNudge').withDefault('10px');

/**
 * @public
 */
export const spacingHorizontalM = create<string>('spacingHorizontalM').withDefault('12px');

/**
 * @public
 */
export const spacingHorizontalL = create<string>('spacingHorizontalL').withDefault('16px');

/**
 * @public
 */
export const spacingHorizontalXL = create<string>('spacingHorizontalXL').withDefault('20px');

/**
 * @public
 */
export const spacingHorizontalXXL = create<string>('spacingHorizontalXXL').withDefault('24px');

/**
 * @public
 */
export const spacingHorizontalXXXL = create<string>('spacingHorizontalXXXL').withDefault('32px');

/**
 * @public
 */
export const spacingVerticalNone = create<string>('spacingVerticalNone').withDefault('0');

/**
 * @public
 */
export const spacingVerticalXXS = create<string>('spacingVerticalXXS').withDefault('2px');

/**
 * @public
 */
export const spacingVerticalXS = create<string>('spacingVerticalXS').withDefault('4px');

/**
 * @public
 */
export const spacingVerticalSNudge = create<string>('spacingVerticalSNudge').withDefault('6px');

/**
 * @public
 */
export const spacingVerticalS = create<string>('spacingVerticalS').withDefault('8px');

/**
 * @public
 */
export const spacingVerticalMNudge = create<string>('spacingVerticalMNudge').withDefault('10px');

/**
 * @public
 */
export const spacingVerticalM = create<string>('spacingVerticalM').withDefault('12px');

/**
 * @public
 */
export const spacingVerticalL = create<string>('spacingVerticalL').withDefault('16px');

/**
 * @public
 */
export const spacingVerticalXL = create<string>('spacingVerticalXL').withDefault('20px');

/**
 * @public
 */
export const spacingVerticalXXL = create<string>('spacingVerticalXXL').withDefault('24px');

/**
 * @public
 */
export const spacingVerticalXXXL = create<string>('spacingVerticalXXXL').withDefault('32px');

/**
 * @public
 */
export const durationUltraFast = create<string>('durationUltraFast').withDefault('50ms');

/**
 * @public
 */
export const durationFaster = create<string>('durationFaster').withDefault('100ms');

/**
 * @public
 */
export const durationFast = create<string>('durationFast').withDefault('150ms');

/**
 * @public
 */
export const durationNormal = create<string>('durationNormal').withDefault('200ms');

/**
 * @public
 */
export const durationSlow = create<string>('durationSlow').withDefault('300ms');

/**
 * @public
 */
export const durationSlower = create<string>('durationSlower').withDefault('400ms');

/**
 * @public
 */
export const durationUltraSlow = create<string>('durationUltraSlow').withDefault('500ms');

/**
 * @public
 */
export const curveAccelerateMax = create<string>('curveAccelerateMax').withDefault('cubic-bezier(1,0,1,1)');

/**
 * @public
 */
export const curveAccelerateMid = create<string>('curveAccelerateMid').withDefault('cubic-bezier(0.7,0,1,0.5)');

/**
 * @public
 */
export const curveAccelerateMin = create<string>('curveAccelerateMin').withDefault('cubic-bezier(0.8,0,1,1)');

/**
 * @public
 */
export const curveDecelerateMax = create<string>('curveDecelerateMax').withDefault('cubic-bezier(0,0,0,1)');

/**
 * @public
 */
export const curveDecelerateMid = create<string>('curveDecelerateMid').withDefault('cubic-bezier(0.1,0.9,0.2,1)');

/**
 * @public
 */
export const curveDecelerateMin = create<string>('curveDecelerateMin').withDefault('cubic-bezier(0.33,0,0.1,1)');

/**
 * @public
 */
export const curveEasyEaseMax = create<string>('curveEasyEaseMax').withDefault('cubic-bezier(0.8,0,0.1,1)');

/**
 * @public
 */
export const curveEasyEase = create<string>('curveEasyEase').withDefault('cubic-bezier(0.33,0,0.67,1)');

/**
 * @public
 */
export const curveLinear = create<string>('curveLinear').withDefault('cubic-bezier(0,0,1,1)');

/**
 * @public
 */
export const colorNeutralForeground1 = create<string>('colorNeutralForeground1').withDefault('#242424');

/**
 * @public
 */
export const colorNeutralForeground1Hover = create<string>('colorNeutralForeground1Hover').withDefault('#242424');

/**
 * @public
 */
export const colorNeutralForeground1Pressed = create<string>('colorNeutralForeground1Pressed').withDefault('#242424');

/**
 * @public
 */
export const colorNeutralForeground1Selected = create<string>('colorNeutralForeground1Selected').withDefault('#242424');

/**
 * @public
 */
export const colorNeutralForeground2 = create<string>('colorNeutralForeground2').withDefault('#424242');

/**
 * @public
 */
export const colorNeutralForeground2Hover = create<string>('colorNeutralForeground2Hover').withDefault('#242424');

/**
 * @public
 */
export const colorNeutralForeground2Pressed = create<string>('colorNeutralForeground2Pressed').withDefault('#242424');

/**
 * @public
 */
export const colorNeutralForeground2Selected = create<string>('colorNeutralForeground2Selected').withDefault('#242424');

/**
 * @public
 */
export const colorNeutralForeground2BrandHover = create<string>('colorNeutralForeground2BrandHover').withDefault(
  '#0f6cbd',
);

/**
 * @public
 */
export const colorNeutralForeground2BrandPressed = create<string>('colorNeutralForeground2BrandPressed').withDefault(
  '#115ea3',
);

/**
 * @public
 */
export const colorNeutralForeground2BrandSelected = create<string>('colorNeutralForeground2BrandSelected').withDefault(
  '#0f6cbd',
);

/**
 * @public
 */
export const colorNeutralForeground3 = create<string>('colorNeutralForeground3').withDefault('#616161');

/**
 * @public
 */
export const colorNeutralForeground3Hover = create<string>('colorNeutralForeground3Hover').withDefault('#424242');

/**
 * @public
 */
export const colorNeutralForeground3Pressed = create<string>('colorNeutralForeground3Pressed').withDefault('#424242');

/**
 * @public
 */
export const colorNeutralForeground3Selected = create<string>('colorNeutralForeground3Selected').withDefault('#424242');

/**
 * @public
 */
export const colorNeutralForeground3BrandHover = create<string>('colorNeutralForeground3BrandHover').withDefault(
  '#0f6cbd',
);

/**
 * @public
 */
export const colorNeutralForeground3BrandPressed = create<string>('colorNeutralForeground3BrandPressed').withDefault(
  '#115ea3',
);

/**
 * @public
 */
export const colorNeutralForeground3BrandSelected = create<string>('colorNeutralForeground3BrandSelected').withDefault(
  '#0f6cbd',
);

/**
 * @public
 */
export const colorNeutralForeground4 = create<string>('colorNeutralForeground4').withDefault('#707070');

/**
 * @public
 */
export const colorNeutralForegroundDisabled = create<string>('colorNeutralForegroundDisabled').withDefault('#bdbdbd');

/**
 * @public
 */
export const colorNeutralForegroundInvertedDisabled = create<string>(
  'colorNeutralForegroundInvertedDisabled',
).withDefault('rgba(255, 255, 255, 0.4)');

/**
 * @public
 */
export const colorBrandForegroundLink = create<string>('colorBrandForegroundLink').withDefault('#115ea3');

/**
 * @public
 */
export const colorBrandForegroundLinkHover = create<string>('colorBrandForegroundLinkHover').withDefault('#0f548c');

/**
 * @public
 */
export const colorBrandForegroundLinkPressed = create<string>('colorBrandForegroundLinkPressed').withDefault('#0c3b5e');

/**
 * @public
 */
export const colorBrandForegroundLinkSelected = create<string>('colorBrandForegroundLinkSelected').withDefault(
  '#115ea3',
);

/**
 * @public
 */
export const colorNeutralForeground2Link = create<string>('colorNeutralForeground2Link').withDefault('#424242');

/**
 * @public
 */
export const colorNeutralForeground2LinkHover = create<string>('colorNeutralForeground2LinkHover').withDefault(
  '#242424',
);

/**
 * @public
 */
export const colorNeutralForeground2LinkPressed = create<string>('colorNeutralForeground2LinkPressed').withDefault(
  '#242424',
);

/**
 * @public
 */
export const colorNeutralForeground2LinkSelected = create<string>('colorNeutralForeground2LinkSelected').withDefault(
  '#242424',
);

/**
 * @public
 */
export const colorCompoundBrandForeground1 = create<string>('colorCompoundBrandForeground1').withDefault('#0f6cbd');

/**
 * @public
 */
export const colorCompoundBrandForeground1Hover = create<string>('colorCompoundBrandForeground1Hover').withDefault(
  '#115ea3',
);

/**
 * @public
 */
export const colorCompoundBrandForeground1Pressed = create<string>('colorCompoundBrandForeground1Pressed').withDefault(
  '#0f548c',
);

/**
 * @public
 */
export const colorBrandForeground1 = create<string>('colorBrandForeground1').withDefault('#0f6cbd');

/**
 * @public
 */
export const colorBrandForeground2 = create<string>('colorBrandForeground2').withDefault('#115ea3');

/**
 * @public
 */
export const colorNeutralForeground1Static = create<string>('colorNeutralForeground1Static').withDefault('#242424');

/**
 * @public
 */
export const colorNeutralForegroundInverted = create<string>('colorNeutralForegroundInverted').withDefault('#ffffff');

/**
 * @public
 */
export const colorNeutralForegroundInvertedHover = create<string>('colorNeutralForegroundInvertedHover').withDefault(
  '#ffffff',
);

/**
 * @public
 */
export const colorNeutralForegroundInvertedPressed = create<string>(
  'colorNeutralForegroundInvertedPressed',
).withDefault('#ffffff');

/**
 * @public
 */
export const colorNeutralForegroundInvertedSelected = create<string>(
  'colorNeutralForegroundInvertedSelected',
).withDefault('#ffffff');

/**
 * @public
 */
export const colorNeutralForegroundOnBrand = create<string>('colorNeutralForegroundOnBrand').withDefault('#ffffff');

/**
 * @public
 */
export const colorNeutralForegroundInvertedStatic = create<string>('colorNeutralForegroundInvertedStatic').withDefault(
  '#ffffff',
);

/**
 * @public
 */
export const colorNeutralForegroundInvertedLink = create<string>('colorNeutralForegroundInvertedLink').withDefault(
  '#ffffff',
);

/**
 * @public
 */
export const colorNeutralForegroundInvertedLinkHover = create<string>(
  'colorNeutralForegroundInvertedLinkHover',
).withDefault('#ffffff');

/**
 * @public
 */
export const colorNeutralForegroundInvertedLinkPressed = create<string>(
  'colorNeutralForegroundInvertedLinkPressed',
).withDefault('#ffffff');

/**
 * @public
 */
export const colorNeutralForegroundInvertedLinkSelected = create<string>(
  'colorNeutralForegroundInvertedLinkSelected',
).withDefault('#ffffff');

/**
 * @public
 */
export const colorBrandForegroundInverted = create<string>('colorBrandForegroundInverted').withDefault('#479ef5');

/**
 * @public
 */
export const colorBrandForegroundInvertedHover = create<string>('colorBrandForegroundInvertedHover').withDefault(
  '#62abf5',
);

/**
 * @public
 */
export const colorBrandForegroundInvertedPressed = create<string>('colorBrandForegroundInvertedPressed').withDefault(
  '#479ef5',
);

/**
 * @public
 */
export const colorBrandForegroundOnLight = create<string>('colorBrandForegroundOnLight').withDefault('#0f6cbd');

/**
 * @public
 */
export const colorBrandForegroundOnLightHover = create<string>('colorBrandForegroundOnLightHover').withDefault(
  '#115ea3',
);

/**
 * @public
 */
export const colorBrandForegroundOnLightPressed = create<string>('colorBrandForegroundOnLightPressed').withDefault(
  '#0e4775',
);

/**
 * @public
 */
export const colorBrandForegroundOnLightSelected = create<string>('colorBrandForegroundOnLightSelected').withDefault(
  '#0f548c',
);

/**
 * @public
 */
export const colorNeutralBackground1 = create<string>('colorNeutralBackground1').withDefault('#ffffff');

/**
 * @public
 */
export const colorNeutralBackground1Hover = create<string>('colorNeutralBackground1Hover').withDefault('#f5f5f5');

/**
 * @public
 */
export const colorNeutralBackground1Pressed = create<string>('colorNeutralBackground1Pressed').withDefault('#e0e0e0');

/**
 * @public
 */
export const colorNeutralBackground1Selected = create<string>('colorNeutralBackground1Selected').withDefault('#ebebeb');

/**
 * @public
 */
export const colorNeutralBackground2 = create<string>('colorNeutralBackground2').withDefault('#fafafa');

/**
 * @public
 */
export const colorNeutralBackground2Hover = create<string>('colorNeutralBackground2Hover').withDefault('#f0f0f0');

/**
 * @public
 */
export const colorNeutralBackground2Pressed = create<string>('colorNeutralBackground2Pressed').withDefault('#dbdbdb');

/**
 * @public
 */
export const colorNeutralBackground2Selected = create<string>('colorNeutralBackground2Selected').withDefault('#e6e6e6');

/**
 * @public
 */
export const colorNeutralBackground3 = create<string>('colorNeutralBackground3').withDefault('#f5f5f5');

/**
 * @public
 */
export const colorNeutralBackground3Hover = create<string>('colorNeutralBackground3Hover').withDefault('#ebebeb');

/**
 * @public
 */
export const colorNeutralBackground3Pressed = create<string>('colorNeutralBackground3Pressed').withDefault('#d6d6d6');

/**
 * @public
 */
export const colorNeutralBackground3Selected = create<string>('colorNeutralBackground3Selected').withDefault('#e0e0e0');

/**
 * @public
 */
export const colorNeutralBackground4 = create<string>('colorNeutralBackground4').withDefault('#f0f0f0');

/**
 * @public
 */
export const colorNeutralBackground4Hover = create<string>('colorNeutralBackground4Hover').withDefault('#fafafa');

/**
 * @public
 */
export const colorNeutralBackground4Pressed = create<string>('colorNeutralBackground4Pressed').withDefault('#f5f5f5');

/**
 * @public
 */
export const colorNeutralBackground4Selected = create<string>('colorNeutralBackground4Selected').withDefault('#ffffff');

/**
 * @public
 */
export const colorNeutralBackground5 = create<string>('colorNeutralBackground5').withDefault('#ebebeb');

/**
 * @public
 */
export const colorNeutralBackground5Hover = create<string>('colorNeutralBackground5Hover').withDefault('#f5f5f5');

/**
 * @public
 */
export const colorNeutralBackground5Pressed = create<string>('colorNeutralBackground5Pressed').withDefault('#f0f0f0');

/**
 * @public
 */
export const colorNeutralBackground5Selected = create<string>('colorNeutralBackground5Selected').withDefault('#fafafa');

/**
 * @public
 */
export const colorNeutralBackground6 = create<string>('colorNeutralBackground6').withDefault('#e6e6e6');

/**
 * @public
 */
export const colorNeutralBackgroundStatic = create<string>('colorNeutralBackgroundStatic').withDefault('#333333');

/**
 * @public
 */
export const colorNeutralBackgroundInverted = create<string>('colorNeutralBackgroundInverted').withDefault('#292929');

/**
 * @public
 */
export const colorSubtleBackground = create<string>('colorSubtleBackground').withDefault('transparent');

/**
 * @public
 */
export const colorSubtleBackgroundHover = create<string>('colorSubtleBackgroundHover').withDefault('#f5f5f5');

/**
 * @public
 */
export const colorSubtleBackgroundPressed = create<string>('colorSubtleBackgroundPressed').withDefault('#e0e0e0');

/**
 * @public
 */
export const colorSubtleBackgroundSelected = create<string>('colorSubtleBackgroundSelected').withDefault('#ebebeb');

/**
 * @public
 */
export const colorSubtleBackgroundLightAlphaHover = create<string>('colorSubtleBackgroundLightAlphaHover').withDefault(
  'rgba(255, 255, 255, 0.7)',
);

/**
 * @public
 */
export const colorSubtleBackgroundLightAlphaPressed = create<string>(
  'colorSubtleBackgroundLightAlphaPressed',
).withDefault('rgba(255, 255, 255, 0.5)');

/**
 * @public
 */
export const colorSubtleBackgroundLightAlphaSelected = create<string>(
  'colorSubtleBackgroundLightAlphaSelected',
).withDefault('transparent');

/**
 * @public
 */
export const colorSubtleBackgroundInverted = create<string>('colorSubtleBackgroundInverted').withDefault('transparent');

/**
 * @public
 */
export const colorSubtleBackgroundInvertedHover = create<string>('colorSubtleBackgroundInvertedHover').withDefault(
  'rgba(0, 0, 0, 0.1)',
);

/**
 * @public
 */
export const colorSubtleBackgroundInvertedPressed = create<string>('colorSubtleBackgroundInvertedPressed').withDefault(
  'rgba(0, 0, 0, 0.3)',
);

/**
 * @public
 */
export const colorSubtleBackgroundInvertedSelected = create<string>(
  'colorSubtleBackgroundInvertedSelected',
).withDefault('rgba(0, 0, 0, 0.2)');

/**
 * @public
 */
export const colorTransparentBackground = create<string>('colorTransparentBackground').withDefault('transparent');

/**
 * @public
 */
export const colorTransparentBackgroundHover = create<string>('colorTransparentBackgroundHover').withDefault(
  'transparent',
);

/**
 * @public
 */
export const colorTransparentBackgroundPressed = create<string>('colorTransparentBackgroundPressed').withDefault(
  'transparent',
);

/**
 * @public
 */
export const colorTransparentBackgroundSelected = create<string>('colorTransparentBackgroundSelected').withDefault(
  'transparent',
);

/**
 * @public
 */
export const colorNeutralBackgroundDisabled = create<string>('colorNeutralBackgroundDisabled').withDefault('#f0f0f0');

/**
 * @public
 */
export const colorNeutralBackgroundInvertedDisabled = create<string>(
  'colorNeutralBackgroundInvertedDisabled',
).withDefault('rgba(255, 255, 255, 0.1)');

/**
 * @public
 */
export const colorNeutralStencil1 = create<string>('colorNeutralStencil1').withDefault('#e6e6e6');

/**
 * @public
 */
export const colorNeutralStencil2 = create<string>('colorNeutralStencil2').withDefault('#fafafa');

/**
 * @public
 */
export const colorBackgroundOverlay = create<string>('colorBackgroundOverlay').withDefault('rgba(0, 0, 0, 0.1)');

/**
 * @public
 */
export const colorScrollbarOverlay = create<string>('colorScrollbarOverlay').withDefault('rgba(0, 0, 0, 0.5)');

/**
 * @public
 */
export const colorBrandBackground = create<string>('colorBrandBackground').withDefault('#0f6cbd');

/**
 * @public
 */
export const colorBrandBackgroundHover = create<string>('colorBrandBackgroundHover').withDefault('#115ea3');

/**
 * @public
 */
export const colorBrandBackgroundPressed = create<string>('colorBrandBackgroundPressed').withDefault('#0c3b5e');

/**
 * @public
 */
export const colorBrandBackgroundSelected = create<string>('colorBrandBackgroundSelected').withDefault('#0f548c');

/**
 * @public
 */
export const colorCompoundBrandBackground = create<string>('colorCompoundBrandBackground').withDefault('#0f6cbd');

/**
 * @public
 */
export const colorCompoundBrandBackgroundHover = create<string>('colorCompoundBrandBackgroundHover').withDefault(
  '#115ea3',
);

/**
 * @public
 */
export const colorCompoundBrandBackgroundPressed = create<string>('colorCompoundBrandBackgroundPressed').withDefault(
  '#0f548c',
);

/**
 * @public
 */
export const colorBrandBackgroundStatic = create<string>('colorBrandBackgroundStatic').withDefault('#0f6cbd');

/**
 * @public
 */
export const colorBrandBackground2 = create<string>('colorBrandBackground2').withDefault('#ebf3fc');

/**
 * @public
 */
export const colorBrandBackgroundInverted = create<string>('colorBrandBackgroundInverted').withDefault('#ffffff');

/**
 * @public
 */
export const colorBrandBackgroundInvertedHover = create<string>('colorBrandBackgroundInvertedHover').withDefault(
  '#ebf3fc',
);

/**
 * @public
 */
export const colorBrandBackgroundInvertedPressed = create<string>('colorBrandBackgroundInvertedPressed').withDefault(
  '#b4d6fa',
);

/**
 * @public
 */
export const colorBrandBackgroundInvertedSelected = create<string>('colorBrandBackgroundInvertedSelected').withDefault(
  '#cfe4fa',
);

/**
 * @public
 */
export const colorNeutralStrokeAccessible = create<string>('colorNeutralStrokeAccessible').withDefault('#616161');

/**
 * @public
 */
export const colorNeutralStrokeAccessibleHover = create<string>('colorNeutralStrokeAccessibleHover').withDefault(
  '#575757',
);

/**
 * @public
 */
export const colorNeutralStrokeAccessiblePressed = create<string>('colorNeutralStrokeAccessiblePressed').withDefault(
  '#4d4d4d',
);

/**
 * @public
 */
export const colorNeutralStrokeAccessibleSelected = create<string>('colorNeutralStrokeAccessibleSelected').withDefault(
  '#0f6cbd',
);

/**
 * @public
 */
export const colorNeutralStroke1 = create<string>('colorNeutralStroke1').withDefault('#d1d1d1');

/**
 * @public
 */
export const colorNeutralStroke1Hover = create<string>('colorNeutralStroke1Hover').withDefault('#c7c7c7');

/**
 * @public
 */
export const colorNeutralStroke1Pressed = create<string>('colorNeutralStroke1Pressed').withDefault('#b3b3b3');

/**
 * @public
 */
export const colorNeutralStroke1Selected = create<string>('colorNeutralStroke1Selected').withDefault('#bdbdbd');

/**
 * @public
 */
export const colorNeutralStroke2 = create<string>('colorNeutralStroke2').withDefault('#e0e0e0');

/**
 * @public
 */
export const colorNeutralStroke3 = create<string>('colorNeutralStroke3').withDefault('#f0f0f0');

/**
 * @public
 */
export const colorNeutralStrokeOnBrand = create<string>('colorNeutralStrokeOnBrand').withDefault('#ffffff');

/**
 * @public
 */
export const colorNeutralStrokeOnBrand2 = create<string>('colorNeutralStrokeOnBrand2').withDefault('#ffffff');

/**
 * @public
 */
export const colorNeutralStrokeOnBrand2Hover = create<string>('colorNeutralStrokeOnBrand2Hover').withDefault('#ffffff');

/**
 * @public
 */
export const colorNeutralStrokeOnBrand2Pressed = create<string>('colorNeutralStrokeOnBrand2Pressed').withDefault(
  '#ffffff',
);

/**
 * @public
 */
export const colorNeutralStrokeOnBrand2Selected = create<string>('colorNeutralStrokeOnBrand2Selected').withDefault(
  '#ffffff',
);

/**
 * @public
 */
export const colorBrandStroke1 = create<string>('colorBrandStroke1').withDefault('#0f6cbd');

/**
 * @public
 */
export const colorBrandStroke2 = create<string>('colorBrandStroke2').withDefault('#b4d6fa');

/**
 * @public
 */
export const colorCompoundBrandStroke = create<string>('colorCompoundBrandStroke').withDefault('#0f6cbd');

/**
 * @public
 */
export const colorCompoundBrandStrokeHover = create<string>('colorCompoundBrandStrokeHover').withDefault('#115ea3');

/**
 * @public
 */
export const colorCompoundBrandStrokePressed = create<string>('colorCompoundBrandStrokePressed').withDefault('#0f548c');

/**
 * @public
 */
export const colorNeutralStrokeDisabled = create<string>('colorNeutralStrokeDisabled').withDefault('#e0e0e0');

/**
 * @public
 */
export const colorNeutralStrokeInvertedDisabled = create<string>('colorNeutralStrokeInvertedDisabled').withDefault(
  'rgba(255, 255, 255, 0.4)',
);

/**
 * @public
 */
export const colorTransparentStroke = create<string>('colorTransparentStroke').withDefault('transparent');

/**
 * @public
 */
export const colorTransparentStrokeInteractive = create<string>('colorTransparentStrokeInteractive').withDefault(
  'transparent',
);

/**
 * @public
 */
export const colorTransparentStrokeDisabled = create<string>('colorTransparentStrokeDisabled').withDefault(
  'transparent',
);

/**
 * @public
 */
export const colorStrokeFocus1 = create<string>('colorStrokeFocus1').withDefault('#ffffff');

/**
 * @public
 */
export const colorStrokeFocus2 = create<string>('colorStrokeFocus2').withDefault('#000000');

/**
 * @public
 */
export const colorNeutralShadowAmbient = create<string>('colorNeutralShadowAmbient').withDefault('rgba(0,0,0,0.12)');

/**
 * @public
 */
export const colorNeutralShadowKey = create<string>('colorNeutralShadowKey').withDefault('rgba(0,0,0,0.14)');

/**
 * @public
 */
export const colorNeutralShadowAmbientLighter = create<string>('colorNeutralShadowAmbientLighter').withDefault(
  'rgba(0,0,0,0.06)',
);

/**
 * @public
 */
export const colorNeutralShadowKeyLighter = create<string>('colorNeutralShadowKeyLighter').withDefault(
  'rgba(0,0,0,0.07)',
);

/**
 * @public
 */
export const colorNeutralShadowAmbientDarker = create<string>('colorNeutralShadowAmbientDarker').withDefault(
  'rgba(0,0,0,0.2)',
);

/**
 * @public
 */
export const colorNeutralShadowKeyDarker = create<string>('colorNeutralShadowKeyDarker').withDefault(
  'rgba(0,0,0,0.24)',
);

/**
 * @public
 */
export const colorBrandShadowAmbient = create<string>('colorBrandShadowAmbient').withDefault('rgba(0,0,0,0.3)');

/**
 * @public
 */
export const colorBrandShadowKey = create<string>('colorBrandShadowKey').withDefault('rgba(0,0,0,0.25)');

/**
 * @public
 */
export const colorPaletteRedBackground1 = create<string>('colorPaletteRedBackground1').withDefault('#fdf6f6');

/**
 * @public
 */
export const colorPaletteRedBackground2 = create<string>('colorPaletteRedBackground2').withDefault('#f1bbbc');

/**
 * @public
 */
export const colorPaletteRedBackground3 = create<string>('colorPaletteRedBackground3').withDefault('#d13438');

/**
 * @public
 */
export const colorPaletteRedForeground1 = create<string>('colorPaletteRedForeground1').withDefault('#bc2f32');

/**
 * @public
 */
export const colorPaletteRedForeground2 = create<string>('colorPaletteRedForeground2').withDefault('#751d1f');

/**
 * @public
 */
export const colorPaletteRedForeground3 = create<string>('colorPaletteRedForeground3').withDefault('#d13438');

/**
 * @public
 */
export const colorPaletteRedBorderActive = create<string>('colorPaletteRedBorderActive').withDefault('#d13438');

/**
 * @public
 */
export const colorPaletteRedBorder1 = create<string>('colorPaletteRedBorder1').withDefault('#f1bbbc');

/**
 * @public
 */
export const colorPaletteRedBorder2 = create<string>('colorPaletteRedBorder2').withDefault('#d13438');

/**
 * @public
 */
export const colorPaletteGreenBackground1 = create<string>('colorPaletteGreenBackground1').withDefault('#f1faf1');

/**
 * @public
 */
export const colorPaletteGreenBackground2 = create<string>('colorPaletteGreenBackground2').withDefault('#9fd89f');

/**
 * @public
 */
export const colorPaletteGreenBackground3 = create<string>('colorPaletteGreenBackground3').withDefault('#107c10');

/**
 * @public
 */
export const colorPaletteGreenForeground1 = create<string>('colorPaletteGreenForeground1').withDefault('#0e700e');

/**
 * @public
 */
export const colorPaletteGreenForeground2 = create<string>('colorPaletteGreenForeground2').withDefault('#094509');

/**
 * @public
 */
export const colorPaletteGreenForeground3 = create<string>('colorPaletteGreenForeground3').withDefault('#107c10');

/**
 * @public
 */
export const colorPaletteGreenBorderActive = create<string>('colorPaletteGreenBorderActive').withDefault('#107c10');

/**
 * @public
 */
export const colorPaletteGreenBorder1 = create<string>('colorPaletteGreenBorder1').withDefault('#9fd89f');

/**
 * @public
 */
export const colorPaletteGreenBorder2 = create<string>('colorPaletteGreenBorder2').withDefault('#107c10');

/**
 * @public
 */
export const colorPaletteDarkOrangeBackground1 = create<string>('colorPaletteDarkOrangeBackground1').withDefault(
  '#fdf6f3',
);

/**
 * @public
 */
export const colorPaletteDarkOrangeBackground2 = create<string>('colorPaletteDarkOrangeBackground2').withDefault(
  '#f4bfab',
);

/**
 * @public
 */
export const colorPaletteDarkOrangeBackground3 = create<string>('colorPaletteDarkOrangeBackground3').withDefault(
  '#da3b01',
);

/**
 * @public
 */
export const colorPaletteDarkOrangeForeground1 = create<string>('colorPaletteDarkOrangeForeground1').withDefault(
  '#c43501',
);

/**
 * @public
 */
export const colorPaletteDarkOrangeForeground2 = create<string>('colorPaletteDarkOrangeForeground2').withDefault(
  '#7a2101',
);

/**
 * @public
 */
export const colorPaletteDarkOrangeForeground3 = create<string>('colorPaletteDarkOrangeForeground3').withDefault(
  '#da3b01',
);

/**
 * @public
 */
export const colorPaletteDarkOrangeBorderActive = create<string>('colorPaletteDarkOrangeBorderActive').withDefault(
  '#da3b01',
);

/**
 * @public
 */
export const colorPaletteDarkOrangeBorder1 = create<string>('colorPaletteDarkOrangeBorder1').withDefault('#f4bfab');

/**
 * @public
 */
export const colorPaletteDarkOrangeBorder2 = create<string>('colorPaletteDarkOrangeBorder2').withDefault('#da3b01');

/**
 * @public
 */
export const colorPaletteYellowBackground1 = create<string>('colorPaletteYellowBackground1').withDefault('#fffef5');

/**
 * @public
 */
export const colorPaletteYellowBackground2 = create<string>('colorPaletteYellowBackground2').withDefault('#fef7b2');

/**
 * @public
 */
export const colorPaletteYellowBackground3 = create<string>('colorPaletteYellowBackground3').withDefault('#fde300');

/**
 * @public
 */
export const colorPaletteYellowForeground1 = create<string>('colorPaletteYellowForeground1').withDefault('#e4cc00');

/**
 * @public
 */
export const colorPaletteYellowForeground2 = create<string>('colorPaletteYellowForeground2').withDefault('#817400');

/**
 * @public
 */
export const colorPaletteYellowForeground3 = create<string>('colorPaletteYellowForeground3').withDefault('#fde300');

/**
 * @public
 */
export const colorPaletteYellowBorderActive = create<string>('colorPaletteYellowBorderActive').withDefault('#fde300');

/**
 * @public
 */
export const colorPaletteYellowBorder1 = create<string>('colorPaletteYellowBorder1').withDefault('#fef7b2');

/**
 * @public
 */
export const colorPaletteYellowBorder2 = create<string>('colorPaletteYellowBorder2').withDefault('#fde300');

/**
 * @public
 */
export const colorPaletteBerryBackground1 = create<string>('colorPaletteBerryBackground1').withDefault('#fdf5fc');

/**
 * @public
 */
export const colorPaletteBerryBackground2 = create<string>('colorPaletteBerryBackground2').withDefault('#edbbe7');

/**
 * @public
 */
export const colorPaletteBerryBackground3 = create<string>('colorPaletteBerryBackground3').withDefault('#c239b3');

/**
 * @public
 */
export const colorPaletteBerryForeground1 = create<string>('colorPaletteBerryForeground1').withDefault('#af33a1');

/**
 * @public
 */
export const colorPaletteBerryForeground2 = create<string>('colorPaletteBerryForeground2').withDefault('#6d2064');

/**
 * @public
 */
export const colorPaletteBerryForeground3 = create<string>('colorPaletteBerryForeground3').withDefault('#c239b3');

/**
 * @public
 */
export const colorPaletteBerryBorderActive = create<string>('colorPaletteBerryBorderActive').withDefault('#c239b3');

/**
 * @public
 */
export const colorPaletteBerryBorder1 = create<string>('colorPaletteBerryBorder1').withDefault('#edbbe7');

/**
 * @public
 */
export const colorPaletteBerryBorder2 = create<string>('colorPaletteBerryBorder2').withDefault('#c239b3');

/**
 * @public
 */
export const colorPaletteLightGreenBackground1 = create<string>('colorPaletteLightGreenBackground1').withDefault(
  '#f2fbf2',
);

/**
 * @public
 */
export const colorPaletteLightGreenBackground2 = create<string>('colorPaletteLightGreenBackground2').withDefault(
  '#a7e3a5',
);

/**
 * @public
 */
export const colorPaletteLightGreenBackground3 = create<string>('colorPaletteLightGreenBackground3').withDefault(
  '#13a10e',
);

/**
 * @public
 */
export const colorPaletteLightGreenForeground1 = create<string>('colorPaletteLightGreenForeground1').withDefault(
  '#11910d',
);

/**
 * @public
 */
export const colorPaletteLightGreenForeground2 = create<string>('colorPaletteLightGreenForeground2').withDefault(
  '#0b5a08',
);

/**
 * @public
 */
export const colorPaletteLightGreenForeground3 = create<string>('colorPaletteLightGreenForeground3').withDefault(
  '#13a10e',
);

/**
 * @public
 */
export const colorPaletteLightGreenBorderActive = create<string>('colorPaletteLightGreenBorderActive').withDefault(
  '#13a10e',
);

/**
 * @public
 */
export const colorPaletteLightGreenBorder1 = create<string>('colorPaletteLightGreenBorder1').withDefault('#a7e3a5');

/**
 * @public
 */
export const colorPaletteLightGreenBorder2 = create<string>('colorPaletteLightGreenBorder2').withDefault('#13a10e');

/**
 * @public
 */
export const colorPaletteMarigoldBackground1 = create<string>('colorPaletteMarigoldBackground1').withDefault('#fefbf4');

/**
 * @public
 */
export const colorPaletteMarigoldBackground2 = create<string>('colorPaletteMarigoldBackground2').withDefault('#f9e2ae');

/**
 * @public
 */
export const colorPaletteMarigoldBackground3 = create<string>('colorPaletteMarigoldBackground3').withDefault('#eaa300');

/**
 * @public
 */
export const colorPaletteMarigoldForeground1 = create<string>('colorPaletteMarigoldForeground1').withDefault('#d39300');

/**
 * @public
 */
export const colorPaletteMarigoldForeground2 = create<string>('colorPaletteMarigoldForeground2').withDefault('#835b00');

/**
 * @public
 */
export const colorPaletteMarigoldForeground3 = create<string>('colorPaletteMarigoldForeground3').withDefault('#eaa300');

/**
 * @public
 */
export const colorPaletteMarigoldBorderActive = create<string>('colorPaletteMarigoldBorderActive').withDefault(
  '#eaa300',
);

/**
 * @public
 */
export const colorPaletteMarigoldBorder1 = create<string>('colorPaletteMarigoldBorder1').withDefault('#f9e2ae');

/**
 * @public
 */
export const colorPaletteMarigoldBorder2 = create<string>('colorPaletteMarigoldBorder2').withDefault('#eaa300');

/**
 * @public
 */
export const colorPaletteDarkRedBackground2 = create<string>('colorPaletteDarkRedBackground2').withDefault('#d69ca5');

/**
 * @public
 */
export const colorPaletteDarkRedForeground2 = create<string>('colorPaletteDarkRedForeground2').withDefault('#420610');

/**
 * @public
 */
export const colorPaletteDarkRedBorderActive = create<string>('colorPaletteDarkRedBorderActive').withDefault('#750b1c');

/**
 * @public
 */
export const colorPaletteCranberryBackground2 = create<string>('colorPaletteCranberryBackground2').withDefault(
  '#eeacb2',
);

/**
 * @public
 */
export const colorPaletteCranberryForeground2 = create<string>('colorPaletteCranberryForeground2').withDefault(
  '#6e0811',
);

/**
 * @public
 */
export const colorPaletteCranberryBorderActive = create<string>('colorPaletteCranberryBorderActive').withDefault(
  '#c50f1f',
);

/**
 * @public
 */
export const colorPalettePumpkinBackground2 = create<string>('colorPalettePumpkinBackground2').withDefault('#efc4ad');

/**
 * @public
 */
export const colorPalettePumpkinForeground2 = create<string>('colorPalettePumpkinForeground2').withDefault('#712d09');

/**
 * @public
 */
export const colorPalettePumpkinBorderActive = create<string>('colorPalettePumpkinBorderActive').withDefault('#ca5010');

/**
 * @public
 */
export const colorPalettePeachBackground2 = create<string>('colorPalettePeachBackground2').withDefault('#ffddb3');

/**
 * @public
 */
export const colorPalettePeachForeground2 = create<string>('colorPalettePeachForeground2').withDefault('#8f4e00');

/**
 * @public
 */
export const colorPalettePeachBorderActive = create<string>('colorPalettePeachBorderActive').withDefault('#ff8c00');

/**
 * @public
 */
export const colorPaletteGoldBackground2 = create<string>('colorPaletteGoldBackground2').withDefault('#ecdfa5');

/**
 * @public
 */
export const colorPaletteGoldForeground2 = create<string>('colorPaletteGoldForeground2').withDefault('#6c5700');

/**
 * @public
 */
export const colorPaletteGoldBorderActive = create<string>('colorPaletteGoldBorderActive').withDefault('#c19c00');

/**
 * @public
 */
export const colorPaletteBrassBackground2 = create<string>('colorPaletteBrassBackground2').withDefault('#e0cea2');

/**
 * @public
 */
export const colorPaletteBrassForeground2 = create<string>('colorPaletteBrassForeground2').withDefault('#553e06');

/**
 * @public
 */
export const colorPaletteBrassBorderActive = create<string>('colorPaletteBrassBorderActive').withDefault('#986f0b');

/**
 * @public
 */
export const colorPaletteBrownBackground2 = create<string>('colorPaletteBrownBackground2').withDefault('#ddc3b0');

/**
 * @public
 */
export const colorPaletteBrownForeground2 = create<string>('colorPaletteBrownForeground2').withDefault('#50301a');

/**
 * @public
 */
export const colorPaletteBrownBorderActive = create<string>('colorPaletteBrownBorderActive').withDefault('#8e562e');

/**
 * @public
 */
export const colorPaletteForestBackground2 = create<string>('colorPaletteForestBackground2').withDefault('#bdd99b');

/**
 * @public
 */
export const colorPaletteForestForeground2 = create<string>('colorPaletteForestForeground2').withDefault('#294903');

/**
 * @public
 */
export const colorPaletteForestBorderActive = create<string>('colorPaletteForestBorderActive').withDefault('#498205');

/**
 * @public
 */
export const colorPaletteSeafoamBackground2 = create<string>('colorPaletteSeafoamBackground2').withDefault('#a8f0cd');

/**
 * @public
 */
export const colorPaletteSeafoamForeground2 = create<string>('colorPaletteSeafoamForeground2').withDefault('#00723b');

/**
 * @public
 */
export const colorPaletteSeafoamBorderActive = create<string>('colorPaletteSeafoamBorderActive').withDefault('#00cc6a');

/**
 * @public
 */
export const colorPaletteDarkGreenBackground2 = create<string>('colorPaletteDarkGreenBackground2').withDefault(
  '#9ad29a',
);

/**
 * @public
 */
export const colorPaletteDarkGreenForeground2 = create<string>('colorPaletteDarkGreenForeground2').withDefault(
  '#063b06',
);

/**
 * @public
 */
export const colorPaletteDarkGreenBorderActive = create<string>('colorPaletteDarkGreenBorderActive').withDefault(
  '#0b6a0b',
);

/**
 * @public
 */
export const colorPaletteLightTealBackground2 = create<string>('colorPaletteLightTealBackground2').withDefault(
  '#a6e9ed',
);

/**
 * @public
 */
export const colorPaletteLightTealForeground2 = create<string>('colorPaletteLightTealForeground2').withDefault(
  '#00666d',
);

/**
 * @public
 */
export const colorPaletteLightTealBorderActive = create<string>('colorPaletteLightTealBorderActive').withDefault(
  '#00b7c3',
);

/**
 * @public
 */
export const colorPaletteTealBackground2 = create<string>('colorPaletteTealBackground2').withDefault('#9bd9db');

/**
 * @public
 */
export const colorPaletteTealForeground2 = create<string>('colorPaletteTealForeground2').withDefault('#02494c');

/**
 * @public
 */
export const colorPaletteTealBorderActive = create<string>('colorPaletteTealBorderActive').withDefault('#038387');

/**
 * @public
 */
export const colorPaletteSteelBackground2 = create<string>('colorPaletteSteelBackground2').withDefault('#94c8d4');

/**
 * @public
 */
export const colorPaletteSteelForeground2 = create<string>('colorPaletteSteelForeground2').withDefault('#00333f');

/**
 * @public
 */
export const colorPaletteSteelBorderActive = create<string>('colorPaletteSteelBorderActive').withDefault('#005b70');

/**
 * @public
 */
export const colorPaletteBlueBackground2 = create<string>('colorPaletteBlueBackground2').withDefault('#a9d3f2');

/**
 * @public
 */
export const colorPaletteBlueForeground2 = create<string>('colorPaletteBlueForeground2').withDefault('#004377');

/**
 * @public
 */
export const colorPaletteBlueBorderActive = create<string>('colorPaletteBlueBorderActive').withDefault('#0078d4');

/**
 * @public
 */
export const colorPaletteRoyalBlueBackground2 = create<string>('colorPaletteRoyalBlueBackground2').withDefault(
  '#9abfdc',
);

/**
 * @public
 */
export const colorPaletteRoyalBlueForeground2 = create<string>('colorPaletteRoyalBlueForeground2').withDefault(
  '#002c4e',
);

/**
 * @public
 */
export const colorPaletteRoyalBlueBorderActive = create<string>('colorPaletteRoyalBlueBorderActive').withDefault(
  '#004e8c',
);

/**
 * @public
 */
export const colorPaletteCornflowerBackground2 = create<string>('colorPaletteCornflowerBackground2').withDefault(
  '#c8d1fa',
);

/**
 * @public
 */
export const colorPaletteCornflowerForeground2 = create<string>('colorPaletteCornflowerForeground2').withDefault(
  '#2c3c85',
);

/**
 * @public
 */
export const colorPaletteCornflowerBorderActive = create<string>('colorPaletteCornflowerBorderActive').withDefault(
  '#4f6bed',
);

/**
 * @public
 */
export const colorPaletteNavyBackground2 = create<string>('colorPaletteNavyBackground2').withDefault('#a3b2e8');

/**
 * @public
 */
export const colorPaletteNavyForeground2 = create<string>('colorPaletteNavyForeground2').withDefault('#001665');

/**
 * @public
 */
export const colorPaletteNavyBorderActive = create<string>('colorPaletteNavyBorderActive').withDefault('#0027b4');

/**
 * @public
 */
export const colorPaletteLavenderBackground2 = create<string>('colorPaletteLavenderBackground2').withDefault('#d2ccf8');

/**
 * @public
 */
export const colorPaletteLavenderForeground2 = create<string>('colorPaletteLavenderForeground2').withDefault('#3f3682');

/**
 * @public
 */
export const colorPaletteLavenderBorderActive = create<string>('colorPaletteLavenderBorderActive').withDefault(
  '#7160e8',
);

/**
 * @public
 */
export const colorPalettePurpleBackground2 = create<string>('colorPalettePurpleBackground2').withDefault('#c6b1de');

/**
 * @public
 */
export const colorPalettePurpleForeground2 = create<string>('colorPalettePurpleForeground2').withDefault('#341a51');

/**
 * @public
 */
export const colorPalettePurpleBorderActive = create<string>('colorPalettePurpleBorderActive').withDefault('#5c2e91');

/**
 * @public
 */
export const colorPaletteGrapeBackground2 = create<string>('colorPaletteGrapeBackground2').withDefault('#d9a7e0');

/**
 * @public
 */
export const colorPaletteGrapeForeground2 = create<string>('colorPaletteGrapeForeground2').withDefault('#4c0d55');

/**
 * @public
 */
export const colorPaletteGrapeBorderActive = create<string>('colorPaletteGrapeBorderActive').withDefault('#881798');

/**
 * @public
 */
export const colorPaletteLilacBackground2 = create<string>('colorPaletteLilacBackground2').withDefault('#e6bfed');

/**
 * @public
 */
export const colorPaletteLilacForeground2 = create<string>('colorPaletteLilacForeground2').withDefault('#63276d');

/**
 * @public
 */
export const colorPaletteLilacBorderActive = create<string>('colorPaletteLilacBorderActive').withDefault('#b146c2');

/**
 * @public
 */
export const colorPalettePinkBackground2 = create<string>('colorPalettePinkBackground2').withDefault('#f7c0e3');

/**
 * @public
 */
export const colorPalettePinkForeground2 = create<string>('colorPalettePinkForeground2').withDefault('#80215d');

/**
 * @public
 */
export const colorPalettePinkBorderActive = create<string>('colorPalettePinkBorderActive').withDefault('#e43ba6');

/**
 * @public
 */
export const colorPaletteMagentaBackground2 = create<string>('colorPaletteMagentaBackground2').withDefault('#eca5d1');

/**
 * @public
 */
export const colorPaletteMagentaForeground2 = create<string>('colorPaletteMagentaForeground2').withDefault('#6b0043');

/**
 * @public
 */
export const colorPaletteMagentaBorderActive = create<string>('colorPaletteMagentaBorderActive').withDefault('#bf0077');

/**
 * @public
 */
export const colorPalettePlumBackground2 = create<string>('colorPalettePlumBackground2').withDefault('#d696c0');

/**
 * @public
 */
export const colorPalettePlumForeground2 = create<string>('colorPalettePlumForeground2').withDefault('#43002b');

/**
 * @public
 */
export const colorPalettePlumBorderActive = create<string>('colorPalettePlumBorderActive').withDefault('#77004d');

/**
 * @public
 */
export const colorPaletteBeigeBackground2 = create<string>('colorPaletteBeigeBackground2').withDefault('#d7d4d4');

/**
 * @public
 */
export const colorPaletteBeigeForeground2 = create<string>('colorPaletteBeigeForeground2').withDefault('#444241');

/**
 * @public
 */
export const colorPaletteBeigeBorderActive = create<string>('colorPaletteBeigeBorderActive').withDefault('#7a7574');

/**
 * @public
 */
export const colorPaletteMinkBackground2 = create<string>('colorPaletteMinkBackground2').withDefault('#cecccb');

/**
 * @public
 */
export const colorPaletteMinkForeground2 = create<string>('colorPaletteMinkForeground2').withDefault('#343231');

/**
 * @public
 */
export const colorPaletteMinkBorderActive = create<string>('colorPaletteMinkBorderActive').withDefault('#5d5a58');

/**
 * @public
 */
export const colorPalettePlatinumBackground2 = create<string>('colorPalettePlatinumBackground2').withDefault('#cdd6d8');

/**
 * @public
 */
export const colorPalettePlatinumForeground2 = create<string>('colorPalettePlatinumForeground2').withDefault('#3b4447');

/**
 * @public
 */
export const colorPalettePlatinumBorderActive = create<string>('colorPalettePlatinumBorderActive').withDefault(
  '#69797e',
);

/**
 * @public
 */
export const colorPaletteAnchorBackground2 = create<string>('colorPaletteAnchorBackground2').withDefault('#bcc3c7');

/**
 * @public
 */
export const colorPaletteAnchorForeground2 = create<string>('colorPaletteAnchorForeground2').withDefault('#202427');

/**
 * @public
 */
export const colorPaletteAnchorBorderActive = create<string>('colorPaletteAnchorBorderActive').withDefault('#394146');

/**
 * @public
 */
export const shadow2 = create<string>('shadow2').withDefault('0 0 2px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.14)');

/**
 * @public
 */
export const shadow4 = create<string>('shadow4').withDefault('0 0 2px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.14)');

/**
 * @public
 */
export const shadow8 = create<string>('shadow8').withDefault('0 0 2px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.14)');

/**
 * @public
 */
export const shadow16 = create<string>('shadow16').withDefault('0 0 2px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.14)');

/**
 * @public
 */
export const shadow28 = create<string>('shadow28').withDefault(
  '0 0 8px rgba(0,0,0,0.12), 0 14px 28px rgba(0,0,0,0.14)',
);

/**
 * @public
 */
export const shadow64 = create<string>('shadow64').withDefault(
  '0 0 8px rgba(0,0,0,0.12), 0 32px 64px rgba(0,0,0,0.14)',
);

/**
 * @public
 */
export const shadow2Brand = create<string>('shadow2Brand').withDefault(
  '0 0 2px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.25)',
);

/**
 * @public
 */
export const shadow4Brand = create<string>('shadow4Brand').withDefault(
  '0 0 2px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.25)',
);

/**
 * @public
 */
export const shadow8Brand = create<string>('shadow8Brand').withDefault(
  '0 0 2px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.25)',
);

/**
 * @public
 */
export const shadow16Brand = create<string>('shadow16Brand').withDefault(
  '0 0 2px rgba(0,0,0,0.3), 0 8px 16px rgba(0,0,0,0.25)',
);

/**
 * @public
 */
export const shadow28Brand = create<string>('shadow28Brand').withDefault(
  '0 0 8px rgba(0,0,0,0.3), 0 14px 28px rgba(0,0,0,0.25)',
);

/**
 * @public
 */
export const shadow64Brand = create<string>('shadow64Brand').withDefault(
  '0 0 8px rgba(0,0,0,0.3), 0 32px 64px rgba(0,0,0,0.25)',
);
