import { attr } from '@microsoft/fast-element';
import { FASTBadge } from '@microsoft/fast-foundation';
import { BadgeAppearance, BadgeColor, BadgeShape, BadgeSize } from './badge.options';

/**
 * @internal
 */
export class Badge extends FASTBadge {
  /**
   * The appearance the badge should have.
   *
   * @public
   * @remarks
   * HTML Attribute: appearance
   */
  @attr
  public appearance: BadgeAppearance = 'filled';

  /**
   * The color the badge should have.
   *
   * @public
   * @remarks
   * HTML Attribute: color
   */
  @attr
  public color: BadgeColor = 'brand';
  /**
   * The shape the badge should have.
   *
   * @public
   * @remarks
   * HTML Attribute: shape
   */
  @attr
  public shape: BadgeShape = 'circular';

  /**
   * The size the badge should have.
   *
   * @public
   * @remarks
   * HTML Attribute: size
   */
  @attr
  public size: BadgeSize = 'medium';

  /**
   *
   * Default slotted content
   *
   * @public
   * @remarks
   */
  public defaultSlottedContent: HTMLElement[];

  /**
   * Applies 'icon-only' class when there is only an SVG in the default slot
   *
   * @public
   * @remarks
   */
  public defaultSlottedContentChanged(): void {
    const slottedElements = this.defaultSlottedContent.filter(x => x.nodeType === Node.ELEMENT_NODE);

    if (slottedElements.length === 1 && slottedElements[0] instanceof SVGElement) {
      this.classList.add('icon-only');
    } else {
      this.classList.remove('icon-only');
    }
  }
}
