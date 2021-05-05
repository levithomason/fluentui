import * as React from 'react';
import { makeMergeProps, resolveShorthandProps, useMergedRefs } from '@fluentui/react-utilities';
import { MeControlProps, meControlShorthandProps, MeControlState } from './MeControl.types';

const mergeProps = makeMergeProps<MeControlState>({ deepMerge: meControlShorthandProps });

/**
 * Create the state required to render MeControl.
 *
 * The returned state can be modified with hooks such as useMeControlStyles,
 * before being passed to renderMeControl.
 *
 * @param props - props from this instance of MeControl
 * @param ref - reference to root HTMLElement of MeControl
 * @param defaultProps - (optional) default prop values provided by the implementing type
 */
export const useMeControl = (
  props: MeControlProps,
  ref: React.Ref<HTMLElement>,
  defaultProps?: MeControlProps,
): MeControlState => {
  const state = mergeProps(
    {
      ref: useMergedRefs(ref, React.useRef(null)),
    },
    defaultProps && resolveShorthandProps(defaultProps, meControlShorthandProps),
    resolveShorthandProps(props, meControlShorthandProps),
  );

  return state;
};
