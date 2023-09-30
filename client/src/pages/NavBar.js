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
    <div id="navBar" className="container" style={{ padding: 0, margin: 0 }}>
      <div
        className="pb-6"
        id="navBarText"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%", // Set width to 100%
        }}
      >
        <div>
          <Link to="/" className="text-white font-bold text-xl ">
            Fitness Flavors
          </Link>
        </div>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", alignItems: "center" }}
        >
          <input
            type="text"
            placeholder="Select your muscle group ..."
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
            className="pl-2 pr-2 rounded-xl mt-2"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-xl ml-4 pl-4 pr-4 mt-2  transition-transform transform hover:translate-x-2 hover:bg-green-500"
          >
            Search!
          </button>
        </form>
        <div>
          <ul className="navUl" style={{ marginLeft: "auto" }}>
            <Link to="profile" className="text-white pl-4 pr-4">
              Profile
            </Link>

            <Link to="/signup" className="text-white pl-4 pr-4">
              SignUp
            </Link>

            <Link to="login" className="text-white pl-4 pr-4">
              Login
            </Link>

            <Link to="/exercise" className="text-white pl-4 pr-4">
              Exercise
            </Link>
          </ul>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center", // Center the search input
        }}
      ></div>
    </div>
  );
}
