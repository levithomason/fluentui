import { attr, FASTElement } from '@microsoft/fast-element';
// TODO(@levithomason): NOT proposing a dep on a React package.
//                      Showing the duplication we could reduce with a shared definition.
import { BadgeProps } from '../../../react-components/react-badge/src/components/Badge/Badge.types';

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
  public appearance: BadgeProps['appearance'] = 'filled';

  /**
   * The color the badge should have.
   *
   * @public
   * @remarks
   * HTML Attribute: color
   */
  @attr
  public color: BadgeProps['color'] = 'brand';
  /**
   * The shape the badge should have.
   *
   * @public
   * @remarks
   * HTML Attribute: shape
   */
  @attr
  public shape: BadgeProps['shape'] = 'circular';

  /**
   * The size the badge should have.
   *
   * @public
   * @remarks
   * HTML Attribute: size
   */
  @attr
  public size: BadgeProps['size'] = 'medium';
}
