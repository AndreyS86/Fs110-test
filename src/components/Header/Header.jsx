import styles from "./Header.module.css";
import icon from "./../../assets/react.svg";

const Header = () => {
  return (
    <header className="header">
      <div className={styles.title}>
        Logo
        <img src={icon} alt="" />
      </div>
    </header>
  );
};
export default Header;
