import { AppLayoutAreaStylesProps } from '../../../../components/AppLayout/AppLayoutArea';
import { AppLayoutAreaVariables } from './appLayoutAreaVariables';
import { ComponentSlotStylesPrepared, ICSSInJSStyle } from '@fluentui/styles';

export const appLayoutAreaStyles: ComponentSlotStylesPrepared<AppLayoutAreaStylesProps, AppLayoutAreaVariables> = {
  root: ({ props }): ICSSInJSStyle => ({
    boxSizing: 'border-box',
    gridArea: props.area,
    overflow: 'hidden',

    // make chilren fill the area
    '> *': {
      // alignSelf: 'stretch',
      height: '100%',
      width: '100%',
    },

    // debug
    ...(props.debug && {
      border: '4px solid cornflowerblue',
    }),
  }),
};
