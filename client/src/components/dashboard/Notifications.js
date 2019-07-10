import React from 'react'
import NoteItem from './NoteItem';

const Notifications = ({ profile }) => {
  return (
    <div className="note-card">
      <div className="note-header">Notifications</div>
      <hr></hr>
      <div className="note-item-wrapper">
        {profile.notes.length > 0 ?
          profile.notes.map(note => (
            <NoteItem key={note._id} noteId={note._id} profileId={profile._id} firstName={note.firstName} text={note.text} lastName={note.lastName} avatar={note.avatar} user={note.user} />
          )) :
          <div className="no-note">
            <i>No Notifications...</i>
          </div>
        }
      </div>
    </div>
  )
}

export default Notifications
