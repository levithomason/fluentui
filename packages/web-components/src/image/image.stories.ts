import { html } from '@microsoft/fast-element';
import type { Args, Meta } from '@storybook/html';
import { renderComponent } from '../__test__/helpers.js';
import type { Image as FluentImage } from './image.js';
import './define.js';

type ImageStoryArgs = Args & FluentImage;
type ImageStoryMeta = Meta<ImageStoryArgs>;

const storyTemplate = html<ImageStoryArgs>`<fluent-image
  fit=${x => x.fit}
  shape=${x => x.shape}
  ?bordered=${x => x.bordered}
  ?block=${x => x.block}
  ?shadow=${x => x.shadow}
  ><img src=${x => x.src} alt=${x => x.alt} width=${x => x.width} height=${x => x.height} loading=${x => x.loading}
/></fluent-image> `;

export default {
  title: 'Components/Image',
  args: {
    src: 'https://via.placeholder.com/150',
    alt: 'Placeholder image with grey watermark showing size of 150px',
    bordered: false,
    block: false,
    shape: undefined,
    shadow: false,
    width: undefined,
    height: undefined,
    loading: undefined,
  },
  argTypes: {
    fit: {
      options: ['none', 'center', 'contain', 'cover'],
      control: {
        type: 'select',
      },
    },
    shape: {
      options: ['square', 'circle', 'rounded', undefined],
      control: {
        type: 'select',
      },
    },
    bordered: {
      control: 'boolean',
    },
    block: {
      control: 'boolean',
    },
    shadow: {
      control: 'boolean',
    },
    width: {
      control: 'text',
    },
    height: {
      control: 'text',
    },
    loading: {
      options: ['eager', 'lazy', undefined],
      control: {
        type: 'select',
      },
    },
  },
} as ImageStoryMeta;

export const Image = renderComponent(storyTemplate).bind({});
