import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Navbar.css'; // Import your CSS file for styling

export default function NavBar() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  // test code
  // const exerciseTest = [
  //   { type: 'Glutes' },
  //   { type: 'Biceps' },
  //   { type: 'Quads' },
  //   { type: 'Lower Abdomen' },
  // ];

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/exercise"); // rediects to /exercis
}

  return (
    <div id="navBar" className="container">
      <div id="navBarText">
        <ul className="navUl">
          <li>Profile</li>
          <li>SignIn</li>
          <li>Login</li>
          <li>Exercise</li>
          {/* <li>Nutrition COMING SOON</li> */}
        </ul>
      </div>
      <div>
      <form onSubmit={handleSubmit}>
      <input 
      type="text" 
      placeholder="Search.." 
      onChange={(e) => setSearchInput(e.target.value)}
      value={searchInput}
      />
      <button type="submit">Search!</button>
        </form>
      </div>
    </div>
  );
}
