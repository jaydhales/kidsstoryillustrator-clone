import React, { useEffect,useState } from "react";

import PropTypes from "prop-types";
import Table from "../../../components/molecules/Tables";
import "./UserDetails.scss";
import { useNavigate, useParams } from "react-router-dom";
// React Circular Progressbar
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

// Images

import asia from "../../../assets/images/dashboard/asia.svg";
import contact from "../../../assets/images/dashboard/contact.svg";
import nav from "../../../assets/images/dashboard/nav.svg";
import more from "../../../assets/images/dashboard/more.svg";
import image1 from "../../../assets/images/dashboard/image1.svg";
import image2 from "../../../assets/images/dashboard/image2.svg";
import image3 from "../../../assets/images/dashboard/image3.svg";
import { AdminSideNav } from "../../../components/molecules";
import axios from "axios";


const endpoint ="https://web-production-c992.up.railway.app/users/";

export const UserDetails = () => {
  const navigate = useNavigate();
  const [stateId, setStateId]= useState([]);
  const noOfStories = 48;
  const timeSpent = 20;


const {id} = useParams()
// console.log(id)

  const Config ={
    headers: {
      "Content-type": "application/json",
      "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzgxMGZjMzVhMDhmMGEyYjQxYTBiODQiLCJ1c2VybmFtZSI6IkFkbWluIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NzAwNTUzOTAsImV4cCI6MTY3MDE0MTc5MH0.WYKlwPkxqN-xGivW-Ins3IwOVqkfFrUyYb2E6C3hfGs"
    }
  }
 
  useEffect(()=>{
    axios.get (endpoint +id,Config).then((response) =>{
      // console.log(response)
      const idArray = response.data.data
      // console.log(response.data.data)
      setStateId(idArray)
    })
  })


  return (
    <div className="USER-dashboard">
      <AdminSideNav/>
      <div className="main-board">
        <div className="user-header">
          <h1>User Details</h1>
          <div className="user-track">
            <p onClick={() => navigate('/admin')} className="admin">Admin Dashboard</p>
            <img src={nav} alt="nav" />
            <p onClick={() => navigate('/admin/userlist')}>User</p>
            <img src={nav} alt="nav" />
            <p>User Details</p>
          </div>
        </div>
        {/* User Information */}
        <div className="user-info">
          <div className="user-image">
            <img src={asia} alt="asia" />
          </div>
          
        </div >  
        <div className="userID-details">
          <div className="userID-details-frame">
            <div className="userID-details-frame">
            <img src={contact} alt="contact" />
            <div>
            <h4>{stateId.firstName}</h4>
            <p>First Name</p>
            </div>
            </div>

            <div className="userID-details-frame">
            <img src={contact} alt="contact" />
            <div>
            <h4>{stateId.lastName}</h4>
            <p>Last Name</p>
            </div>
            </div>

            <div className="userID-details-frame">
            <img src={contact} alt="contact" />
            <div>
            <h4>{stateId.email}</h4>
            <p>Email</p>
            </div>
            </div>

            <div className="userID-details-frame">
            <img src={contact} alt="contact" />
            <div>
            <h4>{stateId.username}</h4>
            <p>Username</p>
            </div>
            </div>

            <div className="userID-details-frame">
            <img src={contact} alt="contact" />
            <div>
            <h4>{stateId.createdAt}</h4>
            <p>Date Joined</p>
            </div>
            </div>

            <div className="userID-details-frame">
            <img src={contact} alt="contact" />
            <div>
            <h4>{stateId.updatedAt}</h4>
            <p>Last Update</p>
            </div>
            </div>

            <div className="userID-details-frame">
            <img src={contact} alt="contact" />
            <div>
            <h4>{stateId._id}</h4>
            <p>ID</p>
            </div>
            </div>

        </div>
        </div>

        
        {/* Personal Information */}
        {/* <div className="personal-info">
          <h1>All Personal Informations</h1>
          <div className="personal-card">
            <div className="inner-card">
              <img src={contact} alt="contact" />
              <div className="card-info">
                <h4>Cynka</h4>
                <p>Username</p>
              </div>
            </div>
            <div className="inner-card">
              <img src={contact} alt="contact" />
              <div className="card-info">
                <h4>cynthianduka@gmail.com</h4>
                <p>Email Address</p>
              </div>
            </div>
            <div className="inner-card">
              <img src={contact} alt="contact" />
              <div className="card-info">
                <h4>+234 705 594 2315</h4>
                <p>Phone Number</p>
              </div>
            </div>
            <div className="inner-card">
              <img src={contact} alt="contact" />
              <div className="card-info">
                <h4>www.kidstrator.com</h4>
                <p>Website</p>
              </div>
            </div>
            <div className="inner-card">
              <img src={contact} alt="contact" />
              <div className="card-info">
                <h4>Gender</h4>
                <p>Female</p>
              </div>
            </div>
            <div className="inner-card">
              <img src={contact} alt="contact" />
              <div className="card-info">
                <h4>1st November 2022</h4>
                <p>Date joined</p>
              </div>
            </div>
            <div className="inner-card">
              <img src={contact} alt="contact" />
              <div className="card-info">
                <h4>2972 Westheimer Rd. Santa Ana, Illinois 85486</h4>
                <p>Address</p>
              </div>
            </div>
          </div>
        </div> */}
        {/* User Analytics */}
        <div className="user-analytics">
          <h1>User Analytics</h1>
          <div className="analytics-board">
            <div className="inner-board">
              <CircularProgressbar
                value={noOfStories}
                text={`${noOfStories}`}
                styles={buildStyles({
                  strokeLinecap: "butt",
                  textColor: "#aa0136",
                  trailColor: "#aa0136",
                })}
              />
              <div className="board-text">
                <p>Number of Stories</p>
              </div>
            </div>
            <div className="inner-board">
              <CircularProgressbar
                value={timeSpent}
                text="2hrs"
                styles={buildStyles({
                  textColor: "#aa0136",
                  pathColor: "#aa0136",
                  trailColor: "#ffffff",
                })}
              />
              <div className="board-text">
                <p>Number of Hours Spent</p>
              </div>
            </div>
            <div className="inner-board">
              <CircularProgressbar
                value={noOfStories}
                text="20"
                styles={buildStyles({
                  strokeLinecap: "butt",
                  textColor: "#aa0136",
                  trailColor: "#aa0136",
                })}
              />
              <div className="board-text">
                <p>Number of Visit</p>
              </div>
            </div>
            <div className="inner-board">
              <CircularProgressbar
                value={noOfStories}
                text="20"
                styles={buildStyles({
                  strokeLinecap: "butt",
                  textColor: "#aa0136",
                  trailColor: "#aa0136",
                })}
              />
              <div className="board-text">
                <p>Number of Visit</p>
              </div>
            </div>
          </div>
        </div>
        {/* Stories Users */}
        <div className="stories-users">
          <div className="stories-header">
            <h1>Stories Users Have Written</h1>
            <p>View All</p>
          </div>
          <div className="stories-container">
            <div className="stories-card">
              <img src={image1} alt="image1" />
              <div className="stories-card-text">
                <div className="inner-card-text">
                  <h4>Mermaid and Pacific</h4>
                  <p>5th November, 2022</p>
                </div>
                <div className="more-icon">
                  <img src={more} alt="more" />
                </div>
              </div>
            </div>
            <div className="stories-card">
              <img src={image2} alt="image2" />
              <div className="stories-card-text">
                <div className="inner-card-text">
                  <h4>Mermaid and Pacific</h4>
                  <p>5th November, 2022</p>
                </div>
                <div className="more-icon">
                  <img src={more} alt="more" />
                </div>
              </div>
            </div>
            <div className="stories-card">
              <img src={image3} alt="image3" />
              <div className="stories-card-text">
                <div className="inner-card-text">
                  <h4>Mermaid and Pacific</h4>
                  <p>5th November, 2022</p>
                </div>
                <div className="more-icon">
                  <img src={more} alt="more" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// These are the types of the props that are passed to the component

UserDetails.propTypes = {};

// These are their default values

UserDetails.defaultProps = {};

export default UserDetails;
