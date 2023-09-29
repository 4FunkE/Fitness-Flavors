// ScrollAnimatedSection.js
import React, { useState, useEffect, useRef } from "react";

const ScrollAnimatedSection = ({ children, animationClass }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;

        if (rect.top < windowHeight * 0.75 && rect.bottom >= 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`bg-custom-dark-blue py-8 md:py-16 ${
        isVisible ? `animate__animated ${animationClass}` : ""
      }`}
    >
      {children}
    </section>
  );
};

export default ScrollAnimatedSection;
