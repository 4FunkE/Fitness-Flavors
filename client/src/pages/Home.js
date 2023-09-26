import React, { useState } from "react";
import { useInView } from "react-intersection-observer"; // Import the useInView hook
import "../styles/Home.css";

function HomePage() {
  // Define state for the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Use the in-view hook to detect when the sliding images section is in view
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      {/* Add Tailwind CSS and Animate.css links here */}
      <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />

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
