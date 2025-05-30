import React from 'react'
import TextCard from '../../components/TextCard/TextCard';
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  const bio = "I'm Elliott, a full stack developer passionate about web development, automation, and data analysis. Contact me, I'm currently open to freelance work and collaborative projects.";
  const skills = "My core tech stack includes JavaScript, Java, SQL; I am experienced in front end frameworks like React, as well as back end frameworks such as Express.js and Spring Boot. Along with coding, I have years of experience in graphic design software such as Adobe Photoshop."
  const experience = "In the \“Projects\” section, you can view projects I have built such as an economic data visualizer using the World Bank API and a real-time stock tracker with Google Apps Script. Outside of web development, I have experience as a community volunteer and as a tutor. As a math tutor for Mathnasium, I have tutored and mentored students to develop their passion for Science, Technology, Engineering, and Math (STEM)."
  const hobbies = "In my free time, I love to play chess. If you want to play, my username on Chess.com is emhthechessian. I also like to read, run track, and compete in coding competitions."
  return (
    <div id={styles["about-me"]}>
    <h1>About Me</h1>

    <div className={styles["image-container"]}>
      <img src="assets/placeholder.jpg" alt="image-1" />
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
      <TextCard 
        title="My Hobbies" 
        body={hobbies}
      />
    </div>
  )
};

export default AboutMe;