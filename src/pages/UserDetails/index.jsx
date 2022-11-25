import React from "react";
import "./UserDetails.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



const UserDetails =()=>{
    const percentage = 66;
    return(
        <div className="Userdetails_wrapper-container">
            <div className="heading_container_wrap">
            <div className="user-details">
            <img src="/assets/images/grit.svg" id="chatbot1" alt="Metabnb_icon" /> 
            <p>User Details</p> 

             </div>
             <div className="avartar-wrapper_contain -images">
             <img src="/assets/images/grit.svg" id="chatbot1" alt="Metabnb_icon" /> 
             <p>Mark Essien</p> 
             <p>Premium</p> 
             </div>
             </div>

             <div className="personal_frame_container">
                <p>All Personal Information</p>
                <div className="information-dashboard-container">
                    <div className="card-information_ss">
                    <img src="/assets/images/grit.svg" id="chatbot1" alt="Metabnb_icon" /> 
                    <div className="card-information">
                        <h6>Mark Essien</h6>
                        <p>Username</p>
                    </div>
 
                    </div>

                    <div className="card-information_ss">
                    <img src="/assets/images/grit.svg" id="chatbot1" alt="Metabnb_icon" /> 
                    <div className="card-information">
                        <h6>markessien@gmail.com</h6>
                        <p>Email Address</p>
                    </div>
 
                    </div>

                    <div className="card-information_ss">
                    <img src="/assets/images/grit.svg" id="chatbot1" alt="Metabnb_icon" /> 
                    <div className="card-information">
                        <h6>+2348167493604</h6>
                        <p>Phone Number</p>
                    </div>
 
                    </div>

                    <div className="card-information_ss">
                    <img src="/assets/images/grit.svg" id="chatbot1" alt="Metabnb_icon" /> 
                    <div className="card-information">
                        <h6>www.kidsstrator.com</h6>
                        <p>Website</p>
                    </div>
 
                    </div>

                    <div className="card-information_ss">
                    <img src="/assets/images/grit.svg" id="chatbot1" alt="Metabnb_icon" /> 
                    <div className="card-information">
                        <h6>Female</h6>
                        <p>Gender</p>
                    </div>
 
                    </div>

                    <div className="card-information_ss">
                    <img src="/assets/images/grit.svg" id="chatbot1" alt="Metabnb_icon" /> 
                    <div className="card-information">
                        <h6>1st November, 2022</h6>
                        <p>Date joined</p>
                    </div>
 
                    </div>

                    <div className="card-information_ss">
                    <img src="/assets/images/grit.svg" id="chatbot1" alt="Metabnb_icon" /> 
                    <div className="card-information">
                        <h6>2972 Westheimer Rd. Santa Ana, Illinois 85486 </h6>
                        <p>Address</p>
                    </div>
 
                    </div>


                    
                </div>
             </div>

            <div className="progress_wrap" >
            <div style={{ width: 200, height: 200 }}>
    <CircularProgressbar value={percentage} text={`${percentage}%`} />;
    </div>

    <div style={{ width: 200, height: 200 }}>
  <CircularProgressbar value={66} />
</div>
</div>


             <div className="user_stories-container">
                <div className="user_stories_heading-container">
                    <p id="user-stories_header">User stories</p>
                    <p>View All</p>
                </div>

                <div className="user-stories-grid">
                <img src="/assets/images/Hover Card.svg" id="chatbot1" alt="Metabnb_icon" /> 

                <img src="/assets/images/Hover Card.svg" id="chatbot1" alt="Metabnb_icon" /> 

                <img src="/assets/images/Hover Card.svg" id="chatbot1" alt="Metabnb_icon" /> 

                <img src="/assets/images/Hover Card.svg" id="chatbot1" alt="Metabnb_icon" />

                <img src="/assets/images/Hover Card.svg" id="chatbot1" alt="Metabnb_icon" /> 

                <img src="/assets/images/Hover Card.svg" id="chatbot1" alt="Metabnb_icon" /> 

                <img src="/assets/images/Hover Card.svg" id="chatbot1" alt="Metabnb_icon" /> 

                <img src="/assets/images/Hover Card.svg" id="chatbot1" alt="Metabnb_icon" /> 

                <img src="/assets/images/Hover Card.svg" id="chatbot1" alt="Metabnb_icon" /> 

                </div>

             </div>
        </div>
    );
}

export default UserDetails;