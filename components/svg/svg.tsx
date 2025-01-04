import React from "react";

const Svg = ({
  icon,
  size,
  fill,
}: {
  icon: string;
  size?: string;
  fill?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={`${fill ? fill : "none"}`}
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="grey"
      className={`${size ? size : "size-5"}`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
    </svg>
  );
};

export default Svg;
