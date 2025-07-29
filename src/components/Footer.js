import React from "react";

import SocialMedia from "@components/SocialMedia";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <SocialMedia />
      </div>
      <div className="footer__right">
        <p>© {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}

export default Footer;
