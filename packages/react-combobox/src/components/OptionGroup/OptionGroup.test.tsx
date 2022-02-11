import * as React from 'react';
import { render } from '@testing-library/react';
import { OptionGroup } from './OptionGroup';
import { isConformant } from '../../common/isConformant';

describe('OptionGroup', () => {
  isConformant({
    Component: OptionGroup,
    displayName: 'OptionGroup',
  });

  // TODO add more tests here, and create visual regression tests in /apps/vr-tests

  it('renders a default state', () => {
    const result = render(<OptionGroup>Default OptionGroup</OptionGroup>);
    expect(result.container).toMatchSnapshot();
  });
});
