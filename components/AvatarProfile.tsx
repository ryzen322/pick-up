import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { sliceName } from "@/hooks/slice-name";

const AvatarProfile = ({ name, image }: { image: string; name: string }) => {
  return (
    <Avatar>
      <AvatarImage src={image} />
      <AvatarFallback>{sliceName(name)}</AvatarFallback>
    </Avatar>
  );
};

export default AvatarProfile;
