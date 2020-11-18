import { AppLayoutStylesProps } from '../../../../components/AppLayout/AppLayout';

import { AppLayoutVariables } from './appLayoutVariables';
import { ComponentSlotStylesPrepared, ICSSInJSStyle } from '@fluentui/styles';

export const appLayoutStyles: ComponentSlotStylesPrepared<AppLayoutStylesProps, AppLayoutVariables> = {
  root: ({ props }): ICSSInJSStyle => ({
    position: 'relative',
    boxSizing: 'border-box',
    display: 'grid',
    gridGap: props.gap,
    gridTemplate: props.template,

    // fill view
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',

    // debug
    ...(props.debug && {
      border: '4px solid red',
    }),
  }),
};
