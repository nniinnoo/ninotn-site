import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

import Nav from "@components/Nav";
import Footer from "@components/Footer";

import "@assets/styles/global.css";

const Layout = ({ siteTitle, children }) => {
  return (
    <>
      <Helmet>
        <title>{siteTitle}</title>
        <meta property="og:site_name" content={siteTitle} />
      </Helmet>
      <title>{siteTitle}</title>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  siteTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  siteTitle: "Raw Thought",
};

export default Layout;
