import React from "react";
// import pr1 from "../public/images/p3(1).jpg";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";

export default function App() {
  return (
    <div className="App">
      {/* Home */}
      <Home />

      {/* Introduction */}

      <div className="introduction">
        <div className="name">
          <h1 className="fw-bold">Ramesh Bheemanapally</h1>
        </div>
        <div className="dev mt-2">
          <h2>Junior Sofware Developer</h2>
        </div>
        <div className="d-grid gap-2 col-2 mx-auto">
          <button className="btn btn-primary" type="button">
            Get in Touch
          </button>
        </div>
      </div>

      {/* About {Try with Jumotron later and set background image also} */}
      <About />

      {/* Skills {Add progress of skills afterward like tags} */}
      <Skills />
      {/* projects */}
      <Project />
      {/* Contact me */}
      <Contact />
    </div>
  );
}
