import React from "react";

const Svg = ({ icon, size }: { icon: string; size?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="grey"
      className={`${size ? size : "size-5"}`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
    </svg>
  );
};

export default Svg;
