import { html, css, LitElement } from 'lit';
import { ButtonCommons, ButtonProps } from '../Button.types';

// TODO:
// Set slot elements
// - [ ] root slot element
// - [ ] icon slot element
//
// Spread attrs
// - [ ] root attrs
// - [ ] icon attrs
//
// Component state from attrs?
// - [ ] Use component state rather than attrs
//
// Tag Names
// Allow changing tag name prefix
//
// Investigations
// [ ] Share Typings with React?! :)
// [ ] Share makeStyles with React?! :)

const ELEMENT_NAME = 'fui-button';

declare global {
  interface HTMLElementTagNameMap {
    [ELEMENT_NAME]: FluentButton;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'fui-button': ButtonProps;
    }
  }
}

class FluentButton extends LitElement {
  private static styles = css`
    :host button {
      align-items: center;
      display: inline-flex;
      justify-content: center;
      vertical-align: middle;

      margin: 0;

      max-width: 280px;

      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      background-color: var(--colorNeutralBackground1);
      color: var(--colorNeutralForeground1);
      border: var(--strokeWidthThin) solid var(--colorNeutralStroke1);

      font-family: var(--fontFamilyBase);
      outline-style: none;
    }

    :host(:hover) button {
      background-color: var(--colorNeutralBackground1Hover);
      border-color: var(--colorNeutralStroke1Hover);
      color: var(--colorNeutralForeground1);

      cursor: pointer;
    }

    :host(:active) button {
      background-color: var(--colorNeutralBackground1Pressed);
      border-color: var(--colorNeutralStroke1Pressed);
      color: var(--colorNeutralForeground1);

      outline-style: none;
    }

    /** Block */

    :host([block]) button {
      max-width: 100%;
      width: 100%;
    }

    /** Appearance */

    :host([appearance='outline']) button {
      background-color: var(--colorTransparentBackground);
    }

    :host([appearance='outline']:hover) button {
      background-color: var(--colorTransparentBackgroundHover);
    }

    :host([appearance='outline']:active) button {
      background-color: var(--colorTransparentBackgroundPressed);
    }

    :host([appearance='primary']) button {
      background-color: var(--colorBrandBackground);
      border-color: transparent;
      color: var(--colorNeutralForegroundOnBrand);
    }

    :host([appearance='primary']:hover) button {
      background-color: var(--colorBrandBackgroundHover);
      border-color: transparent;
      color: var(--colorNeutralForegroundOnBrand);
    }

    :host([appearance='primary']:active) button {
      background-color: var(--colorBrandBackgroundPressed);
      border-color: transparent;
      color: var(--colorNeutralForegroundOnBrand);
    }

    :host([appearance='subtle']) button {
      background-color: var(--colorSubtleBackground);
      border-color: transparent;
      color: var(--colorNeutralForeground2);
    }

    :host([appearance='subtle']:hover) button {
      background-color: var(--colorSubtleBackgroundHover);
      border-color: transparent;
      color: var(--colorNeutralForeground2BrandHover);
    }

    :host([appearance='subtle']:active) button {
      background-color: var(--colorSubtleBackgroundPressed);
      border-color: transparent;
      color: var(--colorNeutralForeground2BrandPressed);
    }

    :host([appearance='transparent']) button {
      background-color: var(--colorTransparentBackground);
      border-color: transparent;
      color: var(--colorNeutralForeground2);
    }

    :host([appearance='transparent']:hover) button {
      background-color: var(--colorTransparentBackgroundHover);
      border-color: transparent;
      color: var(--colorNeutralForeground2BrandHover);
    }

    :host([appearance='transparent']:active) button {
      background-color: var(--colorTransparentBackgroundPressed);
      border-color: transparent;
      color: var(--colorNeutralForeground2BrandPressed);
    }

    /** Size */

    :host([size='small']) button {
      gap: 4px;
      padding: 0 8px;

      height: 24px;
      min-width: 64px;

      border-radius: var(--borderRadiusMedium);

      font-size: var(--fontSizeBase200);
      font-weight: var(--fontWeightRegular);
      line-height: var(--lineHeightBase200);
    }

    :host(:not([size])) button,
    :host([size='medium']) button {
      gap: 6px;
      padding: 0 12px;

      height: 32px;
      min-width: 96px;

      border-radius: var(--borderRadiusMedium);

      font-size: var(--fontSizeBase300);
      font-weight: var(--fontWeightSemibold);
      line-height: var(--lineHeightBase300);
    }

    :host([size='large']) button {
      gap: 6px;
      padding: 0 16px;

      height: 40px;
      min-width: 96px;

      border-radius: var(--borderRadiusMedium);

      font-size: var(--fontSizeBase400);
      font-weight: var(--fontWeightSemibold);
      line-height: var(--lineHeightBase400);
    }
  `;

  public static get properties() {
    return {
      appearance: {},
      block: {},
      disabledFocusable: {},
      disabled: {},
      iconPosition: {},
      shape: {},
      size: {},
    };
  }

  public appearance?: ButtonCommons['appearance'];

  public block: ButtonCommons['block'] = false;

  public disabledFocusable: ButtonCommons['disabledFocusable'] = false;

  public disabled: ButtonCommons['disabled'] = false;

  public iconPosition?: ButtonCommons['iconPosition'] = 'before';

  public shape?: ButtonCommons['shape'];

  public size: ButtonCommons['size'] = 'medium';

  protected render() {
    return html`
      <button>
        ${this.iconPosition !== 'after' ? html`<slot name="icon" {...slotProps.icon} />` : ''}
        <slot></slot>
        ${this.iconPosition === 'after' ? html`<slot name="icon" {...slotProps.icon} />` : ''}
      </button>
    `;
  }
}

customElements.define(ELEMENT_NAME, FluentButton);
