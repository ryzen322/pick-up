import React from "react";
import Aside from "./aside";

import { PostFeed } from "./PostFeed";
import AsideMd from "./Aside-md";
import { DrawerDialogDemo } from "./PostDrawer";
import { Plus } from "lucide-react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="  ">
      <Aside />
      <AsideMd />
      <PostFeed>{children}</PostFeed>
      <div className="hidden md:flex h-[95dvh] w-[7rem]  fixed right-0 top-0  flex-col items-center justify-between p-2 z-40 pb-11">
        <div className=" mt-auto  h-[5rem] w-full cursor-pointer flex items-center justify-center rounded-lg ring-2 ring-black/20">
          <DrawerDialogDemo>
            <button className=" w-full h-full flex items-center justify-center">
              <Plus
                size={"30px"}
                strokeWidth={"1px"}
                className=" cursor-pointer"
              />
            </button>
          </DrawerDialogDemo>
        </div>
      </div>
    </main>
  );
};

export default Container;
