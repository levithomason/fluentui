import * as React from 'react';
import { MeControl } from './index';

export const MeControlExample = () => (
  <div style={{ display: 'flex' }}>
    <div style={{ padding: '20px' }}>
      <h2>Phase 1</h2>
      <MeControl />
    </div>
    <div style={{ padding: '20px' }}>
      <h2>Phase 2</h2>
      <MeControl enablePhase2 />
    </div>
  </div>
);

export default {
  title: 'MeControl',
  component: MeControl,
};
