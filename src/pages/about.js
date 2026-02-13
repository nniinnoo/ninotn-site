import React, { useState, useEffect } from "react";
import Layout from "@components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import WorldMap from "react-svg-worldmap";
import ScrollRuler from "@components/ScrollRuler";

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
  { country: "it", value: ": 1x" },
];

function About() {
  const [mapSize, setMapSize] = useState("md");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 960) {
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
            <div id="section-beginning">
              <h1>In the beginning.. </h1>
              <div>
                <img
                  src={forbiddenFruit}
                  alt="profile-pic"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px",
                  }}
                />
                <p style={{ textAlign: "center" }}>
                  <small>"La Chute" (1479) by Hugo Van der Goes</small>
                </p>
                <p style={{ textAlign: "justify" }}>

                  I was five or six when my grandmother first told me the story of Genesis. "In the beginning…" she said, then repeated by people around with the same enthusiasm as if there is actually a real garden somewhere up there, past the clouds, guarded by an evil serpent, and one day we could visit it during the holiday. I was fascinated. I found it strange and beautiful as a bedtime story. It made me imagine how the fruit might look, how it tasted, how many of them, and wonder if there could be any other kind of fruit. As I grew up, I buried most of those fairytales, but I chose to spare this one, as a souvenir, to remind me of that innocent time.
                  <br />
                  <br />
                  <p>
                    <blockquote
                      style={{
                        marginLeft: "20px",
                        borderLeft: "4px solid #ccc",
                        paddingLeft: "16px",
                        textAlign: "justify",
                      }}
                    >
                      Sitting by the campfire, I listen to that old and raspy voice again — an echo that once whispered me to make fire, to unveil a breath that obeys the law of number, to kiss the sun and steal the ring of Saturn, to fill the universe with our everlasting dreams, until we were lost, until we meet, until we find ourselves once again. "Eat and you will understand." Then I fall into the sea of suffering. "Run away ! " "Run to the edge of reason," the snake repeated. "Who are you?" I asked. "I am your curiosity."
                    </blockquote>
                  </p>
                </p>
              </div>
            </div>
            <div id="section-idea">
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
                aesthetic simplicity of Dieter Rams, the legendary German
                industrial designer who inspired Steve Jobs for the iPod design.
                Though he never designed a website, I like to imagine what it
                would be like if he did. So, I stole his recipe—but I must
                admit, having a sense of style isn't easy; you really need to
                work on a different kind operation of way to see things. I still
                consider this blog unfinished and will continue to refine it
                from time to time.
              </p>
            </div>
            <div id="section-what">
              <h1>What is this?</h1>
              <p style={{ textAlign: "justify" }}>
                This blog is an attempt to project and organize my thoughts; a
                sort of documentation of past and present memories; a place
                where I can practice expressing ideas, capture my own inquiry
                and thinking process, reflect on spontaneous firsthand
                experiences, tell the story of how I felt towards stuff I've
                read and heard, what I've discovered and what I'm working on;
                and to share a sleepless dialogue within.
              </p>
            </div>
            <div id="section-aboutme">
              <h1>About Me</h1>
              <div className="about__me">
                <img
                  alt="Profile of Nino Tannio"
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
                  I grew up in a sleepy little town in North Sumatra, it's
                  surrounded by the mountains and sea-facing the Indian Ocean.
                  So, the hobbies that you're likely to develop in a place like
                  that are hiking, swimming, fishing and wondering what lies
                  beyond the sea and the mountain. After high school, I took my
                  first sail to study computer science and mathematics. Later, I
                  began my professional career as a software engineer in
                  Jakarta, mostly write code around C++, Java, JavaScript and
                  TypeScript for work.
                </p>
              </div>
              <p style={{ textAlign: "justify" }}>
                In the meantime, I decided to learn French. Then, after the
                pandemic, I took another voyage and somehow ended up in Southern
                France. I am currently a master's student at the Université de
                Toulouse. Here, I find myself drowning in the rigorous study of
                theorems and formal proofs in mathematics. I have many interests
                that I still regularly do to this day: I enjoy cycling,
                climbing, reading, juggling trick, chess, guitar/piano, drawing,
                capturing moments, meditating, and searching for nature in spare
                time.
              </p>
            </div>
            <div id="section-travel">
              <h1>Travel</h1>
              <p>
                I made this visual map to keep track of the countries I've been
                so far. I hope to explore more places I haven't yet seen in the
                future.
              </p>
              <p>
                Asia (7): 🇮🇩, 🇹🇱, 🇸🇬, 🇲🇾, 🇹🇭, 🇯🇵, 🇨🇳
                <br />
                Europe (3): 🇫🇷, 🇪🇸, 🇮🇹
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
            <div id="section-languages">
              <h1>Languages</h1>
              <blockquote
                style={{
                  marginLeft: "20px",
                  borderLeft: "4px solid #ccc",
                  paddingLeft: "16px",
                  textAlign: "justify",
                }}
              >
                <small>
                  ( ! ) I will move this section to a separate page soon.
                </small>
              </blockquote>
              <br />

              <p style={{ textAlign: "justify" }}>
                As a child, there was a moment when I didn't quite understand
                why my parents spoke in different local languages with their
                families, but used Bahasa with each other. I thought they had
                their own secret language. Growing up, I took all of the
                diversity for granted and never made any further effort to learn
                them. I went to different schools and learned various extra
                languages. Below are the languages I've learned so far:
              </p>
              <ol>
                <h2 style={{ marginBottom: "-5px" }}>1. Bahasa Indonesia</h2>
                <p style={{ textAlign: "justify" }}>
                  My native language. I learned the theoretical aspect from
                  elementary to high school. It's a phonetic language
                  (pronounced as it is written) like Spanish or Italian, with
                  simple grammar and without gendered nouns. The language has a
                  lot of loanwords from Dutch, Portuguese, Sanskrit, Arabic, and
                  Mandarin. Bahasa Indonesia is quite similar to Malay, so if
                  you know Bahasa, or vice versa, you can quickly understand the
                  other. If you're interested to learn the language, using
                  Duolingo, or GPT (with precaution) is a good start to grasp
                  the basic idea. While I don't have any good theoretical
                  resources to share, I can recommend books or movies to give a
                  sense of the culture; feel free to ask me. For now, I will put
                  here the list of popular Indonesian literature that you might
                  find interesting (
                  <a
                    target="_blank"
                    href="https://www.goodreads.com/shelf/show/indonesian-literature"
                    rel="noreferrer"
                  >
                    Goodreads
                  </a>
                  ). If you're familiar with spaced repetition (
                  <a
                    target="_blank"
                    href="https://en.wikipedia.org/wiki/Spaced_repetition"
                    rel="noreferrer"
                  >
                    SRS
                  </a>
                  ) app like Anki, you can find Indonesian shared decks here (
                  <a
                    target="_blank"
                    href="https://ankiweb.net/shared/decks?search=indonesian"
                    rel="noreferrer"
                  >
                    Anki Decks
                  </a>
                  ). Once you're committed, consider finding a professional or
                  community tutor through platforms like Italki.{" "}
                </p>
                <h2 style={{ marginBottom: "-5px" }}>2. English</h2>
                <p style={{ textAlign: "justify" }}>
                  Advanced (B2 - C1 level). The origin started around the age of
                  9 because of an RPG game, "Final Fantasy VIII". I had to look
                  up a thick dictionary every time the dialogues popped up and
                  write them down on a piece of paper. Back then, it's almost
                  impossible to find a game in Bahasa. The same habit continued
                  with mostly video games and songs, but I never watched films
                  with English subtitles because I hated rewinding them every
                  time. For the most part, I learned it from regular English
                  classes in school. Up until the end of high school, except for
                  articles, I never really read any literature in English. The
                  first book that I fully read in English was a very thin
                  "Sherlock Holmes: Scandal in Bohemia" that I borrowed from the
                  university library. Along the way I increased the difficulty
                  by reading more challenging books, but I still struggled with
                  my speaking articulation since I rarely practiced it, not
                  until I started working in an international work environment
                  where I interacted with colleagues from different countries.
                  In an attempt to improve, I practiced monologues and used an
                  association technique to describe lists of pictures within a
                  time limit. I'm still maintaining English to this day, and
                  there are still so many interesting things that I pick up when
                  I read or hear something. Takeaways: To study grammar I
                  strongly recommend this book:{" "}
                  <a
                    target="_blank"
                    href="https://www.amazon.fr/Understanding-English-Grammar-without-International/dp/0131930214"
                    rel="noreferrer"
                  >
                    "Understanding and Using English Grammar" by Betty S. Azar.
                  </a>{" "}
                  It contains plenty of exercises and good grammatical ideas
                  that you can easily digest. For the other aspects, I put in
                  the footnotes, as I use similar ways to study other languages.
                </p>
                <h2 style={{ marginBottom: "-5px" }}>3. Mandarin</h2>
                <p style={{ textAlign: "justify" }}>
                  Very Basic. During junior high school, I attended a
                  Buddhist-based school and learned Mandarin for 3 years. I
                  didn't maintain it and almost completely forgot everything,
                  though I still remember some characters, numbers, and phrases.
                  For me, apart from the tricky aspects like tones and
                  characters, the hardest part was finding the motivation to
                  learn, it feels too dry and I didn't feel like their pop
                  cultures hold me like the way Japanese or French does. But who
                  knows, it was a long time ago, maybe I'll return someday if I
                  have the time.
                </p>
                <h2 style={{ marginBottom: "-5px" }}>4. German</h2>
                <p
                  style={{
                    textAlign: "justify",
                  }}
                >
                  Basic (A1 level). I attended public senior high school and
                  learned German for 2 years. If I had to pick one of my
                  favorite classes throughout my school years, it would be
                  German. Not because it's easy, German is still impossible, too
                  many arbitrary and complex grammar rules, but Frau Suzana made
                  the whole experience really unforgettable. It was not just a
                  language class, but also psychology. The enthusiasm and
                  open-mindedness, that's the quality that inspires me more from
                  a teacher. She made us sing, dance, and cry in the class. She
                  made everyone from the shyest to the most rebellious students
                  express their feelings towards each other and reconcile
                  differences. Back to the language, after high school I didn't
                  maintain it for many years, until about pandemic era, I
                  decided to keep in touch with German via Duolingo and Youtube
                  channel like{" "}
                  <a href="https://www.youtube.com/@EasyGerman">Easy German</a>.
                  Since I have a few German friends, sometimes it's fun to try
                  to figure out what they're talking about with my limited
                  vocabulary.
                </p>
                <h2 style={{ marginBottom: "-5px" }}>5. French</h2>
                <p
                  style={{
                    textAlign: "justify",
                  }}
                >
                  Intermediate (B2). Learning this language has been more like a
                  self-discovery for me. The motivation I mentioned earlier, I
                  found it in French through a series of events. It began to
                  take shape in junior high school when I first read the story
                  about Fermat's Last Theorem in a Japanese manga. During high
                  school, I read Albert Camus's <i>The Stranger</i>. In
                  university, I watched many French movies and read more books
                  by French writers during the pandemic. When I opened my
                  science and math textbooks, they were filled with French names
                  (Pascal, Laplace, Fourier, Lagrange, Cauchy, Descartes, Fermat
                  and, so on). I even used Laplacian and Fourier transform in my
                  thesis. All of these are potential catalysts, but the final
                  triggers happened when there were 2 visiting professors from
                  France in our lab, and my advisor asked me to assist them
                  during their stay.
                </p>
                <p
                  style={{
                    textIndent: "20px",
                    marginTop: "-20px",
                    textAlign: "justify",
                  }}
                >
                  Later, after I had started working, I came across a blog
                  article by Eka Kurniawan (an Indonesian author) that talked
                  about his effort to read Marcel Proust's{" "}
                  <i>In Search of Lost Time</i> in the original French{" "}
                  <i>À la recherche du temps perdu</i>. "There was a feeling I
                  can't describe when I read him in his own language," said Eka.
                  That day, I determined to learn French. "I'm going to read
                  Camus in his own language" I said to myself. Since France is
                  not fully a phonetic language, I thought it would be better to
                  learn the pronunciation from a tutor right from the start
                  rather than doubling my effort to fix it later. So, I took a
                  French course every Saturday at one of the French institutes
                  in Jakarta. Later, when I reached DELF A2, it was just at the
                  beginning of the pandemic. I returned to my hometown and
                  learned the rest of the level by myself. I spent about a week
                  gathering reliable resources, methods and building my own
                  framework.
                </p>
                <p
                  style={{
                    textIndent: "20px",
                    marginTop: "-20px",
                    textAlign: "justify",
                  }}
                >
                  For grammar, I use{" "}
                  <i>
                    <a href="https://www.goodreads.com/book/show/6025919-easy-french-step-by-step">
                      Easy French Step-by-Step
                    </a>
                  </i>{" "}
                  by Myrna Bell, It is like Betty Azar's book, but for French,
                  and
                  <i>
                    {" "}
                    <a href="https://www.goodreads.com/book/show/558629.Advanced_French_Grammar?ref=nav_sb_ss_2_23">
                      Advanced French Grammar
                    </a>
                  </i>{" "}
                  by Monique L'Huiller. For vocabulary, I created my own lists
                  from the books mentioned above,{" "}
                  <i>
                    <a href="https://www.goodreads.com/book/show/3707094-the-first-thousand-words-in-french?from_search=true&from_srp=true&qid=jd10SAnFOg&rank=1">
                      The First 1000 words in French
                    </a>
                  </i>{" "}
                  (I liked the visualization in this book), and words I
                  encountered from various media as day to day practice. I
                  compiled them both in Memrise and Anki, because Memrise have
                  some interractive features (later I completely migrated
                  everything to Anki, after Memrise stopped supporting community
                  features).
                </p>
                <h2 style={{ marginBottom: "-5px" }}> Other Languages</h2>
                <p
                  style={{
                    textAlign: "justify",
                  }}
                >
                  I have a few other languages I'm interested in learning, like
                  Greek, Italian, Russian, and Japanese. Perhaps later, once I'm
                  proficient in French. I don't want to chase too many rabbits
                  and end up catching none, as every skill comes with a cost to
                  maintain.
                </p>
                <h2 style={{ marginBottom: "-5px" }}>Notes:</h2>
                Resources are abundant out there; people say many things. Most
                of them are good if you can implement, but some are harder to
                follow, so we have to adapt them to our needs. For my part,
                these have been quite effective habits, and I have faithfully
                followed them until now:
                <br />
                <div
                  style={{
                    textAlign: "justify",
                  }}
                >
                  <ol>
                    1. I strongly encourage everyone to build their own SRS
                    vocabulary with context (start simple, bit by bit so you
                    don't feel overwhelmed); you can find some of the good
                    examples in{" "}
                    <a href="https://ankiweb.net/shared/decks?search=english">
                      Anki's shared decks
                    </a>
                    . [ * ]{" "}
                  </ol>
                  <ol>
                    2. Don't just review, try to recall as much as possible, and
                    don't add more study if you can't recall 90% of the previous
                    study.
                  </ol>
                  <ol>
                    3. To practice speaking, prepare a list of pictures and
                    describe them for 3-5 minutes without stopping, as if
                    talking to someone. If a picture is difficult to describe,
                    associate it with something familiar. If you're stuck on a
                    word (but know how to say it in your native language), write
                    it down and look it up later, then explain why it's hard to
                    describe. Listen to your recording, and notice the words
                    that you find hard to pronounce, and refine it (you can
                    check on <a href="https://fr.forvo.com/">Forvo</a> or Google
                    translate).
                  </ol>
                  <ol>
                    4. To practice listening, podcast is a great start (find a
                    topic that interests you and listen it MANY TIMES). I also
                    often watch stand-up comedy (e.g.
                    <a
                      href="https://www.youtube.com/watch?v=RYjfe8OSRFw"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Paul Mirabel
                    </a>
                    {" or "}
                    <a
                      href="https://www.youtube.com/watch?v=_b-FN_IT5fU"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Sebastian Marx
                    </a>
                    , as they often deliver memorable punchlines and cultural
                    references. And, don't forget about music, scrutinize the
                    lyrics.
                  </ol>
                  <ol>
                    5. Write a short diary about your day, invest on it
                    consistenly. <br />
                    <blockquote
                      style={{
                        marginLeft: "20px",
                        fontStyle: "italic",
                        borderLeft: "4px solid #ccc",
                        paddingLeft: "16px",
                        textAlign: "justify",
                      }}
                    >
                      {" "}
                      <i>
                        <small>
                          Reading and writing cannot be separated, reading is
                          breathing in and writing is breathing out – The
                          Language Nerd
                        </small>
                      </i>
                    </blockquote>
                  </ol>
                  <ol>
                    <i>
                      [*] I will update soon for some other resources that I
                      forget to mention here.
                    </i>
                  </ol>
                </div>
              </ol>
            </div>
            <div id="section-gadgetery">
              <h1>Gadgetery</h1>
              <p>
                Laptop : Macbook Pro M3 Pro 2023, 14" <br />
                Phone : iPhone 5 (retired), iPhone 7 (retired), iPhone 13
                <br />
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
                  <s>Senheiser CX True (broken)</s>, <s>Nothing Ear (return)</s>
                  , Bose QC Earbuds II
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
                  <s>Canon EF 75-300mm f/4-5.6 III (sold)</s>
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
            <div id="section-programmer">
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
                questions or suggestion, don't hesitate to reach me out.
              </p>
            </div>
            {/* <hr
                style={{
                  margin: "24px 0",
                  border: "0",
                  borderTop: "1px solid #b9b4b4",
                }}
              /> */}
            <div id="section-credit">
              <h1>Credit</h1>
              <div>
                <p>
                  Title font :
                  <ul>
                    <li>
                      Fira Sans-serif by{" "}
                      <a
                        target="_blank"
                        href="https://en.wikipedia.org/wiki/Erik_Spiekermann"
                        rel="noreferrer"
                      >
                        Erik Spiekermann
                      </a>
                    </li>
                    <li>
                      29LT Ada by{" "}
                      <a
                        target="_blank"
                        href="https://tosche.net/fonts"
                        rel="noreferrer"
                      >
                        Toshi Omagari
                      </a>
                    </li>
                  </ul>
                  Text font : Atkinson Mono by{" "}
                  <a
                    target="_blank"
                    href="https://www.brailleinstitute.org/freefont/"
                    rel="noreferrer"
                  >
                    Braille Institute
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
                    alt="Moonlit Night 1878 painting by Ivan Aivazovsky"
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
        <ScrollRuler
          sections={[
            { id: "section-beginning", label: "Beginning" },
            { id: "section-idea", label: "The Idea" },
            { id: "section-what", label: "What is this" },
            { id: "section-aboutme", label: "About Me" },
            { id: "section-travel", label: "Travel" },
            { id: "section-languages", label: "Languages" },
            { id: "section-gadgetery", label: "Gadgetery" },
            { id: "section-programmer", label: "Programmer" },
            { id: "section-credit", label: "Credit" },
          ]}
        />
      </Layout>
    </>
  );
}

export default About;
