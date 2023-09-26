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
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Clean up the link element when the component unmounts
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div>
      <div className="container mx-auto mt-8">
        <p>Your content goes here.</p>
      </div>

      {/* Sliding Images Section */}
      <div className="container mx-auto mt-8">
        <div className="flex flex-wrap">
          {/* Apply animation classes */}
          <div className="w-64 md:w-1/5 animate__animated animate__fadeInLeft img1">
            <img src={image1} alt="Image 1" />
          </div>
          <div className="w-full md:w-1/5 animate__animated animate__fadeInRight img2">
            <img src={image2} alt="Image 2" />
          </div>
          <div className="w-full md:w-1/5 animate__animated animate__fadeInLeft img3">
            <img src={image3} alt="Image 3" />
          </div>
          <div className="w-full md:w-1/5 animate__animated animate__fadeInRight img4">
            <img src={image4} alt="Image 4" />
          </div>
          {/* Add more images as needed */}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
