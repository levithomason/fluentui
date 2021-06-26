import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';

const DecreaseIndentArrowMirroredIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" className={classes.svg} focusable="false">
      <path d="M1731 643l317 317-317 317-90-90 163-163h-646V896h646l-163-163 90-90z" />
    </svg>
  ),
  displayName: 'DecreaseIndentArrowMirroredIcon',
});

export default DecreaseIndentArrowMirroredIcon;
