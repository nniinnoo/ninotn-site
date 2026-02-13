import React, { useState, useEffect, useCallback } from "react";
import Layout from "@components/Layout";
import SEO from "@components/SEO";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import crousMousse from "../../content/patterns/crous-mousse.jpg";
import laPetitPrince from "../../content/patterns/la-petite-prince-collection.jpg";
import laRoseTheTunis from "../../content/patterns/la-rose-the-tunis-golden-ratio.jpg";
import treeShadow from "../../content/patterns/tree-shadow.jpg";
import theRoofHolder from "../../content/patterns/the-roof-holders.jpg";

const patterns = [
  {
    title: "The Little Prince",
    subtitle: "Book store show case in Toulouse",
    image: laPetitPrince,
  },
  {
    title: "Star in mousse lid",
    subtitle: "Resto U' Le Théorème, Université de Toulouse",
    image: crousMousse,
  },
  {
    title: "Climbing holder",
    subtitle: "The Roof climbing gym, Toulouse",
    image: theRoofHolder,
  },
  {
    title: "The Tree Shadow",
    subtitle: "Ecole des beaux-arts, Toulouse",
    image: treeShadow,
  },
  {
    title: "Golden Ratio",
    subtitle: "La Rose de Tunis, Toulouse",
    image: laRoseTheTunis,
  },
];

function Patterns() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const total = patterns.length;

  const goTo = useCallback(
    (index) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setActiveIndex((index + total) % total);
      setTimeout(() => setIsTransitioning(false), 500);
    },
    [isTransitioning, total]
  );

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev]);

  const prevIndex = (activeIndex - 1 + total) % total;
  const nextIndex = (activeIndex + 1) % total;

  const active = patterns[activeIndex];

  return (
    <>
      <SEO />
      <Layout pageTitle="patterns">
        <div className="patterns-gallery" id="patterns-gallery">

          {/* Per-image title */}
          <div className="patterns-gallery__header">
            <h2 className="patterns-gallery__title">{active.title}</h2>
            <p className="patterns-gallery__subtitle">{active.subtitle}</p>
          </div>

          {/* Carousel track */}
          <div className="patterns-gallery__track">
            {/* Previous slide */}
            <div
              className="patterns-gallery__slide patterns-gallery__slide--prev"
              onClick={goPrev}
              onKeyDown={(e) => e.key === "Enter" && goPrev()}
              role="button"
              tabIndex={0}
              aria-label="Previous image"
            >
              <img
                src={patterns[prevIndex].image}
                alt={patterns[prevIndex].title}
                draggable={false}
              />
            </div>

            {/* Active slide */}
            <div
              className="patterns-gallery__slide patterns-gallery__slide--active"
              onClick={() => setIsLightboxOpen(true)}
              onKeyDown={(e) => e.key === "Enter" && setIsLightboxOpen(true)}
              role="button"
              tabIndex={0}
              aria-label="View full size"
              style={{ cursor: "zoom-in" }}
            >
              <img
                src={active.image}
                alt={active.title}
                draggable={false}
              />
            </div>

            {/* Next slide */}
            <div
              className="patterns-gallery__slide patterns-gallery__slide--next"
              onClick={goNext}
              onKeyDown={(e) => e.key === "Enter" && goNext()}
              role="button"
              tabIndex={0}
              aria-label="Next image"
            >
              <img
                src={patterns[nextIndex].image}
                alt={patterns[nextIndex].title}
                draggable={false}
              />
            </div>
          </div>

          {/* Pagination bars */}
          <div className="patterns-gallery__pagination">
            {patterns.map((_, index) => (
              <button
                key={index}
                className={`patterns-gallery__bar ${index === activeIndex ? "patterns-gallery__bar--active" : ""
                  }`}
                onClick={() => goTo(index)}
                aria-label={`Go to image ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
              />
            ))}
          </div>
        </div>
        <Lightbox
          open={isLightboxOpen}
          close={() => setIsLightboxOpen(false)}
          slides={patterns.map((p) => ({ src: p.image, alt: p.title }))}
          index={activeIndex}
          on={{ view: ({ index }) => setActiveIndex(index) }}
        />
      </Layout>
    </>
  );
}

export default Patterns;
