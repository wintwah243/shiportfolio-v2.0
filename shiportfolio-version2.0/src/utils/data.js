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
    FaEnvelope
} from "react-icons/fa";
import {BiLogoJavascript} from "react-icons/bi";
import {SiExpress, SiMongodb, SiMysql} from "react-icons/si";
import {
    VscVscode,
    VscCommentUnresolved,
} from "react-icons/vsc";
import { FaGitAlt} from "react-icons/fa6";
import {MdGroups3} from "react-icons/md";

import BudgetBeePJ from "../assets/images/BudgetBeePJ.JPG";
import mapitopj from "../assets/images/robot.jpg";
import ktownpj from "../assets/images/ktownpj.jpg";

export const MENU_LINKS = [
    { id:"01", label:"Home", offset:-100, to:"hero" },
    { id:"02", label:"Skills", offset:-80, to:"skills" },
    { id:"03", label:"About Me", offset:-80, to:"about" },
    { id:"04", label:"Projects", offset:-80, to:"projects" },
    { id:"05", label:"Contact", offset:-80, to:"contact" },
];

export const STATS = [
    { id: "01", count: "10+", label: "Skills \nAcquired" },
    { id: "02", count: "10+", label: `UI Components \nDesigned` },
    { id:"03", count:"10+", label:`Projects \nCompleted` },
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
];

export const ABOUT_ME = {
    content: ` I am a passionate and driven software engineer with experience in web development, focusing on creating dynamic, user-friendly applications and continuously improving my technical skills to solve real-world problems. `,
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
        title:"BudgetBee || Full Stack Budget Tracking Project Using MERN",
        image:BudgetBeePJ,
        tags:["React", "Express", "MongoDB", "Node"],
        link:"https://github.com/wintwah243/BudgetBee"
    },
    {
        id:2,
        title:"Mapito || AI-powered Practicing Platform for Developer",
        image:mapitopj,
        tags:["React", "Express", "MongoDB", "GEMINI"],
        link:"https://github.com/wintwah243/Mapito"
    },
    {
        id:3,
        title:"K-Town || Full Stack Album Selling Website Using JavaEE",
        image:ktownpj,
        tags:["Java", "MySQL"],
        link:"https://github.com/wintwah243/Album-Selling-Website-Full-Stack-Project"
    }
];


