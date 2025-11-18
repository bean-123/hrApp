import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className={styles.headercontainer}>
      <Link to="/" className={styles.headertext}>
        <h1>{props.headertext}</h1>
      </Link>
      <div className={styles.buttons}>
        <Link to="/about">
          <button>About</button>
        </Link>
        <Link to="/add-employee">
          <button>Add Employee</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
