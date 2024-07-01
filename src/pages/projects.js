import React from "react";
import Layout from "@components/Layout";
import SEO from "@components/SEO";

export default function Projects() {
  return (
    <>
      <SEO />
      <Layout>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "50px" }}>Projects</h1>
        </div>
      </Layout>
    </>
  );
}
