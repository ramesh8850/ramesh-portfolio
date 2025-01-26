import React from "react";
// import pr1 from "../public/images/AI-Enhanced_video_translation.png";
// import pr2 from "../public/images/Rule_Engine_App.png";
// import pr3 from "../public/images/Weather_App.png";
// import pr4 from "../public/images/Memory_Flash_Game.png";
import { useEffect } from "react";

function Project() {
  const projectArray = [
    {
      src: `${process.env.PUBLIC_URL}/images/AI-Enhanced_video_translation.png`,
      title: "AI-Enhanced Video Translation System",
      content:
        "Developed an AI-driven multilingual video translation tool with audio transcription, language selection, and reintegration features.",
      link: "https://github.com/ramesh8850/AI-Enhanced-video-Translation-System/tree/main",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/Rule_Engine_App.png`,
      title: "Rule Engine Application",
      content:
        "Created a dynamic rule engine with modular AST-based rule parsing and an interactive web interface for rule management.",
      link: "https://github.com/ramesh8850/3-tier-Rule-Engine-AST",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/Weather_App.png`,
      title: "Weather Application",
      content:
        "Built a real-time weather monitoring tool with dynamic updates, API integration, and a user-friendly interface for trends and alerts.",
      link: "https://github.com/ramesh8850/Weather-Application",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/Memory_Flash_Game.png`,
      title: "Memory Flash Game",
      content:
        "Designed a responsive memory game with interactive color and sound sequences, offering engaging gameplay across devices.",
      link: "https://github.com/ramesh8850/Memory-Flash-Game",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate"); // Add 'animate' class when visible
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the card is visible
      }
    );

    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => observer.observe(card)); // Observe each card

    // Cleanup the observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <section id="project" className="project">
      <div className="container">
        <h1 className="mt-3">Projects</h1>
        <div className="row row-cols-1 row-cols-md-4 g-4 justify-content-center my-4">
          {projectArray.map(({ src, title, content, link }, key) => {
            return (
              <div key={key} className="col">
                <div className="card h-100 w-300">
                  <img
                    src={src}
                    className="card-img-top"
                    alt="image"
                    style={{ width: "100%", height: "200px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text text-align-justify">{content}</p>
                  </div>
                  <a
                    href={link}
                    className="btn btn-dark btn-outline-dark stretched-link"
                  >
                    Project Link
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Project;
