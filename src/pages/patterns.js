import React, { useState } from "react";
import Layout from "@components/Layout";
import SEO from "@components/SEO";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Masonry from "react-masonry-css";
import crousMousse from "../../content/patterns/crous-mousse.jpg";
import laPetitPrince from "../../content/patterns/la-petite-prince-collection.jpg";
import laRoseTheTunis from "../../content/patterns/la-rose-the-tunis-golden-ratio.jpg";
import treeShadow from "../../content/patterns/tree-shadow.jpg";
import theRoofHolder from "../../content/patterns/the-roof-holders.jpg";

function Patterns() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const patterns = [
    {
      description: "The Little Prince",
      image: laPetitPrince,
    },
    {
      description: "The Old Man and the Sea",
      image: crousMousse,
    },
    {
      description: "The Holder of the Roof",
      image: theRoofHolder,
    },
    {
      description: "The Shadow of the Wind",
      image: treeShadow,
    },
    {
      description: "The Rose and the Beast",
      image: laRoseTheTunis,
    },
  ];

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  const styles = {
    masonryGrid: {
      display: "flex",
      width: "70%",
    },
    masonryGridColumn: {
      paddingLeft: "12px", // small padding to offset any gap
      backgroundClip: "padding-box",
    },
    bookItem: {
      cursor: "pointer",
      marginBottom: "12px", // small margin to offset any gap
    },
    bookImage: {
      width: "95%",
      height: "auto",
      marginBottom: "18px",
      display: "block",
      borderRadius: "0",
      border: "1px solid #000",
      transition: "all 0.2s ease",
      padding: "8px",
      boxShadow: "none",
      opacity: 0.95,
    },
  };

  return (
    <>
      <SEO />
      <Layout pageTitle="books">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "4rem",
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              marginBottom: "-0.15rem",
              fontWeight: "900",
              letterSpacing: "-0.02em",
              lineHeight: "1.2",
              fontFeatureSettings: '"liga" 1, "kern" 1',
            }}
          >
            Visual Patterns
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              marginTop: "0",
              color: "var(--subtle-dark-3)",
              maxWidth: "600px",
              textAlign: "center",
              lineHeight: "1.5",
            }}
          >
            The beauty of reptition
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "24px",
          }}
        >
          <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
            style={styles.masonryGrid}
          >
            {patterns.map((book, index) => (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
              <div
                key={book.description}
                style={styles.bookItem}
                onClick={() => {
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
              >
                <img
                  src={book.image}
                  alt={book.description}
                  className="book__image"
                  style={styles.bookImage}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translate(2px, 2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translate(0, 0)";
                  }}
                />
              </div>
            ))}
          </Masonry>
        </div>
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={patterns.map((pattern) => ({
            src: pattern.image,
            alt: pattern.description,
          }))}
          index={photoIndex}
          on={{
            view: ({ index }) => setPhotoIndex(index),
          }}
        />
      </Layout>
    </>
  );
}

export default Patterns;
