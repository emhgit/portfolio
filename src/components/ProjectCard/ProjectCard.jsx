import React from 'react';
import styles from "./ProjectCard.module.css";

const ProjectCard = (props) => {
    const title = props.title;
    const src = props.src;
    const description = props.description;
    const githubLink = props["github-link"];

    return (
        <div className={styles["project-card"]}>
            <h2>{title}</h2>
            <iframe
                src={src}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <p>{description}</p>
            <a href={githubLink}>View Project Repository Here</a>
        </div>
    )
}

export default ProjectCard