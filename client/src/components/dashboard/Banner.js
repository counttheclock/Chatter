import React, { Fragment } from 'react'
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
            props.profile.employment !== null && props.profile.employment ?
              <div className="profile-info-banner">
                <i className="fas fa-building"></i> {props.profile.employment}
              </div> :
              <Fragment />
          }
          {
            props.profile.location !== null && props.profile.location ?
              <div className="profile-info-banner">
                <i className="fas fa-location-arrow"></i> {props.profile.location}
              </div> :
              <Fragment />
          }
          {
            props.profile.education !== null && props.profile.education ?
              <div className="profile-info-banner">
                <i className="fas fa-school"></i> {props.profile.education}
              </div> :
              <Fragment />
          }
          {
            props.profile.song !== null && props.profile.song ?
              <div className="profile-info-banner">
                <i className="fas fa-headphones"></i> {props.profile.song}
              </div> :
              <Fragment />
          }
          {
            props.profile.movie !== null && props.profile.movie ?
              <div className="profile-info-banner">
                <i className="fas fa-film"></i> {props.profile.movie}
              </div> :
              <Fragment />
          }
          {
            props.profile.description !== null && props.profile.description ?
              <div className="profile-description-banner">
                {props.profile.description}
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
