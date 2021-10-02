import React from "react";
import Layout from "@components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const Gallery = () => {
  return (
    <Layout>
      <center>
        <StaticImage
          alt="#"
          src="../assets/abu-simble-1867-by-edward-lier.jpg"
          width="720"
        />
        <h2>Under Construction :)</h2>
      </center>
    </Layout>
  );
};

export default Gallery;
