import {
    FaReact,
    FaHtml5,
    FaCss3,
    FaNodeJs,
    FaFigma,
    FaInstagram,
    FaLinkedin,
    FaGithub,
    FaUserTie,
    FaEnvelope,
    FaProjectDiagram
} from "react-icons/fa";
import {BiLogoJavascript} from "react-icons/bi";
import {SiExpress, SiMongodb, SiMysql, SiTailwindcss, SiPostman, SiFastapi} from "react-icons/si";
import {
    VscVscode,
    VscCommentUnresolved,
} from "react-icons/vsc";
import { FaGitAlt} from "react-icons/fa6";
import {MdGroups3} from "react-icons/md";

import BudgetBeePJ from "../assets/images/BudgetBeePJ.JPG";
import mapitopj from "../assets/images/robot.jpg";
import ktownpj from "../assets/images/ktownpj.jpg";
import color from "../assets/images/color.jpg";
import insideout from "../assets/images/insideout.jpg";
import community from "../assets/images/community.jpg";
import portfolio from "../assets/images/ABOUTMELOGO.png";
import wolf from "../assets/images/wolf.jpg";

export const MENU_LINKS = [
    { id:"01", label:"Home", offset:-100, to:"hero" },
    { id:"02", label:"About Me", offset:-80, to:"about" },
    { id:"03", label:"Skills", offset:-80, to:"skills" },
    { id:"04", label:"Work", offset:-80, to:"work" },
    { id:"05", label:"Projects", offset:-80, to:"projects" },
    { id:"06", label:"Contact", offset:-80, to:"contact" },
];

export const SKILL_TABS = [
    { id:"01", label:"Tech", value:"language" },
    { id:"02", label:"Tools", value:"tools" },
    { id:"03", label:"Soft Skills", value:"soft-skills" },
];

export const SKILLS = [
    {
        id:"01",
        icon:FaReact,
        skill:"React JS",
        progress: 95,
        type:"language",
        description:"I have hands-on experience with React.js, building dynamic and responsive user interfaces using components, hooks, and state management."
    },
    {
        id:"02",
        icon:BiLogoJavascript,
        skill:"JavaScript",
        progress: 95,
        type:"language",
        description:"I have experience using JavaScript to add interactivity and functionality to web applications, including DOM manipulation, event handling, and API integration."
    },
    {
        id:"03",
        icon:FaNodeJs,
        skill:"Node.js",
        progress: 95,
        type:"language",
        description:"I have experience using Node.js to build backend services and APIs, handling server-side logic, routing, and database integration."
    },
    {
        id:"04",
        icon:SiExpress,
        skill:"Express.js",
        progress: 95,
        type:"language",
        description:"I have experience using Express.js to create efficient and scalable RESTful APIs, manage routes, and handle middleware in Node.js applications."
    },
    {
        id:"05",
        icon:SiMongodb,
        skill:"MongoDB",
        progress: 95,
        type:"language",
        description:"I have experience using MongoDB to design and manage NoSQL databases, perform CRUD operations, and integrate data storage with backend applications."
    },
    {
        id:"06",
        icon:SiMysql,
        skill:"MySQL",
        progress: 95,
        type:"language",
        description:"I have experience using MySQL to design relational databases, write SQL queries, and manage data for backend applications with structured schemas."
    },
    {
        id:"07",
        icon:FaFigma,
        skill:"Figma",
        progress: 95,
        type:"tools",
        description:"I have experience using Figma to design user interfaces, create interactive prototypes, and collaborate with teams on visual design projects."
    },
    {
        id:"08",
        icon:VscVscode,
        skill:"Visual Studio Code",
        progress: 95,
        type:"tools",
        description:"I have experience using Visual Studio Code as my primary code editor, utilizing its extensions, debugging tools, and integrated terminal to streamline development."
    },
    {
        id:"09",
        icon:FaGitAlt,
        skill:"Git & GitHub",
        progress: 95,
        type:"tools",
        description:"I have experience using Git and GitHub for version control, collaborating on projects, managing repositories, and tracking changes through commits and branches."
    },
    {
        id:"10",
        icon:VscCommentUnresolved,
        skill:"Presentation",
        progress: 95,
        type:"soft-skills",
        description:"I have experience developing presentation soft skills, effectively communicating ideas, engaging audiences, and delivering clear and confident presentations."
    },
    {
        id:"11",
        icon:MdGroups3,
        skill:"Teamwork",
        progress: 95,
        type:"soft-skills",
        description:"I have experience working in teams, collaborating effectively, listening to diverse perspectives, and contributing to group goals to achieve successful outcomes."
    },
    {
        id:"12",
        icon:FaUserTie,
        skill:"Leadership",
        progress: 95,
        type:"soft-skills",
        description:"I have developed strong leadership by consistently reviewing work for accuracy, ensuring high-quality results, and identifying potential issues before they arise."
    },
    {
        id:"13",
        icon:FaProjectDiagram,
        skill:"Draw.io",
        progress: 95,
        type:"tools",
        description:"I have experience using draw.io to create clear and organized flowcharts, system diagrams, and efficient project plans and UML modeling."
    },
    {
          id: "14",
          icon: SiTailwindcss, 
          skill: "Tailwind CSS",
          progress: 95,
          type: "language",
          description:"I have experience using Tailwind CSS to rapidly build modern, responsive UIs with utility-first styling, ensuring consistency and speed in development.",
    },
    {
          id: "15",
          icon: SiPostman, 
          skill: "Postman",
          progress: 85,
          type: "tools",
          description:"I regularly use Postman to test APIs, manage requests, and automate backend testing, ensuring the reliability and accuracy of API integrations.",
    },
    {
          id: "16",
          icon: SiFastapi,
          skill: "FastAPI",
          progress: 90,
          type: "language",
          description: "I use FastAPI to build high-performance backend APIs with Python. Its simplicity and speed help me develop and test endpoints efficiently while maintaining clean and scalable code.",
    }
];

