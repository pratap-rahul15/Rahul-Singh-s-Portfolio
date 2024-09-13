import rsaImg from "./assets/companyData/rsaImg.png";
import CodeBeat from  "./assets/companyData/CodeBeat.png";
import FIQ from "./assets/companyData/FIQ.png";
const experiences = [
  {
    id: 1,
    title: "Graduate Technical Intern",
    date: "August 2023 - July 2024",
    icon: <img src={rsaImg} alt="rsaImg" style={{position:"relative", left:"0rem", top:"1.1rem"}} />,
    location: "Bengaluru Urban, India",
    description: [
      "Collaborated with the Continuous Engineering (CE) team to deliver \"Log Parser\" support for high-profile clients, including HCL, Wells Fargo, and the Indian Air Force, utilizing the \"NetWitness SIEM\" tool.",
      "Tested 50% of the latest plug-ins to ensure accurate log collection from diverse capture/event sources.",
      "Assisted in configuring a CloudFlare WAF environment to facilitate log collection and data storage in an AWS S3 bucket, enhancing data management and security."
    ],
  },

  {
    id: 2,
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
    id: 3,
    title: "Associate Engineer",
    date: "April 2021 - September 2021",
    icon: <img src={FIQ} alt="FIQ" style={{borderRadius:"50%"}} />,
    location: "Bengaluru Urban, India",
    description: [
      "Collaborated with cross-functional teams to identify and resolve daily client issues, optimize existing features, & improve application performance and user experience, while actively participating in Agile development processes including sprint planning and daily stand-ups."
    ],
  },
];

export default experiences;
