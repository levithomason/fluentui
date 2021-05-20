import * as React from 'react';
import {
  makeMergePropsCompat,
  resolveShorthandProps,
  useMergedRefs,
  createDescendantContext,
  useDescendant,
  useDescendantsInit,
  DescendantContextValue,
} from '@fluentui/react-utilities';
import { AccordionItemProps, AccordionItemState, AccordionItemDescendant } from './AccordionItem.types';
import { useCreateAccordionItemContextValue } from './useAccordionItemContext';
import { useTabsterAttributes } from '@fluentui/react-tabster';
import { useContextSelector } from '@fluentui/react-context-selector';
import { AccordionContext } from '../Accordion/useAccordionContext';

/**
 * Consts listing which props are shorthand props.
 */
export const accordionItemShorthandProps = [];

export const accordionItemDescendantContext: React.Context<
  DescendantContextValue<AccordionItemDescendant<HTMLElement>>
> = createDescendantContext<AccordionItemDescendant>('AccordionItemDescendantContext');

// eslint-disable-next-line deprecation/deprecation
const mergeProps = makeMergePropsCompat<AccordionItemState>({ deepMerge: accordionItemShorthandProps });

/**
 * Returns the props and state required to render the component
 * @param props - AccordionItem properties
 * @param ref - reference to root HTMLElement of AccordionItem
 * @param defaultProps - default values for the properties of AccordionItem
 */
export const useAccordionItem = (
  props: AccordionItemProps,
  ref: React.Ref<HTMLElement>,
  defaultProps?: AccordionItemProps,
): AccordionItemState => {
  const state = mergeProps(
    {
      ref: useMergedRefs(ref, React.useRef(null)),
    },
    defaultProps,
    resolveShorthandProps(props, accordionItemShorthandProps),
  );
  const [descendants, setDescendants] = useDescendantsInit<AccordionItemDescendant>();
  state.descendants = descendants;
  state.setDescendants = setDescendants;
  state.context = useCreateAccordionItemContextValue(state);
  const navigable = useContextSelector(AccordionContext, ctx => ctx.navigable);
  const tabsterAttributes = useTabsterAttributes({
    groupper: {},
  });
  if (navigable) {
    Object.assign(state, tabsterAttributes);
  }
  return state;
};

/**
 * Registers an descendant in the accordion descendants context
 */
export function useAccordionItemDescendant(
  accordionDescendant: Omit<AccordionItemDescendant, 'index'>,
  index?: number,
) {
  return useDescendant<AccordionItemDescendant>(accordionDescendant, accordionItemDescendantContext, index);
}
