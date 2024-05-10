import { createContext, useState, useEffect } from "react";
import { axios } from "../helpers/axios";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({});
  const [user, setUser] = useState({});

  const localAuth = JSON.parse(window.localStorage.getItem("user"))
    ? JSON.parse(window.localStorage.getItem("user"))
    : {};

  useEffect(() => {
    const localAuth = JSON.parse(window.localStorage.getItem("user"))
      ? JSON.parse(window.localStorage.getItem("user"))
      : {};

    if (localAuth.hasOwnProperty("token")) {
      setAuth(localAuth);
    } else {
      setAuth({});
    }
  }, []);

  useEffect(() => {
    axios
      .get(`/user/${localAuth?.email}`)
      .then(({ data }) => setUser(data))
      .catch((e) => setUser({}));
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth, user, setUser, localAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
