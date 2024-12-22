import { signOut } from "@/auth";
import { LogOut } from "lucide-react";
import { Button } from "../ui/button";

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button
        type="submit"
        variant={"ghost"}
        className=" cursor-pointer flex items-center gap-1 max-h-[1.5rem] px-0 relative "
      >
        <LogOut className=" w-5 h-5" />
        <span className=" font-normal">Sign Out</span>
      </Button>
    </form>
  );
}
