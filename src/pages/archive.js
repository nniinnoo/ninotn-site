import React from "react";
import Layout from "@components/Layout";
import Search from "@components/Search";

import SEO from "@components/SEO";

const Archive = () => {
  return (
    <>
      <SEO />
      <Layout>
        <div className="archive__container">
          <Search />
        </div>
      </Layout>
    </>
  );
};

export default Archive;
