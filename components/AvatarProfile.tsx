import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { sliceName } from "@/hooks/slice-name";
import { auth } from "@/auth";

const AvatarProfile = async () => {
  const imageURL = await auth();
  const name = imageURL?.user?.name as string;
  const image = imageURL?.user?.image as string;

  return (
    <Avatar>
      <AvatarImage src={image} />
      <AvatarFallback>{sliceName(name)}</AvatarFallback>
    </Avatar>
  );
};

export default AvatarProfile;
