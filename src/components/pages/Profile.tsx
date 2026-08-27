import styles from "./Profile.module.css";
import greyprofile from "../../assets/greyprofile.png";
import { useNavigate } from "react-router";

export const Profile = () => {
 const navigate = useNavigate();
  const back = () => {
    navigate("/homepage");
  };
  

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSave} className={styles.profileContainer}>
      <div className={styles.profileContent}>
         
        <h1>Profile</h1>
        <img
          src={greyprofile}
          alt="greyprofile"
          className={styles.profileIcon}
        />

        <div className={styles.first}>
          <div className={styles.Name}>
            <input
              type="userName"
              placeholder="Name..."
              className={styles.Name}
            />
          </div>

          <div className={styles.surname}>
            <input
              type="surname"
              placeholder="surname..."
              className={styles.Surname}
            />
          </div>
        </div>

        <div className={styles.second}>
          <div className={styles.email}>
            <input
              type="contact"
              placeholder="contact..."
              className={styles.Contact}
            />
          </div>

          <div className={styles.email}>
            <input
              type="email Address"
              placeholder="email address..."
              className={styles.Email}
            />
          </div>
        </div>

        <div className={styles.third}>
          <div className={styles.email}>
            <input
              type="password"
              placeholder="password..."
              className={styles.Password}
            />
          </div>
            <div className={styles.btns}>
          <button className={styles.delBtn}>LogOut</button>
          <button className={styles.editBtn}>Edit</button>
          
            <button className={styles.backBtn} onClick={back}>Back</button>
          </div>
        </div>
      </div>
    </form>
  );
};
