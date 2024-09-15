import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  scikitlearn,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  siesgst,
  threejs,
  matplotlib,
} from "../assets";

import video1 from "../assets/video/1.mp4";
import video2 from "../assets/video/2.mp4";
import video3 from "../assets/video/3.mp4";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Machine Learning",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cybersecurity",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "matplotlib",
    icon: matplotlib,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "scikitlearn",
    icon: scikitlearn,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Result Managment System",
    company_name: "SIES Graduate School of Technology",
    icon: siesgst,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - March 2024",
    points: [
      "Developed an advanced web application using Flask, aimed at empowering college staff to analyse student performance, generate comprehensive reports, and conduct year-on-year com- parisons of academic results.",
      "Allows the user to generate comprehensive result analysis report in excel format.",
      "Replaced traditional Excel-based method with a user-friendly web application.",
      "Streamlined the result analysis process, significantly saving staff time and effort.",
      "Enhanced efficiency in report generation and analysis.",
    ],
  },
];


const projects = [
  {
    name: "Trippy",
    description:
      "Developed a comprehensive tour package website using the MERN stack, featuring secure user authentication with registration and login. Implemented a responsive React frontend with a dynamic navbar and utilized MongoDB for managing and displaying tour package data",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    video_file: video1,
    source_code_link: "https://github.com/satishkumarmurugan/Trippy",
  },
  {
    name: "AQI Prediction Using ML",
    description:
      "This Flask web application predicts air quality based on input parameters using a pre-trained machine learning model. It's designed to be user-friendly, allowing users to easily enter air quality parameters and receive instant predictions.",
    tags: [
      {
        name: "Scikit-Learn",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "Matplotlib",
        color: "pink-text-gradient",
      },
    ],
    video_file: video2,
    source_code_link: "https://github.com/satishkumarmurugan/AQI-prediction-Using-Flask-Web-App",
  },
  {
    name: "Predictive Maintenance using ML",
    description:
      "Developed a Flask-based web application for predictive maintenance using machine learning, integrating the XGBoost model for real-time equipment failure predictions and operational efficiency improvements.",
    tags: [
      {
        name: "Scikit-Learn",
        color: "blue-text-gradient",
      },
      {
        name: "Matplotlib",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
    ],
    video_file: video3,
    source_code_link: "https://github.com/satishkumarmurugan/Predictive-Maintenance-using-ML",
  },
];

export { services, technologies, experiences, projects };
