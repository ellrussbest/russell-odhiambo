import web from "../assets/web.png"
import mernStack from "../assets/mernStack.png"
import reactNative from "../assets/reactNative.png"
import ros from "../assets/ROS.png"
import kemriCDC from "../assets/kemriCDC.jpg"
import cascination from "../assets/cascination.png"


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

  export const experiences = [
    {
      title: "IT Attachee",
      company_name: "KEMRI-CDC, Nairobi Kenya",
      icon: kemriCDC,
      iconBg: "#383E56",
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
      iconBg: "#383E56",
      date: "February 2023 - Februrary 2024",
      points: [
        "I developed a package creator automation software using Python and QML which significantly enhanced the company's operational effieicency.\
        This software played a vital role in generating essential packages for the client-side application installer and updater,\
        thereby improving company's standard procedures.",

        "I developed FileMaker custom plugin using C++, Javascript and WebAssembly. This plugin was instrumental in generating and stroing EEPROM strings\
        for the comany's medical device firmware thereby enhancing the product's functionality.",

        "I played a key role in enhancing the company's operational efficiency by developing and troubleshooting Filemaker application to maintain the\
        company's ERP.",

        "I Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality and regulated software.",

        "I learned and developed Simple Robot operating system application",

        "I contributed in debugging and refactoring of the existing code base.",
      ],
    },
  ];