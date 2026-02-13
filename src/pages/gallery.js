import React, { useState, useEffect } from "react";
import Layout from "@components/Layout";
import { ChevronRight, ChevronLeft } from "lucide-react";

import imgList from "@assets/general-files/image-list";
import SEO from "@components/SEO";

function Gallery() {
  const imgTotal = imgList.length - 1;
  const [imgIndex, setImgIndex] = useState(1);

  const setPrevImg = () => {
    if (imgIndex > 1) {
      setImgIndex(imgIndex - 1);
    }
  };

  const setNextImg = () => {
    if (imgIndex < imgTotal) {
      setImgIndex(imgIndex + 1);
    }
  };

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        setPrevImg();
      } else if (event.key === "ArrowRight") {
        setNextImg();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [imgIndex, imgTotal]);

  return (
    <>
      <SEO />
      <Layout>
        <div className="gallery__container">
          <div className="gallery__content">
            <img
              alt={imgList[imgIndex].caption || `Gallery image ${imgIndex}`}
              src={imgList[imgIndex].url}
            />
            <div>
              <figcaption>{imgList[imgIndex].caption}</figcaption>
              <div className="gallery__skip">
                <button
                  type="button"
                  className={
                    imgIndex > 1
                      ? "gallery__prev-active"
                      : "gallery__prev-inactive"
                  }
                  onClick={setPrevImg}
                  disabled={imgIndex <= 1}
                  aria-label="Previous image"
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: imgIndex > 1 ? "pointer" : "not-allowed",
                  }}
                >
                  <ChevronLeft size={24} />
                </button>
                <p>
                  {imgIndex} | {imgTotal}
                </p>
                <button
                  type="button"
                  className={
                    imgIndex < imgTotal
                      ? "gallery__next-active"
                      : "gallery__next-inactive"
                  }
                  onClick={setNextImg}
                  disabled={imgIndex >= imgTotal}
                  aria-label="Next image"
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: imgIndex < imgTotal ? "pointer" : "not-allowed",
                  }}
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Gallery;
