import type { ComponentProps, ComponentState, ComponentRender, Slot } from '@fluentui/react-utilities';

export type AccordionPanelSlots = {
  root: Slot<'div'>;
};

export type AccordionPanelProps = ComponentProps<AccordionPanelSlots>;

export type AccordionPanelState = ComponentState<AccordionPanelSlots> & {
  /**
   * Internal open state, provided by context
   */
  open: boolean;
};

export type AccordionPanelRender = ComponentRender<AccordionPanelState>;
