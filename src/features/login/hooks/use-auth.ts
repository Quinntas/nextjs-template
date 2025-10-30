import { useContext } from "react";
import { authContext } from "../providers/auth-provider";

export const useAuth = () => {
  const context = useContext(authContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
};
