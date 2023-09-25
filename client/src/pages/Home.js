import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_MESSAGE, UPDATE_MESSAGE } from "./graphql";
import "../styles/Home.css";

function HomePage() {
  // Define state for the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Define  GraphQL query
  const { loading, error, data } = useQuery(GET_MESSAGE);

  // Define  GraphQL mutation
  const [updateMessage] = useMutation(UPDATE_MESSAGE);

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-gray-100 font-sans">
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl text-white font-semibold">Fitness Hub</h1>
          {/* Hamburger Menu for Mobile */}
          <div className="sm:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          {/* Desktop Menu */}
          <ul className="hidden sm:flex space-x-4">
            <li>
              <a href="#" className="text-white hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:underline">
                Classes
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:underline">
                Trainers
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-blue-500 bg-opacity-90 z-50 transform translate-x-full transition-transform ease-in-out duration-300">
          <ul className="text-white text-center mt-16">
            <li>
              <a href="#" className="block py-4 px-6 text-xl hover:bg-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block py-4 px-6 text-xl hover:bg-blue-600">
                Classes
              </a>
            </li>
            <li>
              <a href="#" className="block py-4 px-6 text-xl hover:bg-blue-600">
                Trainers
              </a>
            </li>
            <li>
              <a href="#" className="block py-4 px-6 text-xl hover:bg-blue-600">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Rest of  content */}
    </div>
  );
}

export default HomePage;
