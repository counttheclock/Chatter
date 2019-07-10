import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const PostForm = ({ addPost }) => {
  const [text, setText] = useState('');

  return (
    <div className="postform-card">
      <div className="postform" onSubmit={e => {
        e.preventDefault();
        addPost({ text });
        setText('');
      }}>
        <form>
          <textarea className="post-input" placeholder="Say Something..." value={text} onChange={e => setText(e.target.value)}></textarea>
          <input type="submit" value="Post" className="post-submit" />
        </form>
      </div>
    </div>
  )
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
}

export default connect(null, { addPost })(PostForm);
