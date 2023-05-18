import React from "react";
import Layout from "@components/Layout";
import { useStaticQuery, graphql } from "gatsby";

import SEO from "@components/SEO";

const Altitudes = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "altitude" } } }
        sort: { order: DESC, fields: frontmatter___no }
      ) {
        nodes {
          id
          frontmatter {
            title
            slug
            no
          }
          html
        }
      }
    }
  `);

  const altitudes = data.allMarkdownRemark;

  return (
    <>
      <SEO />
      <Layout>
        <div className="fragment__container">
          {altitudes.nodes.map((node) => (
            <div className="fragment__content">
              <h2>Altitude {node.frontmatter.title}</h2>
              <div
                className="grid"
                dangerouslySetInnerHTML={{ __html: node.html }}
              />
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Altitudes;
