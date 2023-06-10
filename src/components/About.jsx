import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({index,title,icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
       variants={fadeIn("right","spring", 0.5 *
       index, 0.75)}
       className="w-full green-pink-gradient p-[1px]
       rounded-[20px] shadow-card"
       >
        <div
         options={{
          max: 45,
          scale: 1,
          speed: 450
         }}
         className="bg-tertiary rounded-[20px] py-5
         px-12 min-h-[280px] flex justify-evenly
         items-center flex-col">
          <img src={icon} alt={title}
          className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold
          text-center">{title}</h3> 
         </div>
      </motion.div>
    </Tilt>
  )
};


const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>
          Introduction</p>
        <h2 className={styles.sectionHeadText}>
          Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Throughout my academic journey, I have taken courses such as Software Engineering, Human-Computer Interaction, 
        Databases, and Advanced Programming, which have equipped me with a diverse skill set and valuable experience in the field. 
        I specialize in the MERN stack, which allows me to build robust and interactive web applications. With a keen eye for design 
        and proficiency in tools like Figma, I strive to create intuitive and visually appealing user interfaces. My dedication to coding 
        and continuous learning drives me to stay up-to-date with the latest trends and technologies in the ever-evolving world of web development. 
        Feel free to explore my projects and experiences to get a glimpse of my work and expertise.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");