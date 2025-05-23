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
      body="Professional Bio..."
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