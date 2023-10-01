import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import weight from "../components/images/weight.png";
export default function NavBar() {
  const [searchInput, setSearchInput] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 1300);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/exercise");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", alignItems: "center" }}
        >
          <input
            type="text"
            placeholder="Select your muscle group ..."
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
            className="pl-2 pr-2 rounded-xl mt-2"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-xl ml-4 pl-4 pr-4 mt-2  transition-transform transform hover:translate-x-2 hover:bg-green-500"
          >
            Search!
          </button>
        </form>
        <div>
          {isMobileView ? (
            <div onClick={toggleMenu} style={{ marginLeft: "auto" }}>
              <img
                src={weight} // Use the imported image variable here
                alt="Hamburger Menu"
                className="hamburger-icon"
              />
            </div>
          ) : (
            <ul className="navUl" style={{ marginLeft: "auto" }}>
              <Link to="profile" className=" text-white pl-4 pr-4">
                Profile
              </Link>

              <Link to="/signup" className="text-white pl-4 pr-4">
                SignUp
              </Link>

              <Link to="login" className="text-white pl-4 pr-4">
                Login
              </Link>

              <Link to="/exercise" className="text-white pl-4 pr-4">
                Exercise
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
              position: "absolute",
              height: "80%",
            },
            bmMenu: {
              background: "none", // Change the background color as needed
              width: "200px", // Set the width to 200px
              height: "400px", // Set the height to 400px
            },
          }}
        >
          <Link
            to="profile"
            className="profilecolor border bg-blue-600 text-white rounded-2xl pl-4 pr-4 mt-2 mb-2"
            onClick={closeMenu}
          >
            Profile
          </Link>
          <Link
            to="/signup"
            className="bg-blue-600 border text-white rounded-2xl pl-4 pr-4 mt-2 mb-2"
            onClick={closeMenu}
          >
            SignUp
          </Link>
          <Link
            to="login"
            className="bg-blue-600 border text-white rounded-2xl pl-4 pr-4 mt-2 mb-2"
            onClick={closeMenu}
          >
            Login
          </Link>
          <Link
            to="/exercise"
            className="bg-blue-600 border text-white rounded-2xl pl-4 pr-4 mt-2 mb-2"
            onClick={closeMenu}
          >
            Exercise
          </Link>
        </Menu>
      )}
    </div>
  );
}
