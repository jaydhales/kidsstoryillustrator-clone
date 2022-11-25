import React from "react";
import PropTypes from "prop-types";


const TableRow=(data)=>{
  const { email, firstName, lastName, userType, location}= data.data;
  return(
        <tr>
      <td>{email}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{userType}</td>
      <td>{location}</td>
    </tr>

    )



};

TableRow.PropTypes= {
  data: PropTypes.shape({email: PropTypes.string.isRequired, firstName: PropTypes.string.isRequired, lastName: PropTypes.string.isRequired, userType: PropTypes.string.isRequired, location: PropTypes.string.isRequired})
};
export default TableRow;


  
