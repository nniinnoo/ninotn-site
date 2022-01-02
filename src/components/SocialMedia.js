import React from "react";
import PropTypes from "prop-types";

import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import CasinoIcon from "@mui/icons-material/CasinoOutlined";

const SocialMedia = ({ size }) => (
  <div className="socmed">
    <a href="https://github.com/nniinnoo">
      <GitHubIcon fontSize={size} />
    </a>
    <a href="https://www.instagram.com/ninotannio/">
      <InstagramIcon fontSize={size} />
    </a>
    <a href="https://www.chess.com/member/nino_saurus">
      <CasinoIcon fontSize={size} />
    </a>
  </div>
);

SocialMedia.defaultProps = {
  size: "medium",
};

SocialMedia.propTypes = {
  size: PropTypes.string,
};

export default SocialMedia;
