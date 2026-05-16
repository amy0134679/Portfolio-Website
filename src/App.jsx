import "./App.css";
import myImage from "./assets/dev_art.png";
import JavaScript from "./assets/JS.png";
import HTMLCSS from "./assets/html_css.png";
import Java from "./assets/Java.png";
import Vue from "./assets/Vue.png";
import { useEffect, useState } from "react";


export default function App() {

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
        threshold: 0.4,
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
          <div className="card" tabIndex="0">
            <h4>Movie App</h4>
            <p>Search movies using an API with a clean UI.</p>
          </div>

          <div className="card" tabIndex="0">
            <h4>Portfolio Website</h4>
            <p>This website built with React + Vite.</p>
          </div>

          <div className="card" tabIndex="0">
            <h4>Java Project</h4>
            <p>Object-oriented programming practice project.</p>
          </div>
        </div>
      </section>

{/* CONTACT */}
<section id="contact" className="section contact-section" tabIndex="0">

  <div className="contact-container">

    {/* LEFT SIDE */}
    <div className="contact-left">
      <p className="contact-tag">Let’s Connect ✨</p>

      <h2>Thanks for stopping by!</h2>

      <p className="contact-text">
        If you liked my work or want to collaborate, feel free to
        reach out. I’m always open to new opportunities and creative
        projects.
      </p>
    </div>

    {/* RIGHT SIDE */}
    <div className="contact-right">

      <div className="contact-buttons">
        <a
          href="mailto:amydt.chen@gmail.com"
          className="btn primary"
        >
          Email Me
        </a>

        <a
          href="https://github.com/amy0134679"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          View GitHub
        </a>
      </div>

      <div className="contact-info">
        <p>
          <strong>Email:</strong> amydt.chen@gmail.com
        </p>

        <p>
          <strong>GitHub:</strong> github.com/amy0134679
        </p>
      </div>

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