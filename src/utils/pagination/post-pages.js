const path = require("path");

module.exports = async (graphql, actions) => {
  const { createPage } = actions;

  const postPerPage = 4; // change this with site config

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
        totalCount
      }
    }
  `);

  const pageCount = Math.ceil(
    result.data.allMarkdownRemark.totalCount / postPerPage
  );

  for (let i = 0; i < pageCount; i += 1) {
    createPage({
      path: i === 0 ? "/" : `/page/${i + 1}`,
      component: path.resolve(`./src/templates/blog-index.js`),
      context: {
        currentPage: i + 1,
        postLimit: postPerPage,
        pageCount,
        postsOffset: i * postPerPage,
      },
    });
  }
};
