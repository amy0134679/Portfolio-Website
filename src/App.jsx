import "./App.css";
import myImage from "./assets/dev_art.png";
import JavaScript from "./assets/JS.png";
import HTMLCSS from "./assets/html_css.png";


export default function App() {
  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <h1 className="logo">Amy<span>.</span></h1>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
    <section className="hero">
      <div className="hero-content">

        {/* TEXT */}
        <div className="hero-text">
          <h2>Hi, I'm <span>Amy Chen</span></h2>
          <p>Computer science student passionate about programming, web development, and building practical, interactive projects.</p>

          <div className="buttons">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="#contact" className="btn">Contact Me</a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="hero-image">
          <img src={myImage} alt="Amy" />
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

          <div className="bubble">
            <img src={JavaScript} alt="JavaScript" />
          </div>

          <div className="bubble">
            <img src={HTMLCSS} alt="HTML CSS" />
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h3>Projects</h3>

        <div className="grid">
          <div className="card">
            <h4>Movie App</h4>
            <p>Search movies using an API with a clean UI.</p>
          </div>

          <div className="card">
            <h4>Portfolio Website</h4>
            <p>This website built with React + Vite.</p>
          </div>

          <div className="card">
            <h4>Java Project</h4>
            <p>Object-oriented programming practice project.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h3>Contact</h3>
        <p>Email: amy@example.com</p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 Amy Chen. Built with React.
      </footer>
    </div>
  );
}