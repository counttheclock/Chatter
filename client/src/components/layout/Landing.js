import React from 'react'

const Landing = () => {
  return (
    <section className="landing">
      <div className="landing-inner">
        <h1 className="landing-brand">Chatter</h1>
        <div className="landing-buttons">
          <a href="register.html" className="btn btn-landing">Sign Up</a>
          <a href="login.html" className="btn btn-landing">Login</a>
        </div>
      </div>
    </section>
  )
}

export default Landing
