import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Logo from '../../img/Logo.png'

const Landing = ({ isAuthenticated }) => {
  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />
  }

  return (
    <div className="landing-outer">
      <div className="landing-wrapper">
        <div className="welcome">
          Welcome To
        </div>
        <div className="landing-logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="sub-tag">
          The World's Most Unnecessary Social Meida Site
        </div>
        <div className="loginorsign">
          <div className="landing-btn">
            <Link to="/login">Login</Link>
          </div>
          <span className="landing-or">
            or
        </span>
          <div className="landing-btn">
            <Link to="/register">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
