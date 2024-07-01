import React, { Suspense } from "react";
import Layout from "@components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import worldMill from "@react-jvectormap/world/worldMill.json";

import SEO from "@components/SEO";

import profilePic from "../assets/profile-pic.jpg";
import fireMaking from "../assets/firemaking.png";
import fireSmoke from "../assets/firesmoke.png";

const Asia = {
  ID: 1,
  JP: 1,
  SG: 1,
  MY: 1,
  TL: 1,
  TH: 1,
  CN: 1,
};

const Europe = {
  FR: 1,
};

const VectorMap = React.lazy(() =>
  import("@react-jvectormap/core").then((module) => ({
    default: module.VectorMap,
  }))
);

const About = () => {
  return (
    <>
      <SEO />
      <Layout pageTitle="about">
        <div className="about__container">
          <div className="about__center">
            <div>
              <h1>Note for programmer</h1>
              <p>
                I coded this website mainly using{" "}
                <a
                  target="_blank"
                  href="https://www.gatsbyjs.org/"
                  rel="noreferrer"
                >
                  GatsbyJS
                </a>
                {" and "}
                <a target="_blank" href="https://graphql.org/" rel="noreferrer">
                  GraphQL
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
                </a>{" "}
                under Creative Common BY-NC 4.0 License. Feel free to clone, use
                and modify it for non-commercial purposes. If you have any
                questions, don't hesitate to ask! :)
              </p>
            </div>
            <div>
              <h1>The Idea</h1>
              <p style={{ textAlign: "justify" }}>
                I imagine this website animating primitive ingredients to
                capture the hunter-gatherer lifestyle, like the excitement of
                discovering fire, drawing on the cave walls, pointing finger to
                the stars or the joy of sharing stories around the campfire.{" "}
                <br />
                <br />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "30px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={fireSmoke}
                      alt="profile-pic"
                      width="100"
                      height="100"
                    />
                    <p>Light Mode: Fire making!</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={fireMaking}
                      alt="profile-pic"
                      width="100"
                      height="100"
                    />
                    <p>Dark Mode: Fired up!</p>
                  </div>
                </div>
              </p>
            </div>
            <div>
              <h1>What is this?</h1>
              <p style={{ textAlign: "justify" }}>
                This blog is an attempt to project and organize my thoughts; a
                sort of documentation of past and present memories; a place
                where I can practice expressing ideas, capture my own inquiry
                and thinking process, reflect on spontaneous firsthand
                experiences, tell the story of how I felt towards stuff I've
                read and heard, what I've discovered and what I'm working on;
                and a place to invite any curious mind out there to share in a
                slepless dialogue
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
                <p style={{ textAlign: "justify" }}>
                  I grew up in a sleepy little town in North Sumatra, surrounded
                  by mountains and sea-facing Indian Ocean. After high school, I
                  took my first sail to study computer science and mathematics.
                  Later, I began my professional career as software engineer in
                  Jakarta. These days I mostly write code around JavaScript &
                  TypeScript for work, and in C++ and Python for fun. I also
                  enjoy juggling trick practice, chess, playing guitar/piano,
                  drawing, capture a moment, & searching for nature in spare
                  time.
                </p>
              </div>
            </div>
            <div>
              <h1>Travel</h1>
              <p>
                I made this visual map to keep track of the countries I've been
                so far and encourage myself to explore more places I haven't yet
                seen.
              </p>
              <p>
                Asia (7): 🇮🇩, 🇹🇱, 🇸🇬, 🇲🇾, 🇹🇭, 🇯🇵, 🇨🇳
                <br />
                Europe (1): 🇫🇷
              </p>
              <div
                style={{
                  width: "100%",
                  height: "400px",
                  border: "1px solid #b9b4b4",
                  borderRadius: "6px",
                  padding: "12px",
                }}
              >
                <Suspense fallback={<div>Loading...</div>}>
                  <VectorMap
                    map={worldMill}
                    backgroundColor="transparent"
                    containerStyle={{
                      width: "100%",
                      height: "100%",
                    }}
                    regionStyle={{
                      initial: {
                        fill: "#b9b4b4",
                      },
                      hover: {
                        fill: "#1a1a1a",
                      },
                    }}
                    series={{
                      regions: [
                        {
                          values: Asia,
                          scale: ["#0071A4"],
                          normalizeFunction: "polynomial",
                        },
                        {
                          values: Europe,
                          scale: ["#64660E"],
                          normalizeFunction: "polynomial",
                        },
                      ],
                    }}
                  />
                </Suspense>
              </div>
            </div>
            <div>
              <h1>Tech & Gadget</h1>
              <p>
                Laptop: Macbook Pro M3 Pro 2023, 14", Dell Latitude 5420 <br />
                Phone: iPhone 7 <br />
                eReading: Kindle Paperwhite 2020 <br />
                Earphone: Senheiser CX True Wireless <br />
                Camera: Canon EOS 600D <br />
                Game Console: Nintendo Switch Lite 2019 <br />
              </p>
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
                  Text font : Neue Haas Unica, 29LT Ada by{" "}
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
};

export default About;
