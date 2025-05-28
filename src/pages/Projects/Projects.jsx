import React from 'react'
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import styles from "./MyProjects.module.css";

const Projects = () => {
  return (
    <div className={styles["column-container"]}>
      <h1>My Projects</h1>

      <div id={styles["projects-container"]}>

        <ProjectCard
          title="Economic Data Visualizer"
          src="https://www.youtube.com/embed/5x9u66hmFiA"
          image-src="/src/assets/economic-data-visualizer-screenshot.png" 
          description="Economic Data Visualizer is a web application that fetches real-time economic indicators from the 
          World Bank API and allows users to generate visual dashboards using Chart.js."
          github-link="https://github.com/emhgit/economic-data-visualizer" 
        />

        <ProjectCard
          title="StockSage Landing Page" 
          image-src="/src/assets/stocksage-screenshot.png" 
          src="https://www.youtube.com/embed/TJlvsc0WRd4"
          description="StockSage is an AI generated product I used to display my HTML and CSS skills."
          github-link="https://github.com/emhgit/stocksage" 
        />

        <ProjectCard
          title="Apple Stock Tracker" 
          image-src="/src/assets/ast-screenshot.png" 
          src="https://www.youtube.com/embed/x6DVdsB2IR8"
          description="This is a Google Apps Script automation that populates a Google Sheet with real-time Apple Inc. (AAPL) stock data from the AlphaVantage API."
          github-link="https://github.com/emhgit/apple-stock-tracker" 
        />

      </div>
    </div>
  )
};

export default Projects;