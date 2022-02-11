import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import { ImageSlots, ImageRender } from './Image.types';

/**
 * Define the render function.
 * Given the state of an image, renders it.
 */
export const renderImage_unstable: ImageRender = state => {
  const { slots, slotProps } = getSlots<ImageSlots>(state);

  return <slots.root {...slotProps.root} />;
};
