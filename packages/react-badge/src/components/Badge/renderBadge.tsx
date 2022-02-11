import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { BadgeSlots, BadgeRender } from './Badge.types';

export const renderBadge_unstable: BadgeRender = state => {
  const { slots, slotProps } = getSlots<BadgeSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      {state.iconPosition === 'before' && slots.icon && <slots.icon {...slotProps.icon} />}
      {state.root.children}
      {state.iconPosition === 'after' && slots.icon && <slots.icon {...slotProps.icon} />}
    </slots.root>
  );
};
