import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/post';
import Spinner from '../layout/Spinner';
import PostItem from './PostItem';

const Posts = ({ getPosts, post: { posts, loading }, profile, auth: { user } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts])

  return loading || profile === null ? <Spinner /> : (
    <Fragment>
      <div className="posts">
        {posts.filter(post => profile.following.find(follow => post.user === follow.user) || post.user === user._id).map(post => (
          <PostItem key={post._id} post={post} />
        ))
        }
      </div>
    </Fragment>
  )
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  post: state.post,
  auth: state.auth
})

export default connect(mapStateToProps, { getPosts })(Posts);
