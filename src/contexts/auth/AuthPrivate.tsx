"use client";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useRouter } from "next/navigation";
import Login from "@/components/login/Login";

export const AuthRequire = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext);
  // const router = useRouter();

  if (!auth.user) {
    // router.push("/login"), { scroll: false };
    return <Login />;
  }
  return children;
};
