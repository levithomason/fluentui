import * as React from 'react';
import { tokens } from '@fluentui/react-theme';
import { iconFilledClassName, iconRegularClassName } from '@fluentui/react-icons';

import { getSlots } from '@fluentui/react-utilities';

import type { AlertState, AlertSlots } from './Alert.types';

import { FASTElement, customElement, attr, html, css, when } from '@microsoft/fast-element';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';

// -------------------------------------------------
// Web Component
// -------------------------------------------------

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

export const ReactAlert = provideReactWrapper(React).wrap(AlertElement);

type CustomElement<T> = Partial<T & React.DOMAttributes<T> & { children: any }>;
declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['fui-alert']: CustomElement<AlertElement>;
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
  //     {slots.avatar && <slots.avatar {...slotProps.avatar} />}
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
