import { ButtonTheme, variants } from "./types";
import { lightColors, darkColors } from "../../theme/colors";

const { PRIMARY, SECONDARY, TERTIARY, TEXT, TEXTTOTOP, TEXTICONAMM, DANGER, SUBTLE, SUCCESS, PRIMARYCRONOS, PRIMARYCRONOSSTYLE1, PRIMARYCRONOSSTYLE2 } = variants;

export const light: ButtonTheme = {
  [PRIMARY]: {
    background: lightColors.primaryDark,
    backgroundActive: lightColors.primaryDark,
    backgroundHover: lightColors.primaryBright,
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
    boxShadowActive: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
    color: "#FFFFFF",
  },
  [SECONDARY]: {
    background: "transparent",
    backgroundActive: "transparent",
    backgroundHover: "transparent",
    border: `2px solid ${lightColors.primary}`,
    borderColorHover: lightColors.primaryBright,
    boxShadow: "none",
    boxShadowActive: "none",
    color: lightColors.primary,
  },
  [TERTIARY]: {
    background: lightColors.tertiary,
    backgroundActive: lightColors.tertiary,
    backgroundHover: lightColors.tertiary,
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: lightColors.primary,
  },
  [TEXT]: {
    background: "transparent",
    backgroundActive: "transparent",
    backgroundHover: lightColors.tertiary,
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: lightColors.primaryDark,
  },
  [TEXTTOTOP]: {
    background: "transparent",
    backgroundActive: "transparent",
    backgroundHover: "transparent",
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: lightColors.primaryDark,
  },
  [TEXTICONAMM]: {
    background: "transparent",
    backgroundActive: "transparent",
    backgroundHover: lightColors.primaryLight,
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: lightColors.primaryDark,
  },
  [DANGER]: {
    background: lightColors.failure,
    backgroundActive: "#D43285", // darkten 10%
    backgroundHover: "#FF65B8", // lighten 10%
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: "#FFFFFF",
  },
  [SUBTLE]: {
    background: lightColors.textSubtle,
    backgroundActive: `${lightColors.textSubtle}D9`, // 70% opacity
    backgroundHover: `${lightColors.textSubtle}B3`, // 85% opacity
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: "#FFFFFF",
  },
  [SUCCESS]: {
    background: lightColors.success,
    backgroundActive: `${lightColors.success}D9`, // 70% opacity
    backgroundHover: `${lightColors.success}B3`, // 85% opacity
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: "#FFFFFF",
  },
  [PRIMARYCRONOS]: {
    background: lightColors.primary,
    backgroundActive: lightColors.primaryBright,
    backgroundHover: lightColors.primary,
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 255)",
    boxShadowActive: "inset 0px -1px 0px rgba(255, 255, 255, 255)",
    color: "#87011F",
  },
  [PRIMARYCRONOSSTYLE1]: {
    background: lightColors.textSubtle,
    backgroundActive: lightColors.primaryBright,
    backgroundHover: lightColors.text,
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 255)",
    boxShadowActive: "inset 0px -1px 0px rgba(255, 255, 255, 255)",
    color: "#ffffff",
  },
  [PRIMARYCRONOSSTYLE2]: {
    background: lightColors.transparent,
    backgroundActive: lightColors.transparent,
    backgroundHover: lightColors.transparent,
    border: 0,
    borderColorHover: lightColors.transparent,
    boxShadow: lightColors.transparent,
    boxShadowActive: lightColors.transparent,
    color: "#FFAD02",
  },

};

export const dark: ButtonTheme = {
  [PRIMARY]: {
    ...light.primary,
  },
  [SECONDARY]: {
    ...light.secondary,
  },
  [TERTIARY]: {
    ...light.tertiary,
    background: darkColors.tertiary,
    backgroundActive: darkColors.tertiary,
    backgroundHover: darkColors.tertiary,
    color: darkColors.primary,
  },
  [TEXT]: {
    ...light.text,
    backgroundHover: darkColors.tertiary,
  },
  [DANGER]: {
    ...light.danger,
  },
  [SUBTLE]: {
    ...light.subtle,
  },
  [SUCCESS]: {
    ...light.success,
  },
  [PRIMARYCRONOS]: {
    ...light.primarycronos,
  },
  [PRIMARYCRONOSSTYLE1]: {
    ...light.primarycronosstyle1,
  },
  [PRIMARYCRONOSSTYLE2]: {
    ...light.primarycronosstyle2,
  },
  [TEXTTOTOP]: {
    ...light.texttotop,
  },
  [TEXTICONAMM]: {
    ...light.texticonamm,
  },
};
