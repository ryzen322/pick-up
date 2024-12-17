import React from "react";
import Aside from "./aside";

import { PostFeed } from "./PostFeed";
import AsideMd from "./Aside-md";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className=" mt-[3.75rem] flex ">
      <Aside />
      <AsideMd />
      <PostFeed>{children}</PostFeed>
      <div className=" hidden  ">Left</div>
    </main>
  );
};

export default Container;
