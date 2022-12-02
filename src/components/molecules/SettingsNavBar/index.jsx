import React from "react";
import "./SettingsNavBar.scss";
import {Route, Routes, useNavigate} from 'react-router-dom'
// import { Account, Security } from "../../../pages";

import PropTypes from "prop-types";
import { Account } from "../../../pages/Users/Account";
export const SettingsNavBar = () => {
   const navigate = useNavigate()
  return (
    <div>
        <nav className="list-section">
         <li>
                <button onClick={() => navigate('/account')}>Account</button>
            </li> 
             {/* <li>
                <Link to="/security">Security</Link>
          </li>
           <li>
               <Link to="/billing">Billing</Link>
           </li>  */}
       </nav>
    </div>       
  )
}
 {/* */}

// These are the types of the props that are passed to the component

SettingsNavBar.propTypes = {};

// These are their default values

SettingsNavBar.defaultProps = {};

export default SettingsNavBar;