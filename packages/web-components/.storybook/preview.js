import { DesignToken } from '@microsoft/fast-foundation';
import * as Fluent from '../src/index-rollup';
import webcomponentsTheme from './theme';

Fluent;

DesignToken.registerRoot();

export const parameters = {
  layout: 'fullscreen',
  controls: { expanded: true },
  viewMode: 'docs',
  previewTabs: {
    canvas: { hidden: true },
  },
  options: {
    storySort: {
      order: [
        'Getting Started',
        ['Overview', 'Installation', 'Styling'],
        'Components',
        'Integrations',
        ['Introduction'],
        'Design System',
        ['Design Tokens', 'Color Explorer', 'High Contrast'],
        'Resources',
        ['Browser Support', 'FAQ', 'License', 'Security'],
        '*',
      ],
      method: 'alphabetical',
    },
  },
  docs: {
    theme: webcomponentsTheme, // override the default Storybook theme with a custom fluent theme
  },
};
