const path = require("path");
const _ = require("lodash");
const { createFilePath } = require("gatsby-source-filesystem");

const createPostPages = require("./src/utils/pagination/post-pages");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date(formatString: "MMMM D, YYYY")
              title
              published
              slug
              tags
              categories
              no
              template
            }
            id
          }
        }
      }
    }
  `);

  // if (result.errors) {
  //   throw result.errors;
  // }

  const { edges } = result.data.allMarkdownRemark;

  _.each(edges, (edge) => {
    if (_.get(edge, "node.frontmatter.template") === "post") {
      createPage({
        path: edge.node.frontmatter.slug,
        component: path.resolve(`src/templates/post.js`),
        context: { slug: edge.node.frontmatter.slug },
      });
    }
  });

  await createPostPages(graphql, actions);
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    if (typeof node.frontmatter.slug !== "undefined") {
      const dirname = getNode(node.parent).relativeDirectory;
      createNodeField({
        node,
        name: "slug",
        value: `/${dirname}/${node.frontmatter.slug}`,
      });
    } else {
      const value = createFilePath({ node, getNode });
      createNodeField({
        node,
        name: `slug`,
        value,
      });
    }
  }

  //   const fileNode = getNode(node.parent);
  //   const parsedFilePath = path.parse(fileNode.relativePath);

  //   if (Object.prototype.hasOwnProperty.call(node.frontmatter, "slug")) {
  //     slug = `/${node.frontmatter.slug}/`;
  //   } else {
  //     slug = `/${parsedFilePath.dir}/`;
  //   }

  //   createNodeField({
  //     name: "slug",
  //     node,
  //     value: slug,
  //   });
  // }
};
