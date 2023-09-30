// footer for app
import React from "react";
import '../styles/Footer.css'; // Import your CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <div className="container">
        <section className="social-icons-wrapper d-flex flex-column flex-md-row justify-content-center my-3">
          {/* Jaldhara'S SECTION */}
          <div className="d-flex flex-row align-items-center mx-md-2 transparent-bg">
            <a href="https://github.com/jaldhara21" className="icon jaldhara21" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} flip size="3x" style={{ color: 'green' }} />
            </a>
            <a href="https://github.com/jaldhara21" target="_blank" rel="noreferrer">
              <span className="d-inline-block mx-1 name">@jaldhara21</span>
            </a>
          </div>
          {/* EMILY' SECTION */}
          <div className="d-flex  align-items-center mx-md-2 transparent-bg">
            <a href="https://github.com/4FunkE" className="icon 4FunkE" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} beat size="3x" style={{ color: 'purple' }} />
            </a>
            <a href="https://github.com/4FunkE" target="_blank" rel="noreferrer">
              <span className="d-inline-block mx-1 name">@4FunkE</span>
            </a>
          </div>
          {/* AISA' SECTION */}
          <div className="d-flex  align-items-center mx-md-2 transparent-bg">
            <a href="https://github.com/Akemp24" className="icon Akemp24" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} spin size="3x" style={{ color: 'orange' }} />
            </a>
            <a href="https://github.com/Akemp24" target="_blank" rel="noreferrer">
            <span className="d-inline-block mx-1 name">@Akemp24</span>
            </a>
          </div>
          {/* JOSEPH' SECTION */}
          <div className="d-flex  align-items-center mx-md-2 transparent-bg">
            <a href="https://github.com/TheWiseSailor" className="icon TheWiseSailor" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} shake size="3x" style={{ color: 'gray' }} />
            </a>
            <a href="https://github.com/TheWiseSailor" target="_blank" rel="noreferrer">
            <span className="d-inline-block mx-1 name">@TheWiseSailor</span>
            </a>
          </div>
          {/* ISABEL' SECTION */}
          <div className="d-flex  align-items-center mx-md-2 transparent-bg">
            <a href="https://github.com/KEINance" className="icon KEINance" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} bounce size="3x" style={{ color: 'red' }} />
            </a>
            <a href="https://github.com/KEINance" target="_blank" rel="noreferrer">
            <span className="d-inline-block mx-1 name">@KEINance</span>
            </a>
          </div>
        </section>
        <section className="footer" id="footer">
          <section className="form-footer">
            <h5 className="text-center mb-2"> Application Created By Jaldhara, Emily, Asia, Joseph, and Isabel © 2023</h5>
          </section>
        </section>
      </div>
    </footer>
  );
};

export default Footer;


