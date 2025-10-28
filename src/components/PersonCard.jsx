import styles from "./PersonCard.module.css";

const Person = (props) => {
  return (
    <div className={styles.Person}>
      <h2 className={styles.name}>{props.name}</h2>
      <p className={styles.title}>Title: {props.title}</p>
      <p className={styles.salary}>Salary: {props.salary}</p>
      <p className={styles.phone}>Phone: {props.phone}</p>
      <p className={styles.email}>Email: {props.email}</p>
      <p className={styles.animal}>Animal: {props.animal}</p>
      <p className={styles.startDate}>Start date: {props.startDate}</p>
      <p className={styles.location}>Location: {props.location}</p>
      <p className={styles.department}>Department: {props.department}</p>
      <p className={styles.skills}>Department: {props.skills}</p>
    </div>
  );
};

export default Person;
