import React, { useEffect } from "react";
import { graphql, navigate } from "gatsby";
import PropTypes from "prop-types";

export default function PageTemplate({ data }) {
  const post = data.markdownRemark;
  return (
    <div className="blog__post-container">
      <div className="blog__post-content">
        <h1 className="blog__post-title">{post.frontmatter.title}</h1>
        <p className="blog__post-title-details">
          <span>
            <DateIcon />
            <p>{post.frontmatter.date}</p>
          </span>
          <span>
            <ReadingTimeIcon />
            <p>15 min read</p>
          </span>
          <span>
            <CategoryIcon />
            <p>{post.frontmatter.categories}</p>
          </span>
          <span>
            <p>#</p>
            <p>{post.frontmatter.no}</p>
          </span>
        </p>
        <div className="blog__post-body">
          <div id={post.id} dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
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
