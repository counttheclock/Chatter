import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Banner = ({ id, firstName, lastName, profile, avatar }) => {
  return (
    <div className="banner-card">
      <div className="profile-pic">
        <img src={avatar} alt="Profile" />
      </div>
      <div className="user-name">
        <Link className="user-name-link" to={`/profile/${id}`}>{firstName} {lastName}</Link>
      </div>
      {profile !== null && (profile.employment || profile.location || profile.education || profile.song || profile.movie || profile.description) ?
        <div className="banner-profile-info">
          {
            profile.employment !== null && profile.employment ?
              <div className="profile-info-banner">
                <i className="fas fa-building"></i> {profile.employment}
              </div> :
              <Fragment />
          }
          {
            profile.location !== null && profile.location ?
              <div className="profile-info-banner">
                <i className="fas fa-location-arrow"></i> {profile.location}
              </div> :
              <Fragment />
          }
          {
            profile.education !== null && profile.education ?
              <div className="profile-info-banner">
                <i className="fas fa-school"></i> {profile.education}
              </div> :
              <Fragment />
          }
          {
            profile.song !== null && profile.song ?
              <div className="profile-info-banner">
                <i className="fas fa-headphones"></i> {profile.song}
              </div> :
              <Fragment />
          }
          {
            profile.movie !== null && profile.movie ?
              <div className="profile-info-banner">
                <i className="fas fa-film"></i> {profile.movie}
              </div> :
              <Fragment />
          }
          {
            profile.description !== null && profile.description ?
              <div className="profile-description-banner">
                {profile.description}
              </div> :
              <Fragment />
          }
        </div> :
        <div className="create-profile-wrapper">
          <Link to="/settings" className="create-profile-btn">Set Up Profile</Link>
        </div>
      }
    </div>
  )
}

export default Banner
