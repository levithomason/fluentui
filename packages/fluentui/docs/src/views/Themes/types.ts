export type ThemeNames =
  | 'base'
  | 'm365Base'
  | 'odsp'
  | 'teamsShell20Base'
  | 'teamsShell20'
  | 'teamsCoke'
  | 'teamsIKEA'
  | 'github'
  | 'linkedin'
  | 'amazon'
  | 'material';

export type TokenCategories = 'font' | 'fill' | 'stroke' | 'corner' | 'shadow' | 'layout' | 'motion' | 'UNKNOWN';

export type TokenValue = string;

export type Tokens = {
  [key: string]: TokenValue;
};

export type SiteVariables = {
  [key: string]: TokenValue;

  componentHeight?: TokenValue;
  cornerRadius?: TokenValue;

  density?: TokenValue;
  designUnit?: TokenValue;
};
