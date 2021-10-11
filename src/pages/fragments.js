import React from "react";
import Layout from "@components/Layout";
import { useStaticQuery, graphql } from "gatsby";

const Fragments = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "fragment" } } }
        sort: { order: DESC, fields: id }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              slug
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
            <p>Fragments {edge.node.frontmatter.title}</p>
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
