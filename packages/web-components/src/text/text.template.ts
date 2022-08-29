import { ElementViewTemplate, html } from '@microsoft/fast-element';
import { Text } from './text.js';

export const template: ElementViewTemplate<Text> = html<Text>`<slot></slot>`;
