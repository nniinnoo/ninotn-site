import React, { useState } from "react";
import { Link } from "gatsby";
import FireOn from "../assets/firemaking.png";
import FireOff from "../assets/firesmoke.png";

const Nav = ({ onUpdateTheme, theme }) => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="nav__left">
          <Link to="/">
            <div
              style={{ paddingRight: "6px" }}
              onClick={onUpdateTheme}
              aria-hidden="true"
            >
              <img
                alt="#"
                src={theme === "dark" ? FireOn : FireOff}
                width={70}
              />
            </div>
            <div>
              <h1>Raw Fire</h1>
              <h2>by Nino Tannio</h2>
            </div>
          </Link>
        </div>
        <div className="nav__right">
          <Link to="/about">What's this?</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/fragments">Fragments</Link>
          <Link to="/archive">Wayback</Link>
          <Link to="/projects">Project</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
