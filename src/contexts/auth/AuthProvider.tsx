import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "@/types/User";
import { redirect } from "next/navigation";
import { Data } from "@/types/Data";
import { useApi } from "@/services/useApi";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const api = useApi();
  // console.log(api);

  useEffect(() => {
    const validateToken = async () => {
      const storageData = localStorage.getItem("authToken");
      if (storageData) {
        const data = await api.validateToken(storageData);

        if (data) {
          setUser(data);
        }
      }
    };

    validateToken();
  }, []);

  const signin = async (email: string, password: string) => {
    console.log("signin is running");
    const data = await api.signin(email, password);
    console.log(`apiData: ${data.user}`);

    if (data.user && data.token) {
      setUser(data.user);
      setItemStorage(data);
      // return true;
    }
    // return false;
  };
  const signup = () => {
    console.log("signup is running");
  };

  const signout = () => {
    console.log("signout is running");
  };

  const setItemStorage = (token: Data) => {
    localStorage.setItem("authToken", JSON.stringify(token));
  };

  return (
    <AuthContext.Provider value={{ user, signin, signup, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
