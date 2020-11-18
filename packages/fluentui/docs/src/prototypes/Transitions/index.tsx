import * as React from 'react';
import { PrototypeSection, ComponentPrototype } from '../Prototypes';
import Transitions from './Transitions';

export default () => (
  <PrototypeSection title="Transitions">
    <ComponentPrototype title="App Transitions" description="Testing app transitions">
      <Transitions />
    </ComponentPrototype>
  </PrototypeSection>
);
