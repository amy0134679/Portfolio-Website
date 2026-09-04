import { useEffect, useRef, useState } from "react";
import "./SkillsSection.css";

// Images from src/assets
import JavaScript from "../assets/JS.png";
import HTMLCSS from "../assets/html_css.png";
import Java from "../assets/java.png";
import Vue from "../assets/vue.png";
import Github from "../assets/github.png";
import React from "../assets/react-logo.png";
import Pinia from "../assets/pinia.png";
import Python from "../assets/Python-logo.png";
import C from "../assets/C.png";
import Firebase from "../assets/firebase-logo.png";
import TMDB from "../assets/TMDB.png";

/**
 * Skill data, grouped by category.
 *
 * `icon` can be either an imported image or an emoji string.
 * `isImage` tells the component whether to render the icon as an image.
 */
const SKILL_CATEGORIES = [
  {
    title: "Programming Languages",
    skills: [
      {
        name: "Java",
        icon: Java,
        isImage: true,
        description:
          "My first programming language, and used to build my dress-up game in Java Swing before porting it to React.",
      },
      {
        name: "JavaScript",
        icon: JavaScript,
        isImage: true,
        description:
          "My primary language for building interactive UIs and dynamic web applications.",
      },
      {
        name: "Python",
        icon: Python,
        isImage: true,
        description:
          "Used for coursework, scripting, and data-focused assignments.",
      },
      {
        name: "C",
        icon: C,
        isImage: true,
        description:
          "Studied for systems-level programming and memory management.",
      },
    ],
  },

  {
    title: "Web Development",
    skills: [
      {
        name: "React",
        icon: React,
        isImage: true,
        description:
          "Built this portfolio and my dress-up game with React function components and hooks.",
      },
      {
        name: "Vue",
        icon: Vue,
        isImage: true,
        description:
          "Used to build the Movie Library app, including state managed with Pinia.",
      },
      {
        name: "HTML & CSS",
        icon: HTMLCSS,
        isImage: true,
        description:
          "The foundation of every site I build — structure, styling, and layout.",
      },
    ],
  },

  {
    title: "Tools & Technologies",
    skills: [
      {
        name: "Git/GitHub",
        icon: Github,
        isImage: true,
        description:
          "Version control for every project, from assignments to full applications.",
      },
      {
        name: "Firebase",
        icon: Firebase,
        isImage: true,
        description:
          "Used for authentication and cloud storage in the Movie Library app.",
      },
      {
        name: "Pinia",
        icon: Pinia,
        isImage: true,
        description:
          "State management library used alongside Vue in the Movie Library app.",
      },
      {
        name: "TMDB API",
        icon: TMDB,
        isImage: true,
        description:
          "Fetched real movie data to power search, sorting, and browsing.",
      },
    ],
  },
];

/* =========================================================
   SKILL BUBBLE
========================================================= */

function SkillBubble({ skill }) {
  const descriptionId = `skill-desc-${skill.name
    .replace(/[\s/]+/g, "-")
    .toLowerCase()}`;

  return (
    <div className="skill-bubble-wrapper">
      <div
        className="bubble skill-bubble"
        tabIndex={0}
        aria-describedby={descriptionId}
        aria-label={skill.name}
      >
        {skill.isImage ? (
          <img src={skill.icon} alt={skill.name} />
        ) : (
          <span className="skill-icon-emoji" aria-hidden="true">
            {skill.icon}
          </span>
        )}
      </div>

      {/* Tooltip */}
      <div className="skill-tooltip" id={descriptionId} role="tooltip">
        <strong>{skill.name}</strong>
        <p>{skill.description}</p>
      </div>
    </div>
  );
}

/* =========================================================
   CATEGORY ROW
========================================================= */

function SkillCategoryRow({ category }) {
  const rowRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = () => {
    const row = rowRef.current;
    if (!row) return;

    setCanScrollLeft(row.scrollLeft > 4);
    setCanScrollRight(
      row.scrollLeft + row.clientWidth < row.scrollWidth - 4
    );
  };

  useEffect(() => {
    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => {
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scrollByAmount = (direction) => {
    rowRef.current?.scrollBy({
      left: direction * 160,
      behavior: "smooth",
    });
  };

  return (
    <div className="skill-category">
      <h4 className="skill-category-title">{category.title}</h4>

      <div className="skill-row-wrapper">
        <button
          type="button"
          className="skill-scroll-button skill-scroll-left"
          onClick={() => scrollByAmount(-1)}
          aria-label={`Scroll ${category.title} left`}
          disabled={!canScrollLeft}
        >
          ‹
        </button>

        <div
          className="skill-row"
          ref={rowRef}
          onScroll={updateScrollState}
        >
          {category.skills.map((skill) => (
            <SkillBubble key={skill.name} skill={skill} />
          ))}
        </div>

        <button
          type="button"
          className="skill-scroll-button skill-scroll-right"
          onClick={() => scrollByAmount(1)}
          aria-label={`Scroll ${category.title} right`}
          disabled={!canScrollRight}
        >
          ›
        </button>
      </div>
    </div>
  );
}

/* =========================================================
   SKILLS SECTION
========================================================= */

export default function SkillsSection() {
  return (
    <section id="skills" className="section skills-section">
      <h3>Technical Skills</h3>

      {SKILL_CATEGORIES.map((category) => (
        <SkillCategoryRow key={category.title} category={category} />
      ))}
    </section>
  );
}