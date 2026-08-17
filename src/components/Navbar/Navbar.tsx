
import styles from "./Navbar.module.css";
import home from "../../assets/home icon.png";

export const Navbar = () => {
  return (
    <div className={styles.container}>
    <div className={styles.navbarContent}>
      <nav>
          <img src={home} alt="home"className={styles.image} />
          <a href= "/" className={styles.tittle}>login</a>
      </nav>
    </div>
    </div>
  );
};
