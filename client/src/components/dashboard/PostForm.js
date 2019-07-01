import React from 'react'

const PostForm = () => {
  return (
    <div className="postform-card">
      <div className="postform">
        <form>
          <textarea className="post-input" placeholder="Say Something..."></textarea>
          <input type="submit" value="Post" className="post-submit" />
        </form>
      </div>
    </div>
  )
}

export default PostForm
