import * as React from "react";
import { useState } from "react";

import { Link, graphql } from "gatsby";
import SortByIcon from "@mui/icons-material/SwapHoriz";
import DropDownIcon from "@mui/icons-material/ArrowDropDown";
import DateIcon from "@mui/icons-material/TodayOutlined";
import ReadingTimeIcon from "@mui/icons-material/TimerRounded";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeOutlined";
import CategoryIcon from "@mui/icons-material/CategoryOutlined";

import PropTypes from "prop-types";
import Layout from "@components/Layout";
import Pagination from "@components/Pagination";
import SEO from "@components/SEO";

const BlogIndex = ({ data, pageContext }) => {
  // const siteTitle = data.site.siteMetadata.title;

  const posts = data.allMarkdownRemark;

  const { currentPage, pageCount } = pageContext;

  const [sortIndex, setSortindex] = useState(0);
  const sortType = ["Newest", "Oldest"];

  return (
    <>
      <SEO />
      <Layout>
        <div className="blog__container">
          <div className="blog__content-left" />
          <div className="blog__content-center">
            <div className="blog__list-container">
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
                          <div>
                            <span>
                              <DateIcon />
                              <p>{edge.node.frontmatter.date}</p>
                            </span>
                            <span>
                              <ReadingTimeIcon />
                              <p>{edge.node.timeToRead} min read</p>
                            </span>
                            <span>
                              <CoffeeMakerIcon />
                              <p>{edge.node.wordCount.words} words</p>
                            </span>
                            <span>
                              <CategoryIcon />
                              <p>{edge.node.frontmatter.categories}</p>
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  )
              )}
            </div>
            <Pagination pageCount={pageCount} currentPage={currentPage} />
          </div>
          <div className="blog__content-right">
            <div className="blog__content-right-container">
              <div
                className="blog__sortby"
                onClick={() => setSortindex(!sortIndex)}
                aria-hidden="true"
              >
                {sortIndex ? (
                  <div>
                    <span id="sortby-newest">{sortType[0]}</span>
                    <span id="sortby-to">
                      <SortByIcon />
                    </span>
                    <span id="sortby-oldest">{sortType[1]}</span>
                  </div>
                ) : (
                  <div>
                    <span id="sortby-oldest">{sortType[1]}</span>
                    <span id="sortby-to">
                      <SortByIcon />
                    </span>
                    <span id="sortby-newest">{sortType[0]}</span>
                  </div>
                )}
              </div>
              <div className="blog__dropdown">
                <button type="button" className="blog__dropdown-btn">
                  Category
                  <DropDownIcon />
                </button>
                <div className="blog__dropdown-list">
                  <p>under reconstruction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
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
      filter: { frontmatter: { template: { eq: "post" } } }
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
