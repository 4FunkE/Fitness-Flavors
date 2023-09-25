import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_MESSAGE, UPDATE_MESSAGE } from "./graphql";
import { useInView } from "react-intersection-observer"; // Import the in-view hook

import "../styles/tailwind.css"; // Import Tailwind CSS
import "../styles/animate.css"; // Import Animate.css for animations

function HomePage() {
  // Define state for the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Define your GraphQL query
  const { loading, error, data } = useQuery(GET_MESSAGE);

  // Define your GraphQL mutation
  const [updateMessage] = useMutation(UPDATE_MESSAGE);

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Use the in-view hook to detect when the sliding images section is in view
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div className="bg-gray-100 font-sans">
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl text-white font-semibold">Fitness Flavors</h1>
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
          {/* all of the following nav bar options are just place holders atm */}
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

      <div className="container mx-auto mt-8">
        <p>Your content goes here.</p>
      </div>

      {/* Sliding Images Section */}
      <div
        className="container mx-auto mt-8"
        ref={ref} // Attach the ref to the sliding images section
      >
        <div className="flex flex-wrap">
          {/* Check if the section is in view, and apply animations */}
          {inView && (
            <>
              <div className="w-full md:w-1/2 animation-container animate__animated animate__slideInLeft">
                <img src="image1.jpg" alt="Image 1" />
              </div>
              <div className="w-full md:w-1/2 animation-container animate__animated animate__slideInRight">
                <img src="image2.jpg" alt="Image 2" />
              </div>
              <div className="w-full md:w-1/2 animation-container animate__animated animate__slideInLeft">
                <img src="image3.jpg" alt="Image 3" />
              </div>
              <div className="w-full md:w-1/2 animation-container animate__animated animate__slideInRight">
                <img src="image4.jpg" alt="Image 4" />
              </div>
              {/* Add more images as needed */}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
