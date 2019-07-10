import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { addPostLike, removePostLike } from '../../actions/post';
import { addNote, getProfileById } from '../../actions/profile';

const Main = ({ text, getProfileById, avatar, user, firstName, lastName, postId, likes, addPostLike, removePostLike, auth, profile, addNote }) => {
  useEffect(() => {
    getProfileById(user);
  }, [getProfileById, user]);

  const formData = {
    text: `liked your post!`
  }
  return (
    <div className="main-post-card">
      <div className="main-post-header-grid">
        <div className="main-post-avatar">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="main-post-name">
          <Link className="user-name-link" to={`/profile/${user}`}>{firstName} {lastName}</Link>
        </div>
      </div>
      <div className="main-post">
        {text}
      </div>
      <div className="main-post-likes unliked">
        <button onClick={() => {
          addPostLike(postId);
          addNote(profile.profile._id, formData);
        }} id="like-btn"><i className="fas fa-thumbs-up"></i> <span>{likes.length}</span></button>
      </div>
      <div className="main-post-likes liked">
        <button onClick={() => removePostLike(postId)} id="like-btn"><i className="fas fa-thumbs-down"></i></button>
      </div>
    </div>
  )
}

Main.propTypes = {
  addPostLike: PropTypes.func.isRequired,
  removePostLike: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  getProfileById: PropTypes.func.isRequired,
  addNote: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
})

export default connect(mapStateToProps, { addPostLike, removePostLike, getProfileById, addNote })(Main);
