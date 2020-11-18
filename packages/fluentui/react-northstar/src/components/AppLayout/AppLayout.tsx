import * as React from 'react';
import { Accessibility } from '@fluentui/accessibility';
import { getElementType, useFluentContext, useStyles, useTelemetry, useUnhandledProps } from '@fluentui/react-bindings';

import { UIComponentProps } from '../../utils';
import { AppLayoutArea, AppLayoutAreaProps } from './AppLayoutArea';

export interface AppLayoutProps extends UIComponentProps {
  /**
   * Accessibility behavior if overridden by the user.
   * @default AppBehavior
   * @available AppWarningBehavior
   */
  accessibility?: Accessibility;
  debug?: boolean;
  gap?: string;
  mode?: string;
  slots?: {
    [key: string]: AppLayoutAreaProps;
    header?: AppLayoutAreaProps;
    nav?: AppLayoutAreaProps;
    full?: AppLayoutAreaProps;
    tile?: AppLayoutAreaProps;
    start?: AppLayoutAreaProps;
    content?: AppLayoutAreaProps;
    end?: AppLayoutAreaProps;
  };
  template?: string;
}
export type AppLayoutStylesProps = Pick<AppLayoutProps, 'gap' | 'template' | 'debug'>;

/**
 * Takes a CSS grid template string and returns a unique array of template area names.
 */
const getSlotOrder = template => {
  return template
    .split('\n')
    .filter(s => s.includes('"') && s.trim())
    .map(s => s.match(/"(.*)"/)[1])
    .join(' ')
    .split(/ +/)
    .reduce((acc: string[], next: string) => {
      if (acc.indexOf(next) === -1) acc.push(next);
      return acc;
    }, []);
};

/**
 * A app layout contains and arranges the high level areas of an application.
 */
export const AppLayout = (props: AppLayoutProps) => {
  const context = useFluentContext();
  const { setStart, setEnd } = useTelemetry(AppLayout.displayName, context.telemetry);
  setStart();

  const { debug, gap, slots, template } = props;

  const unhandledProps = useUnhandledProps(AppLayout.handledProps, props);

  const ElementType = getElementType(props);

  const { classes } = useStyles(AppLayout.displayName, {
    className: AppLayout.className,
    mapPropsToStyles: () => ({ gap, template, debug }),
    mapPropsToInlineStyles: () => ({}),
    rtl: context.rtl,
  });

  const result = (
    <ElementType className={classes.root} {...unhandledProps}>
      {getSlotOrder(template).map(k => {
        const v = slots[k];

        return <AppLayoutArea debug={debug} key={k} area={k} className={`${AppLayoutArea.className}-${k}`} {...v} />;
      })}
    </ElementType>
  );

  setEnd();
  return result;
};

AppLayout.className = 'ui-app-layout';
AppLayout.displayName = 'AppLayout';
AppLayout.handledProps = [
  'accessibility',
  'debug',
  'gap',
  'mode',
  'slots',
  'template',
  'className',
  'design',
  'styles',
  'variables',
] as (keyof AppLayoutProps)[];
