import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  let isLoggedIn = !!token;
  // let isLoggedIn = ;

  console.log("is login " + isLoggedIn + token);

  const servertokenINS = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  //  taklee logout functionality
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, servertokenINS, LogoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const AuthContextValue = useContext(AuthContext);
  if (!AuthContextValue) {
    throw new Error("useAuth used outside of the provider");
  }

  return AuthContextValue;
};
