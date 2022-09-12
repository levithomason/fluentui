import { attr, FASTElement } from '@microsoft/fast-element';
import { BadgeAppearance, BadgeColor, BadgeShape, BadgeSize } from './badge.options';

/**
 * @internal
 */
export class Badge extends FASTElement {
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
}
