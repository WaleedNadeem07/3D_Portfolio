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
    title: "International Inbound Sales Executive",
    company_name: "Ibex",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2022 - September 2022",
    points: [
      "Sold USA companies' products to customers in the USA.",
      "Joined a team and devised plans to meet the company's goals.",
    ],
  }
];

const testimonials = [
]

const projects = [
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
  },
  {
    name: "Store Inventory System",
    description:
      "Made a Store Inventory System as a course project. Implemented the use cases for customer, admin and employees. Customers can view available medicines and place orders. Admin can view, add or remove employees. Restockers can view medicine quantity status and place orders for medicines running low.",
    tags: [
      {
        name: "SQL",
        color: "blue-text-gradient",
      },
      {
        name: "HTML/CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: db,
    source_code_link: "https://github.com/WaleedNadeem07/Store-Inventory-System",
  },
];

export { services, technologies, experiences, testimonials, projects };
