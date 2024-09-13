import React from "react";
import "./footer.css";

import { RiLinkedinBoxFill } from "react-icons/ri";
import { SiGithub } from "react-icons/si";
import leetcode from '../../assets/leetcode.png'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footerLogo">
        RAHUL SINGH
      </a>
      <ul className="permaLinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skill">Skill</a>
        </li>
        <li>
          <a href="#experince">Experience</a>
        </li>
        <li>
          <a href="#project">Projects</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footerSocials">
        <a href="https://www.linkedin.com/in/rahul-singh-3699541aa/">
          <RiLinkedinBoxFill />
        </a>
        <a href="https://github.com/pratap-rahul15">
          <SiGithub />
        </a>
        <a href="https://leetcode.com/u/rahul660singh/">
          <img src={leetcode} alt="leetcode" style={{width:"16px", height:"16px"}}/>
        </a>
      </div>
      <div className="footerCopyright">
        <small>Copyright &copy; RAHUL SINGH. All rights reserved. </small>
      </div>
    </footer>
  );
};

export default Footer;
