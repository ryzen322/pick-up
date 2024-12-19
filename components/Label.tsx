import React from "react";
import { FormLabel } from "./ui/form";
import { auth } from "@/auth";

const Label = async () => {
  const imageURL = await auth();
  const name = imageURL?.user?.name as string;
  return <FormLabel>{name}</FormLabel>;
};

export default Label;
