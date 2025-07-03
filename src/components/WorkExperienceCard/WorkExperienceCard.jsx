import styles from "./WorkExperienceCard.module.css";

const WorkExperienceCard = (props) => {
  const title = props.title;
  const company = props.company;
  const date = props.date;
  const description = props.description;
  return (
    <div className={styles["work-experience-card"]}>
      <div>
        <h3>{title}</h3>
        <h3>{company + " " + date}</h3>
      </div>
      <div>
        <ul>
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkExperienceCard;
