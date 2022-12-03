import "./UserList.css";
import React, { Component, useState } from "react";
import  Table  from "../../../components/molecules/Tables";
import { AdminSideNav } from "../../../components/molecules";


export const Userlist =()=> {

 return( <div className="UserList-wrap"> 
    <AdminSideNav/>
            <Table/>
                                   </div>
                )}

    



export default Userlist; 