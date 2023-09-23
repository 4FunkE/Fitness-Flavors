//login page for app
import React, { useState } from "react";
import  { SignUp } from '../views/SignUp'


export default function makeNewUser() {
  // JSX code for login form
  const login = (
    <div id="login" class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h2>Welcome back!</h2>
        <form class="login-form">
          <div class="form-group">
            <label for="email-login">Email:</label>
            <input type="text" class="form-control" id="email-login" />
          </div>
          <div class="form-group">
            <label for="password-login">Password:</label>
            <input type="password" class="form-control" id="password-login" />
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary">Login</button>
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


}



