import * as React from 'react';
import { getNativeElementProps, resolveShorthand } from '@fluentui/react-utilities';
import type { CardHeaderProps, CardHeaderState, CardHeaderRender } from './CardHeader.types';
import { renderCardHeader_unstable } from './renderCardHeader';

/**
 * Create the state required to render CardHeader.
 *
 * The returned state can be modified with hooks such as useCardHeaderStyles_unstable,
 * before being passed to renderCardHeader_unstable.
 *
 * @param props - props from this instance of CardHeader
 * @param ref - reference to root HTMLElement of CardHeader
 */
export const useCardHeader_unstable = (
  props: CardHeaderProps,
  ref: React.Ref<HTMLElement>,
): [CardHeaderState, CardHeaderRender] => {
  const { image, content, header, description, action } = props;

  const state: CardHeaderState = {
    components: {
      root: 'div',
      image: 'div',
      content: 'div',
      header: React.Fragment,
      description: React.Fragment,
      action: 'div',
    },

    root: getNativeElementProps('div', {
      ref,
      ...props,
    }),
    image: resolveShorthand(image, {
      required: true,
    }),
    content: resolveShorthand(content || {}),
    header: resolveShorthand(header, {
      required: true,
    }),
    description: resolveShorthand(description, {
      required: true,
    }),
    action: resolveShorthand(action),
  };

  return [state, renderCardHeader_unstable];
};
