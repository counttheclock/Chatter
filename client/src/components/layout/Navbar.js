import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import logo from '../../img/Logo.png'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'

const Navbar = ({ auth: { isAuthenticated, loading }, logout, location }) => {
  if (location.pathname.match('/login') || location.pathname.match('/register')) {
    return null;
  }
  return (
    <div>
      <nav>
        <div className="logo">
          <Link to="/dashboard"><img className="logo-img" src={logo} alt="logo" /></Link>
        </div>
        <div className="search">
          <form className="search-form">
            <input className="seach-input" type="text" placeholder="Search" />
          </form>
        </div>
        <div className="account-btn-wrapper">
          <Link to="/settings" className="settings-btn">Account</Link>
          <button onClick={logout} className="logout-btn">Logout</button>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default withRouter(connect(mapStateToProps, { logout })(Navbar));
