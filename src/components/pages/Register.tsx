import React, { useState } from "react";
import styles from "./Register.module.css";
import { useNavigate } from "react-router";
// import type { User } from "../../redux/features/RegisterSlice";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../store";
import {
  updateName,
  updateSurname,
  updateEmailAddress,
  updatePassword,
  updateContact,
  updateConfirmPassword,
  RegisterThunk,
} from "../../redux/features/RegisterSlice";

export const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");
  const back = () => {
    navigate("/");
  };

  const dispatch = useDispatch<AppDispatch>();

  const { name, surname, email, password, contact, confirmPassword } =
    useSelector((state: RootState) => state.signUp);

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (
      !name.trim() ||
      !surname.trim() ||
      !email.trim() ||
      !contact.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      setError("All fields are required.");
      return;
    }

    const result = await dispatch(
      RegisterThunk({
        name,
        surname,
        email,
        password,
        contact,
        confirmPassword,
      }),
    );

    if (RegisterThunk.fulfilled.match(result)) {
      alert("Registration successful");
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleSave} className={styles.registerContainer}>
      <div className={styles.registerCard}>
        <h1 className={styles.tittle}>REGISTER</h1>

        {error && <p role="alert">{error}</p>}

        <div className={styles.firstInfo}>
          <div className={styles.userName}>
            <label>Name:</label>
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

        <button
          className={styles.registerBtn}
          type="submit"
          onClick={() => handleSave}
        >
          Register
        </button>
        <button className={styles.back} onClick={back}>
          Back
        </button>
      </div>
    </form>
  );
};
