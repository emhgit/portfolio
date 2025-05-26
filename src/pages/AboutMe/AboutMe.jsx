import React from 'react'
import TextCard from '../../components/TextCard/TextCard';
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  const bio = "I'm Elliott, a full stack developer focused on web development, automation, and data analysis. I'm currently open to freelance work and collaborative projects.";
  const skills = "My core tech stack includes JavaScript, Java, SQL; I am experienced in front end frameworks like React, as well as back end frameworks such as Express.js and Spring Boot. Outside of technical skills, I am a strong speaker and writer. I improve daily to foster my soft and hard skills."
  const experience = "In the \“Projects\” section, you can view projects I have built such as an economic data visualizer using the World Bank API and a real-time stock tracker with Google Apps Script. My coding skills, along with my experience in Adobe Photoshop and Canva, have helped my web design tremensely. I am also a math tutor for Mathnasium, which has allowed me to teach and mentor younger students. Additionally, I have volunteer experience as part of the National Honors Society."
  return (
    <div id={styles["about-me"]}>
    <h1>About Me</h1>

    <div >
      <img src={null} alt="image-1" />
    </div>

    <TextCard 
      title={null}
      body={bio}
    />
    <TextCard 
      title="My Skills" 
      body={skills}
    />
    <TextCard 
      title="My Experience" 
      body={experience}
    />

    </div>
  )
};

export default AboutMe;