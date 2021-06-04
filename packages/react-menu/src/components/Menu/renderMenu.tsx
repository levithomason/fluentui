import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import { MenuState } from './Menu.types';
import { menuShorthandProps } from './useMenu';
import { MenuProvider } from '../../contexts/menuContext';

/**
 * Render the final JSX of Menu
 * {@docCategory Menu }
 */
export const renderMenu = (state: MenuState) => {
  const { slots, slotProps } = getSlots(state, menuShorthandProps);
  const {
    open,
    setOpen,
    onCheckedValueChange,
    checkedValues,
    defaultCheckedValues,
    openOnHover,
    openOnContext,
    triggerRef,
    triggerId,
    menuPopupRef,
    isSubmenu,
    hasCheckmarks,
    hasIcons,
    persistOnItemClick,
  } = state;

  return (
    <MenuProvider
      value={{
        open,
        setOpen,
        onCheckedValueChange,
        checkedValues,
        defaultCheckedValues,
        triggerRef,
        openOnHover,
        openOnContext,
        triggerId,
        menuPopupRef,
        isSubmenu,
        hasMenuContext: true,
        hasCheckmarks,
        hasIcons,
        persistOnItemClick,
      }}
    >
      {state.menuTrigger}
      {state.open && <slots.menuPopup {...slotProps.menuPopup} />}
    </MenuProvider>
  );
};
