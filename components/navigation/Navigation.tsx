import React from "react";
import SignIn from "../form/SignIn";

const Navigation = () => {
  return (
    <header className=" w-full fixed z-50 h-[3.85rem] top-0 left-0 right-0 flex items-center justify-between py-2 px-4 bg-white">
      <div className=" h-12 w-12 bg-black rounded-full text-xs text-white flex items-center justify-center opacity-0">
        Logo
      </div>
      <h1 className=" text-normal font-semibold">Home</h1>

      <SignIn />
    </header>
  );
};

export default Navigation;
