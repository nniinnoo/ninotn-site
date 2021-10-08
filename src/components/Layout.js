import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

import Nav from "@components/Nav";
import Footer from "@components/Footer";

import "@assets/styles/global.css";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
