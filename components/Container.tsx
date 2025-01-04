import React from "react";
import Aside from "./aside";

import { PostFeed } from "./PostFeed";
import AsideMd from "./Aside-md";
import { Button } from "./ui/button";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className=" mt-[3.75rem] flex ">
      <Aside />
      <AsideMd />
      <PostFeed>{children}</PostFeed>
      <div className="hidden lg:flex h-[95dvh] w-[7rem]  fixed right-0  flex-col items-center justify-between p-2 z-40 pb-11">
        <Button className=" mt-auto">Click</Button>
      </div>
    </main>
  );
};

export default Container;
