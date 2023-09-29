// NavBar.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function NavBar() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/exercise"); // Redirects to /exercise
  };

  return (
    <div id="navBar" className="container">
      <div id="navBarText">
        <ul className="navUl">
          <li>
            <Link to='profile'>Profile</Link>
          </li>
          <li>
            <Link to='/signup'>SignUp</Link>
          </li>
          <li>
            <Link to='login'>Login</Link>
          </li>
          <li>
            <Link to='/exercise'>Exercise</Link>
          </li>
          {/* <li>Nutrition COMING SOON</li> */}
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