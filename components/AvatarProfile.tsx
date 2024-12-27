import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { sliceName } from "@/hooks/slice-name";

const AvatarProfile = ({
  name,
  image,
}: {
  image: string | null;
  name: string;
}) => {
  const modifiedName = sliceName(name);

  return (
    <Avatar>
      <AvatarImage src={image ? image : undefined} />
      <AvatarFallback>{modifiedName}</AvatarFallback>
    </Avatar>
  );
};

export default AvatarProfile;
