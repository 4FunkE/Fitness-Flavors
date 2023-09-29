import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Routes, useNavigate, Link } from "react-router-dom";
// import ExerciseCard from "../components/views/ExerciseCard";

export default function NavBar() {
  return (
    <div id="navBar" className="container">
      <div id="navBarText">
        <ul className="navUl">
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="login">Login</Link>
          </li>
          <li>
            <Link to="/exercise">Exercise</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
