import * as React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import { Calendar, Timer, Coffee, BookType } from "lucide-react";
// import { LayoutGrid } from "lucide-react"; // CategoryIcon equivalent

import Layout from "@components/Layout";
import Pagination from "@components/Pagination";
// import Filter from "@components/Filter";
import SEO from "@components/SEO";

function BlogIndex({ data, pageContext }) {
  const posts = data.allMarkdownRemark;

  const { currentPage, pageCount } = pageContext;

  return (
    <>
      <SEO />
      <Layout>
        <div className="blog__container">
          <div className="blog__content-left" />
          <div className="blog__content-center">
            <div className="blog__list-container">
              {posts.nodes.map(
                (post) => (
                  <div className="blog__list" key={post.id}>
                    <Link
                      to={`/${post.frontmatter.slug}`}
                      state={{
                        returnPath:
                          currentPage === 1 ? "/" : `/page/${currentPage}`,
                      }}
                    >
                      <h1 className="blog__list-title">
                        {post.frontmatter.title}
                      </h1>
                      <div className="blog__list-title-details">
                        <p>{post.frontmatter.description}</p>
                        <div>
                          <span>
                            <Calendar size={14} />
                            <p>{post.frontmatter.date}</p>
                          </span>
                          <span>
                            <Coffee size={14} />
                            <p>{post.wordCount.words} words</p>
                          </span>
                          <span>
                            <Timer size={14} />
                            <p>~{post.timeToRead} min</p>
                          </span>
                          {/* <span>
                              <LayoutGrid size={14} />
                              <p>{post.frontmatter.categories}</p>
                            </span> */}

                          {post.frontmatter.language.split(",").map((lang) => {
                            const languageCode = lang.trim().toUpperCase();

                            return (
                              <span
                                key={languageCode}
                                aria-label={`Language: ${languageCode}`}
                              >
                                <BookType size={14} />
                                <p>{languageCode}</p>
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </Link>
                  </div>
                ),
              )}
            </div>
            <Pagination pageCount={pageCount} currentPage={currentPage} />
          </div>
          <div className="blog__content-right">
            <div className="blog__content-right-container">
              {/* <Filter /> */}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

BlogIndex.propTypes = {
  data: PropTypes.objectOf(PropTypes),
  pageContext: PropTypes.objectOf(PropTypes),
};

BlogIndex.defaultProps = {
  data: undefined,
  pageContext: undefined,
};

export const query = graphql`
  query BlogIndex($postLimit: Int!, $postsOffset: Int!) {
    allMarkdownRemark(
      limit: $postLimit
      skip: $postsOffset
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { template: { eq: "post" }, published: { eq: true } } }
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMM D, YYYY")
          title
          published
          slug
          tags
          categories
          no
          template
          language
          description
        }
        id
        timeToRead
        wordCount {
          words
        }
      }
    }
  }
`;

export default BlogIndex;
