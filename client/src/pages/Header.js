// header for app
import React, { useState, useEffect, useRef } from "react"; // Import React and hooks
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import "../styles/Header.css"; // Import your CSS file for styling

export default function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div id="header" className="container">
      <div id="headerText">
        <h2 className="color pt-4">
          {/* <Link to="/" className="text-white">
            Fitness Flavors
          </Link> */}
        </h2>
      </div>
      <NavBar />
    </div>
  );
}
