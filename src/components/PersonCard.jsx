import styles from "./PersonCard.module.css";

const PersonCard = (props) => {
  const start = new Date(props.startDate);
  const today = new Date();

  const years = today.getFullYear() - start.getFullYear();

  const hasHadAnniversary =
    today.getMonth() > start.getMonth() ||
    (today.getMonth() === start.getMonth && today.getDate() >= start.Date());

  const totalYears = hasHadAnniversary ? years : years - 1;

  let reminderMessage = "";
  if (totalYears < 0.5) {
    reminderMessage = "🔔 Schedule probation review.";
  } else if (totalYears % 5 === 0 && totalYears !== 0) {
    reminderMessage = "🎉 Schedule recognition meeting.";
  }

  return (
    <div className={styles.Person}>
      <div className={styles.maintext}>
        <h2 className={styles.name}>{props.name}</h2>
        <p>{totalYears} years</p>
      </div>
      <div className={styles.personinfo}>
        <p className={styles.title}>Title: {props.title}</p>
        <p className={styles.salary}>Salary: {props.salary}</p>
        <p className={styles.phone}>Phone: {props.phone}</p>
        <p className={styles.email}>Email: {props.email}</p>
        <p className={styles.animal}>Animal: {props.animal}</p>
        <p className={styles.startDate}>Start date: {props.startDate}</p>
        <p className={styles.location}>Location: {props.location}</p>
        <p className={styles.department}>Department: {props.department}</p>
        <p className={styles.skills}>Skills: {props.skills}</p>
      </div>
      {reminderMessage && <p className={styles.reminder}>{reminderMessage}</p>}
    </div>
  );
};

export default PersonCard;
