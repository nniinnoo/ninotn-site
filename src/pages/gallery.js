import React from "react";
import Layout from "@components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const gallery = () => {
  return (
    <Layout>
      <center>
        <StaticImage
          alt="#"
          src="../assets/abu-simble-1867-by-edward-lier.jpg"
          width="900"
        />
      </center>
    </Layout>
  );
};

export default gallery;
