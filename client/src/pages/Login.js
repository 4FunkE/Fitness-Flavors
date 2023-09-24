//login page for app
import React, { useState } from "react";
import  { SignUp } from '../views/SignUp';
import './App.css';


export default function makeNewUser() {
  //code for login form
  const login = (
    <div id="login" className="container">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h2>Welcome back!</h2>
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
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </form>
        <p>Let's get an account set up for you! <a href="/SignUp"> Signup </a></p>
      </div>
      
    </div>
  </div>
  );

  return (
    <div className="signup">
    {SignUp}
</div>
  )


};