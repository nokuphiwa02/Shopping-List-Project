import React from "react";
import styles from "./Register.module.css";
import { useNavigate } from "react-router";
// import type { User } from "../../redux/features/RegisterSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store";
import {
  updateName,
  updateSurname,
  updateEmailAddress,
  updatePassword,
  updateContact,
  updateConfirmPassword,
} from "../../redux/features/RegisterSlice";

export const Register = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate("/");
  };

  const dispatch = useDispatch();

  const name = useSelector((state: RootState) => state.signUp.name);
  const surname = useSelector((state: RootState) => state.signUp.surname);
  const email = useSelector((state: RootState) => state.signUp.emailAddress);
  const password = useSelector((state: RootState) => state.signUp.password);
  const contact = useSelector((state: RootState) => state.signUp.contact);
  const confirmPassword = useSelector(
    (state: RootState) => state.signUp.confirmPassword,
  );

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   
    console.log(name, surname, email, password, contact, confirmPassword);
    navigate('/')
  };

  return (
    <form onSubmit={handleSave} className={styles.registerContainer}>
      <div className={styles.registerCard}>
        <h1 className={styles.tittle}>REGISTER</h1>

        <div className={styles.firstInfo}>
          <div className={styles.userName}>
            <label>UserName:</label>
            <input
              type="userName"
              className={styles.username}
              value={name}
              onChange={(e) => dispatch(updateName(e.target.value))}
            />
          </div>

          <div className={styles.surname}>
            <label>Surname:</label>
            <input
              type="surname"
              className={styles.Surname}
              value={surname}
              onChange={(e) => dispatch(updateSurname(e.target.value))}
            />
          </div>
        </div>

        <div className={styles.secondInfo}>
          <div className={styles.email}>
            <label>Contact:</label>
            <input
              type="contact"
              className={styles.Contact}
              value={contact}
              onChange={(e) => dispatch(updateContact(e.target.value))}
            />
          </div>

          <div className={styles.email}>
            <label>Email Address:</label>
            <input
              type="email Address"
              className={styles.Email}
              value={email}
              onChange={(e) => dispatch(updateEmailAddress(e.target.value))}
            />
          </div>
        </div>

        <div className={styles.thirdInfo}>
          <div className={styles.email}>
            <label>Password:</label>
            <input
              type="password"
              className={styles.Password}
              value={password}
              onChange={(e) => dispatch(updatePassword(e.target.value))}
            />
          </div>

          <div className={styles.email}>
            <label>Confirm Password:</label>
            <input
              type="confirm Password"
              className={styles.ConfirmPass}
              value={confirmPassword}
              onChange={(e) => dispatch(updateConfirmPassword(e.target.value))}
            />
          </div>
        </div>

        <button className={styles.registerBtn} type="submit" onClick={()=> handleSave}>
          Register
        </button>
        <button className={styles.back} onClick={back}>
          Back
        </button>
      </div>
    </form>
  );
};
