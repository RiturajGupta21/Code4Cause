import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { themes } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ThemeCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
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
        "Code for Cause" is an initiative by Codex ITER to promote the use of technology for social good and to create a positive impact on society. It not only encourages the development of innovative solutions but also fosters a sense of social responsibility and community involvement among participants.
        <br />
        The event is designed to encourage coders and developers to use their skills to create solutions for social causes and community issues.
        <br />
        Throughout the initiative, participants have access to mentorship and guidance from experienced members of the Codex community, who provide feedback and support. Participants also have the opportunity to learn new skills and improve their coding abilities, as well as develop important teamwork and leadership skills.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {themes.map((theme, index) => (
          <ThemeCard key={theme.title} index={index} {...theme} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
