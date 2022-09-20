import { html } from '@microsoft/fast-element';
import { FluentDesignSystem } from '../fluent-design-system.js';
import { Checkbox } from './checkbox.js';
import { styles } from './checkbox.styles.js';
import { template as checkboxTemplate } from './checkbox.template.js';

/**
 * The Fluent Checkbox Element
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-checkbox\>
 */
export const definition = Checkbox.compose({
  name: `${FluentDesignSystem.prefix}-checkbox`,
  template: checkboxTemplate({
    checkedIndicator: html`<svg
      slot="checked-indicator"
      aria-hidden="true"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.76 3.2c.3.29.32.76.04 1.06l-4.25 4.5a.75.75 0 01-1.08.02L2.22 6.53a.75.75 0 011.06-1.06l1.7 1.7L8.7 3.24a.75.75 0 011.06-.04z"
      ></path>
    </svg>`,
    indeterminateIndicator: html`<svg
      slot="indeterminate-indicator"
      aria-hidden="true"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 4c0-1.1.9-2 2-2h4a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2V4z"></path>
    </svg>`,
  }),
  styles,
});
