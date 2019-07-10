import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import FollowButton from './FollowButton';

const ProfileTop = ({ profile: { user, _id, employment, location, education, song, movie, description, followers }, userId }) => {
  return (
    <div className="profile-top-wrapper">
      <div className="profile-top-nd">
        <img src={user.avatar} alt="avatar" />
        <h2 className="profile-top-name">{user.firstName} {user.lastName}</h2>
        {description !== null && description ?
          <span className="profile-top-description">{description}</span> :
          <span className="profile-top-description"><i>This user has no description</i></span>
        }
        {userId._id !== user._id ?
          <FollowButton id={_id} followers={followers} /> :
          <div />
        }

      </div>
      <div className="profile-top-info">
        <h4 className="profile-top-bio-header">{user.firstName}'s Bio</h4>
        {employment || location || education || song || movie ? (
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
        ) :
          <div className="center-text">
            <span className="profile-top-bio-missing"><i>This user has no bio</i></span>
          </div>
        }
      </div>
    </div>
  )
}

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired
}

export default ProfileTop
