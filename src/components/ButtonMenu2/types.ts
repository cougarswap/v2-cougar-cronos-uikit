import { ButtonProps, Sizes, variants } from "../Button/types";

export type ButtonMenu2ItemProps = {
  isActive?: boolean;
  size?: Sizes;
} & ButtonProps;

export interface ButtonMenu2Props {
  variant?: typeof variants.PRIMARY | typeof variants.SUBTLE;
  activeIndex?: number;
  onClick?: (index: number) => void;
  size?: Sizes;
  children: React.ReactElement[];
}