import React from "react";
import Svg from "../svg/svg";

const Send = () => {
  return (
    <div className=" flex items-center gap-1 cursor-pointer">
      <Svg
        size="size-5"
        icon="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
      />
      <p className=" text-xs text-center">2</p>
    </div>
  );
};

export default Send;
