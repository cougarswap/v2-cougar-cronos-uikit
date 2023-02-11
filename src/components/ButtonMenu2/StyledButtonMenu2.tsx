import styled, { DefaultTheme } from "styled-components";
import { Variants, variants } from "../Button/types";

type StyledButtonMenu2Props = {
  variant: Variants;
  theme: DefaultTheme;
};

const getBackgroundColor = ({ theme, variant }: StyledButtonMenu2Props) => {
  return theme.colors[variant === variants.SUBTLE ? "inputOpacity" : "inputOpacityAmm"];
};

const StyledButtonMenu2 = styled.div<{ variant: Variants }>`
  background-color: ${getBackgroundColor};
  border-radius: 16px;
  display: block;

  & > button + button,
  & > a + a {
    margin-left: 2px; // To avoid focus shadow overlap
  }
`;

export default StyledButtonMenu2;
