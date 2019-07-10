import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteNote } from '../../actions/profile';

const NoteItem = ({ firstName, noteId, lastName, avatar, user, text, profileId, deleteNote }) => {
  return (
    <div className="note-item-card">
      <div className="note-item-grid">
        <div className="note-item-avatar">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="note-item-text">
          <Link className="user-name-link" to={`/profile/${user}`}>{firstName} {lastName}</Link> {text}
        </div>
        <div className="note-item-delete">
          <button onClick={() => deleteNote(profileId, noteId)}><i className="fas fa-times"></i></button>
        </div>
      </div>
    </div>
  )
}

export default connect(null, { deleteNote })(NoteItem)
