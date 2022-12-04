import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./App.scss";
import Routes from "./Auth";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Routes />
    </>
  );
};
export default App;
