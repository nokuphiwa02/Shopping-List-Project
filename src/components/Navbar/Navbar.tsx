import styles from "./Navbar.module.css";
import home from "../../assets/home icon.png";
import profile from "../../assets/greyprofile.png";
import { useNavigate } from "react-router"

export const Navbar = () => {

 const navigate = useNavigate();
  const navigateToProfile = () => {
  navigate("/profilepage");
  };


  return (
    <div className={styles.container}>
      <div className={styles.navbarContent}>
        <img src={home} alt="home" className={styles.homeImage} />
        <h1 className={styles.tittle}>WELCOME TO SHOPPING LIST APP </h1>
        <img onClick={navigateToProfile}    
        src={profile} alt="profile" 
        className={styles.greyProfile} />
      </div>
    </div>
  );
};
