import React from "react";
import Layout from "@components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Search from "@components/Search";

const Archive = () => {
  return (
    <Layout>
      <div className="archive__container">
        <Search />
      </div>
    </Layout>
  );
};

export default Archive;
