import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0, 0, 35,35" {...props}>
      <path
        d="M21.6 14.2v4h-4.3v16.7l-1.1-.4c-.5-.2-1.4-.5-2.4-1l-.5-.2v-32L17.5 0l4.1 1.3v4.4l-4.1-1.3-.3.1v9.8h4.4zM2.4 18.3V4.7l9.6-3V6L6.4 7.8v6.5h5.5V33l-1.2-.6c-3.8-2-8.3-5.3-8.3-9.9v-2.2h4v2.2c0 1 .5 2 1.5 3v-7.1H2.4zM22.8 1.6l9.8 3v13.6h-5.8v5.9s-1.3 1.7-4 3.1V1.6zm5.8 12.6V7.8l-1.7-.5v7h1.7zm0 8.5v-2.5h4v2.5c0 6.9-10 10.8-13 11.9l-1.1.4v-4.3l.5-.2c4.8-1.8 9.6-4.9 9.6-7.8z"
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          fill: "#fff",
        }}
      />
    </Svg>
  );
};

export default Icon;
