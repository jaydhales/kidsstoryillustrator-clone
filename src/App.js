import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./App.scss";
import Routes from "./Auth";

const App = () => {
  return (
    <>
      <Routes />
    </>
  );
};
export default App;
