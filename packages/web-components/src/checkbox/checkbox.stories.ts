import { html } from '@microsoft/fast-element';
import type { Args, Meta } from '@storybook/html';
import { renderComponent } from '../__test__/helpers.js';
import type { Checkbox as FluentCheckbox } from './checkbox.js';
import './define.js';

type CheckboxStoryArgs = Args & FluentCheckbox;
type CheckboxStoryMeta = Meta<CheckboxStoryArgs>;

const storyTemplate = html<CheckboxStoryArgs>`
  <fluent-checkbox
    ?checked="${x => x.checked}"
    ?disabled="${x => x.disabled}"
    ?required="${x => x.required}"
    ?readonly="${x => x.readOnly}"
    :indeterminate="${x => x.indeterminate}"
    shape="${x => x.shape}"
    size="${x => x.size}"
    label-before="${x => x.labelBefore}"
    value="${x => x.value}"
  >
    ${x => x.label}
  </fluent-checkbox>
`;

export default {
  title: 'Components/Checkbox',
  args: {
    checked: undefined,
    disabled: false,
    indeterminate: false,
    labelBefore: false,
    size: 'medium',
    shape: 'square',
    label: 'Checkbox',
    readOnly: false,
    required: false,
  },
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    labelBefore: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    required: { control: 'boolean' },
    value: { control: 'text' },
    size: {
      options: ['medium', 'large'],
      control: {
        type: 'select',
      },
    },
    label: { table: { disable: true } },
    storyItems: { table: { disable: true } },
  },
} as CheckboxStoryMeta;

export const Checkbox = renderComponent(storyTemplate).bind({});

export const CheckboxDisabled = renderComponent(storyTemplate).bind({});
CheckboxDisabled.args = {
  disabled: true,
};

export const CheckboxChecked = renderComponent(storyTemplate).bind({});
CheckboxChecked.args = {
  checked: true,
};

export const CheckboxDisabledChecked = renderComponent(storyTemplate).bind({});
CheckboxDisabledChecked.args = {
  checked: true,
  disabled: true,
};

export const CheckboxIndeterminate = renderComponent(storyTemplate).bind({});
CheckboxIndeterminate.args = {
  checked: false,
  indeterminate: true,
};
CheckboxIndeterminate.decorators = [
  (Story, { args }) => {
    const renderedStory = Story() as DocumentFragment;

    if (args.indeterminate !== true) {
      return renderedStory;
    }

    const element = (renderedStory as unknown) as FluentCheckbox;

    element.addEventListener('change', e => {
      if (e && e.target === element && element.checked) {
        element.indeterminate = false;
      }
    });
    return renderedStory;
  },
];

export const CheckboxIndeterminateDisabled = renderComponent(storyTemplate).bind({});
CheckboxIndeterminateDisabled.args = {
  checked: false,
  indeterminate: true,
  disabled: true,
};

export const CheckboxLarge = renderComponent(storyTemplate).bind({});
CheckboxLarge.args = {
  size: 'large',
};

export const CheckboxLabelBefore = renderComponent(storyTemplate).bind({});
CheckboxLabelBefore.args = {
  labelBefore: true,
};

export const CheckboxRequired = renderComponent(storyTemplate).bind({});
CheckboxRequired.args = {
  required: true,
};

export const CheckboxReadonly = renderComponent(storyTemplate).bind({});
CheckboxReadonly.args = {
  readOnly: true,
  checked: true,
};

export const CheckboxCircular = renderComponent(storyTemplate).bind({});
CheckboxCircular.args = {
  shape: 'circular',
};
