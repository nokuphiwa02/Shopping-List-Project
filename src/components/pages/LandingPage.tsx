import styles from "./LandingPage.module.css";
import { useNavigate } from "react-router";
import shoppingImage from "../../assets/shopping image.jpg";

function LandingPage() {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };

  return (
    <div className={styles.landingPageContainer}>
      
      <div className={styles.landingPage}>
        
        <img
          src={shoppingImage}
          alt="Shopping List"
          className={styles.landingImage}
        />
        <h2>Welcome to Shopping List</h2>
        
        <p>Organize your shopping experience with our easy-to-use app.</p>
        <button onClick={navigateToLogin}>Start Shopping</button>
       
      </div>
     
    </div>
  );
}

export default LandingPage;
