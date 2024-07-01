import React from "react";
import Layout from "@components/Layout";
import SEO from "@components/SEO";

export default function Projects() {
  const projects = [
    {
      title: "Better Work Indonesia",
      description: "https://betterwork.org/indonesia/",
      image: "https://pictures.abebooks.com/inventory/md/md31570550991.jpg",
    },
    {
      title: "L'étranger",
      description: "Albert Camus",
      image:
        "https://m.media-amazon.com/images/I/8130inT26AL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Crime and Punishment",
      description: "Fyodor Dostoevsky",
      image: "https://m.media-amazon.com/images/I/81j330zioGL._SL1500_.jpg",
    },
    {
      title: "Beyond Good and Evil",
      description: "Friedrich Nietzsche",
      image:
        "https://m.media-amazon.com/images/I/71qQesJERdL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Sophie's World",
      description: "Jostein Gaarder",
      image: "https://www.le-livre.fr/photos/RO6/RO60110169.jpg",
    },
  ];

  return (
    <>
      <SEO />
      <Layout>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "50px" }}>Projects</h1>
        </div>

        <div
          className="books__container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 400px)",
            gap: 24,
            justifyContent: "center",
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              style={{
                borderRadius: "12px",
                borderWidth: "1px",
                borderColor: "#b9b4b4",
                borderStyle: "solid",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="book__image"
                style={{
                  width: "400px",
                  height: "200px",
                  borderTopRightRadius: "10px",
                  borderTopLeftRadius: "10px",
                }}
              />
              <div style={{ padding: "12px" }}>
                <h1 style={{ marginTop: 0, marginBottom: -12 }}>
                  {project.title}
                </h1>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
}
