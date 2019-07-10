import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import Banner from './Banner';
import PostForm from './PostForm';
import Posts from './Posts';
import Notifications from './Notifications';
import { getCurrentProfile } from '../../actions/profile';
import { getPosts } from '../../actions/post';

const Dashboard = ({ getCurrentProfile, auth: { user }, profile: { profile, loading } }) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile])

  return loading | profile === null ? <Spinner /> :
    <div className="dashboard-wrapper">
      <div className="banner-wrapper">
        <Banner avatar={user && user.avatar} id={user && user._id} firstName={user && user.firstName} lastName={user && user.lastName} profile={profile} />
      </div>
      <div className="dashboard-posts-wrapper">
        <PostForm />
        <Posts profile={profile} />
      </div>
      <div>
        <Notifications profile={profile} />
      </div>
    </div>
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  post: state.post
})

export default connect(mapStateToProps, { getCurrentProfile, getPosts })(Dashboard);
