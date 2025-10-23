import smartercodes from "./assets/companyData/smartercodes.png";
import visitlyllc from "./assets/companyData/visitlyllc.png";
import rsaImg from "./assets/companyData/rsaImg.png";
import CodeBeat from  "./assets/companyData/CodeBeat.png";
import FIQ from "./assets/companyData/FIQ.png";
const experiences = [



  {
    id: 1,
    title: "Software Engineer - Full Stack",
    date: "April 2025 - July 2025",
    icon: <img src={smartercodes} alt="visitlyImg" style={{position:"relative", left:"0rem", top:"1.1rem"}} />,
    location: "Bengaluru Urban, India",
    description: [
      "Built a \"Java automation component\" using \"Apache POI\" for extracting Q&A pairs from an Excel file and generating Word documents, reducing manual effort by \"80%\" &accelerating training data generation for AI models. ",
      "Resolved a critical \"false-positive bug\" by preventing irrelevant questions from populating, significantly improving AI Model accuracy and response quality for RFP documents.",
      "Researched and developed core annotation functionality for an \"OnlyOffice plugin\", enabling users to highlight text with custom labels and persist data in \"Azure Cosmos DB.\" "
    ],
  },

  {
    id: 2,
    title: "Software Engineer Intern",
    date: "February 2025 - March 2025",
    icon: <img src={visitlyllc} alt="visitlyImg" style={{position:"relative", left:"0rem", top:"1.1rem"}} />,
    location: "Remote, San Francisco, California, USA",
    description: [
      "Architected and developed the complete backend for the \"Site Delivery Area feature\" in Visitly, designing the \"Controller, Service, DAO, and Entity layers\" from scratch using \"Java & Spring Boot\" to map delivery zones to specific sites, enhancing visitor access control and operational efficiency.",
      "Implemented and configured \"Apache Superset\" using \"Docker Compose\" to generate dynamic charts and graphs for visitor insights, enforcing \"Row-Level Security (RLS)\" for secure & client-specific data access. "  
    ],
  },


  {
    id: 3,
    title: "Graduate Technical Intern",
    date: "August 2023 - July 2024",
    icon: <img src={rsaImg} alt="rsaImg" style={{position:"relative", left:"0rem", top:"1.1rem"}} />,
    location: "Bengaluru Urban, India",
    description: [
      "Performed comprehensive \"QA testing\" for major & minor releases, including regression, performance, and security testing, ensuring software reliability and stability. ",
      "Developed and tested \"50%\" of log parsers and plugins using Python and XML, significantly improving log parsing efficiency and data accuracy.",
      "Automated test case execution for log parsers, minimizing manual effort and ensuring consistent validation of parser functionality and log accuracy. ",
      "Configured and optimized a \"Cloudflare WAF\" environment to enhance log collection & streamline data storage in \"AWS S3\" buckets."
    ],
  },

  {
    id: 4,
    title: "Microsoft Azure Instructor",
    date: "May 2023 - June 2023",
    icon: <img src={CodeBeat} alt="CodeBeat" style={{borderRadius:"50%"}}/>,
    location: "Remote, India",
    description: [
      "Mentored and guided over 50+ students in Microsoft Azure Cloud Computing, providing tailored support to enhance their understanding & practical skills in the cloud environment.",
      "Delivered in-depth training sessions raniging from Azure Fundamentals to advanced azure topics.",
      "Developed and presented structured learning materials & hands-on labs, while evaluating student progress through daily assessments and feedback to tailor instruction and enhance deployment skills & cloud architecture knowledge.",
    ],
  },

  {
    id: 5,
    title: "Associate Engineer",
    date: "April 2021 - September 2021",
    icon: <img src={FIQ} alt="FIQ" style={{borderRadius:"50%"}} />,
    location: "Bengaluru Urban, India",
    description: [
      "Optimized and enhanced the \"Warehouse Anywhere\" project using C# and React.js, resolving critical bugs.",
      "Collaborated with cross-functional teams to troubleshoot daily client issues, optimize application performance, and enhance the overall user experience.",
      "Actively contributed to \"Agile workflows\", including \"sprint planning\" and \"daily stand-ups\", to accelerate development cycles improving operational efficiency." 

    ],
  },
];

export default experiences;
