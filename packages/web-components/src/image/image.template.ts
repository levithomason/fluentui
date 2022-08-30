import { ElementViewTemplate, html } from '@microsoft/fast-element';
import { Image } from './image.js';

export const template: ElementViewTemplate<Image> = html<Image>`<slot></slot>`;
