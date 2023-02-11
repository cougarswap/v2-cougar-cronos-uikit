import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={24} height={24} rx={4} fill="#D5FF5C" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.535 12.916c.152.331.6.448.858.19l.472-.472a1.251 1.251 0 011.769 1.768l-3.824 3.823A4.993 4.993 0 0111.986 20a4.995 4.995 0 01-3.942-1.922l-3.678-3.676a1.25 1.25 0 111.769-1.768l.465.465c.253.252.69.139.839-.185a.485.485 0 00.045-.203v-5.71a1.25 1.25 0 012.502 0v2.888c0 .249.254.418.491.343a.363.363 0 00.259-.342V5.25a1.25 1.25 0 012.501 0v4.64c0 .158.109.294.259.342.237.075.491-.094.491-.343V7.001a1.25 1.25 0 112.501 0v5.708c0 .072.017.142.047.207z"
      fill="#FD4848"
    />
    <path
      d="M15.989 15.5S14.197 18 11.986 18s-4.002-2.5-4.002-2.5S9.777 13 11.987 13s4.002 2.5 4.002 2.5z"
      fill="#D5FF5C"
    />
    <path
      d="M13.854 15.5a1.868 1.868 0 11-3.735 0 1.868 1.868 0 013.735 0z"
      stroke="#FD4848"
      strokeWidth={0.265831}
    />
    <path
      d="M13.104 15.5a1.117 1.117 0 11-2.235 0 1.117 1.117 0 012.235 0z"
      stroke="#FD4848"
      strokeWidth={0.265831}
    />
    <path
      d="M14.605 15.5a2.618 2.618 0 11-5.236-.001 2.618 2.618 0 015.236.001z"
      stroke="#FD4848"
      strokeWidth={0.265831}
    />
    <path
      d="M15.355 15.5a3.368 3.368 0 11-6.736-.002 3.368 3.368 0 016.736.002z"
      stroke="#FD4848"
      strokeWidth={0.265831}
    />
    <path
      d="M12.353 15.5a.367.367 0 11-.734 0 .367.367 0 01.734 0z"
      fill="#162BEB"
      stroke="#FD4848"
      strokeWidth={0.265831}
    />
    <ellipse cx={11.9863} cy={15.5} rx={0.5} ry={0.5} fill="#FD4848" />
    <mask id="a" fill="#fff">
      <path d="M15.989 15.5S14.197 18 11.986 18s-4.002-2.5-4.002-2.5S9.777 13 11.987 13s4.002 2.5 4.002 2.5z" />
    </mask>
    <path
      d="M15.989 15.5S14.197 18 11.986 18s-4.002-2.5-4.002-2.5S9.777 13 11.987 13s4.002 2.5 4.002 2.5z"
      stroke="#D5FF5C"
      strokeWidth={0.531663}
      mask="url(#a)"
    />
  </Svg>
  );
};

export default Icon;
