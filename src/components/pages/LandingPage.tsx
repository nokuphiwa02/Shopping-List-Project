import styles from "./LandingPage.module.css";
import { useNavigate } from "react-router";
import basket from "../../assets/basket.jpg";

function LandingPage() {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };

  return (
    <div className={styles.landingPageContainer}>
      <div className={styles.landingPage}>
        <h2>Shopping List</h2>
        <img src={basket} alt="basket" className={styles.bskt}/>
        <button className={styles.lgnBtn}  onClick={navigateToLogin}>Login</button>
      </div>
    </div>
  );
}

export default LandingPage;
