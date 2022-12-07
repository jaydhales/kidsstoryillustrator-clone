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
  const [locationHistory, setLocationHistory] = useState("");

  useEffect(() => {
    const localAuth = JSON.parse(localStorage.getItem("authInfo"));

    if (localAuth) setAuth(localAuth);
  }, []);

  const saveToLocal = (data) => {
    const newAuth = {
      user: data.email,
      token: data.token,
      isAuthenticated: true,
      isAdmin: data.isAdmin,
      id: data._id,
    };

    localStorage.setItem("authInfo", JSON.stringify(newAuth));
    setAuth(newAuth);
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
        locationHistory,
        setLocationHistory,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
