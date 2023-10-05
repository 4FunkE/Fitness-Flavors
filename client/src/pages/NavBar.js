import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import weight from "../components/images/weight.png";
import Auth from "../utils/auth.js";

export default function NavBar() {
  const [searchInput, setSearchInput] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 1300);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/exercise");
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1300);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="navBar" className="container" style={{ padding: 0, margin: 0 }}>
      <div
        className="pb-6"
        id="navBarText"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Link to="/" className="text-white font-bold text-xl">
            Fitness Flavors
          </Link>
        </div>

        <div>
          {isMobileView ? (
            <div style={{ marginLeft: "auto" }}>
              <img
                src={weight} // Use the imported image variable here
                alt="Hamburger Menu"
                className="hamburger-icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)} // Open the menu when clicked
              />
            </div>
          ) : (
            <ul className="navUl" style={{ marginLeft: "auto" }}>
              {Auth.loggedIn() ? (
                <Link to="profile" className=" text-white pl-4 pr-4">
                  Profile
                </Link>
              ) : null}

              <Link to="/signup" className="text-white pl-4 pr-4">
                SignUp
              </Link>

              <Link to="login" className="text-white pl-4 pr-4">
                Login
              </Link>

              <Link to="/exercise" className="text-white pl-4 pr-4">
                Exercise
              </Link>
              <Link to="/food" className="text-white pl-4 pr-4">
                Food/Shakes
              </Link>
            </ul>
          )}
        </div>
      </div>
      {isMobileView && (
        <Menu
          right
          isOpen={isMenuOpen}
          onStateChange={({ isOpen }) => setIsMenuOpen(isOpen)}
          width={200} // Adjust the width to your desired value
          customBurgerIcon={false} // Disable default burger icon
          customCrossIcon={false} // Disable default close icon
          styles={{
            bmBurgerButton: {
              display: "none", // Hide the default burger icon
            },
            bmMenuWrap: {
              position: "fixed",
              height: "80%",
            },
            bmMenu: {
              background: "transparent", // Change the background color as needed
              width: "200px", // Set the width to 200px
              height: "150px", // Set the height to 400px
              textAlign: "center",
              overflowY: "hidden", // Prevent vertical scrolling
              boxShadow: "none", // Remove the shadow
            },
            bmOverlay: {
              background: "transparent", // Set the overlay color to transparent
            },
          }}
        >
          <Link
            to="profile"
            className="profilecolor border bg-blue-600 text-white rounded-2xl pl-4 pr-4 mt-2 mb-2 flex justify-center items-center"
            onClick={closeMenu}
          >
            Profile
          </Link>
          <Link
            to="/signup"
            className="bg-blue-600 border text-white rounded-2xl pl-4 pr-4 mt-2 mb-2 flex justify-center items-center"
            onClick={closeMenu}
          >
            SignUp
          </Link>
          <Link
            to="login"
            className="bg-blue-600 border text-white rounded-2xl pl-4 pr-4 mt-2 mb-2 flex justify-center items-center"
            onClick={closeMenu}
          >
            Login
          </Link>
          <Link
            to="/exercise"
            className="bg-blue-600 border text-white rounded-2xl pl-4 pr-4 mt-2 mb-2 flex justify-center items-center"
            onClick={closeMenu}
          >
            Exercise
          </Link>
          <Link
            to="/food"
            className="bg-blue-600 border text-white rounded-2xl pl-4 pr-4 mt-2 mb-2 flex justify-center items-center"
            onClick={closeMenu}
          >
            Food & Shakes
          </Link>
        </Menu>
      )}
    </div>
  );
}
