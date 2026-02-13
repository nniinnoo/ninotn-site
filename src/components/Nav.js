import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { Link } from "gatsby";
import FireOn from "../assets/firemaking.png";
import FireOff from "../assets/firesmoke.png";

function Nav({ onUpdateTheme, theme }) {
  useEffect(() => {
    // Scroll to main content after navigation on mobile
    const handleScroll = () => {
      if (window.innerWidth <= 800 && window.location.pathname !== "/") {
        const mainContent = document.querySelector("main");
        if (mainContent) {
          setTimeout(() => {
            mainContent.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 100);
        }
      }
    };

    handleScroll();
  }, []);

  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="nav__left">
          <button
            type="button"
            style={{
              paddingRight: "6px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "4px",
            }}
            onClick={onUpdateTheme}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onUpdateTheme();
              }
            }}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <img
              alt={
                theme === "dark"
                  ? "Fire lit - dark mode active"
                  : "Fire unlit - light mode active"
              }
              src={theme === "dark" ? FireOn : FireOff}
              width={70}
              height={70}
            />
          </button>
          <Link to="/">
            <div>
              <h1>Rising Fire</h1>
              <h2>by Nino Tannio</h2>
            </div>
          </Link>
        </div>
        <div className="nav__right">
          <Link to="/about">What's this?</Link>
          <Link to="/fragments">Fragments</Link>
          {/* <Link to="/altitude">Altitude</Link> */}
          <Link to="/books">Books</Link>
          <Link to="/patterns">Patterns</Link>
          {/* <Link to="/gallery">Gallery</Link> */}
          <Link to="/projects">Project</Link>
          <Link to="/archive">Wayback</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}

Nav.propTypes = {
  onUpdateTheme: PropTypes.func.isRequired,
  theme: PropTypes.string,
};

Nav.defaultProps = {
  theme: "light",
};

export default Nav;
