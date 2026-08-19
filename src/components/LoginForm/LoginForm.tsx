import styles from "./LoginForm.module.css";
import { useNavigate } from "react-router";

export const LoginForm = () => {
  const navigate = useNavigate();
  const signUp = () => {
    navigate("register");
  };

  const Login = useNavigate();
  const signIn = () => {
  Login("/homepage");
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <h1 className={styles.tittle}>LOGIN</h1>

        <div className={styles.email}>
          <label>Email Address:</label>
          <input type="email" className={styles.emailInput} />
        </div>

        <div className={styles.password}>
          <label>Password:</label>
          <input type="password" className={styles.passwordInput} />
        </div>

        <button className={styles.loginBtn} onClick={signIn}>
          Sign In
        </button>

        <button className={styles.registerBtn} onClick={signUp}>
          Sign up
        </button>

        <p className={styles.account}>create an Account?</p>
      </div>
    </div>
  );
};
