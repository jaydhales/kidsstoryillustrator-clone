import React from "react";
import {useEffect, useState} from "react";
import "./Tables.css"
import TableRow from "../TableRow";
import {CiSearch} from "react-icons/ci";
import axios from "axios";


const endpoint ="https://web-production-c992.up.railway.app/users";
const Table = () => {
  
  
  const ConfigData ={
    headers: {
        "Content-type": "application/json",
        "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzgxMGZjMzVhMDhmMGEyYjQxYTBiODQiLCJ1c2VybmFtZSI6IkFkbWluIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2Njk4NTA0ODgsImV4cCI6MTY2OTkzNjg4OH0.QsLM8OPPqc4yaRBjoyGAwn-NkELpa9sZxAameRxMDys"
}
};
const[tableItems, setTableItems] = useState([]);
const [pageData, setpageData] = useState([]);
const [pageCounter, setpageCounter] =useState(10);
const [queryInputValue, setqueryInputValue]=useState ("")



useEffect(()=>{ 
  axios.get (endpoint, ConfigData)
        .then((response) => {
            const userArray = response.data
            console.log(response.data.data)
                setTableItems(userArray)

            })
         }, []);



useEffect(()=>{
  const arr=[];
  if (tableItems.length >0){
  for (let index = pageCounter; index < (pageCounter+10); index++) {
    if (tableItems[index]){
    arr.push(tableItems[index])
    }
  } 
  }

  
  setpageData(arr);

},[pageCounter,tableItems])

const handleSearchQuery =(e)=>{
  const query = e.target.value;

  const result = tableItems.filter((item)=>item.email.includes(query));
  setqueryInputValue(e.target.value)
    setTableItems(result);

}
function paginate(a, pageIndex, pageSize) {
  var endIndex = Math.min((pageIndex + 1) * pageSize, a.length);
  return a.slice(Math.max(endIndex - pageSize, 0), endIndex);
}

const paginatedData = tableItems.filter((users) => {
  if (queryInputValue === "") {
    return users;
  } else if (
    users.email
      .toString()
      .toLocaleLowerCase()
      .includes(queryInputValue.toLocaleLowerCase())
  ) {
    return users;
  }
});

  return (     
  <div className="table-wrapper">
    <div className="header-wrapper_container">
      <p>USERS LIST</p>
    <div className="search-wrapper">
    <input type="text" onChange={(e)=>handleSearchQuery(e)} placeholder="Search..."/><CiSearch className="search_icon"/>
    </div>
    </div>
    <div className="sort-page-container">
      <div className="sort">
      <img src="/assets/images/sort.svg" id="sort_icon" alt="sort-img" />
        <p>Sort by</p>
      </div>
      <div className="pagnation-action">
      <p>Showing page 1-14 of 2000</p>
        <img src="/assets/images/Vector.svg" alt="previous" 
        />
        <img src="/assets/images/Vector-table2.svg" alt="next" />
      </div>
    </div>
    
    <div className="table_f-wrap">

   <table className="min-w-full_divide-y-divide-gray-200">
    <th>
      <td>Email</td>
      <td>First Name</td>
      <td>Last Name</td>
      <td>User Type</td>
      <td>Location</td>
    </th>


    {paginate(paginatedData, 0, 10).map((row, index) => (
    <TableRow key={index} data={row} />

    )
  
)}

  </table> 
  </div>
  </div> );
};
export default Table;