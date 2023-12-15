import web from "../assets/web.png"
import mernStack from "../assets/mernStack.png"
import reactNative from "../assets/reactNative.png"
import ros from "../assets/ROS.png"
import kemriCDC from "../assets/kemriCDC.png"
import cascination from "../assets/cascination.png"
import docker from "../assets/tech/docker.png"
import figma from "../assets/tech/figma.png"
import javascript from "../assets/tech/javascript.png"
import mongodb from "../assets/tech/mongodb.png"
import nodejs from "../assets/tech/nodejs.png"
import reactjs from "../assets/tech/reactjs.png"
import tailwind from "../assets/tech/tailwind.png"
import threejs from "../assets/tech/threejs.svg"
import typescript from "../assets/tech/typescript.png"
import qml from "../assets/tech/qml.png"
import python from "../assets/tech/python.png"
import cpp from "../assets/tech/cpp.png"
import solidity from "../assets/tech/solidity.png"
import sql from "../assets/tech/sql.png"
// import git from "../assets/tech/git.png"
// import redux from "../assets/tech/redux.png"
// import html from "../assets/tech/html.png"
// import css from "../assets/tech/css.png"

// NavLinks
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
    {
      id: "download",
      title: "Download CV"
    },
];


// Skills
export const services = [
  {
    title: "MERN Stack Developer",
    icon: mernStack,
  },
  {
    title: "React Native Developer",
    icon: reactNative,
  },
  {
    title: "Desktop Application Developer",
    icon: web,
  },
  {
    title: "Robot Operating System Developer",
    icon: ros,
  },
];


// Work experiences
export const experiences = [
  {
    title: "IT Attachee",
    company_name: "KEMRI-CDC, Nairobi Kenya",
    icon: kemriCDC,
    iconBg: "#f1f1f1",
    date: "May 2022 - July 2022",
    points: [
      "I maintained database servers by regularly checking for data errors and hardware defaults\
      ensuring uninterrupted access to the company's information. This increased the company's \
      efficiency and reliability.",

      "I troubleshot and monitored the company's network using Wireshark.\
      I played a crucial role in identifying and resolving potential issues\
      thus increasing security, minimizing downtime and optimizing network efficiency",

      "I automated tasks through Batch and Bash scripting thus increasing operational\
      efficiency and reducing manual effort. This automation optimized workflow process and also minimized the\
      potential for human error ultimately improving reliablity of the company's system",
    ],
  },
  {
    title: "IT and Software Developer Intern",
    company_name: "CASCINATION, Bern Switzerland",
    icon: cascination,
    iconBg: "green",
    date: "February 2023 - Februrary 2024",
    points: [
      "I developed a package creator automation software using Python and QML which significantly enhanced the company's operational effieicency.\
      This software played a vital role in generating essential packages for the client-side application installer and updater,\
      thereby improving company's standard procedures.",

      "I developed FileMaker custom plugin using C++, Javascript and WebAssembly. This plugin was instrumental in generating and storing EEPROM strings\
      for the comany's medical device firmware thereby enhancing the product's functionality.",

      "I played a key role in enhancing the company's operational efficiency by developing and troubleshooting Filemaker applications to help maintain the\
      company's ERP.",

      "I Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality and regulated software.",

      "I learned and developed Simple Robot operating system application",

      "I contributed in debugging and refactoring of the existing code base.",
    ],
  },
];

// Programming languages and technologies
export const technologies = [
  // {
    //   name: "HTML 5",
    //   icon: html,
    // },
    // {
      //   name: "CSS 3",
      //   icon: css,
      // },
  {
    name: "cpp",
    icon: cpp,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "solidity",
    icon: solidity,
  },
  {
    name: "qml",
    icon: qml,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "python",
    icon: python,
  },
];

export const projects = [
  {
    name: "Notebook",
    description:
      "Online development platform that uses WebAssembly to transpile, bundle and then compile Javascript in real time.",
    tags: [
      {
        name: "React-Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "WebAssembly",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
    ],
    image: web,
    source_code_link: "https://notebook-hazel.vercel.app/",
  },
  {
    name: "Web3 Marketplace",
    description:
      "A Decentralized Marketplace running in Ethereum network that allows users to browse and buy goods while still maintaining their privacy.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "Solidity",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: web,
    source_code_link: "https://marketplace-eth-five.vercel.app/",
  },
  {
    name: "Blockchain Network",
    description:
      "A comprehensive full stack peer-to-peer blockchain network using NodeJs, pub/sub paradign and bitcon-like proof of work consensus algorithm",
    tags: [
      {
        name: "NodeJs",
        color: "blue-text-gradient",
      },
      {
        name: "Redis",
        color: "green-text-gradient",
      },
      {
        name: "React-Typescript",
        color: "pink-text-gradient",
      },
    ],
    image: web,
    source_code_link: "https://github.com/ellrussbest/Blockchain/",
  },
];