import React from "react";
import SignIn from "../form/SignIn";

const Navigation = () => {
  return (
    <header className=" w-full fixed z-50 h-14 top-0 left-0 right-0 flex items-center justify-between py-2 px-4">
      <div className=" h-full w-[40px] bg-black rounded-full text-xs text-white flex items-center justify-center">
        Logo
      </div>
      <h1 className=" text-normal font-semibold">Home</h1>

      <SignIn />
    </header>
  );
};

export default Navigation;
