import styles from "./LoginForm.module.css";

export const LoginForm = () => {
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

        <button className={styles.loginBtn}>Sign In</button>

        <button className={styles.registerBtn}>Sign up</button>

        <p className={styles.account}>create an Account?</p>
      </div>
    </div>
  );
};
