import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="auth">
      <div className="auth-close">
        <Link to="/">
          <i class="fas fa-times"></i>
        </Link>
      </div>
      <div className="auth-card container">
        <h1 className="auth-header">Log Into Chatter</h1>
        <h4 className="auth-secondary">Or <span><Link to="/register"> Create Account</Link></span></h4>
        <form>
          <div className="form-group">
            <input type="email" placeholder="E-Mail Address" name="login-email" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" name="login-password" minLength="6" required />
          </div>
          <div className="auth-form-submit">
            <input type="submit" value="Log In" name="login-submit" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
