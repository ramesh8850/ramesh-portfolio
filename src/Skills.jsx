import React, { useState } from "react";
// import C from "../public/images/C.png";
// import Cpp from "../public/images/Cpp.png";
// import Python from "../public/images/Python.png";
// import program from "../public/images/programming.png";
// import Html from "../public/images/HTML5.png";
// import CSS from "../public/images/CSS3.png";
// import JS from "../public/images/JavaScript.png";
// import reactjs from "../public/images/React.png";
// import Nodejs from "../public/images/nodejs.png";
// import ExpressJS from "../public/images/Express.png";
// import Postgres from "../public/images/PostgresSQL.png";
// import Postman from "../public/images/Postman.png";
// import Github from "../public/images/GitHub.png";
// import Vscode from "../public/images/VSCode.png";

function Skills() {
  const skills = [
    { src: `${process.env.PUBLIC_URL}/images/C.png`, alt: "C", progress: 90 },
    {
      src: `${process.env.PUBLIC_URL}/images/Cpp.png`,
      alt: "C++",
      progress: 95,
    },
    {
      src: `${process.env.PUBLIC_URL}/images/Python.png`,
      alt: "Python",
      progress: 70,
    },
    {
      src: `${process.env.PUBLIC_URL}/images/programming.png`,
      alt: "Programming",
      progress: 90,
    },
    {
      src: `${process.env.PUBLIC_URL}/images/HTML5.png`,
      alt: "HTML",
      progress: 95,
    },
    {
      src: `${process.env.PUBLIC_URL}/images/CSS3.png`,
      alt: "CSS",
      progress: 90,
    },
    {
      src: `${process.env.PUBLIC_URL}/images/JavaScript.png`,
      alt: "JavaScript",
      progress: 95,
    },
    {
      src: `${process.env.PUBLIC_URL}/images/React.png`,
      alt: "React.js",
      progress: 90,
    },
    {
      src: `${process.env.PUBLIC_URL}/images/nodejs.png`,
      alt: "Node.js",
      progress: 85,
    },
    {
      src: `${process.env.PUBLIC_URL}/images/Express.png`,
      alt: "Express.js",
      progress: 80,
    },
    {
      src: `${process.env.PUBLIC_URL}/images/PostgresSQL.png`,
      alt: "PostgresSQL",
      progress: 90,
    },
    {
      src: `${process.env.PUBLIC_URL}/images/Postman.png`,
      alt: "Postman",
      progress: 80,
    },
  ];

  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="skills">
      <h1 className="py-4">Skills</h1>
      <div className="skill-container container my-4">
        <div className="row g-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`item col-2 p-3
              }`}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <img
                className="skillImage"
                src={skill.src}
                width="64px"
                height="64px"
                alt={skill.alt || "Image error"}
              />

              {/* Hover Card */}
              {hoveredSkill === index && (
                <div className="hover-card position-absolute text-center">
                  <h6>{skill.alt}</h6>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${skill.progress}%` }}
                      aria-valuenow={skill.progress}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {skill.progress}%
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          {/* Centering last two items */}
          <div className="col-12 d-flex justify-content-center">
            <div className="item col-2 text-center">
              <img
                className="icon"
                src={`${process.env.PUBLIC_URL}/images/GitHub.png`}
                width="64px"
                height="64px"
                alt="some error"
              />
            </div>
            <div className="item col-2 text-center">
              <img
                className="icon"
                src={`${process.env.PUBLIC_URL}/images/VSCode.png`}
                width="64px"
                height="64px"
                alt="some error"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Skills;
