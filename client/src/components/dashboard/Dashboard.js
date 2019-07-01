import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import Banner from './Banner';
import PostForm from './PostForm';
import Posts from './Posts';
import Notifications from './Notifications';
import { getCurrentProfile } from '../../actions/profile';

const Dashboard = ({ getCurrentProfile, auth: { user }, profile: { profile, loading } }) => {
  useEffect(() => {
    getCurrentProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return loading && profile === null ? <Spinner /> :
    <div className="dashboard-wrapper">
      <div className="banner-wrapper">
        <Banner avatar={user && user.avatar} firstName={user && user.firstName} lastName={user && user.lastName} profile={profile} />
      </div>
      <div>
        <PostForm />
        <Posts />
      </div>
      <div>
        <Notifications />
      </div>
    </div>
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
