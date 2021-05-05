import * as React from 'react';
import { useMeControl } from './useMeControl';
import { MeControlProps } from './MeControl.types';
import { renderMeControl } from './renderMeControl';
import { useMeControlStyles } from './useMeControlStyles';

/**
 * MeControl component
 */
export const MeControl = React.forwardRef<HTMLElement, MeControlProps>((props, ref) => {
  const state = useMeControl(props, ref);

  useMeControlStyles(state);
  return renderMeControl(state);
});

MeControl.displayName = 'MeControl';
