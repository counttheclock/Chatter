import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const ProfileTop = ({ profile: { user: { firstName, lastName, avatar }, employment, location, education, song, movie, description } }) => {
  return (
    <div className="profile-top-wrapper">
      <div className="profile-top-nd">
        <img src={avatar} alt="avatar" />
        <h2 className="profile-top-name">{firstName} {lastName}</h2>
        <span className="profile-top-description">{description}</span>
      </div>
      <div className="profile-top-info">
        <h4 className="profile-top-bio-header">{firstName}'s Bio</h4>
        <div className="info-wrapper">
          {
            employment !== null && employment ?
              <div className="profile-info">
                <i className="fas fa-building"></i> {employment}
              </div> :
              <Fragment />
          }
          {
            location !== null && location ?
              <div className="profile-info">
                <i className="fas fa-location-arrow"></i> {location}
              </div> :
              <Fragment />
          }
          {
            education !== null && education ?
              <div className="profile-info">
                <i className="fas fa-school"></i> {education}
              </div> :
              <Fragment />
          }
          {
            song !== null && song ?
              <div className="profile-info">
                <i className="fas fa-headphones"></i> {song}
              </div> :
              <Fragment />
          }
          {
            movie !== null && movie ?
              <div className="profile-info">
                <i className="fas fa-film"></i> {movie}
              </div> :
              <Fragment />
          }
        </div>
      </div>
    </div>
  )
}

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired
}

export default ProfileTop
