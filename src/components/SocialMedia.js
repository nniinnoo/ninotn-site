import React from "react";
import PropTypes from "prop-types";

import { Github, Instagram } from "lucide-react";

function SocialMedia({ size }) {
  const sizeMap = { small: 14, medium: 18, large: 24 };
  const px = sizeMap[size] || 18;

  return (
    <div className="socmed">
      <a href="https://github.com/nniinnoo" aria-label="GitHub">
        <Github size={px} />
      </a>
      <a href="https://www.instagram.com/ninotannio/" aria-label="Instagram">
        <Instagram size={px} />
      </a>
    </div>
  );
}

SocialMedia.defaultProps = {
  size: "medium",
};

SocialMedia.propTypes = {
  size: PropTypes.string,
};

export default SocialMedia;

