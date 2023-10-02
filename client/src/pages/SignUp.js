//sign up for app
import React, { useState } from 'react';
import '../styles/SignUp.css';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/Mutations.js'

// import Auth for authentication
import Auth from '../utils/auth';

export default function Signup() {
  const [formData, setFormData] = useState({ username: '', password: '' })
  const [ registerUser ] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setFormData ({ ...formData, [name]: value });
  }


  const handleInputSubmit = async (event) => {
    event.preventDefault()
    try {
          console.log('test submitted', formData);
          //inseert sign up mutation here
          const { data } = await registerUser({
            variables: { ...formData },
          });
      // front end auth token here
      Auth.login(data.registerUser.token);

    } catch(error) {
      console.error('error in handleInputSubmit:', error);
    }


  }


  // code for login form
  return (
    <div className="signUpContainer">
    <div>
      <div>
        <h2 className='signUpH'>Let's Get Started!</h2>
        <form className="signup-form" onSubmit={handleInputSubmit}>
          {/* <div className="form-group">
            <label for="email-login">Email:</label>
            <input type="text" className="form-control" id="email-login" />
          </div> */}
         
          <div className="form-group">
            <label htmlFor="username-signup">Username:</label>
            <input type="text" className="form-control" id="username-signup" name='username' value={formData.username} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password-signup">Password:</label>
            <input type="password" className="form-control" name="password" value={formData.password} onChange={handleInputChange} id="password-signup" />
          </div>
          <div className="form-group">
            <button type="submit" className="signupBtn">Signup</button>
          </div>
        </form>
      </div>
   
    </div>
    </div>
);
}