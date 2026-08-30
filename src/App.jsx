import "./App.css";
import myImage from "./assets/dev_art.png";
import JavaScript from "./assets/JS.png";
import HTMLCSS from "./assets/html_css.png";
import Java from "./assets/Java.png";
import Vue from "./assets/Vue.png";
import Github from "./assets/github.png";
import Email from "./assets/email.png";
import { useEffect, useState } from "react";
import DressUpGame from "./components/DressUpGame";


export default function App() {
  //copy email on click
  const [emailCopied, setEmailCopied] = useState(false);
  const [gameOpen, setGameOpen] = useState(false);

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
        <h1 className="logo">Amy<span>.</span></h1>

        <div className="nav-links">
          <a href="#home" className={activeSection === "home" ? "active" : ""}>Home</a>
          <a href="#about" className={activeSection === "about" ? "active" : ""}>About</a>
          <a href="#projects" className={activeSection === "projects" ? "active" : ""}>Projects</a>
          <a href="#contact" className={activeSection === "contact" ? "active" : ""}>Contact</a>

        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
      <div className="hero-content">

        {/* TEXT */}
        <div className="hero-text">
          <h2>Hi, I'm <span>Amy Chen</span></h2>
          <p>Computer science student passionate about programming, web development, and building practical, interactive projects.</p>
          <br />
          <p>Explore the site with your mouse or the Tab key.</p>

          <div className="buttons">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="#about" className="btn content">Skip to Content</a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="hero-image">
          <img src={myImage} alt="Pixel Portrait of Amy Chen" />
        </div>

      </div>
    </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h3>About Me</h3>
        <p>
          I enjoy building clean, responsive websites using React and modern tools.
          I'm currently learning full-stack development and improving my UI design skills. 
          Hover over any of the bubbles to learn about my language experience!
        </p>

        {/* LANGUAGE BUBBLES */}
        <div className="language-bubbles">

          <div className="bubble-float">
            <div className="bubble" tabIndex="0">
              <img src={JavaScript} alt="JavaScript" />
            </div>
          </div>

          <div className="bubble-float">
            <div className="bubble" tabIndex="0">
              <img src={HTMLCSS} alt="HTML CSS"/>
            </div>
          </div>

          <div className="bubble-float">
            <div className="bubble" tabIndex="0">
              <img src={Java} alt="Java"/>
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

  <div className="grid">

    {/* DRESS-UP GAME */}
    <div className="card project-card" tabIndex="0">

      <div className="game-preview">
        <DressUpGame preview />
      </div>

      <div className="project-info">
        <h4>Dress-Up Game</h4>

        <p>
          An interactive character dress-up game with customizable
          outfits and accessories.
        </p>

        <button
          className="play-button"
          onClick={() => setGameOpen(true)}
        >
          Play Game →
        </button>
      </div>

    </div>


    {/* MOVIE APP */}
    <div className="card project-card" tabIndex="0">

      <div className="project-preview">
        🎬
      </div>

      <div className="project-info">
        <h4>Movie App</h4>

        <p>
          A movie library featuring search, sorting, and browsing
          using the TMDB API.
        </p>

        <span>View Project →</span>
      </div>

    </div>


    {/* PORTFOLIO */}
    <div className="card project-card" tabIndex="0">

      <div className="project-preview">
        💻
      </div>

      <div className="project-info">
        <h4>Portfolio Website</h4>

        <p>
          A responsive portfolio built with React and Vite.
        </p>

        <span>View Project →</span>
      </div>

    </div>

  </div>


  {/* GAME MODAL */}
  {gameOpen && (
    <div className="game-modal">

      <div className="game-window">

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

    {/* LEFT SIDE */}
    <div className="contact-left">

      <h2 className="contact-tag">LET’S CONNECT</h2>

      <p className="contact-text">
          Thanks for taking the time to explore my portfolio. If you’d like to collaborate, chat about software development, or discuss an internship or new opportunity, I’d love to hear from you.
          Feel free to reach out by email or connect with me on GitHub.
      </p>
    </div>

    {/* RIGHT SIDE */}
    <div className="contact-card">

        <button
          type="button"
          className="contact-item contact-button"
          onClick={copyEmail}
        >
          <img
            src={Email}
            alt="Email icon"
            className="contact-icon"
          />

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
        <img
          src={Github}
          alt="GitHub icon"
          className="contact-icon"
        />

        <div>
          <span>GitHub</span>
          <strong>github.com/amy0134679</strong>
        </div>
      </a>

    </div>

  </div>
</section>




      {/* FOOTER */}
      <footer className="footer">
        © 2026 Amy Chen. Built with React.
      </footer>
    </div>
  );
}