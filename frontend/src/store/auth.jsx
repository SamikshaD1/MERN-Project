import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setuser] = useState("");
  const [service, setService] = useState({});
  const authorizationToken = `Bearer ${token}`

  let isLoggedIn = !!token;
  // let isLoggedIn = ;

  const servertokenINS = (serverToken) => {
    setToken(serverToken);
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
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setuser(data.userData);
      }
    } catch (error) {
      console.error("Error in fetching user data", error);
    }
  };

  const getServices = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/data/service", {
        method: "GET",
      })

      if (response.ok) {
        const data = await response.json();
        return setService(data.msg)
      }
    } catch (error) {
      console.log(`Service frontend error ${error}`);

    }
  }

  useEffect(() => {
    userAuthentication();
    getServices()
  }, []);
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, servertokenINS, LogoutUser, user, service, authorizationToken }}
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
