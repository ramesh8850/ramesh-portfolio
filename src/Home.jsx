import React from "react";

function Home() {
  const array = [
    { item: "Home", id: "#Home" },
    { item: "About me", id: "#about" },
    { item: "Skills", id: "#skills" },
    { item: "Projects", id: "#project" },
    { item: "Contact me", id: "#contact" },
  ];

  return (
    <section id="Home">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light">
        <div className="container-fluid">
          <a className="navbar-brand text-black fs-4" href="#Home">
            RB.
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {array.map(({ item, id }, index) => {
                return (
                  <li key={index} className="nav-item p-2">
                    <a className="nav-link text-black" href={id}>
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Home;
