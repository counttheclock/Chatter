import React from 'react'
import CommentItem from './CommentItem';
import CommentForm from './CommentForm';

const Comments = ({ postId, comments, user }) => {
  return (
    <div className="comment-card">
      <div className="comment-header">
        <span>Comments</span>
        <hr />
      </div>
      <div className="comment-item-wrapper">
        {comments.map(comment => (
          <CommentItem key={comment._id} comment={comment} postId={postId} />
        ))}
      </div>
      <hr className="comment-hr" />
      <div className="comment-form-wrapper">
        <CommentForm postId={postId} user={user} />
      </div>
    </div>
  )
}

Comments.propTypes = {

}

export default Comments
