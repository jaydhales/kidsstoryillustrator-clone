import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./App.scss";
import Routes from "./Auth";
import { AuthContext } from "./contexts/AuthContext";



const App = () =>{ 
  const {setAuth} = useContext(AuthContext)
  useEffect(() => {
    const localInfo = JSON.parse(localStorage.getItem("authInfo"))
  if (localInfo && Object.entries(localInfo) >0) {
    setAuth(localInfo) 
  }
    
  }, [] )
  
  
  
  return ( 
  <>
    <Routes />
  </>
)};
export default App;
