import styles from "./Profile.module.css";
import greyprofile from "../../assets/greyprofile.png";
// import { useDispatch } from "react-redux";
// import type { AppDispatch } from "../../../store";
// import { updateProfileData } from "../../redux/features/ProfileSlices";
// import { useNavigate } from "react-router";

export const Profile = () => {
  // const navigate = useNavigate();
  // const register = () => {
  //   navigate("/");
  // };

  // const dispatch = useDispatch<AppDispatch>();

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

          <button className={styles.delBtn}> Delete</button>
          <button className={styles.editBtn}>Edit</button>
        </div>
      </div>
    </form>
  );
};
