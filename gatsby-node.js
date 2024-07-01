const path = require("path");
const _ = require("lodash");
const { createFilePath } = require("gatsby-source-filesystem");

const createPostPages = require("./src/utils/pagination/post-pages");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark {
        nodes {
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
  `);

  // if (result.errors) {
  //   throw result.errors;
  // }

  const { nodes } = result.data.allMarkdownRemark;

  _.each(nodes, (node) => {
    if (_.get(node, "frontmatter.template") === "post") {
      createPage({
        path: node.frontmatter.slug,
        component: path.resolve(`src/templates/post.js`),
        context: { slug: node.frontmatter.slug },
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
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
