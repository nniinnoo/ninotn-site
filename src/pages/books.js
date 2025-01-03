import React from "react";
import Layout from "@components/Layout";
import SEO from "@components/SEO";

const Books = () => {
  const books = [
    {
      title: "The Old Man and the Sea",
      author: "Ernest Hemingway",
      image: "https://pictures.abebooks.com/inventory/md/md31570550991.jpg",
    },
    {
      title: "L'étranger",
      author: "Albert Camus",
      image:
        "https://m.media-amazon.com/images/I/8130inT26AL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      image: "https://m.media-amazon.com/images/I/81j330zioGL._SL1500_.jpg",
    },
    {
      title: "Sherlock Holmes",
      author: "Arthur Conan Doyle",
      image: "https://images.epagine.fr/704/9781853260704_1_75.jpg",
    },
    {
      title: "Beyond Good and Evil",
      author: "Friedrich Nietzsche",
      image:
        "https://m.media-amazon.com/images/I/71qQesJERdL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Sophie's World",
      author: "Jostein Gaarder",
      image: "https://www.le-livre.fr/photos/RO6/RO60110169.jpg",
    },
    {
      title: "On the Genealogy of Morals",
      author: "Friedrich Nietzsche",
      image:
        "https://m.media-amazon.com/images/I/71QrBS7rmXL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Meditations on First Philosophy",
      author: "René Descartes",
      image:
        "https://m.media-amazon.com/images/I/51LNF6nP5pL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Melihat Api Bekerja",
      author: "Aan Mansyur",
      image:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1428553025i/25325367.jpg",
    },
    {
      title: "Traveler of the Century",
      author: "Andrés Neuman",
      image:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1325310312i/12510878.jpg",
    },

    {
      title: "Walt Whitman's Selected Poems",
      author: "Walt Whitman",
      image:
        "https://m.media-amazon.com/images/I/81pKWG5QlaL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "The Waves",
      author: "Virginia Woolf",
      image: "https://m.media-amazon.com/images/I/91Rt95OXdZL.jpg",
    },
    {
      title: "Plato Meno",
      author: "translated by Robin Waterfield",
      image:
        "https://m.media-amazon.com/images/I/81eAcHvO9sL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "The Odyssey",
      author: "translated by Robert Fagles",
      image:
        "https://m.media-amazon.com/images/I/81g0AATkO9L._AC_UF894,1000_QL80_.jpg",
    },
    {
      title: "Moby Dick",
      author: "Herman Melville",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjNTCtQyLvSRT3xBptw1xC_SncofuhQ7uE2rR4GW5y-StyqsPnjyfVvZUWFltGV6-jmKTa0izIhFgMm16Ya-Tp5y6dnn9iPe87wetbBSwWxLPb_3JlJzCgsi4Sb8Rmy7Bt28VYEswiuXPE/s1600/mobydick_cover3_web.jpg",
    },
    {
      title: "Against the Gods",
      author: "Peter L. Bernstein",
      image:
        "https://m.media-amazon.com/images/I/71MykJzsAaL._AC_UF894,1000_QL80_.jpg",
    },
    {
      title: "The Man Who Loved Only Numbers",
      author: "Paul Hoffman",
      image: "https://m.media-amazon.com/images/I/71iyZwrgyjL._SY522_.jpg",
    },
    {
      title: "Pragmatic Programmer",
      author: "Andrew Hunt, David Thomas",
      image: "https://m.media-amazon.com/images/I/61ztlXgCmpL._SY522_.jpg",
    },
    {
      title: "The Book of Disquiet",
      author: "Fernando Pessoa",
      image:
        "https://m.media-amazon.com/images/I/A17SAslPHzL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Catatan Seorang Demonstran",
      author: "Soe Hok Gie",
      image:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1416554142i/1488085.jpg",
    },
    {
      title: "The Slave",
      author: "Isaac Bashevis Singer",
      image:
        "https://m.media-amazon.com/images/I/91u38lbOgpL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "The Count of Monte Cristo",
      author: "Alexandre Dumas",
      image:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1724863997i/7126.jpg",
    },
    {
      title: "What I talk about when I talk about running",
      author: "Haruki Murakami",
      image:
        "https://m.media-amazon.com/images/I/51W3wpFFIOL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      // surely you're joking, Mr. Feynman!
      title: "Surely You're Joking, Mr. Feynman!",
      author: "Richard P. Feynman",
      image:
        "https://m.media-amazon.com/images/I/61I3yO1Q6cL._AC_UF1000,1000_QL80_DpWeblab_.jpg",
    },
    // a mathematician's apology
    {
      title: "A Mathematician's Apology",
      author: "G. H. Hardy",
      image:
        "https://m.media-amazon.com/images/I/719GN8cNojL._AC_UF1000,1000_QL80_.jpg",
    },
    // the moscow puzzle
    // {
    //   title: "The Moscow Puzzles",
    //   author: "Boris A. Kordemsky",
    //   image:
    //     "https://m.media-amazon.com/images/I/81ESEnwKSXL._AC_UF1000,1000_QL80_.jpg",
    // },
    {
      title: "When We Cease to Understand the World",
      author: "Benjamin Labatut",
      image:
        "https://m.media-amazon.com/images/I/614t1mU4FcL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "The Society of Mind",
      author: "Marvin Minsky",
      image:
        "https://m.media-amazon.com/images/I/51LrKJGIfFL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "The Selfish Gene",
      author: "Richard Dawkins",
      image:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1271199061i/393733.jpg",
    },
    {
      title: "A History of Western Philosophy",
      author: "Bertrand Russell",
      image:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1709106488i/243685.jpg",
    },
    {
      title: "Philosophical Investigations",
      author: "Ludwig Wittgenstein",
      image:
        "https://m.media-amazon.com/images/I/61bfzvHWSvL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "The Tunnel",
      author: "Ernesto Sabato",
      image:
        "https://m.media-amazon.com/images/I/71-ed6kpyzL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Le Problème à Trois Corps (The Three-Body Problem)",
      author: "Liu Cixin",
      image:
        "https://www.actes-sud.fr/sites/default/files/couvertures/9782330181055.jpg",
    },
    {
      title: "Fermat's Last Theorem",
      author: "Simon Singh",
      image:
        "https://m.media-amazon.com/images/I/81ssAUH2jLL._UF1000,1000_QL80_.jpg",
    },
    {
      title: "The Dawn of Everything",
      author: "David Graeber, David Wengrow",
      image: "https://m.media-amazon.com/images/I/819UL7qQa5L.jpg",
    },
    // Add more books here
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
          }}
        >
          <h1 style={{ fontSize: "50px" }}>Library</h1>
          <p style={{ marginTop: -60, fontSize: "20px" }}>
            Books I've read and found worth recommending{" "}
          </p>
        </div>
        <div
          className="books__container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            marginLeft: "100px",
            marginRight: "100px",
          }}
        >
          {books.map((book) => (
            <div
              key={book.title}
              className="book__item"
              style={{ lineHeight: "0", marginTop: "36px" }}
            >
              <img
                src={book.image}
                alt={book.title}
                className="book__image"
                style={{
                  width: "280px",
                  height: "400px",
                  borderRadius: "6px",
                }}
              />
              <div style={{ marginTop: "24px" }}>
                <h1
                  className="book__title"
                  style={{
                    maxWidth: "280px",
                    textWrap: "wrap",
                    lineHeight: "0.8",
                  }}
                >
                  {book.title}
                </h1>
                <h3 className="book__author" style={{ marginTop: -10 }}>
                  {book.author}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Books;
