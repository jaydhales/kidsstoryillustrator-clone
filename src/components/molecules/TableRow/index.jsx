import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const TableRow=(data)=>{
  const navigate = useNavigate();
  const { email, firstName, lastName, userType, location}= data.data;
  return(
        <tr onClick={() => navigate('/admin/userdetails')}>
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


  
