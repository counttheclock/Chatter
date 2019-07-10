import React from 'react'
import { connect } from 'react-redux';
import { deleteAccount } from '../../actions/profile';

const AccountSettings = ({ deleteAccount }) => {
  return (
    <div className="settings-card">
      <div className="settings-card-header">
        Account Settings
        </div>
      <div className="delete-btn-wrapper">
        <button onClick={() => deleteAccount()} className="delete-btn">Delete Account</button>
      </div>
    </div>
  )
}

export default connect(null, { deleteAccount })(AccountSettings)
