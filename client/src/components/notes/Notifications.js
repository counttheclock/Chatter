import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import NoteItem from './NoteItem';
import { connect } from 'react-redux'
import { getCurrentProfile } from '../../actions/profile';
import Spinner from '../layout/Spinner';

const Notifications = ({ profile: { profile, loading }, getCurrentProfile }) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile])
  return loading | profile === null ? <Spinner /> :
    <div className="note-only-card">
      <div className="note-header">Notifications</div>
      <hr></hr>
      <div className="note-item-wrapper">
        {profile.notes.length > 1 ?
          profile.notes.map(note => (
            <NoteItem key={note._id} noteId={note._id} profileId={profile._id} firstName={note.firstName} text={note.text} lastName={note.lastName} avatar={note.avatar} user={note.user} />
          )) :
          <div className="no-note">
            <i>No Notifications...</i>
          </div>
        }
      </div>
    </div>
}

Notifications.propTypes = {
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile })(Notifications)
