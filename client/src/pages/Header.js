// header for app
import React from "react";
import NavBar from './NavBar';
import '../styles/Header.css'; // Import your CSS file for styling

export default function Header() {
  return (
    <div id="header" className="container">
      <div id="headerText">
        <h2>Fitness Flavors</h2>
      <NavBar />
    </div>
  </div>
  );
};