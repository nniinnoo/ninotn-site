import React, { useEffect } from "react";
import { graphql, navigate } from "gatsby";
import PropTypes from "prop-types";
import BackIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import DateIcon from "@mui/icons-material/TodayOutlined";
import ReadingTimeIcon from "@mui/icons-material/TimerRounded";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeOutlined";
import CategoryIcon from "@mui/icons-material/CategoryOutlined";

export default function PostTemplate({ data }) {
  // useEffect(() => {
  //   const codeBlockFileName = document.querySelectorAll(".gatsby-highlight");
  //   const elDiv = document.createElement("div");
  //   elDiv.className = "filename";
  //   elDiv.innerHTML = "something.js";
  //   codeBlockFileName.insertAdjacentElement("beforebegin", elDiv);
  // });
  const post = data.markdownRemark;
  return (
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
              <ReadingTimeIcon />
              <p>{post.timeToRead} min read</p>
            </span>
            <span>
              <CoffeeMakerIcon />
              <p>{post.wordCount.words} words</p>
            </span>
            <span>
              <CategoryIcon />
              <p>{post.frontmatter.categories}</p>
            </span>
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
  );
}

// export default PostTemplate;

export const query = graphql`
  query ($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        tags
        categories
        no
      }
      timeToRead
      wordCount {
        words
      }
    }
  }
`;

// PostTemplate.propTypes = {
//   data: PropTypes.node,
// };

// PostTemplate.defaultProps = {
//   data: undefined,
// };
