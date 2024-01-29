// import Login from "@/components/login/Login";
// import { AuthContext } from "@/contexts/auth/AuthContext";
import { AuthRequire } from "@/contexts/auth/AuthPrivate";
// import { useContext } from "react";

export default function RootLayout({ children }: { children: JSX.Element }) {
  // const auth = useContext(AuthContext);

  // if (auth.user) {
  //   // console.log(auth.user);
  //   // redirect("/login");
  //   return <>{children}</>;
  // } else {
  //   return <Login />;
  // }
  return <AuthRequire>{children}</AuthRequire>;
}
