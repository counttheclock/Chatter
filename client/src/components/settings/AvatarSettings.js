import React from 'react'

const AvatarSettings = (props) => {
  return (
    <div className="settings-card avatar-settings">
      <div className="settings-card-header">
        Profile Picture
      </div>
      <div className="profile-upload">
        <div className="profile-pic-settings">
          <img src={props.avatar} alt="Profile" />
        </div>
        <div className="profile-pic-btn">
          <button>Upload Picture</button>
        </div>
      </div>
    </div>
  )
}

export default AvatarSettings
