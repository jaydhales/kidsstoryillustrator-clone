import React from "react";

import PropTypes from "prop-types";

import "./AdminDashboard.css";

export const AdminDashBoard = () => {
  return <div className="AdminDashboard">
    <h1 className="welcome-text">Hi John, Welcome back!</h1>
    <section className="users-grid">
      <div className="grid--box">
        <h3 className='grid-header'>No. of users</h3>
        <h2 className="grid-number">2,000</h2>
      </div>
      <div className="grid--box">
        <h3 className='grid-header'>No. of premium users</h3>
        <h2 className="grid-number">1,400</h2>
      </div>
      <div className="grid--box">
        <h3 className='grid-header'>No. of story created</h3>
        <h2 className="grid-number">10,000</h2>
      </div>
    </section>
    <section className="table-section">
    <div className="text">
      <h4 className="table-header">Most activity User</h4>
      <p>See All</p>
    </div>
    <section className="table-scroll">
    <table className="table">
      <tr>
        <th>S/N</th>
        <th>Email</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>No. of story created</th>
      </tr>
      <tr>
        <td>01</td>
        <td>cyntianduka@unimaid.edu.ng</td>
        <td>Cynthia</td>
        <td>Nduka</td>
        <td>10</td>
      </tr>
      <tr>
        <td>02</td>
        <td>femelew@rocketmail.com</td>
        <td>Fem</td>
        <td>Eleba</td>
        <td>8</td>
      </tr>
      <tr>
        <td>03</td>
        <td>andrewsamalia@gmail.com</td>
        <td>Andrew</td>
        <td>Kuku</td>
        <td>7</td>
      </tr>
      <tr>
        <td>04</td>
        <td>oyelolaoluyemi@gmail.com</td>
        <td>Yemi</td>
        <td>Olaolu</td>
        <td>7</td>
      </tr>
      <tr>
        <td>05</td>
        <td>tobiloba2007@yahoo.com</td>
        <td>Tobia</td>
        <td>Toluwa</td>
        <td>6</td>
      </tr>
      <tr>
        <td>06</td>
        <td>tobiloba2007@yahoo.com</td>
        <td>Tobia</td>
        <td>Toluwa</td>
        <td>6</td>
      </tr>
      <tr>
        <td>07</td>
        <td>tobiloba2007@yahoo.com</td>
        <td>Tobia</td>
        <td>Toluwa</td>
        <td>6</td>
      </tr>
      <tr>
        <td>08</td>
        <td>tobiloba2007@yahoo.com</td>
        <td>Tobia</td>
        <td>Toluwa</td>
        <td>6</td>
      </tr>
    </table>
    </section>
    </section>
  </div>;
};

// These are the types of the props that are passed to the component

AdminDashBoard.propTypes = {};

// These are their default values

AdminDashBoard.defaultProps = {};

export default AdminDashBoard;
