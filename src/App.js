import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./App.scss";
import Routes from "./Auth";

const MoveToTop = () => {
  const navigate = useNavigate();
  const { hash, pathname } = useLocation();
  useEffect(() => {
    if (hash) return;

    window.scrollTo(0, 0);
  }, [pathname, navigate, hash]);
  return null;
};

const App = () => (
  <>
    <MoveToTop />
    <Routes />
  </>
);
export default App;
