import * as React from 'react';
import { renderButtonWC_unstable } from './renderButtonWC';
import { useButton_unstable } from './useButton';
import { useButtonStylesWC_unstable } from './useButtonStylesWC';
import type { ButtonProps } from './Button.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * Buttons give people a way to trigger an action.
 */
export const ButtonWC: ForwardRefComponent<ButtonProps> = React.forwardRef((props, ref) => {
  const state = useButton_unstable(props, ref);

  console.log('STATE before styles', state);
  useButtonStylesWC_unstable(state);
  console.log('STATE after styles', state);

  return renderButtonWC_unstable(state);
  // Casting is required due to lack of distributive union to support unions on @types/react
}) as ForwardRefComponent<ButtonProps>;

ButtonWC.displayName = 'Button';
