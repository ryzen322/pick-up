import { signIn } from "@/auth";
import React from "react";

const SignIn = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}
    >
      <button
        type="submit"
        className=" h-8 rounded-lg bg-black text-white font-medium w-20 text-center"
      >
        Sign in
      </button>
    </form>
  );
};

export default SignIn;
