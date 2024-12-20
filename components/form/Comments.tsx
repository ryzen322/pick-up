import React from "react";
import Svg from "../svg/svg";

const Comments = ({ id }: { id: number }) => {
  console.log(id);
  return (
    <div className=" flex items-center gap-1 cursor-pointer">
      <Svg
        size="size-5"
        icon="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
      />
      <p className=" text-xs text-center">{33}</p>
    </div>
  );
};

export default Comments;
