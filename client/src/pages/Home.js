import React, { useState, useEffect } from "react";
import "animate.css"; // Import animate.css
import image1 from "../components/images/mail.jpg";
import homeimg from "../components/images/homeimg.jpg";
import "../styles/Home.css";
import "../index.css";
import workout1 from "../components/images/gigachad.jpg";
import workout2 from "../components/images/yoga.jpg";
import workout3 from "../components/images/workout3.jpg";

// Import the ScrollAnimatedSection component
import ScrollAnimatedSection from "./ScrollAnimatedSection";

function HomePage() {
  // Define state for the cards data
  const [cardsData, setCardsData] = useState([]);

  // Fetch data from your API
  useEffect(() => {
    // Replace 'fetchDataFromAPI' with your actual API fetch function
    fetchDataFromAPI()
      .then((data) => setCardsData(data))
      .catch((error) => console.error(error));
  }, []);

  // Function to fetch data from your API
  const fetchDataFromAPI = async () => {
    try {
      // Replace 'apiEndpoint' with the actual API endpoint
      const response = await fetch("apiEndpoint");
      if (!response.ok) {
        throw new Error("Failed to fetch data from the API");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };

  // Render individual card components based on data
  const renderCards = () => {
    return cardsData.map((card, index) => (
      <div
        key={index}
        className="w-full md:w-1/4 animate__animated animate__fadeInUp mb-4 md:mb-0"
      >
        <div className="bg-white rounded-lg p-4 md:p-6 shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
          <h3 className="text-lg md:text-xl font-semibold">{card.title}</h3>
          <p className="text-gray-600 mt-2">{card.description}</p>
        </div>
      </div>
    ));
  };

  return (
    <div>
      {/* Hero Section */}
      <ScrollAnimatedSection animationClass="animate__fadeIn">
        <div className="bg-custom-dark-blue py-16 md:py-32 text-white text-center relative">
          <div
            className="absolute inset-0 h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${homeimg})` }}
          ></div>

          <div className="container mx-auto relative">
            <div className="container mx-auto text-center text-white pt-96 h-screen">
              <div className="animate__animated animate__slideInLeft custom-slide-in-left">
                <h1 className="animate__animated animate__fadeInUp text-3xl md:text-5xl font-bold">
                  Achieve Your Fitness Goals
                </h1>
                <p className="animate__animated animate__fadeInUp animate__delay-1s text-xl md:text-2xl mt-4 animate__delay-1s animate__slideInRight">
                  Join us and transform your body!
                </p>
                <a
                  href="#"
                  className="mt-8 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 md:px-6 rounded-full animate__animated animate__fadeInUp animate__delay-2s infinite-pulse"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimatedSection>

      {/* Cards Section */}
      <ScrollAnimatedSection animationClass="animate__fadeInUp">
        <div className="bg-custom-primary text-center">
          <div className="flex flex-wrap">{renderCards()}</div>
        </div>
      </ScrollAnimatedSection>

      {/* About Section */}
      <ScrollAnimatedSection animationClass="animate__fadeIn">
        <div className="bg-custom-secondary">
          <div className="container mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-center pt-24 pb-8">
              About Us
            </h3>
            <p className="text-center mt-4 text-lg md:text-xl font-semibold pb-16">
              "Harnessing the Energy of Fitness to Ignite Passion for a Balanced
              Life."
            </p>
            <div className="flex justify-center space-x-4 pb-24">
              <img
                src={workout1}
                alt="Workout 1"
                className="ml-4 w-1/4 rounded-xl animate__animated animate__slideInLeft"
              />
              <img
                src={workout2}
                alt="Workout 2"
                className="w-1/4 rounded-xl animate__animated animate__slideInUp"
              />
              <img
                src={workout3}
                alt="Workout 3"
                className="w-1/4 rounded-xl animate__animated animate__slideInRight"
              />
            </div>
          </div>
        </div>
      </ScrollAnimatedSection>

      {/* Our Classes Section */}
      <ScrollAnimatedSection animationClass="animate__fadeIn">
        <section className="bg-custom-dark-blue py-8 md:py-16 ">
          <div className="container mx-auto text-center pb-20">
            <h2 className="text-white text-xl md:text-3xl font-semibold pb-8">
              Our Classes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-8">
              {/* Class Card 1 */}
              <div className="animate__animated animate__slideInLeft">
                <div className="bg-custom-secondary rounded-lg p-4 md:p-6 shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
                  <h3 className=" text-lg md:text-xl font-semibold">Yoga</h3>
                  <p className="text-gray-600 mt-2 pb-6">
                    Improve flexibility and find inner peace with our yoga
                    classes.
                  </p>
                </div>
              </div>
              {/* Class Card 2 */}
              <div className="animate__animated animate__slideInUp">
                <div className="bg-custom-secondary rounded-lg p-4 md:p-6 shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
                  <h3 className="text-lg md:text-xl font-semibold">
                    Strength Training
                  </h3>
                  <p className="text-gray-600 mt-2 ">
                    Build muscle and increase your strength with our strength
                    training sessions.
                  </p>
                </div>
              </div>
              {/* Class Card 3 */}
              <div className="animate__animated animate__slideInRight">
                <div className="bg-custom-secondary rounded-lg p-4 md:p-6 shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
                  <h3 className="text-lg md:text-xl font-semibold">Cardio</h3>
                  <p className="text-gray-600 mt-2 pb-6">
                    Get your heart rate up and burn calories in our cardio
                    classes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimatedSection>

      {/* Contact Section */}
      <ScrollAnimatedSection animationClass="animate__fadeIn">
        <div className="bg-custom-accent py-16 md:py-32 text-white text-center">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 p-4 md:p-8 md:pl-32">
              <img
                src={image1}
                alt="Image 1"
                className="max-w-full h-auto md:pt-16 move-up-down"
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
                    className="text-white bg-blue-500 rounded-full px-4 md:px-6 py-2 hover:bg-green-600 hover:text-white mt-4 animate__animated animate__fadeInUp animate__delay-2s infinite-pulse"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimatedSection>
    </div>
  );
}

export default HomePage;
