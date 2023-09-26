// header for app
import React from "react";
import NavBar from './NavBar';
// import './App.css';

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