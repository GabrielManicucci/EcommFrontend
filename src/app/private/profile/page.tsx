"use client";
import { AuthContext } from "@/contexts/auth/AuthContext";
import { useContext } from "react";

export default function Profile() {
  const auth = useContext(AuthContext);

  return (
    <div>
      <h1>Perfil de {auth.user?.name}</h1>
    </div>
  );
}
