import { Colors } from "./types";

export const baseColors = {
  failure: "#1c6d00",
  primary: "#ffffff",
  primaryBright: "#3eab18",
  primaryDark: "#252f5a",
  secondary: "#000000",
  success: "#31D0AA",
  warning: "#FFB237",
  ultraHeader: "#052604",
  ultraFocus: "#052604",
  ultraText: "#ffc107",
  ultraTextGreen: "#448646d6",
  ultraTextBlue: "#408eecd6",
  ultraBackgroundTransparent: "#27262cad",
  ultraBackgroundModal: "#27262ce6",
  cardBorder: "#E7E3EB",
  transparent: "#ffffff00",
  white: "#ffffff",  
  bgLevel1: '#22658c',
  bgLevel2: '#01213e',
  highlightText: "#fb0d0d",
  highlightTextDark: "#e74c4c",
  textDark: "#000",
  textProper: "#ff6c02",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,  
  secondary: "#67ab4f",
  background: "#343135",
  backgroundAlt: "#FFFFFF",
  backgroundDisabled: "#1c6d00",
  contrast: "#efff02",
  invertedContrast: "#191326",
  input: "#CFCFCF",
  inputOpacity: "#CFCFCF1F",
  inputOpacityAmm: "#ee9402",
  primaryDark: "#4db42a",
  primaryLight: "#3fff00",
  tertiary: "#1c6d00",
  text: "#efff02",
  textTitleFarm: "#00036a",
  textSubTitleFarm: "#052604",
  textDisabled: "#052604",
  textSubtle: "#efff02",
  borderColor: "#FFFFFF",
  smallBorderColor: "#45464c",
  headerTop: "#FFAD02",
  card: "#27262c",
  toogle: "#1c6d00",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
  buttonInactive: "#16120F",
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#2196f3",
  background: "#343135",
  backgroundAlt: "#27262c",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#CFCFCF",
  primaryDark: "#4b7ca5",
  tertiary: "#353547",
  text: "#51eadd",
  textDisabled: "#2f9088",
  textSubtle: "#2196f3",
  borderColor: "#524B63",
  smallBorderColor: "#45464c",
  headerTop: "#FFAD02",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
  buttonInactive: "#16120F",
  toogle: "#1c6d00",
  inputOpacity: "#CFCFCF1F",
  textTitleFarm: "#7573a0",
  textSubTitleFarm: "#052604",
  primaryLight: "#3fff00",  
  inputOpacityAmm: "#ee9402",
};
