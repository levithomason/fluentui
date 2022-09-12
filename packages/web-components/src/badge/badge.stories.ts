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

export const BadgeAppearance = renderComponent(html<BadgeStoryArgs>`
  <fluent-badge appearance="filled">filled</fluent-badge>
  <fluent-badge appearance="ghost">ghost</fluent-badge>
  <fluent-badge appearance="outline">outline</fluent-badge>
  <fluent-badge appearance="tint">tint</fluent-badge>
`);

export const BadgeColor = renderComponent(html<BadgeStoryArgs>`
  <fluent-badge color="brand">brand</fluent-badge>
  <fluent-badge color="danger">danger</fluent-badge>
  <fluent-badge color="important">important</fluent-badge>
  <fluent-badge color="informative">informative</fluent-badge>
  <fluent-badge color="severe">severe</fluent-badge>
  <fluent-badge color="subtle">subtle</fluent-badge>
  <fluent-badge color="success">success</fluent-badge>
  <fluent-badge color="warning">warning</fluent-badge>
`);

export const BadgeShape = renderComponent(html<BadgeStoryArgs>`
  <fluent-badge shape="circular">circular</fluent-badge>
  <fluent-badge shape="rounded">rounded</fluent-badge>
  <fluent-badge shape="square">square</fluent-badge>
`);

export const BadgeSize = renderComponent(html<BadgeStoryArgs>`
  <fluent-badge size="tiny"></fluent-badge> tiny<br />
  <fluent-badge size="extra-small"></fluent-badge> extra-small<br />
  <fluent-badge size="small"></fluent-badge> small<br />
  <fluent-badge size="medium"></fluent-badge> medium<br />
  <fluent-badge size="large"></fluent-badge> large<br />
  <fluent-badge size="extra-large"></fluent-badge> extra-large<br />
`) as BadgeStoryMeta;

BadgeSize.parameters = {
  docs: {
    description: {
      story: 'TODO: 1) tiny is borked 2) fix vertical align',
    },
  },
};
