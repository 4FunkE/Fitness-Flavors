import React, { useState } from "react";
import "animate.css"; // Import animate.css
import image1 from "../components/images/image1.jpg";
import image2 from "../components/images/image2.jpg";
import image3 from "../components/images/image3.jpg";
import image4 from "../components/images/image4.jpg";
import homeimg from "../components/images/homeimg.jpg";
import "../styles/Home.css";
import "../index.css";

function HomePage() {
  // Define state for the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-custom-dark-blue py-16 md:py-32 text-white text-center relative">
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${homeimg})` }}
        ></div>
        <div className="container mx-auto relative">
          <div className="container mx-auto text-center text-white pt-16 md:pt-96">
            <h1 className="text-3xl md:text-5xl font-bold animate__animated animate__fadeInUp">
              Achieve Your Fitness Goals
            </h1>
            <p className="text-xl md:text-2xl mt-4 animate__animated animate__fadeInUp animate__delay-1s">
              Join us and transform your body!
            </p>
            <a
              href="#"
              className="mt-8 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 md:px-6 rounded-full animate__animated animate__fadeInUp animate__delay-2s"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      {/* Sliding Images Section */}
      <div className="bg-custom-primary text-center py-16 md:py-32">
        <div className="flex flex-wrap">
          {/* Left Sliding Images */}
          <div className="w-full md:w-1/2 animate__animated animate__slideInLeft animate__delay-3s">
            <img
              src={image1}
              alt="Image 1"
              className="w-48 md:w-64 h-48 md:h-64"
            />
          </div>
          <div className="w-full md:w-1/2 animate__animated animate__slideInLeft animate__delay-3s">
            <img
              src={image2}
              alt="Image 2"
              className="w-48 md:w-64 h-48 md:h-64"
            />
          </div>

          {/* Right Sliding Images */}
          <div className="w-full md:w-1/2 animate__animated animate__slideInRight animate__delay-3s">
            <img
              src={image3}
              alt="Image 3"
              className="w-48 md:w-64 h-48 md:h-64"
            />
          </div>
          <div className="w-full md:w-1/2 animate__animated animate__slideInRight animate__delay-3s">
            <img
              src={image4}
              alt="Image 4"
              className="w-48 md:w-64 h-48 md:h-64"
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-custom-secondary">
        <div className="container mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
            About Us
          </h3>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            varius tristique urna, id consectetur libero tincidunt eget. Nullam
            efficitur aliquet lectus, at tristique dolor tempor non. Vivamus id
            justo at quam fermentum bibendum.sdadwdadasdw
          </p>
        </div>
      </div>

      {/* Our Classes Section */}
      <section className="bg-custom-secondary py-8 md:py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-semibold">Our Classes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-8">
            {/* Class Card 1 */}
            <div className="bg-white rounded-lg p-4 md:p-6 shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-lg md:text-xl font-semibold">Yoga</h3>
              <p className="text-gray-600 mt-2">
                Improve flexibility and find inner peace with our yoga classes.
              </p>
            </div>
            {/* Class Card 2 */}
            <div className="bg-white rounded-lg p-4 md:p-6 shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-lg md:text-xl font-semibold">
                Strength Training
              </h3>
              <p className="text-gray-600 mt-2">
                Build muscle and increase your strength with our strength
                training sessions.
              </p>
            </div>
            {/* Class Card 3 */}
            <div className="bg-white rounded-lg p-4 md:p-6 shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-lg md:text-xl font-semibold">Cardio</h3>
              <p className="text-gray-600 mt-2">
                Get your heart rate up and burn calories in our cardio classes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div className="bg-custom-dark-blue py-16 md:py-32 text-white text-center">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 p-4 md:p-8 md:pl-32">
            <img
              src={image1}
              alt="Image 1"
              className="max-w-full h-auto md:pt-16"
            />
          </div>
          <div className="w-full md:w-1/2 p-4 md:p-8">
            <div className="w-full md:w-96 mx-auto">
              <h3 className="text-lg md:text-2xl font-semibold mb-4">
                Contact Us
              </h3>
              <p className="text-white">
                Have questions or need assistance? Contact us today!
              </p>
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
                  className="bg-white text-blue-500 rounded-full px-4 md:px-6 py-2 hover:bg-green-600 hover:text-white mt-4"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Donation() {
  return (
    <div className="donation-container">
      <h2 className="donation-heading">Donation</h2>
      <p>
        If you'd like to support our work, you can donate using the button
        below:
      </p>
      <button className="donation-button">Donate</button>
    </div>
  );
}

export default HomePage;
