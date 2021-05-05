import * as React from 'react';
import { MeControl } from './MeControl';
import * as renderer from 'react-test-renderer';
import { ReactWrapper } from 'enzyme';
import { isConformant } from '../../common/isConformant';

describe('MeControl', () => {
  isConformant({
    Component: MeControl,
    displayName: 'MeControl',
  });

  let wrapper: ReactWrapper | undefined;

  afterEach(() => {
    if (wrapper) {
      wrapper.unmount();
      wrapper = undefined;
    }
  });

  /**
   * Note: see more visual regression tests for MeControl in /apps/vr-tests.
   */
  it('renders a default state', () => {
    const component = renderer.create(<MeControl>Default MeControl</MeControl>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
