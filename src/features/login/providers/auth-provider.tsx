"use client";

import { createContext, useState } from "react";

interface User {
  name: string;
  email: string;
}

interface AuthContextProps {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const authContext = createContext<AuthContextProps>({
  user: null,
  login: async () => {},
  logout: async () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    console.log(password);
    setUser({ name: "User", email: email });
  };

  const logout = async () => {
    setUser(null);
  };

  return (
    <authContext.Provider value={{ login, logout, user }}>
      {children}
    </authContext.Provider>
  );
};
