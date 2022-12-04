import React, { useState } from "react";
import Account from "../Users/Account";
import Security from "../Users/Security";
import BillingPage from "../Users/BillingPage";
import SideBar from "../../components/molecules/SideBar";
import { Navbar } from "../../components/molecules";
import {RiArrowDropDownLine} from "react-icons/ri"

import PropTypes from "prop-types";
import "./AcctSetup.scss";
export const Settings = () => {
  const [account, setAccount] = useState(true);
  const [security, setSecurity] = useState(false);
  const [billPage, setBillPage] = useState(false);
  const [value, setValue] = React.useState();

  const viewAcct = () => {
    setAccount((prevState) => !prevState);
    setSecurity(false);
    setBillPage(false);
  };

  const viewSecurity = () => {
    setSecurity((prevState) => !prevState);
    setAccount(false);
    setBillPage(false);
  };

  const viewBill = () => {
    setBillPage((prevState) => !prevState);
    setAccount(false);
    setSecurity(false);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="Settings">
      <div className="nav2">
        <Navbar />
      </div>
      <div className="Settings1">
        <div className="side-bar2">
          <SideBar />
        </div>

        <div className="wrap-content">
          <h2 className="head-text">Settings</h2>
          <div className="nav-section">
            <button onClick={viewAcct}>Account</button>
            <button onClick={viewSecurity}>Security</button>
            <button onClick={viewBill}>Billing</button>
          </div>

          {/* mobile nav */}
            <div className="navbar">
              <div className="dropdown">
                <div className="btn-arrow">
                  <button className="dropbtn"  onClick={viewAcct}>
                Account   
                </button>
                <RiArrowDropDownLine/>
                </div>
              
                <div className="dropdown-content">
                <button onClick={viewSecurity}>Security</button>
            <button onClick={viewBill}>Billing</button>
                </div>
              </div>
          </div>

          <div>
            {account ? <Account /> : null}
            {security ? <Security /> : null}
            {billPage ? <BillingPage /> : null}
          </div>
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
