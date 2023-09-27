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
import React, { useState } from "react";
import NavBar from "./NavBar";
// import './App.css';

export default function Header() {
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    exercise.filter((exercise) => {
      return exercise.name.match(searchInput);
    });
  }

  return (
    <div id="header" className="container">
      {/* make search bar */}
      <div id="headerText">
        <h2>Fitness Flavors</h2>
        <NavBar></NavBar>
        <input
          type="text"
          placeholder="Search here"
          onChange={handleChange}
          value={searchInput}
        />
      </div>
      <div id="headerText">
        <h2>Fitness Flavors</h2>
      <NavBar />
    </div>
  </div>
  );
};