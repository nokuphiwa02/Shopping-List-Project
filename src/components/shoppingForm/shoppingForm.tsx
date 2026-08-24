import styles from './shopping.module.css'
import baby from '../../assets/baby.jpg'
import home from '../../assets/home.jpg'
import grocery from '../../assets/grocery.png'


export const shoppingForm = () => {
  return (
    <form className={styles.shoopingContainer}>
     <div className={styles.shoopingContent}>
        <h2> Shopping List</h2>
       
       <div className={styles.firtList}>
        <img src={grocery} alt="grocery" />
        <input type="text"
        placeholder="submit"/>
        <button className={styles.viewBtn}> View</button>
        <button className={styles.delBtn}>Delete</button>

        </div>

       <div className={styles.secondList}>
        <img src={baby} alt="baby" />
        <input type="text"
        placeholder="submit"/>
        <button className={styles.viewBtn}> View</button>
        <button className={styles.delBtn}>Delete</button>
        </div>


       <div className={styles.ThirdList}>
        <img src={home} alt="home" />
        <input type="text"
        placeholder="submit"/>
         <button className={styles.viewBtn}> View</button>
         <button className={styles.delBtn}>Delete</button>
        </div>

     

     </div>
      </form>
  )
}
