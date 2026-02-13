import React from "react";
import { graphql, navigate } from "gatsby";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import { ArrowLeft, Calendar, Timer, Coffee } from "lucide-react";
// import { LayoutGrid } from "lucide-react"; // CategoryIcon equivalent

import SEO from "@components/SEO";

import { useState, useEffect } from "react";
import ScrollRuler from "@components/ScrollRuler";

export default function PostTemplate({ data = [] }) {
  const post = data.markdownRemark;
  const [sections, setSections] = useState([]);

  // Extract headings for ScrollRuler
  useEffect(() => {
    // Wait for content to render
    const timer = setTimeout(() => {
      const content = document.querySelector(".blog__post-body");
      if (!content) return;

      const headings = Array.from(content.querySelectorAll("h1, h2, h3"));
      const newSections = headings.map((heading) => {
        let id = heading.id;
        if (!id) {
          // Generate ID from text if missing
          id = heading.innerText
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)+/g, "");
          heading.id = id;
        }
        return {
          id,
          label: heading.innerText,
        };
      });

      // Filter out empty labels or IDs
      const validSections = newSections.filter(s => s.id && s.label);
      setSections(validSections);
    }, 100);

    return () => clearTimeout(timer);
  }, [post.html]); // Re-run if post content changes

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
      <ScrollRuler sections={sections} />
      <div className="blog__post-container">
        <div className="blog__post-content-center">
          <article>
            <h1 className="blog__post-title">{post.frontmatter.title}</h1>
            <div className="blog__post-title-details">
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
          <button
            type="button"
            className="blog__post-back-btn"
            onClick={() => navigate("/")}
          >
            <ArrowLeft size={16} />
            <p>Back</p>
          </button>
        </div>
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
