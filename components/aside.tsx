import Link from "next/link";
import React from "react";
import Svg from "./svg/svg";

import PostIcon from "./PostIcon";

const Aside = () => {
  return (
    <aside className=" w-full fixed bottom-0 left-0 right-0 h-14 z-50 flex items-center p-3  bg-white sm:hidden">
      <nav className=" w-full h-full grid grid-cols-5 gap-1 sm:grid-flow-row">
        <NavLinks
          route="/"
          icon="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
        <NavLinks
          route="/"
          icon="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
        <PostIcon />

        <NavLinks
          route="/"
          icon="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
        <NavLinks
          route="/"
          icon="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </nav>
    </aside>
  );
};

export default Aside;

export const NavLinks = ({ route, icon }: { icon: string; route: string }) => {
  return (
    <Link
      href={`${route}`}
      className=" rounded-md flex items-center justify-center hover:bg-sky-100 transition-all duration-200 "
    >
      <Svg icon={icon} />
    </Link>
  );
};
