import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getPost } from '../../actions/post';
import Main from './Main';
import Comments from './Comments';

const Post = ({ getPost, getProfileById, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match.params.id])

  return loading || post === null ? <Spinner /> : (
    <div className="main-post-grid container">
      <div>
        <Main
          text={post.text}
          postId={post._id}
          likes={post.likes}
          avatar={post.avatar}
          user={post.user}
          firstName={post.firstName}
          lastName={post.lastName}
        />
      </div>
      <div>
        <Comments
          postId={post._id}
          comments={post.comments}
          avatar={post.avatar}
          user={post.user}
          firstName={post.firstName}
          lastName={post.lastName}
        />
      </div>
    </div>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
})

export default connect(mapStateToProps, { getPost })(Post);
