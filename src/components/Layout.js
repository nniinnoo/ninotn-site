import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Nav from "@components/Nav";
import Footer from "@components/Footer";

import "@assets/styles/global.css";

const Layout = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const windowGlobal = typeof window !== "undefined" && window;

  const defaultTheme = "light";
  let currentTheme = "";

  useEffect(() => {
    if (windowGlobal.localStorage.getItem("theme") === null) {
      windowGlobal.localStorage.setItem("theme", defaultTheme);
      document.body.classList.add(defaultTheme);
      setTheme(defaultTheme);
    } else {
      currentTheme = windowGlobal.localStorage.getItem("theme");
      document.body.classList.add(currentTheme);
      setTheme(currentTheme);
    }
  });

  const setDarkTheme = () => {
    document.body.classList.remove(currentTheme);
    document.body.classList.add("dark");
    setTheme("dark");
    windowGlobal.localStorage.setItem("theme", "dark");
  };

  const setLightTheme = () => {
    document.body.classList.remove(currentTheme);
    document.body.classList.add("light");
    setTheme("light");
    windowGlobal.localStorage.setItem("theme", "light");
  };

  const onUpdateTheme = () => {
    if (currentTheme === "light") {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  };

  return (
    <>
      <Nav onUpdateTheme={onUpdateTheme} theme={theme} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
