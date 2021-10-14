import React, { useState } from "react";
import Layout from "@components/Layout";
import ArrowRightIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import ArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeftRounded";

import imgList from "@assets/general-files/image-list";

const Gallery = () => {
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

  return (
    <Layout>
      <div className="gallery__container">
        <div className="gallery__content">
          <img alt="#" quality={100} src={imgList[imgIndex].url} />
          <div>
            <figcaption>{imgList[imgIndex].caption}</figcaption>
            <div className="gallery__skip">
              <div
                className={
                  imgIndex > 1
                    ? "gallery__prev-active"
                    : "gallery__prev-inactive"
                }
                onClick={setPrevImg}
                aria-hidden="true"
              >
                <ArrowLeftIcon />
              </div>
              <p>
                {imgIndex} | {imgTotal}
              </p>
              <div
                className={
                  imgIndex < imgTotal
                    ? "gallery__next-active"
                    : "gallery__next-inactive"
                }
                onClick={setNextImg}
                aria-hidden="true"
              >
                <ArrowRightIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
