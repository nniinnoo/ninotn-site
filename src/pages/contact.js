import React from "react";
import Layout from "@components/Layout";

import SEO from "@components/SEO";
import SocialMedia from "@components/SocialMedia";

function Contact() {
  return (
    <>
      <SEO />
      <Layout pageTitle="contact">
        <div className="contact__container">
          <div className="contact__left" />
          <div className="contact__center">
            <div>
              <h1>Contact</h1>
              <p>
                If you have any questions, comments, ideas, critiques, or you
                just want to say hi, don’t hesitate to email{" "}
                <a href="mailto:me@ninotn.com"> me@ninotn.com</a>
                <br />
                <br />
                Additionally, for end-to-end encrypted email you can contact me
                with:
                <br />
                <pre>
                  <code>
                    PGP Public Key:{" "}
                    <a
                      href="/src/assets/general-files/me@ninotn.com-0xF867B33F6F9BD3FD-pub.asc"
                      download
                    >
                      Download
                    </a>
                    <br />
                    Fingerprint: CC33 6E13 0820 BB53 6D3B 62B4 F867 B33F 6F9B
                    D3FD
                    <br />
                    Expiry: 12/21/2023
                  </code>
                </pre>
              </p>
            </div>
            <h1>Miscellaneous</h1>
            <SocialMedia size="large" />
          </div>
          <div className="contact__right" />
        </div>
      </Layout>
    </>
  );
}

export default Contact;
