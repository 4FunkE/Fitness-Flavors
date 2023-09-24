import "../styles/Home.css";
import logo from "../components/images/Fitness Flavors Logo.png";

function Home() {
  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar">{/* ... Navbar content  */}</nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="animated fadeInDownBig">Welcome to Fitness Flavors</h1>
          <p className="animated fadeInUpBig">Motto </p>
          <a href="/about" className="btn animated fadeInLeftBig">
            Learn More
          </a>
        </div>
      </section>

      {/* Additional Content */}
      <section className="additional-content">
        {/* more sections/content here with animations */}
      </section>

      {/* Footer */}
      <footer className="footer">{/* footer content */}</footer>
    </div>
  );
}

export default Home;
