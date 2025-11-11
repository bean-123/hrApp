import styles from "./PersonCard.module.css";

const PersonCard = (props) => {
  const start = new Date(props.startDate);
  let totalYears = 0;

  if (!isNaN(start)) {
    const today = new Date();
    let years = today.getFullYear() - start.getFullYear();
    const hasHadAnniversary =
      today.getMonth() > start.getMonth() ||
      (today.getMonth() === start.getMonth() &&
        today.getDate() >= start.getDate());
    totalYears = hasHadAnniversary ? years : years - 1;
  }

  let reminderMessage = "";
  if (totalYears < 0.5) {
    reminderMessage = "🔔 Schedule probation review.";
  } else if (totalYears % 5 === 0 && totalYears !== 0) {
    reminderMessage = "🎉 Schedule recognition meeting.";
  }

  const animalToEmoji = {
    Owl: "🦉",
    Fox: "🦊",
    Cat: "🐱",
    Dog: "🐶",
    Raven: "🪶",
    Otter: "🦦",
    Wolf: "🐺",
    Hedgehog: "🦔",
    Falcon: "🦅",
    Elephant: "🐘",
    Penguin: "🐧",
    Rabbit: "🐇",
    Lion: "🦁",
    Dolphin: "🐬",
    Koala: "🐨",
    Tiger: "🐯",
    Bear: "🐻",
    Monkey: "🐒",
    Panda: "🐼",
    Giraffe: "🦒",
    Horse: "🐴",
    Pig: "🐷",
    Chicken: "🐔",
    Sheep: "🐑",
    Frog: "🐸",
    Turtle: "🐢",
    Snake: "🐍",
    Whale: "🐋",
    Crocodile: "🐊",
    Bat: "🦇",
    Camel: "🐫",
    Octopus: "🐙",
  };

  const animalEmoji = animalToEmoji[props.animal] || "";

  // ensure skills is always an array
  const skills = Array.isArray(props.skills) ? props.skills : [];

  return (
    <div className={styles.Person}>
      <div className={styles.maintext}>
        <h2 className={styles.name}>{props.name}</h2>
        <p>
          {totalYears} {totalYears === 1 ? "year" : "years"}
        </p>
      </div>
      <div className={styles.personinfo}>
        <p className={styles.title}>Title: {props.title}</p>
        <p className={styles.salary}>Salary: {props.salary}</p>
        <p className={styles.phone}>Phone: {props.phone}</p>
        <p className={styles.email}>Email: {props.email}</p>
        <p className={styles.animal}>
          Animal: {props.animal} {animalEmoji}
        </p>
        <p className={styles.startDate}>
          Start date: {props.startDate || "Not set"}
        </p>
        <p className={styles.location}>Location: {props.location}</p>
        <p className={styles.department}>Department: {props.department}</p>
        <p className={styles.skills}>
          Skills: {skills.length ? skills.join(", ") : "None"}
        </p>
      </div>
      {reminderMessage && <p className={styles.reminder}>{reminderMessage}</p>}
    </div>
  );
};

export default PersonCard;
