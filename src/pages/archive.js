import React from "react";
import Layout from "@components/Layout";
import Search from "@components/Search";

import SEO from "@components/SEO";

function Archive() {
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
}

export default Archive;
