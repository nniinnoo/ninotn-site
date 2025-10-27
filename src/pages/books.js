import React from "react";
import Layout from "@components/Layout";
import SEO from "@components/SEO";

function Books() {
  const fictionBooks = [
    // Tier 1: Accessible Narratives
    {
      title: "20 Century Boys",
      author: "Naoki Urasawa",
      image:
        "https://m.media-amazon.com/images/I/61dITbN+J1L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Vagabond",
      author: "Takehiko Inoue",
      image: "https://m.media-amazon.com/images/I/81qY-07K6AL.jpg",
    },
    {
      title: "Homunculus",
      author: "Hideo Yamamoto",
      image:
        "https://m.media-amazon.com/images/I/81VkApOiIdL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Kung Fu Boy",
      author: "Takeshi Maekawa",
      image:
        "https://imgv2-2-f.scribdassets.com/img/document/49702757/original/38010820dc/1?v=1",
    },
    {
      title: "Dragon Ball",
      author: "Akira Toriyama",
      image:
        "https://cdn.cultura.com/cdn-cgi/image/width=830/media/pim/TITELIVE/27_9782723434621_1_75.jpg",
    },
    {
      title: "The Old Man and the Sea",
      author: "Ernest Hemingway",
      image: "https://pictures.abebooks.com/inventory/md/md31570550991.jpg",
    },
    {
      title: "L'étranger",
      author: "Albert Camus",
      image:
        "https://labourseauxlivres.fr/cdn/shop/files/wSC7b0rzf4OBV0NL0n4RZv3b9WYJgCT9Cvm_U1eBP9WpAN_3U6o3WA-cover-large.jpg",
    },
    {
      title: "Sherlock Holmes",
      author: "Arthur Conan Doyle",
      image: "https://images.epagine.fr/704/9781853260704_1_75.jpg",
    },
    {
      title: "The Count of Monte Cristo",
      author: "Alexandre Dumas",
      image:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1724863997i/7126.jpg",
    },

    // Tier 2: Accessible but Moving/Elegant
    {
      title: "Flowers for Algernon",
      author: "Daniel Keyes",
      image:
        "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1582937860i/875031.jpg",
    },
    {
      title: "The Remains of the Day",
      author: "Kazuo Ishiguro",
      image:
        "https://m.media-amazon.com/images/I/71VI1St21tL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Snow Country",
      author: "Yasunari Kawabata",
      image: "https://m.media-amazon.com/images/I/915eXtj2YuL.jpg",
    },

    // Tier 3: Medium Complexity
    {
      title: "Moby Dick",
      author: "Herman Melville",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjNTCtQyLvSRT3xBptw1xC_SncofuhQ7uE2rR4GW5y-StyqsPnjyfVvZUWFltGV6-jmKTa0izIhFgMm16Ya-Tp5y6dnn9iPe87wetbBSwWxLPb_3JlJzCgsi4Sb8Rmy7Bt28VYEswiuXPE/s1600/mobydick_cover3_web.jpg",
    },
    {
      title: "The Slave",
      author: "Isaac Bashevis Singer",
      image:
        "https://m.media-amazon.com/images/I/91u38lbOgpL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "The Seven Good Years",
      author: "Etgar Keret",
      image:
        "https://m.media-amazon.com/images/I/61vPWgsQjOL._UF1000,1000_QL80_.jpg",
    },
    {
      title: "The Book of Disquiet",
      author: "Fernando Pessoa",
      image:
        "https://m.media-amazon.com/images/I/A17SAslPHzL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Melihat Api Bekerja",
      author: "Aan Mansyur",
      image:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1428553025i/25325367.jpg",
    },
    {
      title: "Rumah Kopi Singa Tertawa",
      author: "Yusi Avianto Parenom",
      image:
        "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1328111303i/13080815.jpg",
    },
    {
      title: "Catatan Seorang Demonstran",
      author: "Soe Hok Gie",
      image:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1416554142i/1488085.jpg",
    },

    // Tier 4: Challenging
    {
      title: "Walt Whitman's Selected Poems",
      author: "Walt Whitman",
      image:
        "https://m.media-amazon.com/images/I/81pKWG5QlaL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "The Odyssey",
      author: "translated by Robert Fagles",
      image:
        "https://m.media-amazon.com/images/I/81g0AATkO9L._AC_UF894,1000_QL80_.jpg",
    },
    {
      title: "The Wind-Up Bird Chronicle",
      author: "Haruki Murakami",
      image:
        "https://static.fnac-static.com/multimedia/Images/FR/NR/2e/2e/27/2567726/1507-1/tsp20151026160227/The-wind-up-bird-chronicle.jpg",
    },
    {
      title: "Traveler of the Century",
      author: "Andrés Neuman",
      image:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1325310312i/12510878.jpg",
    },
    {
      title: "La Nausée",
      author: "Jean-Paul Sartre",
      image: "https://m.media-amazon.com/images/I/91m6dOLvyTL.jpg",
    },
    {
      title: "Siddhartha",
      author: "Hermann Hesse",
      image:
        "https://m.media-amazon.com/images/I/61urry+xagL._AC_UF1000,1000_QL80_.jpg",
    },

    // Tier 5: Very Difficult
    {
      title: "The Waves",
      author: "Virginia Woolf",
      image: "https://m.media-amazon.com/images/I/91Rt95OXdZL.jpg",
    },
    {
      title: "The Tunnel",
      author: "Ernesto Sabato",
      image:
        "https://m.media-amazon.com/images/I/71-ed6kpyzL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Beauty is a Wound",
      author: "Eka Kurniawan",
      image:
        "https://m.media-amazon.com/images/I/71AyR9GyRBL._UF1000,1000_QL80_.jpg",
    },
    {
      title: "1984",
      author: "George Orwell",
      image:
        "https://upload.wikimedia.org/wikipedia/id/thumb/c/c7/1984_-_Bentang_Budaya.jpg/250px-1984_-_Bentang_Budaya.jpg",
    },
    {
      title: "Red Plenty",
      author: "Francis Spufford",
      image:
        "https://m.media-amazon.com/images/I/91xbVxFyL5L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Le Problème à Trois Corps (The Three-Body Problem)",
      author: "Liu Cixin",
      image:
        "https://www.actes-sud.fr/sites/default/files/couvertures/9782330181055.jpg",
    },
    {
      title: "Permutation City",
      author: "Greg Egan",
      image:
        "https://upload.wikimedia.org/wikipedia/en/f/fe/PermutationCity%281stEd%29.jpg",
    },

    // Tier 6: Extremely Difficult/Experimental
    {
      title: "The Trial, Metamorphosis",
      author: "Franz Kafka",
      image:
        "https://m.media-amazon.com/images/I/81SMyPg9NHL._UF1000,1000_QL80_.jpg",
    },
    {
      title: "The Castle",
      author: "Franz Kafka",
      image:
        "https://m.media-amazon.com/images/I/51ShRlzPzLL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Lenz",
      author: "George Buchner",
      image:
        "https://m.media-amazon.com/images/I/61Fn7qBuBeL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Magnus",
      author: "Sylvie Germain",
      image: "https://m.media-amazon.com/images/I/919QkSkSkVL.jpg",
    },
    {
      title: "The Name of the Rose",
      author: "Umberto Eco",
      image:
        "https://m.media-amazon.com/images/I/91-O6LnH1ML._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      image: "https://m.media-amazon.com/images/I/81j330zioGL._SL1500_.jpg",
    },
    {
      title: "The Brothers Karamazov",
      author: "Fyodor Dostoevsky",
      image:
        "https://m.media-amazon.com/images/I/91VvGmWHcSL._AC_UF1000,1000_QL80_.jpg",
    },
  ];

  const nonFictionBooks = [
    // Tier 1: Accessible, Engaging
    {
      title: "Fermat's Last Theorem",
      author: "Simon Singh",
      image:
        "https://m.media-amazon.com/images/I/81ssAUH2jLL._UF1000,1000_QL80_.jpg",
    },
    {
      title: "Surely You're Joking, Mr. Feynman!",
      author: "Richard P. Feynman",
      image:
        "https://m.media-amazon.com/images/I/61I3yO1Q6cL._AC_UF1000,1000_QL80_DpWeblab_.jpg",
    },
    {
      title: "The Man Who Loved Only Numbers",
      author: "Paul Hoffman",
      image: "https://m.media-amazon.com/images/I/71iyZwrgyjL._SY522_.jpg",
    },
    {
      title: "The Language Instinct",
      author: "Steven Pinker",
      image: "https://stevenpinker.com/files/pinker/files/book_7_01.jpg",
    },
    {
      title: "Against the Gods",
      author: "Peter L. Bernstein",
      image:
        "https://m.media-amazon.com/images/I/71MykJzsAaL._AC_UF894,1000_QL80_.jpg",
    },
    {
      title: "Physics and Philosophy",
      author: "Werner Heisenberg",
      image: "https://m.media-amazon.com/images/I/91-iDc6MIFL.jpg",
    },

    // Tier 2: Medium
    {
      title: "A Mathematician's Apology",
      author: "G. H. Hardy",
      image:
        "https://m.media-amazon.com/images/I/719GN8cNojL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Pragmatic Programmer",
      author: "Andrew Hunt, David Thomas",
      image: "https://m.media-amazon.com/images/I/61ztlXgCmpL._SY522_.jpg",
    },
    {
      title: "When We Cease to Understand the World",
      author: "Benjamin Labatut",
      image:
        "https://m.media-amazon.com/images/I/614t1mU4FcL._AC_UF1000,1000_QL80_.jpg",
    },

    // Tier 3: Harder
    {
      title: "Pensée",
      author: "Blaise Pascal",
      image:
        "https://m.media-amazon.com/images/I/71QfKRV2jIL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "An Inquiry Into the Good",
      author: "Kitaro Nishida",
      image: "https://m.media-amazon.com/images/I/61RPjKaZNXL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Plato Meno",
      author: "translated by Robin Waterfield",
      image:
        "https://m.media-amazon.com/images/I/81eAcHvO9sL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "The Selfish Gene",
      author: "Richard Dawkins",
      image:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1271199061i/393733.jpg",
    },
    {
      title: "The Society of Mind",
      author: "Marvin Minsky",
      image:
        "https://m.media-amazon.com/images/I/51LrKJGIfFL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "The Structure of Scientific Revolutions",
      author: "Thomas S Kuhn",
      image:
        "https://press.uchicago.edu/.imaging/mte/ucp/medium/dam/ucp/books/jacket/978/02/26/45/9780226458113.jpg/jcr:content/9780226458113.jpg",
    },
    {
      title: "Prime Obsession",
      author: "John Derbyshire",
      image: "https://images.amazon.com/images/P/B004D39PGU.jpg",
    },

    // Tier 4: Very Difficult
    {
      title: "The Crime of Galileo",
      author: "Giorgio de Santillana",
      image: "https://covers.openlibrary.org/b/id/6484103-L.jpg",
    },
    {
      title: "The Dawn of Everything",
      author: "David Graeber, David Wengrow",
      image: "https://m.media-amazon.com/images/I/819UL7qQa5L.jpg",
    },
    {
      title: "Meditations on First Philosophy",
      author: "René Descartes",
      image:
        "https://m.media-amazon.com/images/I/51LNF6nP5pL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "A History of Western Philosophy",
      author: "Bertrand Russell",
      image:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1709106488i/243685.jpg",
    },

    // Tier 5: Extremely Difficult
    {
      title: "Critique of Pure Reason",
      author: "Immanuel Kant",
      image: "https://m.media-amazon.com/images/I/41LHDo1deiL._UF1000,1000_QL80_.jpg",
    },
    {
      title: "Philosophical Investigations",
      author: "Ludwig Wittgenstein",
      image:
        "https://m.media-amazon.com/images/I/61bfzvHWSvL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Beyond Good and Evil",
      author: "Friedrich Nietzsche",
      image:
        "https://m.media-amazon.com/images/I/71qQesJERdL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "On the Genealogy of Morals",
      author: "Friedrich Nietzsche",
      image:
        "https://m.media-amazon.com/images/I/71QrBS7rmXL._AC_UF1000,1000_QL80_.jpg",
    },
  ];

  return (
    <>
      <SEO />
      <Layout pageTitle="books">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "0 2rem",
            marginBottom: "4rem",
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              marginBottom: "-0.15rem",
              fontWeight: "900",
              letterSpacing: "-0.02em",
              lineHeight: "1.2",
              fontFeatureSettings: '"liga" 1, "kern" 1',
            }}
          >
            Library
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              marginTop: "0",
              color: "var(--subtle-dark-3)",
              maxWidth: "600px",
              textAlign: "center",
              lineHeight: "1.5",
            }}
          >
            Books I've read and found worth recommending
          </p>
        </div>
        {/* FICTION SECTION */}
        <div
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "1200px",
            padding: "1rem 0.5rem 0",
            width: "100%",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              marginBottom: "1.5rem",
              marginTop: "0",
              paddingTop: "0.5rem",
              borderTop: "1px solid var(--dark-1)",
              fontWeight: "900",
              letterSpacing: "-0.02em",
              lineHeight: "1.1",
              fontFeatureSettings: '"liga" 1, "kern" 1',
              fontFamily: "var(--font-family-title)",
              width: "calc(100% - 1rem)",
              textAlign: "left",
            }}
          >
            Fiction
          </h2>
        </div>
        <div
          className="books__container"
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 140px), 160px))",
            gap: "3rem 1rem",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "1200px",
            padding: "0 0.5rem 4rem",
            justifyContent: "center",
          }}
        >
          {fictionBooks.map((book) => (
            <div
              key={book.title}
              className="book__item"
              style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "100%",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <img
                src={book.image}
                alt={book.title}
                className="book__image"
                style={{
                  width: "100%",
                  maxWidth: "160px",
                  height: "auto",
                  aspectRatio: "2/3",
                  objectFit: "cover",
                  borderRadius: "4px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                  margin: "0 auto",
                }}
              />
              <div
                style={{
                  width: "100%",
                  maxWidth: "160px",
                  margin: "0.4rem auto 0",
                  textAlign: "center",
                }}
              >
                <h2
                  className="book__title"
                  style={{
                    width: "100%",
                    lineHeight: "1.25",
                    fontSize: "1.35rem",
                    marginBottom: "0.15rem",
                    fontWeight: "700",
                    fontFamily: "var(--font-family-title)",
                    letterSpacing: "-0.01em",
                    fontFeatureSettings: '"liga" 1, "kern" 1',
                  }}
                >
                  {book.title}
                </h2>
                <p
                  className="book__author"
                  style={{
                    marginTop: "0",
                    marginBottom: "0",
                    fontSize: "0.95rem",
                    fontWeight: "400",
                    color: "var(--subtle-dark-3)",
                    lineHeight: "1.4",
                  }}
                >
                  {book.author}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* NON-FICTION SECTION */}
        <div
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "1200px",
            padding: "1rem 0.5rem 0",
            width: "100%",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              marginBottom: "1.5rem",
              marginTop: "0",
              paddingTop: "0.5rem",
              borderTop: "1px solid var(--dark-1)",
              fontWeight: "900",
              letterSpacing: "-0.02em",
              lineHeight: "1.1",
              fontFeatureSettings: '"liga" 1, "kern" 1',
              fontFamily: "var(--font-family-title)",
              width: "calc(100% - 1rem)",
              textAlign: "left",
            }}
          >
            Non-Fiction
          </h2>
        </div>
        <div
          className="books__container"
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 140px), 160px))",
            gap: "3rem 1rem",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "1200px",
            padding: "0 0.5rem 4rem",
            justifyContent: "center",
          }}
        >
          {nonFictionBooks.map((book) => (
            <div
              key={book.title}
              className="book__item"
              style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "100%",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <img
                src={book.image}
                alt={book.title}
                className="book__image"
                style={{
                  width: "100%",
                  maxWidth: "160px",
                  height: "auto",
                  aspectRatio: "2/3",
                  objectFit: "cover",
                  borderRadius: "4px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                  margin: "0 auto",
                }}
              />
              <div
                style={{
                  width: "100%",
                  maxWidth: "160px",
                  margin: "0.4rem auto 0",
                  textAlign: "center",
                }}
              >
                <h2
                  className="book__title"
                  style={{
                    width: "100%",
                    lineHeight: "1.25",
                    fontSize: "1.35rem",
                    marginBottom: "0.15rem",
                    fontWeight: "700",
                    fontFamily: "var(--font-family-title)",
                    letterSpacing: "-0.01em",
                    fontFeatureSettings: '"liga" 1, "kern" 1',
                  }}
                >
                  {book.title}
                </h2>
                <p
                  className="book__author"
                  style={{
                    marginTop: "0",
                    marginBottom: "0",
                    fontSize: "0.95rem",
                    fontWeight: "400",
                    color: "var(--subtle-dark-3)",
                    lineHeight: "1.4",
                  }}
                >
                  {book.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
}

export default Books;
