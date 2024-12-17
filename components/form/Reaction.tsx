import React from "react";
import Svg from "../svg/svg";

const Reaction = ({ icon }: { icon: string }) => {
  return (
    <div className=" flex items-center gap-1 cursor-pointer">
      <Svg size="size-5" icon={icon} />
      <p className=" text-xs text-center">2</p>
    </div>
  );
};

export default Reaction;
