import "./Deletepopup.scss";
import React from "react";
import { useNavigate } from "react-router-dom";

const Deletepopup = (props) =>{
    const navigate = useNavigate();

    return(
        <div>
            <div className="delete-user-side-popup" id="mySidebar">
      <a href="javascript:void(0)" className="closebtn" onClick={props.exit}>&times;</a>
        <div className="KEBAB-menu">
        <div className="vIWV-USER-side">
            <li onClick={() => navigate('/admin')}>View</li>
          </div>
          <div className="Edit-user-side">
            <li onClick={() => navigate('/admin/userlist')}>Edit </li>
          </div>
          <div className="Archive-User-side">
            <li onClick={() => navigate('/admin/archive')}>Archive</li>
          </div>
          <div className="Delete-user-side">
            <li onClick={() => navigate('/admin/archive')}>Delete</li>
          </div>
          
        </div>
      </div>

        </div>
    );

}

export default Deletepopup;