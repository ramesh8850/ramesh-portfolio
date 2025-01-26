import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";

function Contact() {
  const [result, setResult] = useState("");

  const API_KEY = process.env.API_KEY;

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", API_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h1 className="text-center mb-5 fw-bold">Contact Me</h1>
        <div className="row row-cols-1 row-cols-md-2 g-5">
          {/* Contact Information */}
          <div className="address col-md-6 ">
            <div className="loc w-100">
              <div className="mb-2 d-flex align-items-center">
                <PersonIcon
                  className="icon me-2"
                  style={{ fontSize: "1.5rem" }}
                />
                {"Ramesh Bheemanapally"}
              </div>
              <div className="mb-2 d-flex align-items-center">
                <PhoneIcon
                  className="icon me-2"
                  style={{ fontSize: "1.5rem" }}
                />
                {"+91-7569414038"}
              </div>
              <div className="mb-2 d-flex align-items-center">
                <EmailIcon
                  className="icon me-2"
                  style={{ fontSize: "1.5rem" }}
                />
                {"rameshgoud8850@gmail.com"}
              </div>
              <div className="d-flex align-items-center">
                <HomeIcon
                  className="icon me-2"
                  style={{ fontSize: "1.5rem" }}
                />
                {"Hyderabad, Telangana, India"}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="message col-md-6 align-items-center justify-content-center">
            <h3 className="mb-3 py-4 fw-semibold">Get in Touch</h3>
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Your Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message <span className="text-danger">*</span>
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Write your message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100 mb-4">
                Send Message
              </button>
            </form>
            {result && <p className="mt-3 text-center">{result}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

{
  /* Social Links
        <div className="col-md-6">
          <h3 className="mb-3">Connect with Me</h3>
          <ul className="list-unstyled">
            <li className="mb-2">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <i className="bi bi-github icon me-2"></i> GitHub
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <i className="bi bi-linkedin icon me-2"></i> LinkedIn
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <i className="bi bi-twitter icon me-2"></i> Twitter
              </a>
            </li>
            <li className="mb-2">
              <a
                href="mailto:your.email@example.com"
                className="text-decoration-none"
              >
                <i className="bi bi-envelope icon me-2"></i> Email Me
              </a>
            </li>
          </ul>
        </div> */
}
