import { ElementViewTemplate, html } from '@microsoft/fast-element';
import { Badge } from './badge.js';

export const template: ElementViewTemplate<Badge> = html<Badge>`
  <template>
    <slot name="start"></slot>
    <slot></slot>
    <slot name="end"></slot>
  </template>
`;
