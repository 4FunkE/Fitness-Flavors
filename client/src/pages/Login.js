import React, { useState } from "react";
import "../styles/Login.css"; // Import your CSS file for styling
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/Mutations";

import Auth from "../utils/auth";

const Login = (props) => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleInputSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("test submitted", formData);
      const { data } = await login({
        variables: { ...formData },
      });

      Auth.login(data.login.token);
    } catch (error) {
      console.error("error login.js, line 37", error);
    }

    setFormData({
      username: "",
      password: "",
    });
  };

  return (
    <div
      id="login"
      className="flex justify-center items-center min-h-screen bg-custom-dark-blue"
    >
      <div className=" bg-custom-secondary w-full max-w-screen-md p-4 border border-solid border-gray-300 rounded-md">
        <h2 className="text-2xl font-semibold mb-4">Welcome back!</h2>
        <div className="card-body">
          {data ? (
            <p>
              Success! You may now head{" "}
              <Link to="/">back to the homepage.</Link>
            </p>
          ) : (
            <form className="login-form " onSubmit={handleInputSubmit}>
              <input
                className="form-input mb-4 p-2 border rounded-md focus:outline-none focus:ring focus:ring-secondary focus:ring-opacity-50"
                placeholder="Your Username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleInputChange}
              />
              <input
                className="form-input mb-4 p-2 border rounded-md focus:outline-none focus:ring focus:ring-secondary focus:ring-opacity-50"
                placeholder="******"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <button
                className="bg-blue-600 rounded-xl  px-4 py-2 mb-6 rounded-md transition-transform transform hover:translate-x-2 hover:bg-green-500"
                type="submit"
              >
                Submit
              </button>
            </form>
          )}

          {error && <div className="my-3 p-3 bg-danger ">{error.message}</div>}
          <p>
            Let's get an account set up for you!{" "}
            <Link to="/SignUp" className="text-dark-blue">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
