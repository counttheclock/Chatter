import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import Alert from '../layout/Alert';
import PropTypes from 'prop-types'

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: ''
  });

  const { firstName, lastName, email, password, password2 } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ firstName, lastName, email, password });
    }
  }

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
        <h1 className="auth-header">Create Account</h1>
        <h4 className="auth-secondary">Already Have An Account?<span><Link to="/login"> Log In</Link></span></h4>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input type="text" placeholder="First Name" name="firstName" value={firstName} onChange={e => onChange(e)} required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Last Name" name="lastName" value={lastName} onChange={e => onChange(e)} required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="E-Mail Address" name="email" value={email} onChange={e => onChange(e)} required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" name="password" minLength="6" value={password} onChange={e => onChange(e)} required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Confirm Password" name="password2" minLength="6" value={password2} onChange={e => onChange(e)} required />
          </div>
          <div className="auth-form-submit">
            <input type="submit" value="Create Account" name="submit" />
          </div>
        </form>
      </div>
    </div>
  )
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
