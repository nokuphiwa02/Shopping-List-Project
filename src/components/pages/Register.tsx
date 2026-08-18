import React from "react";
import styles from "./Register.module.css";
import { useNavigate } from "react-router";

export const Register = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate('/');
  };

  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerCard}>

        <h1 className={styles.tittle}>REGISTER</h1>

        <div className={styles.firstInfo}>
        <div className={styles.userName}>
          <label>UserName:</label>
          <input type="userName" className={styles.username} />
        </div>

        <div className={styles.surname}>
          <label>Surname:</label>
          <input type="surname" className={styles.Surname} />
        </div>
       </div>
       
       <div className={styles.secondInfo}>
        <div className={styles.email}>
          <label>Contact:</label>
          <input type="contact" className={styles.Contact} />
        </div>
       

      
        <div className={styles.email}>
          <label>Email Address:</label>
          <input type="email Address" className={styles.Email} />
        </div>
        </div>

        <div className={styles.thirdInfo}>
        <div className={styles.email}>
          <label>Password:</label>
          <input type="password" className={styles.Password} />
        </div>

        <div className={styles.email}>
          <label>Confirm Password:</label>
          <input type="confirm Password" className={styles.ConfirmPass} />
        </div>
        </div>
        
        <button className={styles.registerBtn}>Register</button>
        <button className={styles.back} onClick={back}>
          Back
        </button>
      </div>
    </div>
  );
};
