import React from "react";
// import pr1 from "../public/images/portfolio_photo2.jpg";

function About() {
  return (
    <section id="about" className="about py-5 bg-light">
      <div className="container">
        <h1 className="text-center mb-4">Why Me</h1>
        <div className="row align-items-center">
          {/* Text Content */}
          <div className="col-md-6">
            <h2 className="mb-3">Hi, I'm Ramesh</h2>
            <p className="text-justify">
              I have a strong foundation in programming and problem-solving,
              with experience in full-stack web development. I enjoy creating
              efficient solutions, exploring new technologies, and contributing
              to impactful projects.
            </p>
            <div className="sub mt-4">
              <a
                href="https://drive.google.com/file/d/15weK2_XcYYkdTiQjybkPXCwpilX4m6ei/view?usp=sharing"
                className="btn btn-primary me-3"
                role="button"
              >
                Resume
              </a>
              <a
                href="https://www.linkedin.com/in/ramesh-bheemanapally-056a59256/"
                className="btn btn-secondary me-3"
                role="button"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/ramesh8850"
                className="btn btn-dark"
                role="button"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="col-md-6 text-center">
            <img
              src={`${process.env.PUBLIC_URL}/images/portfolio_photo2.jpg`}
              alt="Ramesh"
              className="img-fluid rounded-circle shadow-lg"
              style={{ height: "300px", width: "300px", float: "right" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
