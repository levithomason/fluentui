import { html } from '@microsoft/fast-element';
import type { Checkbox, CheckboxOptions } from './checkbox';

/**
 * The template for the {@link @microsoft/fast-foundation#(Checkbox:class)} component.
 * @public
 */
export const template = (options?: CheckboxOptions) => html<Checkbox>`
  <template
    role="checkbox"
    aria-checked="${x => x.checked}"
    aria-required="${x => x.required}"
    aria-disabled="${x => x.disabled}"
    aria-readonly="${x => x.readOnly}"
    tabindex="${x => (x.disabled ? null : 0)}"
    @keypress="${(x, c) => x.keypressHandler(c.event as KeyboardEvent)}"
    @click="${(x, c) => x.clickHandler(c.event as MouseEvent)}"
    class="${x => (x.indeterminate ? 'indeterminate' : '')}"
  >
    <div part="control" class="control">
      <slot name="checked-indicator"> ${options?.checkedIndicator ?? ''} </slot>
      <slot name="indeterminate-indicator"> ${options?.indeterminateIndicator ?? ''} </slot>
    </div>
    <slot></slot>
  </template>
`;
