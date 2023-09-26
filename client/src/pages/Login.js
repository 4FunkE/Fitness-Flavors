//login page for app
import React, { useState } from "react";
// import './App.css';
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/Mutations.js';




export default function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' })
  // const [ loginUser ] = useMutation(LOGIN_USER);
  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setFormData ({ ...formData, [name]: value });
  }

  const handleInputSubmit = async (event) => {
    event.preventDefault()
    try {
      console.log('test submitted', formData);
      //inseert sign up mutation here
      // const { data } = await loginUser({ variables: { ...formData } });
      // front end auth token here
    } catch(error) {
      console.error('error')
    }

  }
  

  //code for login form
  return (
    <div id="login" className="container">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h2>Welcome back!</h2>
        <form className="login-form" onSubmit={handleInputSubmit}>
        <div className="form-group">
            <label for="username-login">Username:</label>
            <input type="text" className="form-control" id="username-login" name='username' value={formData.username} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label for="password-login">Password:</label>
            <input type="password" className="form-control" name="password" value={formData.password} onChange={handleInputChange} id="password-login" />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </form>
        <p>Let's get an account set up for you! <a href="/SignUp"> Signup </a></p>
      </div>
      
    </div>
  </div>
  )
};