"use client";

import { createContext, Dispatch, ReactNode, useEffect, useState } from "react";
import { useJwt } from "react-jwt";
import { useLocalStorage } from "usehooks-ts";

type useProviderProps = {
  children: ReactNode;
};

type LoggedUser = {
  email: string;
  name: string;
  company: string;
} | null;

interface UserContextType {
  setToken: Dispatch<string>;
  loggedUser: LoggedUser | null;
}

export const UserContext = createContext<UserContextType>({
  setToken: () => "",
  loggedUser: { email: "", name: "", company: "" },
});

export const UserProvider = ({ children }: useProviderProps) => {
  const [value, ,] = useLocalStorage("user-token", "");
  const [token, setToken] = useState<string | null>(null);

  const persistToken = async (token: string) => {
    setToken(token);
  };

  useEffect(() => {
    persistToken(value);
  }, [value]);

  const { decodedToken: loggedUser } = useJwt<LoggedUser>(token || "");

  return (
    <UserContext.Provider value={{ loggedUser, setToken }}>
      {children}
    </UserContext.Provider>
  );
};
