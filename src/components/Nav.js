import React from "react";
import PropTypes from "prop-types";

import { Link } from "gatsby";
import FireOn from "../assets/firemaking.png";
import FireOff from "../assets/firesmoke.png";

const Nav = ({ onUpdateTheme, theme }) => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="nav__left">
          <div
            style={{ paddingRight: "6px" }}
            onClick={onUpdateTheme}
            aria-hidden="true"
          >
            <img alt="#" src={theme === "dark" ? FireOn : FireOff} width={70} />
          </div>
          <Link to="/">
            <div>
              <h1>Raw Fire</h1>
              <h2>by Nino Tannio</h2>
            </div>
          </Link>
        </div>
        <div className="nav__right">
          <Link to="/about">What's this?</Link>
          <Link to="/fragments">Fragments</Link>
          {/* <Link to="/altitude">Altitude</Link> */}
          <Link to="/books">Books</Link>
          <Link to="/archive">Wayback</Link>
          {/* <Link to="/gallery">Gallery</Link> */}
          <Link to="/projects">Project</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

Nav.propTypes = {
  onUpdateTheme: PropTypes.func.isRequired,
  theme: PropTypes.string,
};

Nav.defaultProps = {
  theme: "light",
};

export default Nav;
