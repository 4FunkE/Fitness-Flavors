import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"; // Import the hamburger menu icon
import "../styles/Header.css"; // Import your CSS file for additional styling if needed

export default function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="header" className="bg-gray-900 text-white">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div id="headerText">
          <h2 className="text-3xl font-semibold">Fitness Flavors</h2>
        </div>
        {isMobile ? (
          // Render hamburger menu on mobile
          <MobileMenu />
        ) : (
          // Render buttons on desktop and tablet
          <div className="flex items-center">
            <NavBar />
            <div className="ml-auto">
              <button className="mr-2">Profile</button>
              <button>Sign Up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function MobileMenu() {
  // Implement your mobile menu with the hamburger icon here
  return (
    <div className="flex items-center">
      <NavBar />
      {/* Hamburger menu icon */}
      <div className="ml-auto">
        <FontAwesomeIcon icon={faBars} size="lg" />
      </div>
    </div>
  );
}
