import React from "react";
import Layout from "@components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const Project = () => {
  return (
    <Layout>
      <center>
        <StaticImage
          alt="#"
          src="../assets/moonlit-1878-by-ivan-aivazovsky.jpg"
          width="720"
        />
        <h2>Under Construction :)</h2>
      </center>
    </Layout>
  );
};

export default Project;
