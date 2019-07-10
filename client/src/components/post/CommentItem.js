import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteComment } from '../../actions/post';

const CommentItem = ({ comment: { _id, avatar, firstName, lastName, text, user, date }, deleteComment, postId, auth }) => {
  return (
    <div className="comment-item-card">
      <div className="comment-item-grid">
        <div className="comment-item-avatar">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="comment-item-nc">
          <div className="comment-item-name">
            <Link className="user-name-link" to={`/profile/${user}`}>{firstName} {lastName}</Link>
          </div>
          <div className="comment-item-comment">{text}</div>
        </div>
        <div>
          {!auth.loading && user === auth.user._id && (
            <button onClick={e => deleteComment(postId, _id)} className="comment-delete"><i className="fas fa-times"></i></button>
          )}
        </div>
      </div>
    </div>
  )
}

CommentItem.propTypes = {
  auth: PropTypes.object.isRequired,
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  deleteComment: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { deleteComment })(CommentItem);


