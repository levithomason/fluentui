import { css } from '@microsoft/fast-element';
import { display } from '@microsoft/fast-foundation';
import {
  borderRadiusCircular,
  borderRadiusMedium,
  borderRadiusSmall,
  colorBrandBackground,
  colorBrandBackground2,
  colorBrandForeground2,
  colorBrandStroke2,
  colorNeutralBackground1,
  colorNeutralBackground4,
  colorNeutralBackground5,
  colorNeutralForeground1,
  colorNeutralForeground3,
  colorNeutralForegroundInverted,
  colorNeutralForegroundOnBrand,
  colorNeutralStroke2,
  colorNeutralStrokeAccessible,
  colorPaletteDarkOrangeBackground1,
  colorPaletteDarkOrangeBackground3,
  colorPaletteDarkOrangeForeground1,
  colorPaletteDarkOrangeForeground2,
  colorPaletteDarkOrangeForeground3,
  colorPaletteGreenBackground1,
  colorPaletteGreenBackground2,
  colorPaletteGreenBackground3,
  colorPaletteGreenForeground1,
  colorPaletteGreenForeground2,
  colorPaletteGreenForeground3,
  colorPaletteRedBackground1,
  colorPaletteRedBackground3,
  colorPaletteRedBorder1,
  colorPaletteRedForeground2,
  colorPaletteRedForeground3,
  colorPaletteYellowBackground1,
  colorPaletteYellowBackground2,
  colorPaletteYellowBackground3,
  colorPaletteYellowForeground2,
  colorTransparentStroke,
  fontFamilyBase,
  fontWeightSemibold,
  strokeWidthThick,
  strokeWidthThin,
} from '../design-tokens';

/** Badge styles
 * @public
 */
