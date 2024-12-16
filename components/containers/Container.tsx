import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <main className="container mx-auto mt-14">{children}</main>;
};

export default Container;
