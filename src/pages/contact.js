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
                      href="/me@ninotn.com-pgp-public-key.asc"
                      download
                    >
                      Download
                    </a>
                    <br />
                    Fingerprint: 3325 08DE 53A2 9CF5 A0AE 2F91 8268 74F8 0881
                    6BAB
                    <br />
                    Expiry: 10/04/2028
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
