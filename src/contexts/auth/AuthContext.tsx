import { User } from "@/types/User";
import { createContext } from "react";

export type AuthContextType = {
  user: User | null;
  signin: (email: string, password: string) => void;
  signup: () => void;
  signout: () => void;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);
