import { css } from "@microsoft/fast-element";
import { borderRadiusCircular, borderRadiusMedium, borderRadiusNone, colorNeutralStroke1, shadow4, strokeWidthThin } from "../design-tokens.js";

/**
 * Styles for Image
 * @public
 */
 export const styles = css`
    :host {
      display: contents;
    }

    ::slotted(*) {
        display: inline-block;
        box-sizing: border-box;
        border-color: ${colorNeutralStroke1};
        border-radius: ${borderRadiusNone};
    }
    :host([bordered]) ::slotted(*) {
        border-style: solid;
        border-width: ${strokeWidthThin};
    }
    :host([shape="circular"]) ::slotted(*) {
        border-radius: ${borderRadiusCircular};
    }
    :host([shape="rounded"]) ::slotted(*) {
        border-radius: ${borderRadiusMedium};
    }
    :host([shadow]) ::slotted(*) {
        box-shadow: ${shadow4};
    }
    :host([fit]) ::slotted(*) {
        object-fit: none;
        object-position: center;
        height: 100%;
        width: 100%;
    }
    :host([fit="none"]) ::slotted(*) {
        object-position: left top;
    }
    :host([fit="cover"]) ::slotted(*) {
        object-fit: cover;
    }
    :host([fit="contain"]) ::slotted(*) {
        object-fit: contain;
    }
    :host([block]) ::slotted(*) {
        width: 100%;
    }
`;
