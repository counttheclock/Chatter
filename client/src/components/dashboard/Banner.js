import React from 'react'
import { Link } from 'react-router-dom'

const Banner = (props) => {
  return (
    <div className="banner-card">
      <div className="profile-pic">
        <img src={props.avatar} alt="Profile" />
      </div>
      <div className="user-name">
        {props.firstName} {props.lastName}
      </div>
      {props.profile !== null ?
        <div className="banner-profile-info">
          {
            props.profile.employment !== null ?
              <div className="profile-info-banner">
                <i className="fas fa-building"></i> {props.profile.employment}
              </div> :
              <div />
          }
          {
            props.profile.location !== null ?
              <div className="profile-info-banner">
                <i className="fas fa-location-arrow"></i> {props.profile.location}
              </div> :
              <div />
          }
          {
            props.profile.education !== null ?
              <div className="profile-info-banner">
                <i className="fas fa-school"></i> {props.profile.education}
              </div> :
              <div />
          }
          {
            props.profile.song !== null ?
              <div className="profile-info-banner">
                <i className="fas fa-headphones"></i> {props.profile.song}
              </div> :
              <div />
          }
          {
            props.profile.movie !== null ?
              <div className="profile-info-banner">
                <i className="fas fa-film"></i> {props.profile.movie}
              </div> :
              <div />
          }
          {
            props.profile.description !== null ?
              <div className="profile-description-banner">
                {props.profile.description}
              </div> :
              <div />
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
