import React, { useState, useEffect } from "react";
import "animate.css"; // Import animate.css
import image1 from "../components/images/image1.jpg";
import image2 from "../components/images/image2.jpg";
import image3 from "../components/images/image3.jpg";
import image4 from "../components/images/image4.jpg";
import homeimg from "../components/images/homeimg.jpg";
import "../styles/Home.css";
import "../pages/NavBar";
import "../pages/Header";
import "../pages/Footer";
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
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/animate.css@4.1.1/animate.min.css"
      />
      <div
        className="bg-cover bg-center  mb-96 h-screen w-auto"
        style={{ backgroundImage: `url(${homeimg})` }}
      >
        <div class="container mx-auto text-center text-white pt-96">
          <h1 class="text-5xl font-bold animate__animated animate__fadeInUp">
            Achieve Your Fitness Goals
          </h1>
          <p class="text-xl mt-4 animate__animated animate__fadeInUp animate__delay-1s">
            Join us and transform your body!
          </p>
          <a
            href="#"
            class="mt-8 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full animate__animated animate__fadeInUp animate__delay-2s"
          >
            Get Started
          </a>
        </div>
      </div>
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
          quam fermentum bibendum.sdadwdadasdw
        </p>
      </div>
      {/* our classes section or what ever yall wanna do or change to this */}
      <section className="bg-brown-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold">Our Classes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {/* Class Card 1 */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold">Yoga</h3>
              <p className="text-gray-600 mt-2">
                Improve flexibility and find inner peace with our yoga classes.
              </p>
            </div>
            {/*  */}
            {/* Class Card 2 */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold">Strength Training</h3>
              <p className="text-gray-600 mt-2">
                Build muscle and increase your strength with our strength
                training sessions.
              </p>
            </div>
            {/* Class Card 3 */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold">Cardio</h3>
              <p className="text-gray-600 mt-2">
                Get your heart rate up and burn calories in our cardio classes.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <div className="bg-blue-900 py-32 text-white text-center flex">
        <div className="w-1/2 p-8 pl-32 ">
          <img
            src={image1}
            alt="Image 1"
            className="max-w-full h-auto pt-16 rounded-lg"
          />
        </div>
        <div className="w-1/2 p-8">
          <div className="container mx-auto w-96">
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <p>Have questions or need assistance? Contact us today!</p>
            <form className="mt-4">
              <div className="mb-4">
                <label
                  className="block text-left text-white mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full border-2 border-blue-300 rounded-lg py-2 px-3"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-left text-white mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full border-2 border-blue-300 rounded-lg py-2 px-3"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-left text-white mb-2"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  className="w-full border-2 border-blue-300 rounded-lg py-2 px-3"
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-left text-white mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full border-2 border-blue-300 rounded-lg py-2 px-3"
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-white text-blue-500 rounded-full px-6 py-2 hover:bg-green-600 hover:text-white"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
