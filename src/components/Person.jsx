import styles from "./Person.module.css";

const Person = (props) => {
  return (
    <div className={styles.Person}>
      <h3 className={styles.name}>{props.name}</h3>
      <p className={styles.title}>{props.title}</p>
      <p className={styles.salary}>{props.salary}</p>
      <p className={styles.phone}>{props.phone}</p>
      <p className={styles.email}>{props.email}</p>
      <p className={styles.animal}>{props.animal}</p>
    </div>
  );
};

export default Person;
