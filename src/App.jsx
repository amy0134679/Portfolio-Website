import "./App.css";
import myImage from "./assets/dev_art.png";
import JavaScript from "./assets/JS.png";
import HTMLCSS from "./assets/html_css.png";
import Java from "./assets/Java.png";
import Vue from "./assets/Vue.png";
import Github from "./assets/github.png";
import Email from "./assets/email.png";
import DressUpPrev from "./assets/dress_up_preview.png";
import { useEffect, useState } from "react";
import DressUpGame from "./components/DressUpGame";

export default function App() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [gameOpen, setGameOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("amydt.chen@gmail.com");
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = ["home", "about", "projects", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "-20% 0px -40% 0px",
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <h1 className="logo">
          Amy<span>.</span>
        </h1>

        <div className="nav-links">
          <a href="#home" className={activeSection === "home" ? "active" : ""}>
            Home
          </a>
          <a href="#about" className={activeSection === "about" ? "active" : ""}>
            About
          </a>
          <a href="#projects" className={activeSection === "projects" ? "active" : ""}>
            Projects
          </a>
          <a href="#contact" className={activeSection === "contact" ? "active" : ""}>
            Contact
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h2>
              Hi, I'm <span>Amy Chen</span>
            </h2>

            <p>
              Computer science student passionate about programming,
              web development, and building practical, interactive projects.
            </p>

            <br />

            <p>Explore the site with your mouse or the Tab key.</p>

            <div className="buttons">
              <a href="#projects" className="btn primary">
                View Projects
              </a>
              <a href="#about" className="btn content">
                Skip to Content
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img src={myImage} alt="Pixel Portrait of Amy Chen" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h3>About Me</h3>

        <p>
          I enjoy building clean, responsive websites using React and
          modern tools. I'm currently learning full-stack development
          and improving my UI design skills.
          Hover over any of the bubbles to learn about my language experience!
        </p>

        <div className="language-bubbles">
          <div className="bubble-float">
            <div className="bubble" tabIndex="0">
              <img src={JavaScript} alt="JavaScript" />
            </div>
          </div>

          <div className="bubble-float">
            <div className="bubble" tabIndex="0">
              <img src={HTMLCSS} alt="HTML CSS" />
            </div>
          </div>

          <div className="bubble-float">
            <div className="bubble" tabIndex="0">
              <img src={Java} alt="Java" />
            </div>
          </div>

          <div className="bubble-float">
            <div className="bubble" tabIndex="0">
              <img src={Vue} alt="Vue" />
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h3>Projects</h3>

        {!selectedProject ? (
          <div className="grid">
            {/* DRESS-UP GAME */}
            <div
              className="card project-card"
              tabIndex="0"
              onClick={() => setSelectedProject("dressup")}
            >
              <div className="game-preview">
                <img
                  src={DressUpPrev}
                  alt="Dress Up Game Preview"
                  className="project-preview"
                />
              </div>

              <div className="project-info">
                <h4>Dress-Up Game</h4>
                <p>
                  An interactive character dress-up game with
                  customizable outfits.   <br />
                  <strong>Click to learn more!</strong>
                </p>

                <button
                  className="play-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setGameOpen(true);
                  }}
                >
                  Play Game →
                </button>
              </div>
            </div>

            {/* MOVIE APP */}
            <div
              className="card project-card"
              tabIndex="0"
              onClick={() => setSelectedProject("movie")}
            >
              <div className="project-preview">🎬</div>

              <div className="project-info">
                <h4>Movie App</h4>
                <p>
                  A movie library featuring search, sorting,
                  and browsing using the TMDB API.
                </p>
                <span>View Project →</span>
              </div>
            </div>

            {/* PORTFOLIO */}
            <div
              className="card project-card"
              tabIndex="0"
              onClick={() => setSelectedProject("portfolio")}
            >
              <div className="project-preview">💻</div>

              <div className="project-info">
                <h4>Portfolio Website</h4>
                <p>A responsive portfolio built with React and Vite.</p>
                <span>View Project →</span>
              </div>
            </div>
          </div>
        ) : (
          /* EXPANDED PROJECT */
          <div className="expanded-project">
            {/* SELECTED CARD */}
            <div className="card project-card selected-project">
              {selectedProject === "dressup" && (
                <>
                  <div className="game-preview">
                    <img
                      src={DressUpPrev}
                      alt="Dress Up Game Preview"
                      className="project-preview"
                    />
                  </div>

                  <div className="project-info">
                    <h4>Dress-Up Game</h4>
                    <p>
                      An interactive character dress-up game
                      with customizable outfits and accessories.
                    </p>

                    <button
                      className="play-button"
                      onClick={() => setGameOpen(true)}
                    >
                      Play Game →
                    </button>
                  </div>
                </>
              )}

              {selectedProject === "movie" && (
                <>
                  <div className="project-preview">🎬</div>
                  <div className="project-info">
                    <h4>Movie App</h4>
                    <p>
                      A movie library featuring search, sorting,
                      and browsing using the TMDB API.
                    </p>
                  </div>
                </>
              )}

              {selectedProject === "portfolio" && (
                <>
                  <div className="project-preview">💻</div>
                  <div className="project-info">
                    <h4>Portfolio Website</h4>
                    <p>A responsive portfolio built with React and Vite.</p>
                  </div>
                </>
              )}
            </div>

            {/* EXPERIENCE PANEL */}
            <div className="project-details">
              <button
                className="close-project"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
              >
                ×
              </button>

              {selectedProject === "dressup" && (
                <>

                  <p>
                    I created this game initially in JavaSwing, before
                    converting it into React state to display on this website.
                    I wanted to make a simple dress up game inspired by my own
                    favourite childhood games to combine my love for programming
                    with something creative and personal to me.
                  </p>

                  <h4>What I Learned</h4>
                  <p>
                    This project helped me practice React state,
                    event handling, conditional rendering, and
                    creating interactive UI components.
                  </p>

                  <div className="project-tech">
                    <span>React</span>
                    <span>JavaScript</span>
                    <span>CSS</span>
                    <span>SVG</span>
                    <span>Java</span>
                  </div>
                </>
              )}

              {selectedProject === "movie" && (
                <>

                  <h4>About the Project</h4>
                  <p>
                    I built this application to practice working
                    with APIs and displaying dynamic information
                    in a responsive interface.
                  </p>

                  <h4>What I Learned</h4>
                  <p>
                    I learned how to fetch data from the TMDB API,
                    handle search results, and organize movie data.
                  </p>

                  <div className="project-tech">
                    <span>Vue</span>
                    <span>JavaScript</span>
                    <span>TMDB API</span>
                  </div>
                </>
              )}

              {selectedProject === "portfolio" && (
                <>

                  <h4>About the Project</h4>
                  <p>
                    This website was created to showcase my projects,
                    programming experience, and interests in computer
                    science.
                  </p>

                  <h4>What I Learned</h4>
                  <p>
                    Building this portfolio has helped me improve
                    my React, CSS, responsive design, and UI skills.
                  </p>

                  <div className="project-tech">
                    <span>React</span>
                    <span>Vite</span>
                    <span>CSS</span>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* GAME MODAL */}
        {gameOpen && (
          <div className="game-modal" onClick={() => setGameOpen(false)}>
            <div className="game-window" onClick={(e) => e.stopPropagation()}>
              <button
                className="close-game"
                onClick={() => setGameOpen(false)}
                aria-label="Close game"
              >
                ×
              </button>

              <DressUpGame />
            </div>
          </div>
        )}
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section" tabIndex="0">
        <div className="contact-container">
          <div className="contact-left">
            <h2 className="contact-tag">LET'S CONNECT</h2>

            <p className="contact-text">
              Thanks for taking the time to explore my portfolio.
              If you'd like to collaborate, chat about software
              development, or discuss an internship or new
              opportunity, I'd love to hear from you.
              Feel free to reach out by email or connect with me
              on GitHub.
            </p>
          </div>

          <div className="contact-card">
            <button
              type="button"
              className="contact-item contact-button"
              onClick={copyEmail}
            >
              <img src={Email} alt="Email icon" className="contact-icon" />

              <div>
                <span>Email</span>
                <strong>{emailCopied ? "Copied!" : "amydt.chen@gmail.com"}</strong>
              </div>
            </button>
            <a
              href="https://github.com/amy0134679"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <img src={Github} alt="GitHub icon" className="contact-icon" />

              <div>
                <span>GitHub</span>
                <strong>github.com/amy0134679</strong>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">© 2026 Amy Chen. Built with React.</footer>
    </div>
  );
}