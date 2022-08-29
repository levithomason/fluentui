import * as React from 'react';
import { FASTElement, customElement, attr, html, css } from '@microsoft/fast-element';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import { getSlots } from '@fluentui/react-utilities';
import type { ButtonSlots, ButtonState } from './Button.types';
import { tokens } from '@fluentui/react-theme';
import { iconFilledClassName, iconRegularClassName } from '@fluentui/react-icons';
import { shorthands } from '@griffel/react';

@customElement({
  name: 'fui-button',
  // styles: css`
  //   :host button {
  //     align-items: center;
  //     display: inline-flex;
  //     justify-content: center;
  //     vertical-align: middle;
  //
  //     margin: 0;
  //
  //     max-width: 280px;
  //
  //     overflow: hidden;
  //     text-overflow: ellipsis;
  //     white-space: nowrap;
  //
  //     background-color: ${tokens.colorNeutralBackground1};
  //     color: ${tokens.colorNeutralForeground1};
  //     border: ${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke1};
  //
  //     font-family: ${tokens.fontFamilyBase};
  //
  //     outline-style: none;
  //
  //     :host:hover button {
  //       background-color: ${tokens.colorNeutralBackground1Hover};
  //       border-color: ${tokens.colorNeutralStroke1Hover};
  //       color: ${tokens.colorNeutralForeground1Hover};
  //
  //       cursor: pointer;
  //     }
  //
  //     :host:hover .${iconFilledClassName} {
  //       display: inline;
  //     }
  //     :host:hover .${iconRegularClassName} {
  //       display: none;
  //     }
  //   }
  //
  //   // Appearance variations
  //   :host([appearance='outline']) button {
  //     background-color: ${tokens.colorTransparentBackground};
  //   }
  //   :host([appearance='outline']):hover button {
  //     background-color: ${tokens.colorTransparentBackgroundHover};
  //   }
  //   :host([appearance='outline']):hover:active button {
  //     background-color: ${tokens.colorTransparentBackgroundPressed};
  //   }
  //
  //   :host([appearance='primary']) button {
  //     background-color: ${tokens.colorBrandBackground};
  //     border-color: transparent;
  //     color: ${tokens.colorNeutralForegroundOnBrand};
  //   }
  //   :host([appearance='primary']):hover button {
  //     background-color: ${tokens.colorBrandBackgroundHover};
  //     border-color: transparent;
  //     color: ${tokens.colorNeutralForegroundOnBrand};
  //   }
  //   :host([appearance='primary']):hover:active button {
  //     background-color: ${tokens.colorBrandBackgroundPressed};
  //     border-color: transparent;
  //     color: ${tokens.colorNeutralForegroundOnBrand};
  //   }
  //
  //   :host([appearance='secondary']) button {
  //     /* The secondary styles are exactly the same as the base styles. */
  //   }
  //
  //   :host([appearance='subtle']) button {
  //     background-color: ${tokens.colorSubtleBackground};
  //     border-color: transparent;
  //     color: ${tokens.colorNeutralForeground2};
  //   }
  //   :host([appearance='subtle']):hover button {
  //     background-color: ${tokens.colorSubtleBackgroundHover};
  //     border-color: transparent;
  //     color: ${tokens.colorNeutralForeground2BrandHover};
  //   }
  //   :host([appearance='subtle']):hover:active button {
  //     background-color: ${tokens.colorSubtleBackgroundPressed};
  //     border-color: transparent;
  //     color: ${tokens.colorNeutralForeground2BrandPressed};
  //   }
  //
  //   :host([appearance='transparent']) button {
  //     background-color: ${tokens.colorTransparentBackground};
  //     border-color: transparent;
  //     color: ${tokens.colorNeutralForeground2};
  //   }
  //   :host([appearance='transparent']):hover button {
  //     background-color: ${tokens.colorTransparentBackgroundHover};
  //     border-color: transparent;
  //     color: ${tokens.colorNeutralForeground2BrandHover};
  //   }
  //   :host([appearance='transparent']):hover:active button {
  //     background-color: ${tokens.colorTransparentBackgroundPressed};
  //     border-color: transparent;
  //     color: ${tokens.colorNeutralForeground2BrandPressed};
  //   }
  //
  //   // Shape variations
  //   :host([shape='circular']) button {
  //     border-radius: ${tokens.borderRadiusCircular};
  //   }
  //   :host([shape='rounded']) button {
  //     /* The borderRadius rounded styles are handled in the size variations */
  //   }
  //   :host([shape='square']) button {
  //     border-radius: ${tokens.borderRadiusNone};
  //   }
  //
  //   // Size variations
  //   :host([size='small']) button {
  //     padding: ${tokens.spacingVerticalNone} ${tokens.spacingHorizontalS};
  //
  //     height: 24px;
  //     min-width: 64px;
  //
  //     border-radius: ${tokens.borderRadiusMedium};
  //
  //     font-size: ${tokens.fontSizeBase200};
  //     font-weight: ${tokens.fontWeightRegular};
  //     line-height: ${tokens.lineHeightBase200};
  //   }
  //   :host([size='medium']) button {
  //     padding: ${tokens.spacingVerticalNone} ${tokens.spacingHorizontalM};
  //
  //     height: 32px;
  //     min-width: 96px;
  //
  //     border-radius: ${tokens.borderRadiusMedium};
  //
  //     font-size: ${tokens.fontSizeBase300};
  //     font-weight: ${tokens.fontWeightSemibold};
  //     line-height: ${tokens.lineHeightBase300};
  //   }
  //   :host([size='large']) button {
  //     padding: ${tokens.spacingVerticalNone} ${tokens.spacingHorizontalL};
  //
  //     height: 40px;
  //     min-width: 96px;
  //
  //     border-radius: ${tokens.borderRadiusMedium};
  //
  //     font-size: ${tokens.fontSizeBase400};
  //     font-weight: ${tokens.fontWeightSemibold};
  //     line-height: ${tokens.lineHeightBase400};
  //   }
  // `,
  template: html<ButtonElement>`
    <button class=${x => x.className}>
      <slot></slot>
    </button>
  `,
})
class ButtonElement extends FASTElement {
  @attr public stylesheet: string;

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

  public connectedCallback() {
    super.connectedCallback();
    // this.shadowRoot
    // this.className = '';
    console.log(this);
  }
}

type CustomElement<T> = Partial<T & React.DOMAttributes<T> & { children: any }>;
declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['fui-button']: CustomElement<ButtonElement>;
    }
  }
}

export const ReactButton = provideReactWrapper(React).wrap(ButtonElement);

/**
 * Renders a Button component by passing the state defined props to the appropriate slots.
 */
export const renderButtonWC_unstable = (state: ButtonState) => {
  const { slots, slotProps } = getSlots<ButtonSlots>(state);
  const { iconOnly, iconPosition } = state;

  // return (
  //   <slots.root {...slotProps.root}>
  //     {iconPosition !== 'after' && slots.icon && <slots.icon {...slotProps.icon} />}
  //     {!iconOnly && state.root.children}
  //     {iconPosition === 'after' && slots.icon && <slots.icon {...slotProps.icon} />}
  //   </slots.root>
  // );

  // const classes = useStyles();
  // console.log(classes);
  console.log(slotProps.root);

  return (
    <fui-button {...slotProps.root} stylesheet={state.stylesheet}>
      {iconPosition !== 'after' && slots.icon && <span slot="icon" {...slotProps.icon} />}
      {!iconOnly && state.root.children}
      {iconPosition === 'after' && slots.icon && <span slot="icon" {...slotProps.icon} />}
    </fui-button>
  );
};
