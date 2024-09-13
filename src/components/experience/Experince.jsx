import React from "react";
import "./experience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import experiences from "../../experiences";

const Experince = () => {
  return (
    <section id="experince">
      <h5>Experience</h5>
      <h2>Industry Experience</h2>
      <div className="container experienceContainer">
        <VerticalTimeline lineColor="">
          {experiences.map((experience) => (
            <VerticalTimelineElement
              key={experience.id}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "var(--color-bg-variant)",
                color: "var(--color-white)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  var(--color-bg-variant)",
              }}
              iconStyle={{
                background: "#fff",
                color: "var(--color-white)",
              }}
              date={experience.date}
              icon={experience.icon}
            >
              <h3>{experience.title}</h3>
              <h5>{experience.location}</h5>
              <ul className="tick-list">
                {experience.description.map((des, index) => (
                  <li key={index}>{des}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experince;
