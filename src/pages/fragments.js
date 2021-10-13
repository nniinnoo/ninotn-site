import React from "react";
import Layout from "@components/Layout";
import { useStaticQuery, graphql } from "gatsby";

const Fragments = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "fragment" } } }
        sort: { order: DESC, fields: frontmatter___no }
      ) {
        edges {
          node {
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
    }
  `);

  const fragments = data.allMarkdownRemark;

  return (
    <Layout>
      <div className="fragment__container">
        {fragments.edges.map((edge) => (
          <div className="fragment__content">
            <h2>Fragments {edge.node.frontmatter.title}</h2>
            <div
              className="grid"
              dangerouslySetInnerHTML={{ __html: edge.node.html }}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Fragments;
