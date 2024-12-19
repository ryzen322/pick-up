import React from "react";
import SignIn from "../form/SignIn";
import { auth } from "@/auth";
import { UserSettings } from "../User";

const Navigation = async () => {
  const user = await auth();
  const name = user?.user?.name as string;
  const image = user?.user?.image as string;

  return (
    <header className=" w-full fixed z-50 h-[3.85rem] top-0 left-0 right-0 flex items-center justify-between py-2 px-4 bg-white">
      <div className=" h-12 w-12 bg-black rounded-full text-xs text-white flex items-center justify-center opacity-0">
        Logo
      </div>
      <h1 className=" text-normal font-semibold">Home</h1>

      {user ? (
        <div className=" h-9 w-9 rounded-full overflow-hidden bg-stone-600">
          <UserSettings name={name} image={image} />
        </div>
      ) : (
        <SignIn />
      )}
    </header>
  );
};

export default Navigation;
