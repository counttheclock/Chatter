import React from 'react';
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <section className="landing">
      <div className="landing-inner">
        <h1 className="landing-brand">Chatter</h1>
        <div className="landing-buttons">
          <Link to="/register" className="btn btn-landing">Sign Up </Link>
          <Link to="/login" className="btn btn-landing">Login </Link>
        </div>
      </div>
    </section>
  )
}

export default Landing
