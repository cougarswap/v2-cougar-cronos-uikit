import { Colors } from "./types";

export const baseColors = {
  failure: "#b90e0e",
  primary: "#b6e8ff",
  primaryBright: "#5192c5",
  primaryDark: "#252f5a",
  secondary: "#000000",
  success: "#31D0AA",
  warning: "#FFB237",
  ultraHeader: "#cf3036",
  ultraFocus: "#b36248",
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
  textProper: "#8a63e7",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,  
  secondary: "#77d4ff",
  background: "#343135",
  backgroundAlt: "#FFFFFF",
  backgroundDisabled: "#796834",
  contrast: "#eeeeee",
  invertedContrast: "#191326",
  input: "#483f5a",
  inputOpacity: "#CFCFCF1F",
  inputOpacityAmm: "#8f87d5",
  primaryDark: "#4b7ca5",
  primaryLight: "#08afff",
  tertiary: "#464d75",
  text: "#cbe8ff",
  textTitleFarm: "#FFFFFF",
  textSubTitleFarm: "#08afff",
  textDisabled: "#6b3733",
  textSubtle: "#79baef",
  borderColor: "#524B63",
  smallBorderColor: "#45464c",
  headerTop: "#8f87d5",
  card: "#27262c",
  toogle: "#8a63e7",
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
  input: "#483f5a",
  primaryDark: "#4b7ca5",
  tertiary: "#FFFFFF",
  text: "#51eadd",
  textDisabled: "#2f9088",
  textSubtle: "#2196f3",
  borderColor: "#524B63",
  smallBorderColor: "#45464c",
  headerTop: "#191f39d9",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
  buttonInactive: "#16120F",
  toogle: "#8a63e7",
  inputOpacity: "#CFCFCF1F",
  textTitleFarm: "#7573a0",
  textSubTitleFarm: "#08afff",
  primaryLight: "#ffa8f8",  
  inputOpacityAmm: "#8f87d5",
};
