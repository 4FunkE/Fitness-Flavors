import React, { useState, useEffect, useRef } from "react";
import NavBar from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../styles/Header.css";
import logo from "../components/images/Fitness Flavors Logo.png";

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
    <div
      id="header"
      className="bg-gray-900 text-white"
      style={{ height: "6rem" }}
    >
      <div className="container mx-auto p-2 flex justify-between items-center">
        <div id="headerText">
          {/* Replace the h2 with the logo */}
          <img
            src={logo}
            alt="Fitness Flavors Logo"
            className="logo-image mb-16"
            style={{ width: "12.5%" }} // Adjust the size here
          />
        </div>
      </div>
    </div>
  );
}
