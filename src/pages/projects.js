import React from "react";
import Layout from "@components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const Project = () => {
  return (
    <Layout>
      <center>
        <StaticImage
          quality={100}
          alt="#"
          src="../assets/moonlit-1878-by-ivan-aivazovsky.jpg"
          width="640"
        />
        <h2>Under Construction =)</h2>
      </center>
    </Layout>
  );
};

export default Project;
