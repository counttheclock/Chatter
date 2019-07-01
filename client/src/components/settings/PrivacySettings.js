import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { deleteAccount } from '../../actions/profile';

const PrivacySettings = ({ deleteAccount }) => {
  return (
    <div className="settings-card privacy-settings">
      <div className="settings-card-header">
        Privacy Settings
      </div>
      <div className="view-profile">
        <span className="privacy-label">Who should See Your Profile?</span>
        <select>
          <option value="volvo">Everyone</option>
          <option value="saab">Only Followers</option>
        </select>
      </div>
      <div className="follow">
        <span className="privacy-label">Who can follow you?</span>
        <select>
          <option value="volvo">Anyone</option>
          <option value="saab">Approved Profiles</option>
        </select>
      </div>
      <div className="blocked-profiles">
        <span className="privacy-label">Blocked Profiles:</span>
        <div className="blocked-card">
          No Blocked Profiles
        </div>
      </div>
      <div className="delete-account">
        <button className="delete-btn" onClick={() => deleteAccount()}>Delete Account</button>
      </div>
    </div>
  )
}

PrivacySettings.propTypes = {
  deleteAccount: PropTypes.func.isRequired
}

export default connect(null, { deleteAccount })(PrivacySettings);
