import React, { useEffect, useState } from "react";
import '../styles/Home.css';
import logo from "../components/images/Fitness Flavors Logo.png"; 

function Navbar() {


  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">
          <img src={logo} alt="Fitness Flavors Logo" /> {}
        </a>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/">Search</a> 
          {/* placeholders until we know whats actually going to get used */}
        </li>
        <li className="nav-item">
          <a href="/about">Login</a>
        </li>
        <li className="nav-item">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;






