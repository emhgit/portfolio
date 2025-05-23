import React from 'react';
import styles from "./ProjectCard.module.css";

const ProjectCard = (props) => {
    const title = props.title;
    const imageSrc = props["image-src"];
    const description = props.description;
    const githubLink = props["github-link"];

    return (
        <div class={styles["project-card"]}>
            <h2>{title}</h2>
            <img src={imageSrc} alt="thumbnail" width="480px" height="270px"></img>
            <p>{description}</p>
            <a href={githubLink}>View Full Project Here</a>
        </div>
    )
}

export default ProjectCard