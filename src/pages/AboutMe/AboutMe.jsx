import TextCard from "../../components/TextCard/TextCard";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  const bio =
    'I am a high school student from Texas interested in web development. I work as a math tutor in my area, and I am also a 400m sprinter. I have contributed to open source projects and built my own projects using JavaScript, TypeScript, and Java. Outside of coding, my two favorite hobbies are chess and reading. Check out my experience under the "Experience" section, and contact me if you are interested in talking.';
  const languages = ["javascript", "typescript", "java", "sql"];
  const frameworks = [
    "react",
    "Tailwind CSS",
    "Express.js",
    "Node.js",
    "Spring Boot",
    "Fast API",
  ];
  const software = [
    "Excel",
    "Microsoft Office",
    "Google Workspace",
    "Adobe Photoshop",
    "Blender",
  ];
  const interests = [
    "System Design",
    "Chess",
    "History",
    "Religion",
    "Data Structures and Algorithms",
  ];
  return (
    <div id={styles["about-me"]}>
      <h1>About Me</h1>

      <div className={styles["image-container"]}>
        <img src="assets/placeholder.jpg" alt="image-1" />
      </div>
      <TextCard title={null} body={bio} />

      <TextCard title="My Skills">
        <div className={styles["skills-container"]}>
          <h3>Languages</h3>
          <div>
            {languages.map((language, index) => (
              <span key={index} className={styles["item"]}>
                {language}
              </span>
            ))}
          </div>
          <h3>Frameworks/Libraries</h3>
          <div>
            {frameworks.map((framework, index) => (
              <span key={index} className={styles["item"]}>
                {framework}
              </span>
            ))}
          </div>
          <h3>Software/Applications</h3>
          <div>
            {software.map((software, index) => (
              <span key={index} className={styles["item"]}>
                {software}
              </span>
            ))}
          </div>
        </div>
      </TextCard>

      <TextCard title="My Interests">
        <div className={styles["interests-container"]}>
          {interests.map((interest, index) => (
            <span key={index} className={styles["item"]}>
              {interest}
            </span>
          ))}
        </div>
      </TextCard>
    </div>
  );
};

export default AboutMe;
