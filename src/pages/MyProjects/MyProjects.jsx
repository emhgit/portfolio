import React from 'react'
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import styles from "./MyProjects.module.css";

const MyProjects = () => {
  return (
    <div class={styles["column-container"]}>
      <h1>MyProjects</h1>

      <div id={styles["projects-container"]}>

        <ProjectCard
          title="Economic Data Visualizer" 
          image-src="/src/assets/economic-data-visualizer-screenshot.png" 
          description="Economic Data Visualizer is a web application that fetches real-time economic indicators from the 
          World Bank API and allows users to generate visual dashboards using Chart.js."
          github-link="https://github.com/emhgit/economic-data-visualizer" 
        />

        <ProjectCard
          title="StockSage Landing Page" 
          image-src="/src/assets/stocksage-screenshot.png" 
          description="StockSage is an AI generated product I used to display my HTML and CSS skills."
          github-link="https://github.com/emhgit/stocksage" 
        />

        <ProjectCard
          title="Apple Stock Tracker" 
          image-src="/src/assets/ast-screenshot.png" 
          description="This is a Google Apps Script automation that populates a Google Sheet with real-time Apple Inc. (AAPL) stock data from the AlphaVantage API."
          github-link="https://github.com/emhgit/apple-stock-tracker" 
        />

      </div>
    </div>
  )
};

export default MyProjects;