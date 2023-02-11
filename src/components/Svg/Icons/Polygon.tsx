import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 60 60" fill="none" {...props}>
      <circle cx="30" cy="30" r="30" fill="#8247E5"></circle>
      <path fillRule="evenodd" clipRule="evenodd" d="M20.029 13.252a2 2 0 011.942 0l9 5A2 2 0 0132 20v3.252L28 25.5v-4.323l-7-3.89-7 3.89v7.646l7 3.89 17.029-9.461a2 2 0 011.942 0l9 5A2 2 0 0150 30v10a2 2 0 01-1.029 1.748l-9 5a2 2 0 01-1.942 0l-9-5A2 2 0 0128 40v-3.252l4-2.248v4.323l7 3.89 7-3.89v-7.646l-7-3.89-17.029 9.461a2 2 0 01-1.942 0l-9-5A2 2 0 0110 30V20a2 2 0 011.029-1.748l9-5z" fill="#fff"></path>
    </Svg>
  );
};

export default Icon;
