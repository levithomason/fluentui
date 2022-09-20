import { css } from '@microsoft/fast-element';
import {
  display,
  focusVisible,
} from '@microsoft/fast-foundation';
import { borderRadiusCircular, borderRadiusSmall, colorCompoundBrandBackground, colorCompoundBrandBackgroundHover, colorCompoundBrandBackgroundPressed, colorCompoundBrandForeground1, colorCompoundBrandForeground1Hover, colorCompoundBrandForeground1Pressed, colorCompoundBrandStroke, colorCompoundBrandStrokeHover, colorCompoundBrandStrokePressed, colorNeutralForeground1, colorNeutralForeground2, colorNeutralForeground3, colorNeutralForegroundDisabled, colorNeutralForegroundOnBrand, colorNeutralStrokeAccessible, colorNeutralStrokeAccessibleHover, colorNeutralStrokeAccessiblePressed, colorNeutralStrokeDisabled, fontFamilyBase, fontSizeBase300, lineHeightBase300, strokeWidthThin } from '../design-tokens';

// TODO replace these spacing constants with theme values once they're on the theme
const spacingHorizontalM = '12px';

// The indicator size is used by the indicator and label styles
const indicatorSizeMedium = '16px';
const indicatorSizeLarge = '20px';

export const styles = css`
    ${display('inline-flex')} :host {
      align-items: center;
      height: 32px;
      outline: none;
      gap: ${spacingHorizontalM};
      ${
        /*
         * Chromium likes to select label text or the default slot when
         * the checkbox is clicked. Maybe there is a better solution here?
         */ ''
      } user-select: none;
      cursor: pointer;
    }

    :host([size="medium"]) .control {
        width: ${indicatorSizeMedium};
        height: ${indicatorSizeMedium};
    }

    :host([size="large"]) .control {
        width: ${indicatorSizeLarge};
        height: ${indicatorSizeLarge};
    }

    .control {
      position: relative;
      box-sizing: border-box;
      border-radius: ${borderRadiusSmall};
      border: ${strokeWidthThin} solid ${colorNeutralStrokeAccessible};
      outline: none;
    }

    ::slotted(*) {
      font-family: ${fontFamilyBase};
      color: ${colorNeutralForeground3};
      font-size: ${fontSizeBase300};
      line-height: ${lineHeightBase300};
      cursor: pointer;
    }

    :host([shape="circular"]) .control {
      border-radius: ${borderRadiusCircular};
    }

    :host(:hover) ::slotted(*) {
        color: ${colorNeutralForeground2};
    }

    svg,
    ::slotted(svg) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      opacity: 0;
      fill: currentColor;
      pointer-events: none;
    }

    :host([size="medium"]) ::slotted([slot='indeterminate-indicator']),
    :host([size="medium"]) ::slotted([slot='checked-indicator']) {
        width: 12px;
        height: 12px;
    }

    :host(.indeterminate) .control {
        border-color: ${colorCompoundBrandStroke};
    }

    :host(.indeterminate) svg[slot='indeterminate-indicator'],
    :host(.indeterminate) ::slotted([slot='indeterminate-indicator']) {
        opacity: 1;
    }

    :host svg[slot='indeterminate-indicator'],
    :host ::slotted([slot='indeterminate-indicator']) {
        position: absolute;
        top: 0;
        color: ${colorCompoundBrandForeground1};
    }

    :host(:hover) ::slotted([slot='indeterminate-indicator']) {
        border-color: ${colorCompoundBrandStrokeHover};
        color: ${colorCompoundBrandForeground1Hover};
    }

    :host(:active) ::slotted([slot='indeterminate-indicator']) {
        border-color: ${colorCompoundBrandStrokePressed};
        color: ${colorCompoundBrandForeground1Pressed};
    }

    :host(:not(.disabled):hover) .control {
        border-color: ${colorNeutralStrokeAccessibleHover};
    }

    :host(:not(.disabled):active) ::slotted(*) {
      color: ${colorNeutralForeground1};
    }

    :host(:not(.disabled):hover) .control {
        border-color: ${colorNeutralStrokeAccessiblePressed};
    }

    /*
    NEED TO ADD FOCUS STYLES
    :host(:${focusVisible}) .control {} */
    /* Checked Styles */
    :host([aria-checked="true"]) svg,
    :host([aria-checked="true"]) ::slotted(svg) {
        fill: ${colorNeutralForegroundOnBrand};
    }

    :host([aria-checked="true"]) ::slotted(*) {
        color: ${colorNeutralForeground1};
    }

    :host([aria-checked="true"]:not([disabled])) .control {
      background: ${colorCompoundBrandBackground};
      border-color: ${colorCompoundBrandBackground};
    }

    :host([aria-checked="true"]) svg[slot="checked-indicator"],
    :host([aria-checked="true"]) ::slotted([slot='checked-indicator']) {
        opacity: 1;
    }

    :host([aria-checked="true"].indeterminate) svg[slot="indeterminate-indicator"],,
    :host([aria-checked="true"].indeterminate) ::slotted([slot='indeterminate-indicator']) {
        opacity: 0;
    }

    /* Checked Disabled */
    :host([aria-checked="true"]:not([disabled]):hover) .control {
      background: ${colorCompoundBrandBackgroundHover};
      border-color: ${colorCompoundBrandBackgroundHover};
    }

    :host([aria-checked="true"]:not([disabled]):active) .control {
      background: ${colorCompoundBrandBackgroundPressed};
      border-color: ${colorCompoundBrandBackgroundPressed};
    }

    :host([readonly]),
    :host([disabled]),
    :host([disabled]) ::slotted(*),
    :host([readonly]) ::slotted(*), {
      cursor: default;
    }

    :host([disabled]) .control,
    :host([disabled]) ::slotted(*),
    :host([disabled]) svg {
      border-color: ${colorNeutralStrokeDisabled};
      color: ${colorNeutralForegroundDisabled};
      fill: currentColor;
    }

    :host([label-before]) {
        flex-direction: row-reverse;
    }
  `
