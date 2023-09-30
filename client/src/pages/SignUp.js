//sign up for app
import React, { useState } from 'react';
import '../styles/SignUp.css';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/Mutations.js'
import { QUERY_USER } from '../utils/queries';


export default function Signup() {
  const [formData, setFormData] = useState({ username: '', password: '' })
  const [ addUser ] = useMutation(ADD_USER);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleInputSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("test submitted", formData);
      //inseert sign up mutation here
      const { data } = await signupUser({ variables: { ...formData } });
      // front end auth token here
    } catch(error) {
      console.error('error')
    }
  };

  // code for login form
  return (
    <div className="bg-custom-dark-blue h-screen flex flex-col justify-center items-center">
      <div className="signup-container bg-custom-secondary p-4 rounded-lg">
        <h2 className="signUpH bg-custom-secondary ">Let's Get Started!</h2>

        {/* New container with a white background */}

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
            <button type="submit" className="signupBtn">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
