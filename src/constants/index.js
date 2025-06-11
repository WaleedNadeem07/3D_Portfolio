import { Scene } from "three";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  planit,
  os,
  tailwind,
  nodejs,
  screen,
  mongodb,
  git,
  chat,
  figma,
  sql,
  qbatch,
  lambdafish,
  sproj,
  website,
  ds,
  ai,
  block,
  starbucks,
  carrent,
  jobit,
  uno,
  db,
  tripguide,
  threejs,
} from "../assets";

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
    title: "Web Developing",
    icon: web,
  },
  {
    title: "MERN Stack Developing",
    icon: backend,
  },
  {
    title: "UI/UX Designing",
    icon: creator,
  },
  {
    title: "Programming in Python, C++ & Java",
    icon: mobile,
  }
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "sql",
    icon: sql,
  },
  {
    name: "data structures",
    icon: ds,
  },
  
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Qbatch",
    icon: qbatch,
    iconBg: "#FFFFFF",
    date: "May 2022 - September 2022",
    points: [
      "Made an E-Commerce Website in MERN.",
      "Gained hands-on experience in Git, REST APIs, and component-based architecture",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "LambdaFISH",
    icon: lambdafish,
    iconBg: "#FFFFFF",
    date: "October 2024 - June 2025",
    points: [
      "Worked with a US-based client on two web applications focused on AI tools and personal messaging",
      "Developed a web app in Remix JS and Prisma to help users discover AI tools tailored to their needs, with responsive layouts using Tailwind CSS",
      "Contributed in developing LittleGems, a Ruby on Rails + Postgres app that lets users send future-dated messages to their children, styled using Tailwind CSS"
    ],
  }
];

const testimonials = [
]

const projects = [
  {
    name: "JAM",
    description:
      "JAM is a quiz app which me and my team made for our senior year project. Hosts can choose from default quizzes or make a new one. Players choose an avatar and join a room. Hosts have several options they can change for a room according to their preference. Scoreboard shown at the end of each quiz. Access at p1-jam.vercel.app",
    tags: [
      {
        name: "Svelte",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
    ],
    image: sproj,
    source_code_link: "https://github.com/TorqueKill/P01_JAM",
  },
  {
    name: "Plan-It Pro",
    description:
      "Plan-It Pro is a Web-app designed to empower users in achieving their financial goals effortlessly. Seamlessly organize tasks, set priorities, and stay on top of your to-do list with its intuitive interface. It also offers smart suggestions personalized to your budget. Access the live website at https://planitpro.herokuapp.com/",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
    ],
    image: planit,
    source_code_link: "https://github.com/Ahmad-Mukhtar-Bhatti/PlanIt_Pro",
  },
  {
    name: "ChatWave",
    description:
      "A MERN Chat app where users can create an account and chat with all other users. The App has rooms where multiple users can send messages and interact with each other. Users can also view which users are online. Upon new messages from a specific room or user, notifications are shown to indicate to the user that they have a new message.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "Socket.io",
        color: "green-text-gradient",
      },
    ],
    image: chat,
    source_code_link: "https://github.com/WaleedNadeem07/ChatWave/tree/main",
  },
  {
    name: "E-Commerce Website",
    description:
      "Made an E-Commerce Website in MERN during my Software Engineering internship at Qbatch. The Wesbite has multiple features e.g place orders, view orders, search products. I developed this website under the supervision of professionals in the industry who made sure I followed the right coding practices and implemented the use cases.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: website,
    source_code_link: "https://github.com/WaleedNadeem07/E-Commerce-Website",
  },
  {
    name: "UNO",
    description:
      "UNO made using MERN and Socket Programming. The game waits for 4 players, after which the game starts. Used css for styling the cards. Implemented the rules for UNO. The messages section tells each user what is going on in the game and whose turn it is. Upon a win or draw, each user is shown the relevant alert and disconnected.",
    tags: [
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "MERN",
        color: "green-text-gradient",
      },
      {
        name: "Socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: uno,
    source_code_link: "https://github.com/WaleedNadeem07/UNO-MERN",
  },
  {
    name: "LUMSAVARI Prototype",
    description:
      "Made a prototype for an app on Figma, as a course project. The purpose for the app was to help students in our university carpool together to help save travel costs. Conducted User Research and Interviews to find out what features our users needed. Tested and Evaluated our prototype after the prototype was made.",
    tags: [
      {
        name: "Figma",
        color: "green-text-gradient",
      },
      {
        name: "UI/UX Design",
        color: "pink-text-gradient",
      },
    ],
    image: screen,
    source_code_link: "https://www.figma.com/proto/PYchf2Iy14r8oJ2mOgWDky/Group16_Minahil?node-id=32-40&starting-point-node-id=11%3A7",
  }
];

export { services, technologies, experiences, testimonials, projects };
