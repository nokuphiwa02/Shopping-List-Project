import React from "react";
import styles from "./Navbar.module.css";
import home from "../../assets/home icon.png";

export const Navbar = () => {
  return (
    <div className={styles.navbarContent}>
        <h1>Hi</h1>
      <nav>
        <ul>
        <li>
          <h1>Login</h1>
        </li>
        </ul>
        <img src={home} alt="home" />
      </nav>
    </div>
  );
};
