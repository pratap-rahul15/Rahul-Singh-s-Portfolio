import React, { useState } from "react";
import "./about.css";
import Me from "../../assets/myProfile.png";
import { LuAward } from "react-icons/lu";
import { PiDesktopTower } from "react-icons/pi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

const About = () => {
  const [activeNav, setActiveNav] = useState("#about");
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container aboutContainer">
        <div className="aboutMe">
          <div className="aboutMeImage">
            <img src={Me} alt="me" className="abtImg" />
          </div>
        </div>
        <div className="aboutContent">
          <div className="aboutCards">
            <article className="aboutCard">
              <LuAward className="aboutIcon" />

              <h5>Experience</h5>
              <small>2 years Working in the software development field</small>
            </article>

            <article className="aboutCard">
              <PiDesktopTower className="aboutIcon" />

              <h5>Projects</h5>
              <small>15+ Company & Personal Projects</small>
            </article>

            <article className="aboutCard">
              <FaMoneyBillTrendUp className="aboutIcon" />

              <h5>Profit</h5>
              <small>
                {" "}
                Built a Java automation component using Apache POI for
                extracting Q&A pairs from an Excel file and generating Word
                documents, reducing manual effort by 80% & accelerating training
                data generation for AI models. | Architected and developed the
                complete backend for the Visitly LLC dasboard feature
              </small>
            </article>
          </div>
          <p>
            Greetings! I'm Rahul. I hold a Master's degree (M.TECH) in Computer
            Science & engineering (CSE) from the Vellore Institute Of Technology
            (VIT), Vellore, India. Recently, I am working as a Software Engineer - Full Stack at Smarter.Codes.
            Additionally, I also like to write technical blogs on
            various trending topics of computer science on Medium & DEV
            Community blogging platform.
          </p>
          <a
            href="#contact"
            className="btn btn-primary"
            onClick={() => setActiveNav("#contact")}
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
