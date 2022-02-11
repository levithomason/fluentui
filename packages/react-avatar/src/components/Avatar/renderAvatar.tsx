import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { AvatarSlots, AvatarRender } from './Avatar.types';

export const renderAvatar_unstable: AvatarRender = state => {
  const { slots, slotProps } = getSlots<AvatarSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      {slots.initials && <slots.initials {...slotProps.initials} />}
      {slots.icon && <slots.icon {...slotProps.icon} />}
      {slots.image && <slots.image {...slotProps.image} />}
      {slots.badge && <slots.badge {...slotProps.badge} />}
    </slots.root>
  );
};
