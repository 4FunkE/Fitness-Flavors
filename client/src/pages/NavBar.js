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
    <div id="navBar" className="container" style={{ width: "100%" }}>
      <div id="navBarText">
        <ul className="navUl ">
          <li>
            <Link to="profile" className="text-white">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/signup" className="text-white">
              SignUp
            </Link>
          </li>
          <li>
            <Link to="login" className="text-white">
              Login
            </Link>
          </li>
          <li>
            <Link to="/exercise" className="text-white">
              Exercise
            </Link>
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
            className="pl-2 pr-2 rounded-xl"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-xl ml-4 pl-4 pr-4 transition-transform transform hover:translate-x-2 hover:bg-green-500"
          >
            Search!
          </button>
        </form>
      </div>
    </div>
  );
}
