import styles from "./Experience.module.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import WorkExperienceCard from "../../components/WorkExperienceCard/WorkExperienceCard";

const Experience = () => {
  return (
    <div className={styles["column-container"]}>
      <h1>Work Experience</h1>
      <div id={styles["work-experience-container"]}>
        <WorkExperienceCard
          title="Math Tutor"
          company="Mathnasium"
          date="May 2025 - Now"
          description={[
            "Tutored and mentored students in math, resulting in improved academic performance and increased confidence in problem-solving",
            "Collaborated with fellow tutors to develop effective teaching strategies",
          ]}
        />

        <WorkExperienceCard
          title="Web Developer"
          company="Computer Programming Initiative"
          date="May 2025 - Now"
          description={[
            "Optimized frontend performance by implementing lazy loading for heavy components, reducing hot reload time by ~35% and improving Core Web Vitals (LCP, INP, CLS).",
            "Enhanced UI/UX by adding a blind mode feature for problem tags and fixing bugs (negative countdown timer, empty URL submissions)",
            "Improved code clarity in Bronze-level modules by adding inline comments and beginner-friendly explanations for Java/Python code snippets",
          ]}
        />
      </div>

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
