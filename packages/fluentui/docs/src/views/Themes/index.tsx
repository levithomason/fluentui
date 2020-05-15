import * as React from 'react';
import ThemeExample from './ThemeExample';

const Themes: React.FC<any> = () => {
  return (
    <ThemeExample themeName="base">
      <ThemeExample themeName="m365Base">
        <ThemeExample themeName="odsp" />
        <ThemeExample themeName="teamsShell20Base">
          <ThemeExample themeName="teamsShell20" />
          <ThemeExample themeName="teamsCoke" />
          <ThemeExample themeName="teamsIKEA" />
        </ThemeExample>
      </ThemeExample>
      <ThemeExample themeName="github" />
      <ThemeExample themeName="linkedin" />
      <ThemeExample themeName="amazon" />
      <ThemeExample themeName="material" />
    </ThemeExample>
  );
};

export default Themes;
