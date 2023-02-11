import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 48 48" {...props}>
      <image width="48" height="48" href="/images/egg/ticket.png"></image>
    </Svg>
  );
};

export default Icon;
