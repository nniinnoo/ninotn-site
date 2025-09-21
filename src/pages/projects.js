import React, { useState, useEffect } from "react";
import Layout from "@components/Layout";
import SEO from "@components/SEO";
import fractilesIcon from "../assets/project-icons/fractiles-icon.png";
import fractilesScreenshot1 from "../assets/fractile_ss1.png";
import fractilesScreenshot2 from "../assets/fractile_ss2.png";
import fractilesScreenshot3 from "../assets/fractile_ss3.png";
import fractilesScreenshot4 from "../assets/fractile_ss4.png";
import fractilesScreenshot5 from "../assets/fractile_ss5.png";
import fractilesScreenshot6 from "../assets/fractile_ss6.png";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    if (selectedProject) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
    return undefined;
  }, [selectedProject]);

  const projects = [
    {
      id: "fractiles",
      title: "Fractiles",
      description:
        "Featuring 2048 Fractions (sliding puzzle with math), Mix Match (memory-based equivalents), and Foey de Foey (fast-paced leaf catching). ",
      icon: fractilesIcon,
      status: "Mobile App Live",
      technologies: ["React Native", "TypeScript", "Expo"],
      screenshots: [
        fractilesScreenshot1,
        fractilesScreenshot2,
        fractilesScreenshot3,
        fractilesScreenshot4,
        fractilesScreenshot5,
        fractilesScreenshot6,
      ],
      links: {
        privacy: "/fractiles-privacy-policy.html",
        appStore: "https://apps.apple.com/fr/app/fractiles/id6751944887?l=en-GB",
        playStore: "https://play.google.com/store/apps/details?id=com.wonderkid.fractiles",
      },
    },
  ];

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const projectParam = urlParams.get('project');
    if (projectParam) {
      const project = projects.find(p => p.id === projectParam);
      if (project) {
        setSelectedProject(project);
      }
    }
  }, []);

  const projectCardStyles = {
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 320px))",
      gap: "1.5rem",
      maxWidth: "1000px",
      margin: "2rem auto",
      padding: "0 2rem",
      justifyContent: "center",
    },
    card: {
      background: "transparent",
      border: "1px solid var(--subtle-dark-1)",
      borderRadius: "6px",
      padding: "1.25rem",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 10px",
    },
    cardHover: {
      transform: "translateY(-2px)",
      background: "var(--hover-1)",
    },
    header: {
      display: "flex",
      alignItems: "center",
      marginBottom: "0.75rem",
    },
    icon: {
      width: "56px",
      height: "56px",
      marginRight: "0.75rem",
      borderRadius: "6px",
      flexShrink: 0,
      background: "transparent",
    },
    title: {
      fontSize: "1.5rem",
      fontWeight: "700",
      color: "var(--dark-1)",
      marginBottom: "0",
      fontFamily: "var(--font-family-title)",
      background: "transparent",
    },
    description: {
      color: "var(--subtle-dark-3)",
      lineHeight: "1.5",
      marginBottom: "1rem",
      fontSize: "0.9rem",
    },
    meta: {
      display: "flex",
      gap: "0.5rem",
      flexWrap: "wrap",
      marginBottom: "0.5rem",
    },
    badge: {
      background: "transparent",
      color: "var(--dark-1)",
      border: "1px solid var(--subtle-dark-1)",
      padding: "0.2rem 0.4rem",
      borderRadius: "3px",
      fontSize: "0.75rem",
      fontWeight: "500",
    },
    statusBadge: {
      background: "transparent",
      color: "var(--sort-newest)",
      border: "1px solid var(--sort-newest)",
      padding: "0.2rem 0.4rem",
      borderRadius: "3px",
      fontSize: "0.75rem",
      fontWeight: "500",
    },
  };

  const modalStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0, 0, 0, 0.7)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
      padding: "2rem",
    },
    modal: {
      background: "var(--bg)",
      borderRadius: "12px",
      padding: "2rem",
      maxWidth: "500px",
      width: "100%",
      maxHeight: "80vh",
      overflow: "auto",
      border: "1px solid var(--subtle-dark-1)",
      boxShadow: "rgba(0, 0, 0, 0.3) 0px 8px 32px",
    },
    header: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      marginBottom: "1.5rem",
    },
    closeButton: {
      position: "absolute",
      top: "1rem",
      right: "1rem",
      background: "none",
      border: "none",
      fontSize: "1.5rem",
      cursor: "pointer",
      color: "var(--dark-1)",
      padding: "0.5rem",
    },
    linkButton: {
      display: "inline-block",
      background: "var(--sort-to)",
      color: "white",
      padding: "0.75rem 1.5rem",
      borderRadius: "6px",
      textDecoration: "none",
      fontWeight: "500",
      margin: "0.5rem 0.5rem 0.5rem 0",
      transition: "background 0.3s ease",
    },
  };

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
            minHeight: "60vh",
          }}
        >
          <h1 style={{ fontSize: "50px", marginBottom: "1rem" }}>Projects</h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "var(--subtle-dark-3)",
              marginBottom: "3rem",
            }}
          >
            A collection of things I've built
          </p>

          <div style={projectCardStyles.container}>
            {projects.map((project) => (
              <div
                key={project.id}
                role="button"
                tabIndex={0}
                style={projectCardStyles.card}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setSelectedProject(project);
                  }
                }}
                onMouseEnter={(e) => {
                  const card = e.currentTarget;
                  card.style.transform = "translateY(-2px)";
                  card.style.background = "var(--hover-1)";
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget;
                  card.style.transform = "translateY(0)";
                  card.style.background = "transparent";
                }}
              >
                <div style={{
                  ...projectCardStyles.header,
                  alignItems: "center",
                }}>
                  <img
                    src={project.icon}
                    alt={`${project.title} icon`}
                    style={projectCardStyles.icon}
                  />
                  <h3 style={{
                    ...projectCardStyles.title,
                    fontSize: "2.2rem",
                    margin: 0,
                    marginLeft: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                  }}>{project.title}</h3>
                </div>
                <p style={projectCardStyles.description}>
                  {project.description}
                </p>
                <div style={projectCardStyles.meta}>
                  <span style={projectCardStyles.badge}>iOS</span>
                  <span style={projectCardStyles.badge}>Android</span>
                  <span style={projectCardStyles.statusBadge}>
                    {project.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedProject && (
          <>
            <div style={modalStyles.overlay} />
            <div
              role="dialog"
              aria-modal="true"
              style={{
                ...modalStyles.modal,
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1001,
              }}
            >
              <button
                type="button"
                style={modalStyles.closeButton}
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                ×
              </button>

              <div style={modalStyles.header}>
                <img
                  src={selectedProject.icon}
                  alt={`${selectedProject.title} icon`}
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "10px",
                  }}
                />
                <div>
                  <h2
                    style={{
                      margin: 0,
                      color: "var(--dark-1)",
                      fontFamily: "var(--font-family-title)",
                      fontSize: "2.6rem",
                      lineHeight: 1.1,
                    }}
                  >
                    {selectedProject.title}
                  </h2>
                  <p
                    style={{
                      margin: "0.05rem 0 0 0",
                      color: "var(--subtle-dark-3)",
                      fontSize: "1.15rem",
                      lineHeight: 1.1,
                    }}
                  >
                    Mobile App
                  </p>
                </div>
              </div>

              <p
                style={{
                  color: "var(--dark-1)",
                  lineHeight: "1.6",
                  marginBottom: "1.5rem",
                }}
              >
                {selectedProject.description}
              </p>

              <div style={{ marginBottom: "1.5rem" }}>
                <h4
                  style={{
                    color: "var(--dark-1)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Technologies:
                </h4>
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    flexWrap: "wrap",
                  }}
                >
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        background: "var(--subtle-dark-1)",
                        padding: "0.25rem 0.5rem",
                        borderRadius: "4px",
                        fontSize: "0.9rem",
                        color: "var(--dark-1)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <h4
                  style={{
                    color: "var(--dark-1)",
                    marginBottom: "1rem",
                  }}
                >
                  Download:
                </h4>
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  {selectedProject.links.appStore !== "#" && (
                    <a
                      href={selectedProject.links.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        ...modalStyles.linkButton,
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <span style={{ fontSize: "1.2rem" }}>🍎</span>
                      iOS - App Store
                    </a>
                  )}
                  {selectedProject.links.playStore !== "#" && (
                    <a
                      href={selectedProject.links.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        ...modalStyles.linkButton,
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <span style={{ fontSize: "1.2rem" }}>🤖</span>
                      Android - Play Store
                    </a>
                  )}
                </div>
              </div>

              {selectedProject.screenshots && (
                <div style={{ marginBottom: "1.5rem" }}>
                  <h4
                    style={{
                      color: "var(--dark-1)",
                      marginBottom: "1rem",
                    }}
                  >
                    Screenshots:
                  </h4>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                      gap: "0.75rem",
                      maxHeight: "300px",
                      overflowY: "auto",
                    }}
                  >
                    {selectedProject.screenshots.map((screenshot, index) => (
                      <img
                        key={index}
                        src={screenshot}
                        alt={`${selectedProject.title} screenshot ${index + 1}`}
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "8px",
                          border: "1px solid var(--subtle-dark-1)",
                          cursor: "pointer",
                          transition: "transform 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = "scale(1.05)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = "scale(1)";
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h4
                  style={{
                    color: "var(--dark-1)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Legal:
                </h4>
                <a
                  href={selectedProject.links.privacy}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    ...modalStyles.linkButton,
                    background: "transparent",
                    color: "var(--dark-1)",
                    border: "1px solid var(--subtle-dark-1)",
                    padding: "0.5rem 1rem",
                    fontSize: "0.9rem",
                  }}
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </>
        )}
      </Layout>
    </>
  );
}
