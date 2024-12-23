"use client";

import React, { createContext, useContext } from "react";

export interface User {
  email: string;
  name: string;
  image: string;
}

const SessionContext = createContext<User | null>(null);

export default function SessionProvider({
  children,
  value,
}: React.PropsWithChildren<{ value: User | null }>) {
  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
}

export function useSession() {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
}
