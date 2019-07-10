import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deletePost } from '../../actions/post';

const PostItem = ({ deletePost, auth, post: { _id, text, firstName, lastName, avatar, user, likes, comments, date } }) => {
  if (text.length > 135) {
    text = text.substring(0, 135).concat('...');
  }
  return (
    <div className="post-card">
      <div className="post-grid">
        <div className="post-avatar">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="post-nt">
          <div className="post-name-wrapper">
            <Link className="user-name-link" to={`/profile/${user}`}>{firstName} {lastName}</Link>
          </div>
          <div className="post-text-wrapper">
            <span>{text}</span>
          </div>
        </div>
        {!auth.loading && user === auth.user._id && (
          <div className="post-link-wrapper">
            <button onClick={e => deletePost(_id)} className="meatball">
              <i className="fas fa-times"></i>
            </button>
          </div>
        )}
      </div>
      <div className="commentinfo">
        <span>Comments: {comments.length}</span>
        <span>Likes: {likes.length}</span>
        <Link className="post-link" to={`/post/${_id}`}>View</Link>
      </div>

    </div>
  )
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { deletePost })(PostItem);
