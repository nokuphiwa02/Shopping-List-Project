import styles from "./LoginForm.module.css";

export const LoginForm = () => {
  return (
    <div className={styles.loginContainer}>
      <div className="login-card">
        <h1>LOGIN</h1>

        <div className="form-group">
          <label>Email Address:</label>
          <input type="email" />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input type="password" />
        </div>

        <button className="login-button">Sign In</button>

        <button className="register-button">Sign up</button>

        <p className="account-text">create an Account?</p>
      </div>
    </div>
  );
};
