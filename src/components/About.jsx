import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.aboutcontainer}>
      <h1 className={styles.title}>About HR Management System</h1>
      <div className={styles.abouttext}>
        <p>
          Welcome to the HR Management System, a comprehensive solution for
          managing your organization's human resources.
        </p>
        <p>
          Our system allows you to efficiently track employee information,
          including personal details, job titles, salaries, contact information,
          and skills. You can easily add new employees, view employee lists, and
          manage your workforce data.
        </p>
        <p>
          Key features include employee profile management, department tracking,
          location-based organization, and skill inventory management.
        </p>
      </div>
    </div>
  );
};

export default About;
