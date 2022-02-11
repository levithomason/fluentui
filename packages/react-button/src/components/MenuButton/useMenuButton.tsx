import * as React from 'react';
import { ChevronDownRegular } from '@fluentui/react-icons';
import { resolveShorthand } from '@fluentui/react-utilities';
import { useButton_unstable } from '../Button/index';
import type { MenuButtonProps, MenuButtonState, MenuButtonRender } from './MenuButton.types';
import { renderMenuButton_unstable } from './renderMenuButton';
import { useMenuButtonStyles_unstable } from './useMenuButtonStyles';

/**
 * Given user props, returns the final state for a MenuButton.
 */
export const useMenuButton_unstable = (
  { menuIcon, ...props }: MenuButtonProps,
  ref: React.Ref<HTMLButtonElement | HTMLAnchorElement>,
): [MenuButtonState, MenuButtonRender] => {
  const [buttonState] = useButton_unstable(props, ref);

  const state: MenuButtonState = {
    // Button state
    ...buttonState,

    // State calculated from a set of props
    iconOnly: Boolean(!props.children),

    // Slots definition
    components: {
      root: 'button',
      icon: 'span',
      menuIcon: 'span',
    },

    menuIcon: resolveShorthand(menuIcon, {
      defaultProps: {
        children: <ChevronDownRegular />,
      },
      required: true,
    }),
  };

  useMenuButtonStyles_unstable(state);

  return [state, renderMenuButton_unstable];
};
