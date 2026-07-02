import React, { useState, useEffect } from "react";
import {
  Apple,
  Play,
  Terminal,
  Package,
  CircleX,
  Sparkles,
  Globe,
} from "lucide-react";
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
import tokenwiseDemo from "../assets/project-icons/tokenwise-demo.gif";
import tokenwiseDemo2 from "../assets/project-icons/tokenwise-demo-2.gif";
import claudeIcon from "../assets/project-icons/claude-icon.svg";

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
      id: "wonderkid",
      title: "Wonderkid",
      description: "TBA",
      icon: null,
      status: "Coming Soon",
      releaseDate: "TBA",
      technologies: ["AI Research", "Creative Intelligence"],
      screenshots: [],
      links: {
        privacy: "",
        appStore: "#",
        playStore: "#",
        website: "https://wonderkid.fun/",
      },
    },
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
      id: "claude-tokenwise-cli",
      title: "claude-tokenwise-cli",
      description:
        "Interactive wrapper for Claude Code with a mode picker, session manager, and real-time token tracker to keep usage visible as you work.",
      icon: claudeIcon,
      status: "NPM Package Live",
      releaseDate: "08.03.2026",
      technologies: ["Node.js", "TypeScript", "Claude API"],
      screenshots: [tokenwiseDemo, tokenwiseDemo2],
      links: {
        privacy: "",
        appStore: "#",
        playStore: "#",
        npm: "https://www.npmjs.com/package/claude-tokenwise-cli",
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
      releaseDate: "02.02.2024",
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
      border: "none",
      borderRadius: "16px",
      padding: "1.25rem",
      cursor: "pointer",
      transition: "background-color 0.15s ease",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      maxWidth: "100%",
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
      fontWeight: "640",
      color: "var(--dark-1)",
      marginBottom: "0",
      fontFamily: "'LoveFrom Serif', serif",
      background: "transparent",
      lineHeight: "1.2",
      letterSpacing: "-0.01em",
      fontFeatureSettings: '"liga" 1, "kern" 1',
    },
    description: {
      color: "var(--subtle-dark-3)",
      lineHeight: "1.55",
      marginBottom: "1rem",
      fontSize: "0.9rem",
      fontFamily: "'Neue Haas Unica', sans-serif",
    },
  };

  const getProjectMeta = (project) => {
    switch (project.id) {
      case "claude-tokenwise-cli":
        return {
          developer: "Developer: Nino Tannio, Claude AI",
          released: `First Released: ${project.releaseDate}`,
          extra: "",
        };
      case "virvoile":
        return {
          developer: "Team Developer: Nino Tannio",
          released: "",
          extra: "Client: G.Lepinard | Closed Source",
        };
      case "oishi-kenko":
        return {
          developer: "Contributor: Nino Tannio",
          released: "Year: 2020",
          extra: "Closed Source",
        };
      case "fore-coffee":
        return {
          developer:
            "Developer: Nino Tannio (First Dev | Senior Dev | 2018-2020)",
          released: "First Released: 12.10.2018",
          extra: "",
        };
      case "kompit":
        return {
          developer:
            "Developer: Nino Tannio (Senior Mobile Dev | Early Programmer)",
          released: "First Released: 02.02.2024",
          extra: "",
        };
      default:
        return {
          developer: "Developer: Nino Tannio (Solo Dev)",
          released: project.releaseDate
            ? `First Released: ${project.releaseDate}`
            : "",
          extra: "",
        };
    }
  };

  const modalStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0, 0, 0, 0.7)",
      zIndex: 1000,
    },
    modal: {
      background: "var(--bg)",
      borderRadius: "20px",
      padding: "clamp(1.5rem, 4vw, 3rem)",
      maxWidth: "900px",
      width: "100%",
      maxHeight: "90vh",
      overflow: "auto",
      scrollbarWidth: "none",
      msOverflowStyle: "none",
      border: "1px solid var(--subtle-dark-1)",
      boxShadow: "rgba(0, 0, 0, 0.4) 0px 16px 64px",
    },
    closeButton: {
      position: "absolute",
      top: "1.25rem",
      right: "1.25rem",
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--subtle-dark-3)",
      padding: "0.5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "opacity 0.2s ease",
      opacity: 0.6,
    },
    separator: {
      border: "none",
      borderTop: "1px dashed var(--subtle-dark-1)",
      margin: "1.5rem 0",
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
              fontFamily: "'LoveFrom Serif', serif",
              fontSize: "3rem",
              marginBottom: "-0.15rem",
              fontWeight: "700",
              lineHeight: "1.2",
              letterSpacing: "-0.02em",
              fontFeatureSettings: '"liga" 1, "kern" 1',
            }}
          >
            Projects
          </h1>
          <p
            style={{
              fontFamily: "'Neue Haas Unica', sans-serif",
              fontSize: "1.15rem",
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
                  e.currentTarget.style.background = "var(--hover-1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--bg-2)";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      width: "80px",
                      flexShrink: 0,
                      marginRight: "1rem",
                    }}
                  >
                    {project.icon ? (
                      <img
                        src={project.icon}
                        alt={`${project.title} icon`}
                        style={{
                          width: "80px",
                          height: "80px",
                          borderRadius: "18px",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          width: "80px",
                          height: "80px",
                          borderRadius: "18px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "var(--bg)",
                          border: "1px solid var(--subtle-dark-1)",
                        }}
                      >
                        {project.id === "wonderkid" ? (
                          <Sparkles size={32} color="var(--sort-newest)" />
                        ) : (
                          <Terminal size={32} color="var(--sort-newest)" />
                        )}
                      </div>
                    )}
                  </div>

                  <div
                    style={{
                      flex: 1,
                      minWidth: 0,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <h3
                      style={{
                        ...projectCardStyles.title,
                        margin: 0,
                        marginBottom: "0.35rem",
                        lineHeight: "1.15",
                        wordBreak: "break-word",
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
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedProject &&
          (() => {
            const meta = getProjectMeta(selectedProject);
            return (
              <>
                <div
                  role="presentation"
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
                  }}
                  className="modal-no-scrollbar"
                >
                  {/* Close */}
                  <button
                    type="button"
                    style={modalStyles.closeButton}
                    onClick={() => setSelectedProject(null)}
                    aria-label="Close modal"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = "1";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = "0.6";
                    }}
                  >
                    <CircleX size={28} strokeWidth={1.25} />
                  </button>

                  {/* Icon + Title */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {selectedProject.icon ? (
                      <img
                        src={selectedProject.icon}
                        alt={`${selectedProject.title} icon`}
                        style={{
                          width: "64px",
                          height: "64px",
                          borderRadius: "14px",
                          flexShrink: 0,
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          width: "64px",
                          height: "64px",
                          borderRadius: "14px",
                          flexShrink: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "var(--bg)",
                          border: "1px solid var(--subtle-dark-1)",
                        }}
                      >
                        <Terminal size={32} color="var(--sort-newest)" />
                      </div>
                    )}
                    <h2
                      style={{
                        margin: 0,
                        color: "var(--dark-1)",
                        fontFamily: "'LoveFrom Serif', serif",
                        fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
                        fontWeight: 700,
                        lineHeight: 1.1,
                        letterSpacing: "-0.02em",
                        fontFeatureSettings: '"liga" 1, "kern" 1',
                      }}
                    >
                      {selectedProject.title}
                    </h2>
                  </div>

                  {/* Developer / Released / Tech meta */}
                  <div
                    style={{
                      fontFamily: "'Departure Mono', monospace",
                      fontSize: "0.9rem",
                      color: "var(--subtle-dark-3)",
                      lineHeight: 1.8,
                      marginBottom: "1rem",
                    }}
                  >
                    <div>{meta.developer}</div>
                    {meta.released && <div>{meta.released}</div>}
                    {meta.extra && <div>{meta.extra}</div>}
                    {selectedProject.technologies.length > 0 && (
                      <div>
                        Tech Stack: {selectedProject.technologies.join(", ")}
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: "'Neue Haas Unica', sans-serif",
                      color: "var(--dark-1)",
                      lineHeight: 1.6,
                      fontSize: "1.05rem",
                      margin: "0 0 0.5rem 0",
                      maxWidth: "520px",
                    }}
                  >
                    {selectedProject.description}
                  </p>

                  {/* Separator */}
                  <hr style={modalStyles.separator} />

                  {/* Download buttons */}
                  {selectedProject.id !== "virvoile" &&
                    (selectedProject.links.appStore !== "#" ||
                      selectedProject.links.playStore !== "#" ||
                      selectedProject.links.npm ||
                      selectedProject.links.website) && (
                      <div
                        style={{
                          display: "flex",
                          gap: "0.75rem",
                          flexWrap: "wrap",
                          marginBottom: "1.25rem",
                        }}
                      >
                        {selectedProject.links.appStore !== "#" && (
                          <a
                            href={selectedProject.links.appStore}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "0.5rem",
                              color: "var(--dark-1)",
                              textDecoration: "none",
                              fontSize: "0.85rem",
                              fontFamily: "'Departure Mono', monospace",
                              padding: "0.6rem 1.2rem",
                              border: "1px solid var(--subtle-dark-1)",
                              background: "transparent",
                              transition: "background 0.2s ease",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background =
                                "var(--hover-1)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = "transparent";
                            }}
                          >
                            <Apple size={14} /> App Store
                          </a>
                        )}
                        {selectedProject.links.playStore !== "#" && (
                          <a
                            href={selectedProject.links.playStore}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "0.5rem",
                              color: "var(--dark-1)",
                              textDecoration: "none",
                              fontSize: "0.85rem",
                              fontFamily: "'Departure Mono', monospace",
                              padding: "0.6rem 1.2rem",
                              border: "1px solid var(--subtle-dark-1)",
                              background: "transparent",
                              transition: "background 0.2s ease",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background =
                                "var(--hover-1)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = "transparent";
                            }}
                          >
                            <Play size={14} /> Play Store
                          </a>
                        )}
                        {selectedProject.links.npm && (
                          <a
                            href={selectedProject.links.npm}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "0.5rem",
                              color: "var(--dark-1)",
                              textDecoration: "none",
                              fontSize: "0.85rem",
                              fontFamily: "'Departure Mono', monospace",
                              padding: "0.6rem 1.2rem",
                              border: "1px solid var(--subtle-dark-1)",
                              background: "transparent",
                              transition: "background 0.2s ease",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background =
                                "var(--hover-1)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = "transparent";
                            }}
                          >
                            <Package size={14} /> NPM Package
                          </a>
                        )}
                        {selectedProject.links.website && (
                          <a
                            href={selectedProject.links.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "0.5rem",
                              color: "var(--dark-1)",
                              textDecoration: "none",
                              fontSize: "0.85rem",
                              fontFamily: "'Departure Mono', monospace",
                              padding: "0.6rem 1.2rem",
                              border: "1px solid var(--subtle-dark-1)",
                              background: "transparent",
                              transition: "background 0.2s ease",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background =
                                "var(--hover-1)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = "transparent";
                            }}
                          >
                            <Globe size={14} /> Website
                          </a>
                        )}
                      </div>
                    )}

                  {/* Videos */}
                  {selectedProject.videos &&
                    selectedProject.videos.length > 0 && (
                      <div
                        style={{
                          display: "flex",
                          gap: "1rem",
                          flexWrap: "wrap",
                          justifyContent: "center",
                          marginTop: "1.5rem",
                        }}
                      >
                        {selectedProject.videos.map((videoUrl, index) => (
                          <div
                            key={videoUrl}
                            style={{
                              position: "relative",
                              width: "calc(50% - 0.5rem)",
                              minWidth: "280px",
                              paddingBottom: "28%",
                              flex: "1 1 calc(50% - 0.5rem)",
                            }}
                          >
                            <iframe
                              src={videoUrl}
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                border: "none",
                              }}
                              allow="autoplay"
                              title={`${selectedProject.title} demo video ${index + 1}`}
                            />
                          </div>
                        ))}
                      </div>
                    )}

                  {/* Screenshots — horizontal scroll strip */}
                  {selectedProject.screenshots &&
                    selectedProject.screenshots.length > 0 && (
                      <div
                        style={{
                          display: "flex",
                          gap: "0.75rem",
                          overflowX: "auto",
                          scrollbarWidth: "none",
                          msOverflowStyle: "none",
                          marginTop: "1.5rem",
                          paddingBottom: "0.5rem",
                        }}
                      >
                        {selectedProject.screenshots.map(
                          (screenshot, index) => (
                            <img
                              key={screenshot}
                              src={screenshot}
                              alt={`${selectedProject.title} screenshot ${index + 1}`}
                              style={{
                                height: "280px",
                                width: "auto",
                                objectFit: "contain",
                                border: "1px solid var(--subtle-dark-1)",
                                flexShrink: 0,
                              }}
                            />
                          ),
                        )}
                      </div>
                    )}

                  {/* Privacy link — right-aligned, subtle */}
                  {selectedProject.id !== "virvoile" &&
                    selectedProject.links.privacy && (
                      <div
                        style={{
                          textAlign: "right",
                          marginTop: "1.5rem",
                        }}
                      >
                        <a
                          href={selectedProject.links.privacy}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "var(--subtle-dark-3)",
                            textDecoration: "none",
                            fontSize: "0.8rem",
                            fontFamily: "'Departure Mono', monospace",
                          }}
                        >
                          Privacy Policy &rarr;
                        </a>
                      </div>
                    )}
                </div>
              </>
            );
          })()}
      </Layout>
    </>
  );
}
