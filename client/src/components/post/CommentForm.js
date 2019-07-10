import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';
import { getProfileById, addNote } from '../../actions/profile';

const CommentForm = ({ addComment, postId, user, getProfileById, addNote, profile }) => {
  useEffect(() => {
    getProfileById(user);
  }, [getProfileById, user])

  const [text, setText] = useState('');
  const formData = {
    text: `commented on your post!`
  }
  return (
    <form onSubmit={e => {
      e.preventDefault();
      addComment(postId, { text });
      addNote(profile.profile._id, formData)
      setText('');
    }}>
      <div className="comment-form-grid">
        <div className="comment-tb-wrapper">
          <textarea className="comment-textbox" placeholder="Write A Comment..." maxLength="150" value={text} onChange={e => setText(e.target.value)} />
        </div>
        <div className="comment-submit-wrapper">
          <input type="submit" value="Submit" className="comment-submit" />
        </div>
      </div>
    </form>
  )
}

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
  addNote: PropTypes.func.isRequired,
  getProfileById: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile
})

export default connect(mapStateToProps, { addComment, addNote, getProfileById })(CommentForm);
