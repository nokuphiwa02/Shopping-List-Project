import styles from "./LoginForm.module.css";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { LoginThunk } from "../../redux/features/LoginSlices";
import type { RootState } from "../../../store";
import type { AppDispatch } from "../../../store";
import {
  updateEmailAddress,
  updatePassword,
} from "../../redux/features/RegisterSlice";

export const LoginForm = () => {
  const navigate = useNavigate();
  const signUp = () => {
    navigate("/register");
  };

  // const Login = useNavigate();
  // const signIn = () => {
  //   Login("/homepage");
  // };

  const dispatch = useDispatch<AppDispatch>();

  const password = useSelector((state: RootState) => state.signUp.password);
  const email = useSelector((state: RootState) => state.signUp.email);

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email && password) {
      // TypeScript now knows both variables are safely defined as strings
      const result = await dispatch(LoginThunk({ email, password }));

      if (LoginThunk.fulfilled.match(result)) {
        alert("Login successful");
        navigate("/homepage");
      }
    } else {
      alert("Please enter both email and password.");
    }
  };

  return (
    <form onSubmit={handleSave} className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <h1 className={styles.tittle}>LOGIN</h1>

        <div className={styles.email}>
          <label>Email Address:</label>
          <input
            type="email"
            className={styles.emailInput}
            onChange={(e) => dispatch(updateEmailAddress(e.target.value))}
            value={email}
          />
        </div>

        <div className={styles.password}>
          <label>Password:</label>
          <input
            type="password"
            className={styles.passwordInput}
            onChange={(e) => dispatch(updatePassword(e.target.value))}
            value={password}
          />
        </div>

        <button className={styles.loginBtn} type="submit">
          Sign In
        </button>

        <button className={styles.registerBtn} type="button" onClick={signUp}>
          Sign up
        </button>

        <p className={styles.account}>create an Account?</p>
      </div>
    </form>
  );
};
