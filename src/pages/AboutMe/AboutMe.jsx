import React from 'react'
import TextCard from '../../components/TextCard/TextCard';
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div id={styles["about-me"]}>
    <h1>About Me</h1>

    <div >
      <img src="" alt="image-1" />
    </div>

    <TextCard 
      title="" 
      body="Hardworking honors student with a passion for computer science, 
      problem-solving, and leadership. Strong technical skills in Java, OOP, and data structures, 
      complemented by leadership experience in coding club and community volunteering."
    />
    <TextCard 
      title="My Skills" 
      body="Skills..."
    />
    <TextCard 
      title="My Experience" 
      body="Experience..."
    />

    </div>
  )
};

export default AboutMe;