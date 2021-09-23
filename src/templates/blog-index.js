import * as React from "react";
import { useState } from "react";
import Layout from "@components/Layout";

import { Link, graphql } from "gatsby";
import SortByIcon from "@material-ui/icons/SwapHoriz";
import DropDownIcon from "@material-ui/icons/ArrowDropDown";
import PropTypes from "prop-types";

import Pagination from "@components/Pagination";

const BlogIndex = ({ data, pageContext }) => {
  // const siteTitle = data.site.siteMetadata.title;

  const posts = data.allMarkdownRemark;

  const { currentPage, pageCount } = pageContext;

  const [sortIndex, setSortindex] = useState(0);
  const sortType = ["Newest", "Oldest"];

  return (
    <Layout>
      <div className="blog__container">
        <div className="blog__content-left">
          {posts.edges.map(
            (edge) =>
              edge.node.frontmatter.published && (
                <div className="blog__list" key={edge.node.id}>
                  <Link to={`/${edge.node.frontmatter.slug}`}>
                    <h1 className="blog__list-title">
                      {edge.node.frontmatter.title}
                    </h1>
                    <div className="blog__list-title-details">
                      <p>{edge.node.frontmatter.description}</p>
                      <p>
                        <span>{edge.node.frontmatter.date}</span>{" "}
                        <span>{edge.node.timeToRead} min read</span>{" "}
                        <span>{edge.node.wordCount.words} words</span>{" "}
                        <span>{edge.node.frontmatter.categories}</span>{" "}
                        <span>no-{edge.node.frontmatter.no}</span>{" "}
                      </p>
                    </div>
                  </Link>
                </div>
              )
          )}
        </div>
        <div className="blog__content-right">
          {/* <input type="text" placeholder="Search Blog.." /> */}
          <button
            type="button"
            className="blog__sortby-btn"
            onClick={() => setSortindex(!sortIndex)}
          >
            {sortIndex ? (
              <p>
                <span id="sortby-btn-newest">{sortType[0]}</span>
                <span id="sortby-btn-to">
                  <SortByIcon />
                </span>
                <span id="sortby-btn-oldest">{sortType[1]}</span>
              </p>
            ) : (
              <p>
                <span id="sortby-btn-oldest">{sortType[1]}</span>
                <span id="sortby-btn-to">
                  <SortByIcon />
                </span>
                <span id="sortby-btn-newest">{sortType[0]}</span>
              </p>
            )}
          </button>
          <div className="blog__dropdown">
            <button type="button" className="blog__dropdown-btn">
              Category
              <DropDownIcon />
            </button>
            <div className="blog__dropdown-list">
              <p>Journal</p>
              <p>Sci-fi</p>
              <p>Project</p>
              <p>Short-Story</p>
            </div>
          </div>
          <Pagination pageCount={pageCount} currentPage={currentPage} />
        </div>
      </div>
    </Layout>
  );
};

BlogIndex.propTypes = {
  data: PropTypes.node,
};

BlogIndex.defaultProps = {
  data: undefined,
};

export const query = graphql`
  query BlogIndex($postLimit: Int!, $postsOffset: Int!) {
    allMarkdownRemark(
      limit: $postLimit
      skip: $postsOffset
      sort: { fields: frontmatter___date, order: DESC }
    ) {
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
  }
`;

export default BlogIndex;
