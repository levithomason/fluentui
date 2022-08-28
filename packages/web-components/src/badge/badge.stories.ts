import { html } from '@microsoft/fast-element';
import type { Args, Meta } from '@storybook/html';
import { renderComponent } from '../__test__/helpers.js';
import type { Badge as FluentBadge } from './badge.js';
import './define.js';

type BadgeStoryArgs = Args & FluentBadge;
type BadgeStoryMeta = Meta<BadgeStoryArgs>;

const storyTemplate = html<BadgeStoryArgs>`
  <fluent-badge appearance=${x => x.appearance} color=${x => x.color} shape=${x => x.shape} size=${x => x.size}
    >${x => x.content}</fluent-badge
  >
`;

export default {
  title: 'Components/Badge',
  args: {
    content: 'Badge',
  },
  argTypes: {
    appearance: {
      options: ['filled', 'ghost', 'outline', 'tint'],
      control: {
        type: 'select',
      },
    },
    color: {
      options: ['brand', 'danger', 'important', 'informative', 'severe', 'subtle', 'success', 'warning'],
      control: {
        type: 'select',
      },
    },
    shape: {
      options: ['circular', 'rounded', 'square'],
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['tiny', 'extra-small', 'small', 'medium', 'large', 'extra-large'],
      control: {
        type: 'select',
      },
    },
  },
} as BadgeStoryMeta;

export const Badge = renderComponent(storyTemplate).bind({});
