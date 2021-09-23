import React from "react";
import Layout from "@components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const gallery = () => {
  return (
    <Layout>
      <center>
        <StaticImage alt="#" src="../assets/ai.jpeg" width="900" />
      </center>
    </Layout>
  );
};

export default gallery;
