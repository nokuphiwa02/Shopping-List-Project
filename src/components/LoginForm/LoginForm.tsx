import styles from "./LoginForm.module.css";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  updateEmailAddress,
  updatePassword,
  LoginThunk,
} from "../../redux/features/LoginSlices";
import type { RootState } from "../../../store";
import type { AppDispatch } from "../../../store";

export const LoginForm = () => {
  const navigate = useNavigate();
  const signUp = () => {
    navigate("register");
  };

  const Login = useNavigate();
  const signIn = () => {
    Login("/homepage");
  };

  const dispatch = useDispatch<AppDispatch>();

  const { email, password } = useSelector((state: RootState) => state.signIn);
  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await dispatch(LoginThunk({ email, password }));
    if (LoginThunk.fulfilled.match(result)) {
      alert("Login successful");
      navigate("/homepage");
    }
   if (LoginThunk.rejected.match(result)) {
  
  const payload = result.payload as { status?: number; message?: string } | undefined;
  
  const errorMessage = payload?.message || result.error?.message;

  if (errorMessage === "user not found" || payload?.status === 404) {
    alert("User not found. Please check your email or sign up.");
    navigate("/registerPage");
  } else {
    alert("Login failed. Please try again.");
  }
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
          />
        </div>

        <div className={styles.password}>
          <label>Password:</label>
          <input
            type="password"
            className={styles.passwordInput}
            onChange={(e) => dispatch(updatePassword(e.target.value))}
          />
        </div>

        <button className={styles.loginBtn} onClick={signIn}>
          Sign In
        </button>

        <button className={styles.registerBtn} onClick={signUp}>
          Sign up
        </button>

        <p className={styles.account}>create an Account?</p>
      </div>
    </form>
  );
};
