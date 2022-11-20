import React from 'react';

import PropTypes from 'prop-types';

import './DashboardSidebar.scss';
import { Link } from 'react-router-dom';
const details = [
  {
    name: "Projects",
    icon: "/draft.svg",
    to: "admin/dashboard/projects"
  },
  {
    name: "Drafts",
    icon: "/stories.svg",
    to: "admin/dashboard/drafts"
  },
  {
    name: "Stories",
    icon: "/edit.svg",
    to: "admin/dashboard/stories"
  }
]
export const DashboardSidebar = ({ className, ...props }) => {
  return (
    <div className={`${className} DashboardSidebar`} {...props}>
      {/* To do change image later */}
      <div className="CreateNewStory"><img src='/Add.svg' /> <p>Create New story</p></div>
      <div className='sideItems-container'>
        {
          details.map(({ icon, name, to }, index) =>
          <Link to={to} key={name + index}>
            <div className='sidebarItem'>
            <img src={icon} />
            <p>{name}</p>
              </div>
          </Link>
          )
}
      </div>
    </div>
  );
};

// These are the types of the props that are passed to the component

DashboardSidebar.propTypes = {
  className: PropTypes.string,
};

// These are their default values

DashboardSidebar.defaultProps = {
  className: '',
};

export default DashboardSidebar;