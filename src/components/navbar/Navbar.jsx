import React, { useState } from "react";
import "./navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { RiUserLine } from "react-icons/ri";
import { PiBookBookmark } from "react-icons/pi";
import { LiaUserGraduateSolid } from "react-icons/lia";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { FaChalkboardUser } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <RiUserLine />
      </a>
      <a
        href="#skill"
        onClick={() => setActiveNav("#skill")}
        className={activeNav === "#skill" ? "active" : ""}
      >
        <PiBookBookmark />
      </a>
      <a
        href="#experince"
        onClick={() => setActiveNav("#experince")}
        className={activeNav === "#experince" ? "active" : ""}
      >
        <LiaUserGraduateSolid />
      </a>
      <a
        href="#project"
        onClick={() => setActiveNav("#project")}
        className={activeNav === "#project" ? "active" : ""}
      >
        <LiaLaptopCodeSolid />
      </a>
      <a
        href="#education"
        onClick={() => setActiveNav("#education")}
        className={activeNav === "#education" ? "active" : ""}
      >
        <FaUserGraduate />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <FaChalkboardUser />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MdAddCall />
      </a>
    </nav>
  );
};

export default Navbar;
