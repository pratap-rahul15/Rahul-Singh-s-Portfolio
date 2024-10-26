import React from "react";
import "./skill.css";

import { FaCircleCheck } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { FaLaptopCode } from "react-icons/fa";

// programing languages
import C from "../../assets/C.png";
import java from "../../assets/java.png";
import sql from "../../assets/sql.png";

//Web Development
//FrontEnd
import bootstrap from "../../assets/bootstrap.png";
import css from "../../assets/css.png";
import html from "../../assets/html-5.png";
import javaScript from "../../assets/java-script.png";
import react from "../../assets/react.png";
import vite from "../../assets/vite.png";
import tailwind from "../../assets/tailwind.png";
//backend

import API from "../../assets/API.png";
import springboot from "../../assets/springboot.png";
import node from "../../assets/node.png";
import express from "../../assets/express.png";


//database
import mysql from "../../assets/mysql.png";
import postgres from "../../assets/postgres.png";
import mongo from "../../assets/mongo.png";

//tools
import Git from "../../assets/Git.png";
import docker from "../../assets/docker.png";
import linux from "../../assets/linux.png";

import postman from "../../assets/postman.png";
import Vscode from "../../assets/Vscode.png";
import intellij from "../../assets/intellij.png";
import STS from "../../assets/STS.png";
import openai from "../../assets/openai.png";
import maven from "../../assets/maven.jpg";

const Skill = () => {
  return (
    <section id="skill">

      <h5>Relevant Skills</h5>
      <h2>Skills</h2>
      <div className="container skillContainer">
        <article className="skill">
          <div className="skillHead">
            <div className="skillHeadIcon">
              <FaLaptopCode className="headIcon" />
              <h3>Programming languages</h3>
            </div>
          </div>
          <ul className="skillList">
            <li>
              <img src={javaScript} alt="javascript" className="skillImg" />
              <p>JavaScript (ES6)</p>
            </li>
            <li>
              <img src={java} alt="java" className="skillImg" />
              <p>Core Java</p>
            </li>
            <li>
              <img src={C} alt="c" className="skillImg" />
              <p>C</p>
            </li>
            <li>
              <img src={sql} alt="sql" className="skillImg" />
              <p>MySQL</p>
            </li>
          </ul>
        </article>

        <article className="skill">
          <div className="skillHead">
            <div className="skillHeadIcon">
              <CgWebsite className="headIcon" />
              <h3>Web Development</h3>
            </div>
          </div>
          <ul className="skillList">
            <li>
              <div className="skillSubList">
                <FaCircleCheck className="listIcon" />
                <h4>Frontend:</h4>
              </div>

              <ul className="stackList">
                <li>
                  <img src={html} alt="html" className="skillImg" />
                  <p>HTML</p>
                </li>
                <li>
                  <img src={css} alt="css" className="skillImg" />
                  <p>CSS</p>
                </li>
                <li>
                  <img src={bootstrap} alt="bootstrap" className="skillImg" />
                  <p>Bootstrap</p>
                </li>
                <li>
                  <img src={react} alt="react" className="skillImg" />
                  <p>React js</p>
                </li>
                <li>
                <img src={vite} alt="vite" className="skillImg" />
                <p>Vite js</p>
              </li>
              <li>
              <img src={tailwind} alt="vite" className="skillImg" />
              <p>Tailwind CSS</p>
            </li>
              </ul>
            </li>
            

            <li>
              <div className="skillSubList">
                <FaCircleCheck className="listIcon" />
                <h4>Backend:</h4>
              </div>

              <ul className="stackList">
              <li>
                <img src={springboot} alt="api" className="skillImg" />
                <p>SPRING BOOT</p>
              </li>
            </ul>

            <ul className="stackList">
            <li>
              <img src={node} alt="api" className="skillImg" />
              <p>Node JS</p>
            </li>
          </ul>

          <ul className="stackList">
          <li>
            <img src={express} alt="api" className="skillImg" />
            <p>Express JS</p>
          </li>
        </ul>

              <ul className="stackList">
                <li>
                  <img src={API} alt="api" className="skillImg" />
                  <p>REST APIs</p>
                </li>
              </ul>

            </li>
            <li>
              <div className="skillSubList">
                <FaCircleCheck className="listIcon" />
                <h4>Database:</h4>
              </div>
              <ul className="stackList">
                <li>
                  <img src={mysql} alt="mysql" className="skillImg" />
                  <p>MySQL</p>
                </li>
                <li>
                  <img src={mongo} alt="mongo" className="skillImg" />
                  <p>Mongo DB</p>
                </li>
                <li>
                  <img src={postgres} alt="mongo" className="skillImg" />
                  <p>PostgresSQL</p>
                </li>
              </ul>
            </li>
          </ul>
        </article>

        <article className="skill">
          <div className="skillHead">
            <div className="skillHeadIcon">
              <FaTools className="headIcon" />
              <h3>Tools</h3>
            </div>
          </div>
          <ul className="skillList">
            <li>
              <img src={Git} alt="git" className="skillImg" />
              <p>Git</p>
            </li>
            <li>
              <img src={docker} alt="docker" className="skillImg" />
              <p>Docker</p>
            </li>
            <li>
              <img src={linux} alt="linux" className="skillImg" />
              <p>Linux</p>
            </li>
            <li>
              <img src={postman} alt="postman" className="skillImg" />
              <p>Postman</p>
            </li>
            <li>
              <img src={Vscode} alt="vscode" className="skillImg" />
              <p>VS Code</p>
            </li>
            <li>
              <img src={intellij} alt="intellij" className="skillImg" />
              <p>IntelliJ</p>
            </li>
            <li>
            <img src={STS} alt="STS" className="skillImg" />
            <p>Spring Tool Suite (STS)</p>
          </li>

          <li>
          <img src={maven} alt="maven" className="skillImg" />
          <p>Maven</p>
        </li>

          <li>
          <img src={openai} alt="openaiapi" className="skillImg" />
          <p>OpenAI API Integeration</p>
        </li>

      
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Skill;
