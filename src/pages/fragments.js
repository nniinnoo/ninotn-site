import React from "react";
import Layout from "@components/Layout";
import { useStaticQuery, graphql } from "gatsby";

import SEO from "@components/SEO";
import ScrollRuler from "@components/ScrollRuler";

function Fragments() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "fragment" } } }
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

  const fragments = data.allMarkdownRemark;
  const sections = fragments.nodes.map(node => ({
    id: node.frontmatter.slug,
    label: node.frontmatter.title || `Fragment ${node.frontmatter.no}`
  }));

  return (
    <>
      <SEO />
      <Layout>
        <div className="fragment__container">
          {fragments.nodes.map((node) => (
            <div className="fragment__content" id={node.frontmatter.slug} key={node.id}>
              <h2>Fragments {node.frontmatter.title}</h2>
              <div
                className="grid"
                dangerouslySetInnerHTML={{ __html: node.html }}
              />
            </div>
          ))}
        </div>
        <ScrollRuler sections={sections} alwaysShowLabels hideIndicatorLabel />
      </Layout>
    </>
  );
}

export default Fragments;
