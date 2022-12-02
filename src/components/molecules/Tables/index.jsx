import React from "react";
import {useEffect, useState} from "react";
import "./Tables.css"
import TableRow from "../TableRow";
import {CiSearch} from "react-icons/ci";
import axios from "axios";


const endpoint ="https://web-production-c992.up.railway.app/users";
const Table = () => {
  const[activeStep, setActiveStep] = useState(0);
const handleNext =() => {
    setActiveStep(activeStep + 10) 
}; 
// const[prevStep, setPrevStep] = useState(0);
const handlePrev =() => {
  if (activeStep >9) {
    setActiveStep(activeStep - 10)  
  }
}
  const ConfigData ={
    headers: {
        "Content-type": "application/json",
        "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzgxMGZjMzVhMDhmMGEyYjQxYTBiODQiLCJ1c2VybmFtZSI6IkFkbWluIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2Njk5Mzg3OTgsImV4cCI6MTY3MDAyNTE5OH0.ysk6IUEhawNDsFRbBpLcAwexwKCjoAWgwt7l6X-CUig"
}
};
const[tableItems, setTableItems] = useState([]);
const[queryItems, setQueryItems] = useState([]);
const [pageData, setpageData] = useState([]);
const [pageCounter, setpageCounter] =useState(10);
const [queryInputValue, setqueryInputValue]=useState ("")



useEffect(()=>{ 
  axios.get (endpoint, ConfigData)
        .then((response) => {
            const userArray = response.data.data
            console.log(response.data.data)
                setTableItems(userArray)
                setQueryItems(userArray)

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
  console.log(query)
if (query=="") {
  setQueryItems(tableItems)
  
}
  const result = tableItems.filter((item)=>item.email.includes(query));
  setqueryInputValue(e.target.value)
  console.log(result)
    setQueryItems(result);

}
function paginate(a, pageIndex, pageSize) {
  // var endIndex = Math.min((pageIndex + 1) * pageSize, a.length);
  return a.slice(pageIndex, pageSize );
}

// const paginatedData = tableItems.filter((users) => {
//   if (queryInputValue === "") {
//     return users;
//   } else if (
//     users.email
//       .toString()
//       .toLocaleLowerCase()
//       .includes(queryInputValue.toLocaleLowerCase())
//   ) {
//     return users;
//   }
// });

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
        <img onClick={handlePrev} src="/assets/images/Vector.svg" alt="previous" 
        />
        <img onClick={handleNext} src="/assets/images/Vector-table2.svg" alt="next" />
      </div>
    </div>
    
    <div className="table_f-wrap">

   <table className="min-w-full_divide-y-divide-gray-200">
    <thead>
    <tr>
      <td>First Name</td>
      <td>Last Name</td>
      <td>Email</td>
      <td>Username</td>
    </tr>
    </thead>

<tbody>
    {paginate(queryItems, activeStep, activeStep + 10).map((row, index) => (
      <tr key={row.id}> 
      <td key={row.id}>{row.firstname}</td>
      <td key={row.id}>{row.lastname}</td>
      <td key={row.id}>{row.email}</td>
      <td key={row.id}>{row.username}</td>
      </tr>

    )
  
)}
</tbody>

  </table> 
  </div>
  </div> );
};
export default Table;