import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';
import Alert from '../layout/Alert';
import { login } from '../../actions/auth';

const Login = ({ setAlert, login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    login(email, password);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />
  }

  return (
    <div className="auth">
      <div className="auth-close">
        <Link to="/" className="close"></Link>
      </div>
      <div className="auth-card container">
        <Alert />
        <h1 className="auth-header">Log Into Chatter</h1>
        <h4 className="auth-secondary">Or <span><Link to="/register"> Create Account</Link></span></h4>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input type="email" placeholder="E-Mail Address" name="email" value={email} onChange={e => onChange(e)} required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" name="password" minLength="6" value={password} onChange={e => onChange(e)} required />
          </div>
          <div className="auth-form-submit">
            <input type="submit" value="Log In" name="submit" />
          </div>
        </form>
      </div>
    </div>
  )
}

Login.propTypes = {
  setAlert: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login, setAlert })(Login)
