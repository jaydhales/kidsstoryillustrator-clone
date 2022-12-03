import React, { useState } from "react";
// import SettingsNavBar from "../../components/molecules/SettingsNavBar"
// import {Route, Routes} from 'react-router-dom'
import Account from "../Users/Account";
import Security from "../Users/Security";
import BillingPage from "../Users/BillingPage"
import SideBar from "../../components/molecules/SideBar";

import PropTypes from "prop-types";
import "./AcctSetup.scss";
export const Settings = () => {
  const [account, setAccount] = useState(true);
  const [security, setSecurity] = useState(false);
  const [billPage, setBillPage] = useState(false);
  

  const viewAcct = () => {
    setAccount((prevState) => !prevState);
    setSecurity(false);
    setBillPage(false)
   
  };

  const viewSecurity = () => {
    setSecurity((prevState) => !prevState);
    setAccount(false);
    setBillPage(false)
   
  };

  const viewBill = () => {
    setBillPage((prevState) => !prevState);
    setAccount(false);
    setSecurity(false)
    
  };

  // const handleClick = () => {
  //   setBtnState(btnState => !btnState)
  // }


  return (
    <div className="Settings">
      <div className="side-bar2">
         <SideBar />
      </div>

      <div className="wrap-content">
        <h2 className="head-text">Settings</h2>
        <div className="nav-section">
         <button  onClick={viewAcct}>Account</button>
          
          <button onClick={viewSecurity}>Security</button>
          <button onClick={viewBill}>Billing</button>
        </div>

        {/* mobile nav */}
        <div className="mobile-nav">
          <select className="mob-nav">
            <option>
            <button onClick={viewAcct}>Account</button>
            </option>
            <option>
            <button onClick={viewSecurity}>Security</button>
            </option>
            <option>Billing</option>
          </select>
        </div>


        <div>
          {account ? <Account /> : null}
          {security ? <Security /> : null}
          {billPage ? <BillingPage/> : null}
        </div>
      </div>
    </div>
  );
};

// These are the types of the props that are passed to the component

Settings.propTypes = {};

// These are their default values

Settings.defaultProps = {};

export default Settings;
