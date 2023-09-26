//login page for app
import React, { useState } from "react";
// import './App.css';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/Mutations';

import Auth from '../utils/auth';

const Login = (props) => {
  const [formData, setFormData] = useState({ username: '', password: '' })
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleInputChange = (event) => {
    const {name, value} = event.target;
    
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  // submit form
  const handleInputSubmit = async (event) => {
    event.preventDefault()
    console.log(formData);
    try {
      console.log('test submitted', formData);
      const { data } = await login({
        variables: { ...formData }
      });

      Auth.login(data.login.token);
    } catch (error) {
      console.error('error login.js, line 37')
    }

    // clear form values
    setFormData({
      username: '',
      password: '',
    });
  };
  

//code for login form
return (
  <div id="login" className="container">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h2>Welcome back!</h2>
        <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form className="login-form" onSubmit={handleInputSubmit}>
                <input
                  className="form-input"
                  placeholder="Your Username:"
                  name="username"
                  type="string"
                  value={formData.username}
                  onChange={handleInputChange}
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <button
                  className="btn btn-block btn-info"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          <p>Let's get an account set up for you! <a href="/SignUp"> Signup </a></p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Login;