import React from "react";
import { NavLinks } from "./aside";

const AsideMd = () => {
  return (
    <div className="hidden sm:flex h-[91dvh] w-[5rem]  fixed  flex-col items-center justify-between p-2 z-40 bg-white">
      <div className=""></div>
      <nav className=" w-full h-[35%] grid grid-row-5 gap-1 ">
        <NavLinks
          route="/"
          icon="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
        <NavLinks
          route="/"
          icon="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
        <NavLinks route="/" icon="M12 4.5v15m7.5-7.5h-15" />
        <NavLinks
          route="/"
          icon="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
        <NavLinks
          route="/"
          icon="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </nav>
      <nav className=" w-full h-[13%] grid grid-row-2 gap-1 mb-5">
        <NavLinks
          route="/"
          icon="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
        />
        <NavLinks route="/" icon="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
      </nav>
    </div>
  );
};

export default AsideMd;
