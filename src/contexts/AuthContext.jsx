import React, { createContext, useContext, useState } from "react";

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

  const handleSignUp = (data) => {
    localStorage.setItem("token", data.token);
    setAuth({
      user: data.email,
      token: data.token,
      isAuthenticated: true,
      isAdmin: data.isAdmin,
    });
  };

  const handleLogIn = (data) => {
    console.log(data);
    localStorage.setItem("token", data.token);
    setAuth({
      user: data.email,
      token: data.token,
      isAuthenticated: true,
      isAdmin: data.isAdmin,
    });
  };

  const handleLogout = (data) => {
    localStorage.removeItem("token");
    setAuth(initialAuth);
  };

  return (
    <AuthContext.Provider
      value={{
        myAuth,
        handleLogIn,
        handleLogout,
        handleSignUp,
        apiUrl,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
