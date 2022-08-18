import * as React from 'react';
import { tokens } from '@fluentui/react-theme';

import { getSlots } from '@fluentui/react-utilities';

import type { AlertState, AlertSlots } from './Alert.types';

import { FASTElement, customElement, attr, html, css, when } from '@microsoft/fast-element';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
const { wrap } = provideReactWrapper(React);

// -------------------------------------------------
// Web Component
// -------------------------------------------------

@customElement({
  name: 'fui-button',
  styles: css`
    :host > * {
      align-items: center;
      display: inline-flex;
      justify-content: center;
      vertical-align: middle;

      margin: 0;

      max-width: 280px;

      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      background-color: ${tokens.colorNeutralBackground1};
      color: ${tokens.colorNeutralForeground1};
      border: ${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke1};

      font-family: ${tokens.fontFamilyBase};

      outline-style: none;
    }

    // Appearance variations
    :host([appearance='outline']) > * {
      background-color: ${tokens.colorTransparentBackground};
    }
    :host([appearance='outline']):hover > * {
      background-color: ${tokens.colorTransparentBackgroundHover};
    }
    :host([appearance='outline']):hover:active > * {
      background-color: ${tokens.colorTransparentBackgroundPressed};
    }

    :host([appearance='primary']) > * {
      background-color: ${tokens.colorBrandBackground};
      border-color: transparent;
      color: ${tokens.colorNeutralForegroundOnBrand};
    }
    :host([appearance='primary']):hover > * {
      background-color: ${tokens.colorBrandBackgroundHover};
      border-color: transparent;
      color: ${tokens.colorNeutralForegroundOnBrand};
    }
    :host([appearance='primary']):hover:active > * {
      background-color: ${tokens.colorBrandBackgroundPressed};
      border-color: transparent;
      color: ${tokens.colorNeutralForegroundOnBrand};
    }

    :host([appearance='secondary']) > * {
      /* The secondary styles are exactly the same as the base styles. */
    }

    :host([appearance='subtle']) > * {
      background-color: ${tokens.colorSubtleBackground};
      border-color: transparent;
      color: ${tokens.colorNeutralForeground2};
    }
    :host([appearance='subtle']):hover > * {
      background-color: ${tokens.colorSubtleBackgroundHover};
      border-color: transparent;
      color: ${tokens.colorNeutralForeground2BrandHover};
    }
    :host([appearance='subtle']):hover:active > * {
      background-color: ${tokens.colorSubtleBackgroundPressed};
      border-color: transparent;
      color: ${tokens.colorNeutralForeground2BrandPressed};
    }

    :host([appearance='transparent']) > * {
      background-color: ${tokens.colorTransparentBackground};
      border-color: transparent;
      color: ${tokens.colorNeutralForeground2};
    }
    :host([appearance='transparent']):hover > * {
      background-color: ${tokens.colorTransparentBackgroundHover};
      border-color: transparent;
      color: ${tokens.colorNeutralForeground2BrandHover};
    }
    :host([appearance='transparent']):hover:active > * {
      background-color: ${tokens.colorTransparentBackgroundPressed};
      border-color: transparent;
      color: ${tokens.colorNeutralForeground2BrandPressed};
    }

    // Shape variations
    :host([shape='circular']) > * {
      border-radius: ${tokens.borderRadiusCircular};
    }
    :host([shape='rounded']) > * {
      /* The borderRadius rounded styles are handled in the size variations */
    }
    :host([shape='square']) > * {
      border-radius: ${tokens.borderRadiusNone};
    }

    // Size variations
    :host([size='small']) > * {
      padding: ${tokens.spacingVerticalNone} ${tokens.spacingHorizontalS};

      height: 24px;
      min-width: 64px;

      border-radius: ${tokens.borderRadiusMedium};

      font-size: ${tokens.fontSizeBase200};
      font-weight: ${tokens.fontWeightRegular};
      line-height: ${tokens.lineHeightBase200};
    }
    :host([size='medium']) > * {
      padding: ${tokens.spacingVerticalNone} ${tokens.spacingHorizontalM};

      height: 32px;
      min-width: 96px;

      border-radius: ${tokens.borderRadiusMedium};

      font-size: ${tokens.fontSizeBase300};
      font-weight: ${tokens.fontWeightSemibold};
      line-height: ${tokens.lineHeightBase300};
    }
    :host([size='large']) > * {
      padding: ${tokens.spacingVerticalNone} ${tokens.spacingHorizontalL};

      height: 40px;
      min-width: 96px;

      border-radius: ${tokens.borderRadiusMedium};

      font-size: ${tokens.fontSizeBase400};
      font-weight: ${tokens.fontWeightSemibold};
      line-height: ${tokens.lineHeightBase400};
    }
  `,
  template: html<ButtonElement>`
    <template>
      <button>
        <slot></slot>
      </button>
    </template>
  `,
})
class ButtonElement extends FASTElement {
  /**
   * A button can have its content and borders styled for greater emphasis or to be subtle.
   * - 'secondary' (default): Gives emphasis to the button in such a way that it indicates a secondary action.
   * - 'primary': Emphasizes the button as a primary action.
   * - 'outline': Removes background styling.
   * - 'subtle': Minimizes emphasis to blend into the background until hovered or focused.
   * - 'transparent': Removes background and border styling.
   *
   * @default 'secondary'
   */
  @attr public appearance?: 'secondary' | 'primary' | 'outline' | 'subtle' | 'transparent';

