import React, { useState, useEffect } from "react";
import Layout from "@components/Layout";
import SEO from "@components/SEO";
import fractilesIcon from "../assets/project-icons/fractiles-icon.png";
import flashbackIcon from "../assets/project-icons/flashback-icon.png";
import virvoileIcon from "../assets/project-icons/virvoile-icon.png";
import oishiKenkoIcon from "../assets/project-icons/oishi-kenko.png";
import foreIcon from "../assets/project-icons/fore-icon.png";
import kompitIcon from "../assets/project-icons/kompit-icon.png";
import fractilesScreenshot1 from "../assets/fractile_ss1.png";
import fractilesScreenshot2 from "../assets/fractile_ss2.png";
import fractilesScreenshot3 from "../assets/fractile_ss3.png";
import fractilesScreenshot4 from "../assets/fractile_ss4.png";
import fractilesScreenshot5 from "../assets/fractile_ss5.png";
import fractilesScreenshot6 from "../assets/fractile_ss6.png";
import oishiScreenshot1 from "../assets/project-icons/oishi-1.png";
import oishiScreenshot2 from "../assets/project-icons/oishi-2.png";
import oishiScreenshot3 from "../assets/project-icons/oishi-3.png";
import kompitScreenshot1 from "../assets/project-icons/kompit-1.png";
import kompitScreenshot2 from "../assets/project-icons/kompit-2.png";
import kompitScreenshot3 from "../assets/project-icons/kompit-3.png";

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
      id: "flashback",
      title: "Flashback",
      description: "TBA",
      icon: flashbackIcon,
      status: "Coming Soon",
      releaseDate: "TBA",
      technologies: [],
      screenshots: [],
      links: {
        privacy: "",
        appStore: "#",
        playStore: "#",
      },
    },
    {
      id: "fractiles",
      title: "Fractiles",
      description:
        "Featuring 2048 Fractions, Mix Match (fractions equivalents), and Foey de Foey (fast-paced leaf catching). ",
      icon: fractilesIcon,
      status: "Mobile App Live",
      releaseDate: "17.09.2025",
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
        appStore:
          "https://apps.apple.com/fr/app/fractiles/id6751944887?l=en-GB",
        playStore:
          "https://play.google.com/store/apps/details?id=com.wonderkid.fractiles",
      },
    },
    {
      id: "kompit",
      title: "Kompit",
      description:
        "SuperApp for sports and competition management with score controller, ELO rating, match pairing, and statistical modeling.",
      icon: kompitIcon,
      status: "Senior Mobile Dev",
      releaseDate: "02.02.2024",
      technologies: ["iOS", "Android", "Web"],
      screenshots: [kompitScreenshot1, kompitScreenshot2, kompitScreenshot3],
      links: {
        privacy: "",
        appStore: "https://apps.apple.com/id/app/kompit/id6462844908",
        playStore:
          "https://play.google.com/store/apps/details?id=com.kompit.android&pcampaignid=web_share",
      },
    },
    {
      id: "virvoile",
      title: "Simulateur VirVoile",
      description:
        "A 3D sailing simulator with realistic physics, weather dynamics, and multiple vessel types.",
      icon: virvoileIcon,
      status: "Team Project",
      releaseDate: "",
      technologies: ["Unity", "C#"],
      screenshots: [],
      videos: [
        "https://drive.google.com/file/d/1cUHW1uqwuc61-D3ZmcrQuqZfznHVMi51/preview",
        "https://drive.google.com/file/d/1yK8yWbcr9I192H3KUxToa7M0W_N2o6SG/preview",
      ],
      links: {
        privacy: "",
        appStore: "#",
        playStore: "#",
      },
    },
    {
      id: "oishi-kenko",
      title: "Oishi-Kenko",
      description:
        "A health-focused meal planning app with personalized recipes for managing dietary conditions.",
      icon: oishiKenkoIcon,
      status: "Initial Prototype",
      releaseDate: "",
      technologies: ["Kotlin", "Android"],
      screenshots: [oishiScreenshot1, oishiScreenshot2, oishiScreenshot3],
      links: {
        privacy: "",
        appStore: "#",
        playStore:
          "https://play.google.com/store/apps/details?id=com.oishikenko.android.kenko",
      },
    },
    {
      id: "fore-coffee",
      title: "Fore Coffee",
      description:
        "Indonesia's leading coffee chain app for mobile ordering and seamless cafe experience.",
      icon: foreIcon,
      status: "First Developer",
      releaseDate: "12.10.2018",
      technologies: ["iOS", "Android"],
      screenshots: [],
      links: {
        privacy: "",
        appStore: "https://apps.apple.com/id/app/fore-coffee/id1438745141?l=id",
        playStore:
          "https://play.google.com/store/search?q=fore%20coffee&c=apps&hl=en-ID",
      },
    },
  ];

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const projectParam = urlParams.get("project");
    if (projectParam) {
      const project = projects.find((p) => p.id === projectParam);
      if (project) {
        setSelectedProject(project);
      }
    }
  }, []);

  const projectCardStyles = {
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 380px))",
      gap: "2.5rem",
      maxWidth: "1000px",
      margin: "2rem auto",
      padding: "0 1rem",
      justifyContent: "center",
      width: "100%",
      boxSizing: "border-box",
    },
    card: {
      background: "var(--bg-2)",
      backgroundImage:
        "radial-gradient(circle, rgba(0, 0, 0, 0.03) 1px, transparent 1px)",
      backgroundSize: "12px 12px",
      border: "none",
      borderRadius: "0",
      padding: "1rem",
      cursor: "pointer",
      transition: "all 0.1s ease",
      boxShadow: "none",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      maxWidth: "100%",
      imageRendering: "pixelated",
    },
    cardHover: {
      background: "var(--hover-1)",
      backgroundImage:
        "radial-gradient(circle, rgba(0, 0, 0, 0.03) 1px, transparent 1px)",
      backgroundSize: "12px 12px",
      transform: "translate(2px, 2px)",
      boxShadow: "none",
    },
    header: {
      display: "flex",
      alignItems: "center",
      marginBottom: "0.5rem",
    },
    icon: {
      width: "80px",
      height: "80px",
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
      lineHeight: "1.2",
      letterSpacing: "-0.01em",
      fontFeatureSettings: '"liga" 1, "kern" 1',
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
      justifyContent: "flex-end",
    },
    badge: {
      background: "transparent",
      color: "var(--dark-1)",
      border: "none",
      borderBottom: "1px dashed var(--subtle-dark-1)",
      padding: "0.2rem 0.4rem",
      borderRadius: "6px",
      fontSize: "0.75rem",
      fontWeight: "500",
      fontFamily: "'Departure Mono', monospace",
    },
    statusBadge: {
      background: "transparent",
      color: "var(--sort-newest)",
      border: "none",
      borderBottom: "1px dashed var(--subtle-dark-1)",
      padding: "0.2rem 0.4rem",
      borderRadius: "6px",
      fontSize: "0.75rem",
      fontWeight: "500",
      fontFamily: "'Departure Mono', monospace",
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
      maxWidth: "1200px",
      width: "100%",
      maxHeight: "90vh",
      overflow: "auto",
      scrollbarWidth: "none",
      msOverflowStyle: "none",
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
            width: "100%",
            padding: "0 1rem",
            boxSizing: "border-box",
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              marginBottom: "-0.15rem",
              fontWeight: "900",
              lineHeight: "1.2",
              letterSpacing: "-0.02em",
              fontFeatureSettings: '"liga" 1, "kern" 1',
            }}
          >
            Projects
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "var(--subtle-dark-3)",
              marginBottom: "3rem",
            }}
          >
            List of things I've built or contributed to over the years.
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
                  card.style.transform = "translate(2px, 2px)";
                  card.style.boxShadow = "none";
                  card.style.background = "var(--hover-1)";
                  card.style.backgroundImage =
                    "radial-gradient(circle, rgba(0, 0, 0, 0.03) 1px, transparent 1px)";
                  card.style.backgroundSize = "12px 12px";
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget;
                  card.style.transform = "translate(0, 0)";
                  card.style.boxShadow = "none";
                  card.style.background = "var(--bg-2)";
                  card.style.backgroundImage =
                    "radial-gradient(circle, rgba(0, 0, 0, 0.03) 1px, transparent 1px)";
                  card.style.backgroundSize = "12px 12px";
                }}
              >
                <div
                  style={{
                    ...projectCardStyles.header,
                    alignItems: "flex-start",
                  }}
                >
                  <img
                    src={project.icon}
                    alt={`${project.title} icon`}
                    style={projectCardStyles.icon}
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3
                      style={{
                        ...projectCardStyles.title,
                        fontSize: "1.8rem",
                        margin: 0,
                        marginBottom: "0.25rem",
                        lineHeight: "1.1",
                        wordBreak: "break-word",
                        letterSpacing: "-0.015em",
                        fontFeatureSettings: '"liga" 1, "kern" 1',
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      style={{
                        ...projectCardStyles.description,
                        margin: 0,
                        fontSize: "0.85rem",
                      }}
                    >
                      {project.description}
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    ...projectCardStyles.meta,
                    marginTop: "auto",
                    paddingTop: "1rem",
                  }}
                >
                  {project.id === "virvoile" ? (
                    <>
                      <span style={projectCardStyles.badge}>Desktop</span>
                      <span style={projectCardStyles.badge}>Unity</span>
                      <span style={projectCardStyles.badge}>
                        {project.status}
                      </span>
                    </>
                  ) : project.id === "oishi-kenko" ? (
                    <>
                      <span style={projectCardStyles.badge}>Android</span>
                      <span style={projectCardStyles.badge}>Kotlin</span>
                      <span style={projectCardStyles.badge}>
                        {project.status}
                      </span>
                    </>
                  ) : project.id === "fore-coffee" ? (
                    <>
                      <span style={projectCardStyles.badge}>iOS</span>
                      <span style={projectCardStyles.badge}>Android</span>
                      <span style={projectCardStyles.badge}>
                        Released {project.releaseDate}
                      </span>
                    </>
                  ) : project.id === "kompit" ? (
                    <>
                      <span style={projectCardStyles.badge}>iOS</span>
                      <span style={projectCardStyles.badge}>Android</span>
                      <span style={projectCardStyles.badge}>Web</span>
                      <span style={projectCardStyles.badge}>
                        Released {project.releaseDate}
                      </span>
                    </>
                  ) : (
                    <>
                      <span style={projectCardStyles.badge}>iOS</span>
                      <span style={projectCardStyles.badge}>Android</span>
                      {project.releaseDate && (
                        <span style={projectCardStyles.badge}>
                          Released {project.releaseDate}
                        </span>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedProject && (
          <>
            <div
              style={modalStyles.overlay}
              onClick={() => setSelectedProject(null)}
            />
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
                WebkitScrollbar: { display: "none" },
              }}
              className="modal-no-scrollbar"
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
                      letterSpacing: "-0.015em",
                      fontFeatureSettings: '"liga" 1, "kern" 1',
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
                    {selectedProject.id === "virvoile"
                      ? "Desktop App"
                      : "Mobile App"}
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
                <p
                  style={{
                    color: "var(--dark-1)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {selectedProject.id === "virvoile" ? (
                    <>
                      <strong>Team Developer:</strong> Nino Tannio |{" "}
                      <strong>Client:</strong> G.Lepinard |{" "}
                      <strong>License:</strong> Closed Source
                    </>
                  ) : selectedProject.id === "oishi-kenko" ? (
                    <>
                      <strong>Contributor:</strong> Nino Tannio |{" "}
                      <strong>Year:</strong> 2020 | <strong>License:</strong>{" "}
                      Closed Source
                    </>
                  ) : selectedProject.id === "fore-coffee" ? (
                    <>
                      <strong>Developer:</strong> Nino Tannio (First Dev |
                      Senior Dev | 2018-2020) | <strong>First Released:</strong>{" "}
                      12.10.2018
                    </>
                  ) : selectedProject.id === "kompit" ? (
                    <>
                      <strong>Developer:</strong> Nino Tannio (Senior Mobile Dev
                      | Early Programmer) | <strong>First Released:</strong>{" "}
                      02.02.2024
                    </>
                  ) : (
                    <>
                      <strong>Developer:</strong> Nino Tannio (Solo Dev) |{" "}
                      <strong>First Released:</strong> 17.09.2025
                    </>
                  )}
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "2rem",
                  marginBottom: "1.5rem",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ flex: "1", minWidth: "200px" }}>
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

                {selectedProject.id !== "virvoile" && (
                  <div style={{ flex: "1", minWidth: "200px" }}>
                    <h4
                      style={{
                        color: "var(--dark-1)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Download:
                    </h4>
                    <div
                      style={{
                        display: "flex",
                        gap: "0.75rem",
                        flexWrap: "wrap",
                      }}
                    >
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
                )}
              </div>

              {selectedProject.videos && selectedProject.videos.length > 0 && (
                <div style={{ marginBottom: "1.5rem" }}>
                  <h4
                    style={{
                      color: "var(--dark-1)",
                      marginBottom: "1rem",
                    }}
                  >
                    Demo Videos:
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      justifyContent: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    {selectedProject.videos.map((videoUrl, index) => (
                      <iframe
                        key={index}
                        src={videoUrl}
                        width="48%"
                        height="300"
                        style={{
                          border: "none",
                          borderRadius: "8px",
                          minWidth: "400px",
                          maxWidth: "500px",
                        }}
                        allow="autoplay"
                        title={`${selectedProject.title} demo video ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              )}

              {selectedProject.screenshots &&
                selectedProject.screenshots.length > 0 && (
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
                        gridTemplateColumns:
                          "repeat(auto-fit, minmax(150px, 1fr))",
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
                            height:
                              selectedProject.id === "oishi-kenko" ||
                                selectedProject.id === "kompit"
                                ? "300px"
                                : "auto",
                            objectFit:
                              selectedProject.id === "oishi-kenko" ||
                                selectedProject.id === "kompit"
                                ? "contain"
                                : "cover",
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

              {selectedProject.id !== "virvoile" && (
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
              )}
            </div>
          </>
        )}
      </Layout>
    </>
  );
}
