import React from "react";
import Layout from "@components/Layout";
import { StaticImage } from "gatsby-plugin-image";

import SEO from "@components/SEO";

import profilePic from "../assets/profile-pic.jpg";

const About = () => (
  <>
    <SEO />
    <Layout pageTitle="about">
      <div className="about__container">
        <div className="about__center">
          <div>
            <h1>Site Note</h1>
            <p>
              I developed this website using{" "}
              <a
                target="_blank"
                href="https://www.gatsbyjs.org/"
                rel="noreferrer"
              >
                Gatsby Framework
              </a>
              , hosted on
              <a
                target="_blank"
                href="https://www.netlify.com/"
                rel="noreferrer"
              >
                {" "}
                Netlify
              </a>
              , and I've put the entire code on{" "}
              <a
                target="_blank"
                href="https://github.com/nniinnoo/ninotn-site"
                rel="noreferrer"
              >
                Github
              </a>
              . Feel free to clone or contribute (if you have any questions or
              specific request don't hesitate to ask)
            </p>
          </div>
          <div>
            <h1>What is this?</h1>
            <p>
              This blog is an attempt to project and organize my thoughts; a
              sort of documentation of past and present memories; a place where
              I can practice expressing ideas, capture my own inquiry and
              thinking process, reflect on spontaneous firsthand experiences,
              tell the story of how I felt towards stuff I've read and heard,
              what I've discovered and what I'm working on; and a place to
              invite any curious mind out there to share in a slepless dialogue
            </p>
          </div>
          <div>
            <h1>About Me</h1>
            <div className="about__me">
              <img
                alt="#"
                src={profilePic}
                width="180"
                height="220"
                style={{
                  float: "left",
                  marginRight: "24px",
                  borderRadius: "3px",
                  marginTop: "12px",
                }}
              />
              <p>
                I grew up in a sleepy little town in North Sumatra, surrounded
                by mountains and sea-facing Indian Ocean. After high school, I
                took my first sail to study computer science and mathematics.
                Later, I began my professional career as software engineer in
                Jakarta. These days I mostly write code around JavaScript &
                TypeScript for work, sometimes in C++ and Python for
                recreational
              </p>
            </div>
          </div>
          <div>
            <h1>Credit</h1>
            <div>
              <p>
                Title font : Fira Sans-serif by{" "}
                <a
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/Erik_Spiekermann"
                  rel="noreferrer"
                >
                  Erik Spiekermann
                </a>
                <br />
                Text font : Neue Haas Unica by{" "}
                <a
                  target="_blank"
                  href="https://tosche.net/fonts"
                  rel="noreferrer"
                >
                  Toshi Omagari
                </a>
                <br />
                <p>
                  Mini-screen background: Moonlit Night 1878 by{" "}
                  <a
                    target="_blank"
                    href="https://en.wikipedia.org/wiki/Ivan_Aivazovsky"
                    rel="noreferrer"
                  >
                    Ivan Aivazovsky
                  </a>
                </p>
                <StaticImage
                  alt="#"
                  quality={100}
                  src="../assets/moonlit-1878-by-ivan-aivazovsky.jpg"
                  width="600"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </>
);

export default About;
