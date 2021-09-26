import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="nav__left">
          <Link to="/">
            <div style={{ paddingRight: "6px" }}>
              <StaticImage alt="#" src="../assets/pre7.png" width={60} />
            </div>
            <div>
              <h1>Raw Thought</h1>
              <h2>by Nino Tannio</h2>
            </div>
          </Link>
        </div>
        <div className="nav__right">
          <Link to="/about">What's this?</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/">Fragments</Link>
          <Link to="/">Wayback</Link>
          <Link to="/">Project</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
