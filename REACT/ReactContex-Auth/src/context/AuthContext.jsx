import { createContext, useState } from "react";

export const Auth = createContext();

export const AuthContextProvider = ({ children }) => {
  const [hello, sethello] = useState("Hello from Contex");
  return <Auth.Provider value={{ hello }}>{children}</Auth.Provider>;
};
