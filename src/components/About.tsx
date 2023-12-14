import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import  { FC } from "react"

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../higherOrderComponent";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard: FC<{index: number, title: string, icon: string}> = ({ index, title, icon }) => (
  <Tilt className='sm:w-[250px] w-full' 
  options={{
    max: 45,
    scale: 1,
    speed: 450,
  }}>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a proficient Computer Science Masters student with valuable industry exposure. 
        My expertise spans across a range of programming languages including C++, QML, Python, and Robot Operating System. 
        I have also delved into the exciting world of web3 development, utilizing Solidity to create innovative applications. 
        Furthermore, my hands-on experience in Typescript, React, and NodeJs has allowed me to craft dynamic MERN stack applications. 
        Recently, I have been captivated by the realm of 3D modeling, particularly through the utilization of WebGL and the Three.js library. 
        I am eager to further explore and leverage this captivating technology to its fullest potential.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default function F(){
  return  (
    <SectionWrapper idName={"about"}>
      <About />
    </SectionWrapper>
  )
}