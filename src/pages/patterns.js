import React, { useState } from "react";
import Layout from "@components/Layout";
import SEO from "@components/SEO";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Masonry from "react-masonry-css";
import crousMousse from "../../content/patterns/crous-mousse.jpg";
import laPetitPrince from "../../content/patterns/la-petite-prince-collection.jpg";
import laRoseTheTunis from "../../content/patterns/la-rose-the-tunis-golden-ratio.jpg";
import treeShadow from "../../content/patterns/tree-shadow.jpg";
import theRoofHolder from "../../content/patterns/the-roof-holders.jpg";

const Patterns = () => {
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
      paddingLeft: "1px", // small padding to offset any gap
      backgroundClip: "padding-box",
    },
    bookItem: {
      cursor: "pointer",
      marginBottom: "1px", // small margin to offset any gap
    },
    bookImage: {
      width: "95%",
      height: "auto",
      marginBottom: "18px",
      display: "block",
      borderRadius: "6px",
      // shadow inside the image (inward)
      boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.1)",
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
          }}
        >
          <h1
            style={{
              fontSize: "50px",
              marginBottom: "-24px",
            }}
          >
            Patterns Gallery
          </h1>
          <p style={{ fontSize: "20px" }}>A mosaic of captured moments</p>
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
                />
              </div>
            ))}
          </Masonry>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={patterns[photoIndex].image}
            nextSrc={patterns[(photoIndex + 1) % patterns.length].image}
            prevSrc={
              patterns[(photoIndex + patterns.length - 1) % patterns.length]
                .image
            }
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex(
                (photoIndex + patterns.length - 1) % patterns.length
              )
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % patterns.length)
            }
          />
        )}
      </Layout>
    </>
  );
};

export default Patterns;
