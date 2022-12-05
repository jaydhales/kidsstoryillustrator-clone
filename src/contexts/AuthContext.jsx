import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const initialAuth = {
    isAuthenticated: false,
    isAdmin: false,
    user: null,
    token: null,
  };

  const apiUrl = "https://api.magicbookwriter.hng.tech/";

  const [myAuth, setAuth] = useState(initialAuth);

  const saveToLocal = (data) => {
    const initAuth = {
      user: data.email,
      token: data.token,
      isAuthenticated: true,
      isAdmin: data.isAdmin,
    };

    localStorage.setItem("authInfo", JSON.stringify(initAuth));
    setAuth(initAuth);
  };

  const handleSignUp = (data) => {
    saveToLocal(data);
  };

  const handleLogIn = (data) => {
    saveToLocal(data);
  };

  const handleLogout = (data) => {
    localStorage.removeItem("authInfo");
    setAuth(initialAuth);
  };

  return (
    <AuthContext.Provider
      value={{
        myAuth,
        handleLogIn,
        handleLogout,
        handleSignUp,
        setAuth,
        apiUrl,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
