// NavBar.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div id="navBar" className="container" style={{ width: "100%" }}>
      <div id="navBarText">
        <ul className="navUl">
          <li>
            <Link to="profile">Profile</Link>
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
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Select your muscle group ..."
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
          />
          <button type="submit">Search!</button>
        </form>
      </div>
    </div>
  );
}
