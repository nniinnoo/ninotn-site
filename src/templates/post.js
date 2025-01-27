import React from "react";
import { graphql, navigate } from "gatsby";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import BackIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import DateIcon from "@mui/icons-material/TodayOutlined";
import ReadingTimeIcon from "@mui/icons-material/TimerOutlined";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeOutlined";
// import CategoryIcon from "@mui/icons-material/CategoryOutlined";

import SEO from "@components/SEO";

export default function PostTemplate({ data = [] }) {
  const post = data.markdownRemark;

  const languageIcons = {
    en: "🇬🇧",
    id: "🇮🇩",
    fr: "🇫🇷",
  };

  return (
    <>
      <Helmet title={post.frontmatter.title} />
      <SEO
        postPath={post.frontmatter.slug}
        postTitle={post.frontmatter.title}
        postUrl={post.frontmatter.slug}
        postSEO
      />
      <div className="blog__post-container">
        <div className="blog__post-content-center">
          <article>
            <h1 className="blog__post-title">{post.frontmatter.title}</h1>
            <div className="blog__post-title-details">
              <span>
                <DateIcon />
                <p>{post.frontmatter.date}</p>
              </span>
              <span>
                <CoffeeMakerIcon />
                <p>{post.wordCount.words} words</p>
              </span>
              <span>
                <ReadingTimeIcon />
                <p>~{post.timeToRead} min</p>
              </span>
              {/* <span>
                <CategoryIcon />
                <p>{post.frontmatter.categories}</p>
              </span> */}
              {post.frontmatter.language.split(",").map((lang) => (
                <span
                  key={lang.trim()}
                  style={{ fontSize: 14, marginRight: 5 }}
                >
                  {languageIcons[lang.trim()]}
                </span>
              ))}
            </div>
            <div
              className="blog__post-body"
              id={post.id}
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </article>
        </div>
        <button
          type="button"
          className="blog__post-back-btn"
          onClick={() => navigate(-1)}
        >
          <BackIcon />
          <p>Back</p>
        </button>
      </div>
    </>
  );
}

export const query = graphql`
  query ($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMM D, YYYY")
        tags
        categories
        no
        slug
        language
      }
      timeToRead
      wordCount {
        words
      }
    }
  }
`;

PostTemplate.propTypes = {
  data: PropTypes.node,
};

PostTemplate.defaultProps = {
  data: undefined,
};
