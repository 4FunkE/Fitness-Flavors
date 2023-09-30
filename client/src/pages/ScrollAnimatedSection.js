import React, { useEffect, useRef } from "react";

function ScrollAnimatedSection({ animationClass, children }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    // Function to check if the section is in the viewport
    const isSectionInViewport = () => {
      const rect = section.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    };

    const handleScroll = () => {
      if (isSectionInViewport()) {
        // Add the animate__animated class and the specified animation class
        section.classList.add("animate__animated", animationClass);
      } else {
        // Remove the animation classes if the section is not in the viewport
        section.classList.remove("animate__animated", animationClass);
      }
    };

    // Add an event listener for scroll events
    window.addEventListener("scroll", handleScroll);

    // Initial check when the component mounts
    handleScroll();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animationClass]);

  return <div ref={sectionRef}>{children}</div>;
}

export default ScrollAnimatedSection;