  /**
   * A button can be rounded, circular, or square.
   *
   * @default 'rounded'
   */
  @attr public shape?: 'rounded' | 'circular' | 'square';

  /**
   * A button supports different sizes.
   *
   * @default 'medium'
   */
  @attr public size?: 'small' | 'medium' | 'large' = 'small';
}

// const actionConfig = {
//   converter: {
//     fromView(value) {
//       console.log('fromView', value);
//       return JSON.parse(value);
//     },
//     toView(value) {
//       console.log('toView', value);
//       return JSON.stringify(value);
//     },
//   },
// };

@customElement({
  name: 'fui-alert',
  styles: css`
    .root {
      display: flex;
      align-items: center;
      min-height: 44px;
      padding: 0 12px;
      background-color: ${tokens.colorNeutralBackground1}; /* todo - there is no bg10, used bg1 */
      border-color: transparent;
      border-radius: 4px;
      box-shadow: ${tokens.shadow8};
      font-size: ${tokens.fontSizeBase300}; /* todo - lineheight in tokens */
      font-weight: ${tokens.fontWeightSemibold};
    }
    .icon {
      height: 16px;
      font-size: 16px;
      padding: 0 8px 0 0;
    }
    .action {
      padding: 0;
      min-width: 0;
      margin-left: auto;
      color: ${tokens.colorBrandForeground2}; /* todo - foreground3 doesn't exist */
    }
  `,
  template: html<AlertElement>`
    <template>
      <div class="root">
        <slot aria-hidden="true" name="icon" class="action"></slot>
        <slot name="children"></slot>
        <slot name="action">
          ${when(
            x => x.action,
            html`
              <fui-button
                aria-hidden="true"
                class="action"
                appearance="${x => console.log(x.action?.appearance) || x.action?.appearance}"
              ></fui-button>
            `,
          )}
        </slot>
      </div>
    </template>
  `,
})
class AlertElement extends FASTElement {
  // /**
  //  * The root slot is the top level container for the alert component
  //  */
  // @attr public root: NonNullable<Slot<'div'>>;

  // IMPLEMENTED as an HTML slot
  /**
   * The icon slot renders the icon determined by the `icon` or `intent` prop
   */
  @attr public icon?: string; // TODO: Slot<'span'>;

  /**
   * The action slot renders a button that prompts the user to take action on the alert
   */
  @attr public action?: { appearance?: string; children?: any }; // TODO: type Slot<typeof Button>

  /**
   * The intent prop, if present, determines the icon to be rendered in the icon slot. The icon prop
   * overrides the intent prop
   */
  @attr public intent?: 'info' | 'success' | 'error' | 'warning';
}

export const ReactAlert = wrap(AlertElement);

type CustomElement<T> = Partial<T & React.DOMAttributes<T> & { children: any }>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['fui-alert']: CustomElement<AlertElement>;
      ['fui-button']: CustomElement<ButtonElement>;
    }
  }
}

// -------------------------------------------------
// Render Function
// -------------------------------------------------

export const renderAlert_unstable = (state: AlertState) => {
  const { slots, slotProps } = getSlots<AlertSlots>(state);

  // return (
  //   <slots.root {...slotProps.root}>
  //     {slots.icon && <slots.icon {...slotProps.icon} />}
  //     {slotProps.root.children}
  //     {slots.action && <slots.action {...slotProps.action} />}
  //   </slots.root>
  // );

  console.log({ state, slots, slotProps });

  // return (
  //   <>
  //     <fui-button>Default</fui-button>
  //     <fui-button appearance="outline">appearance="outline"</fui-button>
  //     <fui-button appearance="primary">appearance="primary"</fui-button>
  //     <fui-button appearance="secondary">appearance="secondary"</fui-button>
  //     <fui-button appearance="subtle">appearance="subtle"</fui-button>
  //     <fui-button appearance="transparent">appearance="transparent"</fui-button>
  //     <hr />
  //     <fui-button size="small">size="small"</fui-button>
  //     <fui-button size="medium">size="medium"</fui-button>
  //     <fui-button size="large">size="large"</fui-button>
  //   </>
  // );

  return (
    <fui-alert className={state.root.className} intent={state.intent} {...slotProps.root}>
      {slots.icon && <slots.icon slot="icon" {...slotProps.icon} />}
      {slotProps.root.children && <span slot="children">{slotProps.root.children}</span>}
      {slots.action && <slots.action slot="action" {...slotProps.action} />}
    </fui-alert>
  );
};
