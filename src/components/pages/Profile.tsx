import React from 'react'
import styles from './Profile.module.css'

export const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileContent}>
        <h1>Profile</h1> 

     <div className={styles.Name}>
            <input type="userName" 
            placeholder="Name"
            className={styles.username} />
          </div>

          <div className={styles.surname}>
            <input type="surname" 
            placeholder="surname"
            className={styles.Surname} />
          </div>
       
          <div className={styles.email}>
            <input type="contact" 
            placeholder="contact"
            className={styles.Contact} />
          </div>

          <div className={styles.email}>
            <input type="email Address" 
            placeholder="email address"
            className={styles.Email} />
          </div>
       

          <div className={styles.email}>
            <input type="password" 
            placeholder="password"     
            className={styles.Password} />
          </div>

      
       </div>
    </div>
  )
}
