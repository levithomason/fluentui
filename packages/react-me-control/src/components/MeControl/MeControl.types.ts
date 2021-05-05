import * as React from 'react';
import { ComponentProps, ComponentState } from '@fluentui/react-utilities';

/**
 * MeControl Props
 */
export interface MeControlProps extends ComponentProps, React.HTMLAttributes<HTMLElement> {
  /*
   * TODO Add props and slots here
   * Any slot property should be listed in the meControlShorthandProps array below
   * Any property that has a default value should be listed in MeControlDefaultedProps as e.g. 'size' | 'icon'
   */
}

/**
 * Names of the shorthand properties in MeControlProps
 */
export const meControlShorthandProps = [] as const; // TODO add shorthand property names

/**
 * Names of the shorthand properties in MeControlProps
 */
export type MeControlShorthandProps = typeof meControlShorthandProps[number];

/**
 * Names of MeControlProps that have a default value in useMeControl
 */
export type MeControlDefaultedProps = never; // TODO add names of properties with default values

/**
 * MeControl State
 */
export type MeControlState = ComponentState<
  React.Ref<HTMLElement>,
  MeControlProps,
  MeControlShorthandProps,
  MeControlDefaultedProps
>;
