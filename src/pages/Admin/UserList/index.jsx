import "./UserList.css";
import React from "react";
import  Table  from "../../../components/molecules/Tables";
import {CiSearch} from "react-icons/ci";
import { AdminSideNav } from "../../../components/molecules";


const UserList=()=>{
    return(
        <div className="UserList-wrap">
         <div className="UserList_wrapper_container">
     <AdminSideNav/>     

<Table/>

 </div>
 </div>
    );
}

export default UserList;