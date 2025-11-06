import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <div className="headercontainer">
      <h1 className={styles.header}>{props.headertext}</h1>
    </div>
  );
};

export default Header;
