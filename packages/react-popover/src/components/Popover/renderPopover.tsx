import * as React from 'react';
import { PopoverContext } from '../../popoverContext';
import { PopoverState } from './Popover.types';

/**
 * Render the final JSX of Popover
 */
export const renderPopover = (state: PopoverState) => {
  const { open, setOpen, triggerRef, contentRef, target, openOnContext, openOnHover, mountNode } = state;

  return (
    <PopoverContext.Provider
      value={{ open, setOpen, triggerRef, contentRef, target, openOnHover, openOnContext, mountNode }}
    >
      {state.children}
    </PopoverContext.Provider>
  );
};
