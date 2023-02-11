import React, { cloneElement, Children, ReactElement } from "react";
import StyledButtonMenu2 from "./StyledButtonMenu2";
import { sizes, variants } from "../Button/types";
import { ButtonMenu2ItemProps, ButtonMenu2Props } from ".";

const ButtonMenu2: React.FC<ButtonMenu2Props> = ({
  activeIndex = 0,
  size = sizes.MD,
  variant = variants.PRIMARY,
  onClick,
  children,
}) => {
  return (
    <StyledButtonMenu2 variant={variant}>
      {Children.map(children, (child: ReactElement<ButtonMenu2ItemProps>, index) => {
        return cloneElement(child, {
          isActive: activeIndex === index,
          onClick: onClick ? () => onClick(index) : undefined,
          size,
          variant,
        });
      })}
    </StyledButtonMenu2>
  );
};

export default ButtonMenu2;
