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
        "https://m.media-amazon.com/images/I/61qI-RzvYDL._AC_UF1000,1000_QL80_.jpg",
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
      title: "Plato Meno",
      author: " a new translation by Robin Waterfield",
      image:
        "https://m.media-amazon.com/images/I/81eAcHvO9sL._AC_UF1000,1000_QL80_.jpg",
    },

    {
      title: "Against the Gods",
      author: "Peter L. Bernstein",
      image:
        "https://m.media-amazon.com/images/I/71MykJzsAaL._AC_UF894,1000_QL80_.jpg",
    },

    // Add more books here
  ];

  return (
    <>
      <SEO />
      <Layout pageTitle="books">
        <div
          className="books__container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            marginTop: "40px",
            marginLeft: "100px",
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
                  width: "260px",
                  height: "400px",
                  borderRadius: "10px",
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
                <h3 className="book__author" style={{ marginTop: -5 }}>
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
