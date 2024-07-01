import React from "react";
import Layout from "@components/Layout";
import SEO from "@components/SEO";
import { graphql, navigate } from "gatsby";
import BackIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import DateIcon from "@mui/icons-material/TodayOutlined";
import ReadingTimeIcon from "@mui/icons-material/TimerOutlined";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeOutlined";
import PropTypes from "prop-types";

export default function Projects({ data = [] }) {
  const post = data.markdownRemark;
  const projects = [
    {
      title: "Better Work Indonesia",
      description: "https://betterwork.org/indonesia/",
      image: "https://pictures.abebooks.com/inventory/md/md31570550991.jpg",
    },
    {
      title: "L'étranger",
      description: "Albert Camus",
      image:
        "https://m.media-amazon.com/images/I/8130inT26AL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Crime and Punishment",
      description: "Fyodor Dostoevsky",
      image: "https://m.media-amazon.com/images/I/81j330zioGL._SL1500_.jpg",
    },
    {
      title: "Beyond Good and Evil",
      description: "Friedrich Nietzsche",
      image:
        "https://m.media-amazon.com/images/I/71qQesJERdL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Sophie's World",
      description: "Jostein Gaarder",
      image: "https://www.le-livre.fr/photos/RO6/RO60110169.jpg",
    },
  ];

  return (
    <>
      <SEO />
      <Layout>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "50px" }}>Projects</h1>
        </div>
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

        {/* <div
          className="books__container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 400px)",
            gap: 24,
            justifyContent: "center",
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              style={{
                borderRadius: "12px",
                borderWidth: "1px",
                borderColor: "#b9b4b4",
                borderStyle: "solid",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="book__image"
                style={{
                  width: "400px",
                  height: "200px",
                  borderTopRightRadius: "10px",
                  borderTopLeftRadius: "10px",
                }}
              />
              <div style={{ padding: "12px" }}>
                <h1 style={{ marginTop: 0, marginBottom: -12 }}>
                  {project.title}
                </h1>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div> */}
      </Layout>
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
      }
      timeToRead
      wordCount {
        words
      }
    }
  }
`;
