// nav for app
import React from "react";
// import './App.css';

export default function NavBar() {
  return (
    <div id="navBar" className="container">
      <div id="navBarText">
        <ul>
          <li>Profile</li>
          <li>SignIn</li>
          <li>Profile</li>
          {/* <li>Nutrition COMING SOON</li> */}
        </ul>
      </div>
    </div>
  );
}