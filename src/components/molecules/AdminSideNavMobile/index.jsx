import React from "react";
import "./AdminSideNavMobile.scss";
import { useNavigate } from "react-router-dom";

import logo from "../../../assets/images/dashboard/logo.svg";
import group from "../../../assets/images/dashboard/user-octagon.svg";
import profile from "../../../assets/images/dashboard/category-2.svg";
import setting from "../../../assets/images/dashboard/setting-2.svg";
import avatar from "../../../assets/images/dashboard/avatar.svg";
import logout from "../../../assets/images/dashboard/logout.svg";

const AdminHamburger=(props)=>{
    const navigate = useNavigate();
    return(
        <div className="Admin-harmburger_wrapper">
            <div id="main">
     <div className="sideNav" id="mySidebar">
      <a href="javascript:void(0)" className="closebtn" onClick={props.exit}>&times;</a>
        <div className="sidebar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="sidebar-menu">
        <div className="setting side">
            <img src={profile} alt="profile" />
            <li onClick={() => navigate('/admin')}>Dashboard</li>
          </div>
          <div className="group side">
            <img src={group} alt="group" />
            <li onClick={() => navigate('/admin/userlist')}>All Users </li>
          </div>
          <div className="profile side">
            <img src={setting} alt="setting" />
            <li onClick={() => navigate('/admin/archive')}>Archived Users</li>
          </div>
          
        </div>
        <div className="footer--profile">
        <div className="avatar-zone">
          <div className="avatar">
            <img src={avatar} alt="avatar" />
          </div>
          <div>
            <h4>Mark Essien</h4>
            <p>Admin</p>
          </div>
        </div>
        <div className="log-out">
          <img src={logout} alt="logout" />
          <p onClick={() => navigate('/admin/adminlogin')}>Sign Out</p>
        </div>
        </div>
      </div>
      </div>
        </div>
    );
}

export default AdminHamburger;

  