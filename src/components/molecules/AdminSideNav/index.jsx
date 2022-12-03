import React from "react"
import style from './AdminSideNav.scss';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


import logo from "../../../assets/images/dashboard/logo.svg";
import group from "../../../assets/images/dashboard/user-octagon.svg";
import profile from "../../../assets/images/dashboard/category-2.svg";
import setting from "../../../assets/images/dashboard/setting-2.svg";
import avatar from "../../../assets/images/dashboard/avatar.svg";
import logout from "../../../assets/images/dashboard/logout.svg";
import sidenavHamburger from "../../../assets/images/dashboard/sidenavHamburger.png";
import AdminHamburger from "../AdminSideNavMobile";


const AdminSideNav =()=>{
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const navigate = useNavigate();
    return(<div className="sidenav-container">
          <div className="sideNav">
        <div className="hamburger-container">
        <img src={sidenavHamburger} alt="Hamburger"  className="hamburger" onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}/>
        </div>
        <div className="sidebar-logo">
          <img src={logo} alt="logo" />
        </div>
        <hr className='hr'/>
        <div className="Desktop-sidenav-view">
        <div className="sidebar-menu">
        <div className="setting side">
            <img src={profile} alt="profile" />
            <p onClick={() => navigate('/admin')}>Dashboard</p>
          </div>
          <div className="group side">
            <img src={group} alt="group" />
            <p onClick={() => navigate('/admin/userlist')}>All Users </p>
          </div>
          <div className="profile side">
            <img src={setting} alt="setting" />
            <p onClick={() => navigate('/admin/archive')}>Archived Users</p>
          </div>
        </div>
        <div className="footer--profile">
        <hr className="footer-hr"/>
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
      {isNavExpanded && <AdminHamburger exit={() => setIsNavExpanded(false)} />
      }
      </div>
    );
}
export default AdminSideNav;