import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 18 18" {...props}>
      <path d="M16.9513 3.29916L14.5438 15.1556C14.377 15.997 13.8902 16.1987 13.21 15.8093L9.542 12.979L7.76804 14.7662C7.56797 14.9748 7.40125 15.1556 7.03445 15.1556C6.55428 15.1556 6.63431 14.9679 6.47425 14.495L5.20714 10.1905L1.57252 9.00834C0.785579 8.76495 0.77891 8.20168 1.74592 7.7914L15.9243 2.08918C16.5711 1.79016 17.1914 2.25607 16.9446 3.29221L16.9513 3.29916Z" />
    </Svg>
  );
};

export default Icon;
