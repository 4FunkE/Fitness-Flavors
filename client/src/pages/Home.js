import React, { useState, useEffect } from "react";
import "animate.css"; // Import animate.css
import image1 from "../components/images/image1.jpg";
import image2 from "../components/images/image2.jpg";
import image3 from "../components/images/image3.jpg";
import image4 from "../components/images/image4.jpg";
import "../styles/Home.css";

function HomePage() {
  // Define state for the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Use the in-view hook to detect when the sliding images section is in view

  return (
    <div>
      {/* Sliding Images Section */}
      <div className="container mx-auto mt-8 text-center ">
        <div className="flex flex-wrap ">
          {/* Apply animation classes */}
          <div className="w-64 md:w-1/5 animate__animated animate__slideInLeft img1">
            <img src={image1} alt="Image 1" />
          </div>
          <div className="w-64 md:w-1/5 animate__animated animate__slideInRight img2">
            <img src={image2} alt="Image 2" />
          </div>
          <div className="w-64 md:w-1/5 animate__animated animate__slideInLeft img3">
            <img src={image3} alt="Image 3" />
          </div>
          <div className="w-64 md:w-1/5 animate__animated animate__slideInRight img4">
            <img src={image4} alt="Image 4" />
          </div>
        </div>
      </div>
      {/* About Section */}
      <div className="container mx-auto mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-center">About Us</h3>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius
          tristique urna, id consectetur libero tincidunt eget. Nullam efficitur
          aliquet lectus, at tristique dolor tempor non. Vivamus id justo at
          quam fermentum bibendum.
        </p>
      </div>
      {/* Contact Section */}
      <div className="bg-blue-500 py-64 text-white text-center">
        <div className="container mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <p>Have questions or need assistance? Contact us today!</p>
          <button className="bg-white text-blue-500 rounded-full px-6 py-2 mt-4 hover:bg-blue-600 hover:text-white">
            Get in Touch
          </button>
          <form className="mt-4">
            {/* Add form fields and animation classes */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
