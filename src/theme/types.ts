export type Breakpoints = string[];

export type MediaQueries = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  nav: string;
};

export type Spacing = number[];

export type Radii = {
  small: string;
  default: string;
  card: string;
  circle: string;
};

export type Shadows = {
  level1: string;
  active: string;
  success: string;
  warning: string;
  focus: string;
  inset: string;
};

export type Gradients = {
  bubblegum: string;
};

export type Colors = {
  primary: string;
  primaryBright: string;
  primaryDark: string;
  primaryLight: string;
  secondary: string;
  tertiary: string;
  success: string;
  failure: string;
  warning: string;
  contrast: string;
  invertedContrast: string;
  input: string;
  background: string;
  backgroundAlt: string;
  backgroundDisabled: string;
  text: string;
  textDisabled: string;
  textSubtle: string;
  borderColor: string;
  smallBorderColor: string;
  headerTop: string;
  card: string;
  buttonInactive: string;
  toogle: string,
  inputOpacity: string,
  inputOpacityAmm: string,
  textTitleFarm: string,
  textSubTitleFarm: string,

  // Gradients
  gradients: Gradients;

  // Brand colors
  binance: string;
  ultraHeader: string;
  ultraFocus: string;
  ultraText: string;  
  ultraTextGreen: string;  
  ultraTextBlue: string; 
  ultraBackgroundTransparent: string;
  ultraBackgroundModal: string;
  cardBorder: string;
  transparent: string;
  white: string;
  bgLevel1: string;
  bgLevel2: string;
};

export type ZIndices = {
  dropdown: number;
  modal: number;
};
