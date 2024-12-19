import { signOut } from "@/auth";
import { LogOut } from "lucide-react";

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <LogOut type="submit">Sign Out</LogOut>
    </form>
  );
}