export const ABOUT_ME = {
    socialLinks: [
        { id:"01", label:"Instagram", icon:FaInstagram, link:"https://www.instagram.com/shi1_shi4?igsh=aGczNmNqOGhocjdv&utm_source=qr" },
        { id:"02", label:"GitHub", icon:FaGithub, link:"https://github.com/wintwah243" },
         { id:"03", label:"Email", icon:FaEnvelope, link: "mailto:wahwint72@gmail.com" },
         { id:"04", label:"LinkedIn", icon:FaLinkedin, link: "http://linkedin.com/in/wint-wah-386240307" },
    ],
    email:"wahwint72@gmail.com",
    phone:"+95 9254229977",
    github:"wintwah243"
};

export const PROJECTS = [
    {
        id:1,
        title:"Text-driven Emotion Classification",
        image:insideout,
        tags:["Python", "Streamlit", "PowerBI", "Weka"],
        link:"https://github.com/wintwah243/text-driven-emotion-detection",
        type: "AI project"
    },
    {
        id:2,
        title:"BudgetBee || Budget Tracking Project",
        image:BudgetBeePJ,
        tags:["React", "Express", "MongoDB", "Node"],
        link:"https://github.com/wintwah243/BudgetBee",
        type: "Full Stack"
    },
    {
        id:3,
        title:"WolfEye+",
        image:wolf,
        tags:["React", "FastAPI", "MongoDB", "YOLO"],
        link:"https://github.com/wintwah243/wolfeye_Plus",
        type: "Full Stack"
    },
    {
        id:4,
        title:"Mapito || AI-powered Practicing Platform for Developer",
        image:mapitopj,
        tags:["React", "Express", "MongoDB", "GEMINI"],
        link:"https://github.com/wintwah243/Mapito",
        type: "Full Stack"
    },
    {
        id:5,
        title:"Community Involvement Guidance",
        image:community,
        tags:["Jupyter Notebook", "Model Train"],
        link:"https://github.com/wintwah243/community_involvement_guidance",
        type: "AI project"
    },
    {
        id:6,
        title:"My Developer Portfolio Website",
        image:portfolio,
        tags:["React", "TailwindCss"],
        link:"https://github.com/wintwah243/shiportfolio-v2.0",
        type: "Frontend"
    },
    {
        id:7,
        title:"Color Palette Generator and Dynamic Background",
        image:color,
        tags:["React", "CSS"],
        link:"https://github.com/wintwah243/dynamic-bg-generator",
        type: "Frontend"
    },
    {
        id:8,
        title:"K-Town || Album Shopping Website",
        image:ktownpj,
        tags:["JavaEE", "JSP", "MySQL"],
        link:"https://github.com/wintwah243/Album-Selling-Website-Full-Stack-Project",
        type: "Full Stack"
    }
];

export const timelineData = [
    {
      title: "Venture Base Hackathon 2025",
      date: "October 2025",
      description: "Participated in the Venture Base Hackathon 2025 and won the First Runner-Up prize. Developed 'WolfEye+', an innovative web application featuring face recognition and PPE detection.",
    },
    {
      title: "Nuclear Science Hackathon - HackAtom Myanmar 2024",
      date: "August 2024",
      description: "We developed a 4D proposal to build a small modular nuclear power plant in Myanmar, focusing on design, deployment, development, and disaster management."
    },
    {
      title: "UCSY Product Show and Job Fair 2025",
      date: "September 2025",
      description: "After completing two selection stages, my project Mapito was awarded a consolation prize among 60 project groups."
    }
];


