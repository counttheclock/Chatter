import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import InfoSettings from './InfoSettings';
import AccountSettings from './AccountSettings';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';

const Settings = ({ auth: { user }, getCurrentProfile, profile: { profile, loading } }) => {
  useEffect(() => {
    getCurrentProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return loading || profile === null ? <Spinner /> : (
    <div className="container">
      <div className="settings-header">Account Settings</div>
      <div className="settings-wrapper">
        <div className="info-settings-wrapper">
          <InfoSettings profile={profile} />
        </div>
        <div className="info-settings-wrapper">
          <AccountSettings />
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