export const styles = css`
  ${display('inline-flex')} :host {
      position: relative;
      box-sizing: border-box;
      align-items: center;
      justify-content: center;
      font-family: ${fontFamilyBase};
      font-weight: ${fontWeightSemibold};
      border-width: ${strokeWidthThin};
      border-style: solid;
  }
  :host(.icon-only) {
      display: flex;
      align-content: center;
      align-items: center;
      height: 100%;
  }
  ::slotted(*) {
      font-family ${fontFamilyBase};
      fill: currentColor;
  }

  :host([appearance='filled']) {
    border-color: ${colorTransparentStroke};
  }
  :host([appearance='filled'][color='brand']) {
    background-color: ${colorBrandBackground};
    color: ${colorNeutralForegroundOnBrand};
    border-color: ${colorBrandBackground};
  }
  :host([appearance='filled'][color='danger']) {
    background-color: ${colorPaletteRedBackground3};
    color: ${colorNeutralForegroundOnBrand};
    border-color: ${colorPaletteRedBackground3};
  }
  :host([appearance='filled'][color='important']) {
    background-color: ${colorNeutralForeground1};
    color: ${colorNeutralBackground1};
  }
  :host([appearance='filled'][color='informative']) {
    background-color: ${colorNeutralBackground5};
    color: ${colorNeutralForeground3};
  }
  :host([appearance='filled'][color='severe']) {
    background-color: ${colorPaletteDarkOrangeBackground3};
    color: ${colorNeutralForegroundOnBrand};
  }
  :host([appearance='filled'][color='subtle']) {
    background-color: ${colorNeutralBackground1};
    color: ${colorNeutralForeground1};
  }
  :host([appearance='filled'][color='success']) {
    background-color: ${colorPaletteGreenBackground3};
    color: ${colorNeutralForegroundOnBrand};
  }
  :host([appearance='filled'][color='warning']) {
    background-color: ${colorPaletteYellowBackground3};
    color: ${colorNeutralForeground1};
    border-color: ${colorPaletteYellowBackground3};
  }

  :host([appearance='ghost']) {
    border-style: none;
  }
  :host([appearance='ghost'][color='brand']) {
    color: ${colorBrandBackground};
  }
  :host([appearance='ghost'][color='danger']) {
    color: ${colorPaletteRedForeground3};
  }
  :host([appearance='ghost'][color='important']) {
    color: ${colorNeutralForeground1};
  }
  :host([appearance='ghost'][color='informative']) {
    color: ${colorNeutralForeground3};
  }
  :host([appearance='ghost'][color='severe']) {
    color: ${colorPaletteDarkOrangeForeground3};
  }
  :host([appearance='ghost'][color='subtle']) {
    color: ${colorNeutralForegroundInverted};
  }
  :host([appearance='ghost'][color='success']) {
    color: ${colorPaletteGreenForeground3};
  }
  :host([appearance='ghost'][color='warning']) {
    color: ${colorPaletteYellowForeground2};
  }

  :host([appearance='outline']) {
    border-color: currentColor;
  }
  :host([appearance='outline'][color='brand']) {
    color: ${colorBrandBackground};
  }
  :host([appearance='outline'][color='danger']) {
    color: ${colorPaletteRedForeground3};
  }
  :host([appearance='outline'][color='important']) {
    color: ${colorNeutralForeground3};
    border-color: ${colorNeutralStrokeAccessible};
  }
  :host([appearance='outline'][color='informative']) {
    color: ${colorNeutralForeground3};
    border-color: ${colorNeutralStroke2};
  }
  :host([appearance='outline'][color='severe']) {
    color: ${colorPaletteDarkOrangeForeground3};
  }
  :host([appearance='outline'][color='subtle']) {
    color: ${colorNeutralForegroundInverted};
  }
  :host([appearance='outline'][color='success']) {
    color: ${colorPaletteGreenForeground2};
  }
  :host([appearance='outline'][color='warning']) {
    color: ${colorPaletteYellowForeground2};
  }

  :host([appearance='tint'][color='brand']) {
    background-color: ${colorBrandBackground2};
    color: ${colorBrandForeground2};
    border-color: ${colorBrandStroke2};
  }
  :host([appearance='tint'][color='danger']) {
    background-color: ${colorPaletteRedBackground1};
    color: ${colorPaletteRedForeground2};
    border-color: ${colorPaletteRedBorder1};
  }
  :host([appearance='tint'][color='important']) {
    background-color: ${colorNeutralForeground3};
    color: ${colorNeutralBackground1};
    border-color: ${colorTransparentStroke};
  }
  :host([appearance='tint'][color='informative']) {
    background-color: ${colorNeutralBackground4};
    color: ${colorNeutralForeground3};
    border-color: ${colorNeutralStroke2};
  }
  :host([appearance='tint'][color='severe']) {
    background-color: ${colorPaletteDarkOrangeBackground1};
    color: ${colorPaletteDarkOrangeForeground1};
    border-color: ${colorPaletteDarkOrangeForeground2};
  }
  :host([appearance='tint'][color='subtle']) {
    background-color: ${colorNeutralBackground1};
    color: ${colorNeutralForeground3};
    border-color: ${colorNeutralStroke2};
  }
  :host([appearance='tint'][color='success']) {
    background-color: ${colorPaletteGreenBackground1};
    color: ${colorPaletteGreenForeground1};
    border-color: ${colorPaletteGreenBackground2};
  }
  :host([appearance='tint'][color='warning']) {
    background-color: ${colorPaletteYellowBackground1};
    color: ${colorPaletteYellowForeground2};
    border-color: ${colorPaletteYellowBackground2};
  }

  //
  // Size
  //

  :host([size='tiny']) {
    width: 6px;
    height: 6px;
    font-size: 4px;
  }
  :host([size='tiny']) ::slotted(svg) {
    font-size: 6px;
  }

  :host([size='extra-small']) {
    width: 10px;
    height: 10px;
    font-size: 6px;
  }
  :host([size='extra-small']) ::slotted(svg) {
    font-size: 10px;
  }

  :host([size='small']) {
    min-width: 16px;
    height: 16px;
    font-size: 8px;
    padding: 2px;
    gap: 4px;
  }
  :host([size='small']) ::slotted(svg) {
    font-size: 12px;
  }

  :host([size='medium']) {
    min-width: 20px;
    height: 20px;
    font-size: 10px;
    padding: 4px;
    gap: 4px;
  }
  :host([size='medium']) ::slotted(svg) {
    font-size: 12px;
  }

  :host([size='large']) {
    min-width: 24px;
    height: 24px;
    font-size: 12px;
    padding: 4px;
    gap: 4px;
  }
  :host([size='large']) ::slotted(svg) {
    font-size: 16px;
  }

  :host([size='extra-large']) {
    min-width: 32px;
    height: 32px;
    font-size: 12px;
    padding: 6px;
    border-width: ${strokeWidthThick};
    gap: 6px;
  }
  :host([size='extra-large']) ::slotted(svg) {
    font-size: 20px;
  }

  //
  // Shape
  //

  :host([shape='rounded']) {
    border-radius: ${borderRadiusMedium};
  }
  :host([shape='rounded'][size='tiny']),
  :host([shape='rounded'][size='extra-small']),
  :host([shape='rounded'][size='small']) {
    border-radius: ${borderRadiusSmall};
  }

  :host([shape='circular']) {
    border-radius: ${borderRadiusCircular};
  }
`;
