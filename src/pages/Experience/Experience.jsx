import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <div className={styles["column-container"]}>
      <h1>My Projects</h1>

      <div id={styles["projects-container"]}>
        <ProjectCard
          title="USACO Guide"
          description="USACO Guide is a comprehensive resource for students preparing for the USA Computing Olympiad. I contributed UI and content modules to the website."
          github-link="https://github.com/cpinitiative/usaco-guide"
          thumbnail="public/assets/usaco-guide.jpg"
          website-link="https://usaco.guide/"
        />
        <ProjectCard
          title="Economic Data Visualizer"
          src="https://www.youtube.com/embed/pk1vj2S6Z0Y?si=TZPEmcQy76lWB_7U"
          description="Economic Data Visualizer is a web application that fetches real-time economic indicators from the 
          World Bank API and allows users to generate visual dashboards using Chart.js."
          github-link="https://github.com/emhgit/economic-data-visualizer"
        />

        <ProjectCard
          title="StockSage Landing Page"
          src="https://www.youtube.com/embed/TJlvsc0WRd4"
          description="StockSage is an AI generated product I used to display my HTML and CSS skills."
          github-link="https://github.com/emhgit/stocksage"
        />

        <ProjectCard
          title="Apple Stock Tracker"
          src="https://www.youtube.com/embed/x6DVdsB2IR8"
          description="This is a Google Apps Script automation that populates a Google Sheet with real-time Apple Inc. (AAPL) stock data from the AlphaVantage API."
          github-link="https://github.com/emhgit/apple-stock-tracker"
        />
      </div>
    </div>
  );
};

export default Experience;
