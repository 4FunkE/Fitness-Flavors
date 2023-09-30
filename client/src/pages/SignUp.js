//sign up for app
import React, { useState } from 'react';
import '../styles/SignUp.css';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/Mutations.js'
import { QUERY_USER } from '../utils/queries';




export default function Signup() {
  const [formData, setFormData] = useState({ username: '', password: '' })
  const [signupUser] = useMutation(ADD_USER)
  // const [ addUser ] = useMutation(ADD_USER);


  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setFormData ({ ...formData, [name]: value });
  }


  const handleInputSubmit = async (event) => {
    event.preventDefault()
    try {
      console.log('test submitted', formData);
      //inseert sign up mutation here
      const { data } = await signupUser({ variables: { ...formData } });
      // front end auth token here
      const authToken = data.signup.token;
        console.log('token', authToken)
    } catch(error) {
      console.error('not using token right? or calling token right?')
    }


  }


  // code for login form
  return (
    <div className="signUpContainer">
    <div>
      <div>
        <h2 className='signUpH'>Let's Get Started!</h2>
        <form className="login-form" onSubmit={handleInputSubmit}>
          {/* <div className="form-group">
            <label for="email-login">Email:</label>
            <input type="text" className="form-control" id="email-login" />
          </div> */}
         
          <div className="form-group">
            <label htmlFor="username-login">Username:</label>
            <input type="text" className="form-control" id="username-login" name='username' value={formData.username} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password-login">Password:</label>
            <input type="password" className="form-control" name="password" value={formData.password} onChange={handleInputChange} id="password-login" />
          </div>
          <div className="form-group">
            <button type="submit" className="signupBtn">Login</button>
          </div>
        </form>
      </div>
   
    </div>
    </div>
);
}
