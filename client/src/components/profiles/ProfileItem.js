import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({ profile: { user: { _id, firstName, lastName, avatar }, description } }) => {
  return (
    <div className="profile-item-card">
      <div className="profile-item-wrapper">
        <div className="profile-item-avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="profile-item-nd">
          <h4 className="profile-item-name">{firstName} {lastName}</h4>
          <span className="profile-item-description">{description}</span>
        </div>
        <div className="profile-item-view">
          <Link to={`/profile/${_id}`} className="profile-item-btn">View</Link>
        </div>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
