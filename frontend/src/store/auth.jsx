import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setuser] = useState(" ");

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

  // JWT AUTHENTICATION

  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("user data", data.userData);
        setuser(data.userData);
      }
    } catch (error) {
      console.error("Error in fetching user data", error);
    }
  };

  useEffect(() => {
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, servertokenINS, LogoutUser, user }}
    >
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
