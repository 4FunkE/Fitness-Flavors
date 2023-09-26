//sign up for app
import React, { useState } from 'react';
// import './App.css';

export default function Signup() {
  // JSX code for login form
  const signUp = (
    <div className="container">
    <div>
      <div>
        <h2>Let's Get Started!</h2>
        <form className="login-form">
          <div className="form-group">
            <label for="email-login">Email:</label>
            <input type="text" className="form-control" id="email-login" />
          </div>
          <div className="form-group">
            <label for="password-login">Password:</label>
            <input type="password" className="form-control" id="password-login" />
          </div>
          <div className="form-group">
            <button type="submit" className="btn">Login</button>
          </div>
        </form>
      </div>
    
    </div>
    </div>
);
}









