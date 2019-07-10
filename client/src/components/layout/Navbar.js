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
        <div>
        </div>
        <div className="account-btn-wrapper">
          <Link to="/profiles" className="settings-btn">Profiles</Link>
          <Link to="/settings" className="settings-btn">Account</Link>
          <button onClick={logout} className="logout-btn">Logout</button>
          <Link to="/notifications" className="nav-note-btn"><i className="fas fa-bell"></i></Link>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
          <ul className="menu">
            <li><Link className="menu-link" to="/profiles">Profiles</Link></li>
            <li><Link className="menu-link" to="/settings">Account</Link></li>
            <li><button className="menu-link logout-smbtn" onClick={logout}>Logout</button></li>
          </ul>
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
