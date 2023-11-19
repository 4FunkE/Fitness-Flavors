//sign up for app
import React, { useState } from "react";
import "../styles/SignUp.css";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/Mutations.js";
import { Link } from "react-router-dom";

// import Auth for authentication
import Auth from "../utils/auth";

export default function Signup() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [registerUser, { error, data }] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleInputSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("test submitted", formData);
      //inseert sign up mutation here
      const { data } = await registerUser({
        variables: { ...formData },
      });
      // front end auth token here
      Auth.login(data.registerUser.token);
    } catch (error) {
      console.error("error in handleInputSubmit:", error);
    }
  };

  // code for login form
  return (
    <div className="SignContainer flex justify-center items-center min-h-screen bg-custom-dark-blue ">
      <div className="signUpContainer bg-custom-secondary w-96">
        <div>
          <div>
            <h2 className="signUpH ">Let's Get Started!</h2>
            {data ? (
            <p>
              Success! You may now head{" "}
              <Link to="/login">login.</Link>
            </p>
          ) : (
            <form className="login-form" onSubmit={handleInputSubmit}>
              {/* <div className="form-group">
            <label for="email-login">Email:</label>
            <input type="text" className="form-control" id="email-login" />
          </div> */}

              <div className="form-group">
                <label htmlFor="username-login">Username:</label>
                <input
                  type="text"
                  className="form-control"
                  id="username-login"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password-login">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  id="password-login"
                />
              </div>
              <div className="form-group">
                <div>
                  <button
                    type="submit"
                    className="signupBtn bg-blue-500 text-white rounded-md pt-1 pb-1 transition-transform transform hover:translate-x-2 hover:bg-green-500 pl-2 pr-2 flex justify-center items-center"
                  >
                    Signup
                  </button>
                </div>
              </div>
            </form>
            )}
            {error && <div className="my-3 p-3 bg-danger ">{error.message}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
