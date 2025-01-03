import React, { useState, useEffect } from "react";
import Layout from "@components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import WorldMap from "react-svg-worldmap";

import SEO from "@components/SEO";

import profilePic from "../assets/profile-pic.jpg";
import fireMaking from "../assets/firemaking.png";
import fireSmoke from "../assets/firesmoke.png";
import forbiddenFruit from "../assets/forbidden-fruit.png";

const data = [
  { country: "id", value: ": Home" },
  { country: "jp", value: ": 2x" },
  { country: "sg", value: ": 1x" },
  { country: "my", value: ": 2x airport transit" },
  { country: "th", value: ": 1x" },
  { country: "tl", value: ": 1x" },
  { country: "cn", value: ": 1x airport transit" },
  { country: "fr", value: ": Current resident" },
  { country: "es", value: ": 1x" },
];

const About = () => {
  const [mapSize, setMapSize] = useState("md");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMapSize("md");
      } else {
        setMapSize("lg");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call the function initially to set the correct size

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <SEO />
      <Layout pageTitle="about">
        <div className="about__container">
          <div className="about__center">
            <h1>In the beginning.. </h1>
            <div>
              <img
                src={forbiddenFruit}
                alt="profile-pic"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <p style={{ textAlign: "center", fontStyle: "italic" }}>
                "La Chute" (1479) a painting by Hugo Van der Goes
              </p>
              <p style={{ textAlign: "justify" }}>
                As a kid, the story of Genesis always fascinated me. I first
                heard it from my grandmother, "In the beginning.." she said,
                then repeated by people around with the same enthusiasm that the
                fruit eaten by Adam and Eve was an actual forbidden fruit,
                guarded by an evil snake in a place called the Garden of Eden.
                It gave the impression as if it really existed somewhere up
                there, beyond the sky, and one day we could visit it during
                holiday. I found it strange and beautiful as a bedtime story to
                cover something we didn't have an explanation for. It made me
                imagine how the fruit might look, how it tasted, and wonder if
                there could be any other kind of fruit. As I grew up, I buried
                most of those childhood fairytales, but I chose to spare this
                one, as a souvenir, to remind me of that innocent time. So, in
                order to not let it die uncovered, I try to give it a new
                uniform and see it far from different dimensions.
                <br />
                <br />
                <p>
                  <blockquote
                    style={{
                      marginLeft: "20px",
                      fontStyle: "italic",
                      borderLeft: "4px solid #ccc",
                      paddingLeft: "16px",
                      textAlign: "justify",
                    }}
                  >
                    Sitting by the campfire, I listen to the snake’s voice
                    again. It is old and raspy without temptation; it feels more
                    like a call that once told us to discover ancient flame, to
                    unveil something powerful, to kiss the sun, to steal ring of
                    Saturn, to fill the cosmos with our everlasting dreams,
                    until we lost again in search of ourselves. “Eat and digest
                    the fruit bit by bit, and you will understand," said the
                    snake. Then I fall, with a lot of pain and suffering. "Cross
                    that line, go away to a place beyond your intuition, and
                    never give up," the snake repeated. "Who are you?" I asked.
                    "I am, your curiosity".
                  </blockquote>
                </p>
              </p>
            </div>
            <div>
              <h1>The Idea</h1>
              <p style={{ textAlign: "justify" }}>
                I imagine this blog as a cave which animates primitive
                ingredients to capture the hunter-gatherer lifestyle, like the
                excitement of discovering fire, drawing on the walls, looking
                for constellations of stars, or the joy of sharing stories
                around the campfire. <br />
                <br />
                <div>
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
                        style={{
                          width: "100%",
                          height: "auto",
                          maxWidth: "100px",
                        }}
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
                        style={{
                          width: "100%",
                          height: "auto",
                          maxWidth: "100px",
                        }}
                      />
                      <p>Dark Mode: Fired up!</p>
                    </div>
                  </div>
                </div>
                When I think about the design, I have in mind a kind of
                aesthetic simplicity that's introduced by Dieter Ram (a
                legendary German industrial designer). Though he never designed
                a website, I try to imagine if he did. So, I steal his principle
                and try to produce it in my own. I must admit, it.. is..
                really.. hard. Even to this day, I still consider this blog
                unfinished. After all, I decided to roam around and refine it
                from time to time, but so far, I'm happy with the result.
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
                and to share a sleepless dialogue in within.
              </p>
            </div>
            <div>
              <h1>About Me</h1>
              <div className="about__me">
                <img
                  alt="#"
                  src={profilePic}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: "180px",
                    maxHeight: "220px",
                    float: "left",
                    marginRight: "24px",
                    borderRadius: "3px",
                    marginTop: "12px",
                  }}
                />
                <p style={{ textAlign: "justify" }}>
                  I grew up in a sleepy little town in Sumatra, surrounded by
                  mountains and sea-facing Indian Ocean. After high school, I
                  took my first sail to study computer science and mathematics.
                  Later, I began my professional career as a software engineer
                  in Jakarta. These days I mostly write code around JavaScript &
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
                so far. I hope to explore more places I haven't yet seen in the
                future.
              </p>
              <p>
                Asia (7): 🇮🇩, 🇹🇱, 🇸🇬, 🇲🇾, 🇹🇭, 🇯🇵, 🇨🇳
                <br />
                Europe (2): 🇫🇷, 🇪🇸
              </p>
              <div
                style={{
                  width: "100%",
                  border: "1px solid #b9b4b4",
                  borderRadius: "6px",
                  padding: "12px",
                }}
              >
                <WorldMap
                  color="#556B2F"
                  backgroundColor="transparent"
                  value-suffix="people"
                  size={mapSize}
                  data={data}
                  strokeOpacity={0.5}
                  richInteraction
                />
              </div>
            </div>
            <div>
              <h1>Gadgetery</h1>
              <p>
                Laptop : Macbook Pro M3 Pro 2023, 14", Dell Latitude 5420 <br />
                Phone : iPhone 7 <br />
                eReading:{" "}
                <a
                  target="_blank"
                  href="https://www.amazon.fr/kindle-paperwhite-2020/s?k=kindle+paperwhite+2020"
                  rel="noreferrer"
                >
                  Kindle Paperwhite 2020
                </a>{" "}
                <br />
                Earbuds :{" "}
                <a
                  target="_blank"
                  href="https://www.sennheiser-hearing.com/fr-FR/p/cx-true-wireless/ckyadwwbs0eut0b446x5vb8yw/"
                  rel="noreferrer"
                >
                  Senheiser CX True Wireless
                </a>{" "}
                <br />
                Camera :{" "}
                <a
                  target="_blank"
                  href="https://www.canon.fr/for_home/product_finder/cameras/digital_slr/eos_600d/"
                  rel="noreferrer"
                >
                  Canon EOS 600D
                </a>{" "}
                <br />
                Lens :{" "}
                <a
                  target="_blank"
                  href="https://www.canon.fr/lenses/ef-75-300mm-f-4-5-6-iii-lens/"
                  rel="noreferrer"
                >
                  Canon EF 75-300mm f/4-5.6 III
                </a>{" "}
                <br />
                Game Console :{" "}
                <a
                  target="_blank"
                  href="https://www.amazon.fr/Console-Nintendo-Switch-Lite-Zamazenta/dp/B07V29SJ7C"
                  rel="noreferrer"
                >
                  Nintendo Switch Lite (Zacian Zamazenta) 2019
                </a>{" "}
                <br />
              </p>
            </div>
            <hr
              style={{
                margin: "24px 0",
                border: "0",
                borderTop: "1px solid #b9b4b4",
              }}
            />
            <div>
              <h1>Note for programmer</h1>
              <p>
                This blog is built mainly using{" "}
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
                , and I've put the code on{" "}
                <a
                  target="_blank"
                  href="https://github.com/nniinnoo/ninotn-site"
                  rel="noreferrer"
                >
                  Github
                </a>{" "}
                under Creative Common BY-NC 4.0 License. Feel free to clone,
                use, and modify it for non-commercial purposes. If you have any
                questions, don't hesitate to ask! <br />
              </p>
            </div>
            {/* <hr
              style={{
                margin: "24px 0",
                border: "0",
                borderTop: "1px solid #b9b4b4",
              }}
            /> */}
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
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
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
