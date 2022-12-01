import "./UserList.css";
import React, { Component, useState } from "react";
import  Table  from "../../../components/molecules/Tables";
import {CiSearch} from "react-icons/ci";
import { AdminSideNav } from "../../../components/molecules";
import axios from "axios";

// const endpoint ="https://web-production-c992.up.railway.app/users";

// const [tableItems, setTableItems] = useState([])
export const Userlist =()=> {

    // const config ={
//     headers: {
//         "Content-type": "application/json",
//         "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzgxMGZjMzVhMDhmMGEyYjQxYTBiODQiLCJ1c2VybmFtZSI6IkFkbWluIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2Njk4NTA0ODgsImV4cCI6MTY2OTkzNjg4OH0.QsLM8OPPqc4yaRBjoyGAwn-NkELpa9sZxAameRxMDys"
// }
// };

        // axios.get(endpoint, config)
        // .then((response) => {
        //     const userArray = response.data
        //         setTableItems(userArray)

        //     })
        //     console.log(response.data)

        

        return( <div> 
            <Table/>
            {/* {
                tableItems !== [] ?
                (
                   <div>
                   <table>
                   <th>
                   <td>First Name</td>
                   <td>Last Name</td>
                   <td>Email</td>
                   <td>Username</td>
                   </th>
                   {
                    tableItems.map((user) => (
                        <tr key={user.id}>
                        <td>{user.firstname}</td>
                        <td>{user.lastname}</td>
                        <td>{user.email}</td>
                        <td>{user.username}</td>
                        </tr>
                        )
        )}

                   </table> 
            </div>) */}
                </div>
                )}

    



export default Userlist;