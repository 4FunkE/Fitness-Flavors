import React, { useState } from "react";
import NavBar from "./NavBar";
// import './App.css';

export default function Header() {
  return (
    <div id="header" className="container">
      {/* make search bar */}
      <div id="headerText">
        <h2>Fitness Flavors</h2>
      </div>
      <NavBar />
    </div>
  );
};