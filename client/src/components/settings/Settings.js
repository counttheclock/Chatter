import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import AvatarSettings from './AvatarSettings';
import InfoSettings from './InfoSettings';
import PrivacySettings from './PrivacySettings';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';

const Settings = ({ auth: { user }, getCurrentProfile, profile: { profile, loading } }) => {
  useEffect(() => {
    getCurrentProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return loading && profile === null ? <Spinner /> : (
    <div>
      <div className="settings-header">Account Settings</div>
      <div className="settings-wrapper">
        <div className="avatar-settings-wrapper">
          <AvatarSettings avatar={user && user.avatar} />
        </div>
        <div className="info-settings-wrapper">
          <InfoSettings profile={profile} />
        </div>
        <div className="privacy-settings-wrapper">
          <PrivacySettings />
        </div>
      </div>
    </div>
  )
}

Settings.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile })(Settings);
