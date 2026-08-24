// import { updateCategory } from '../../redux/features/ShoppingListSlice'
import styles from './shopping.module.css'


export const shoppingForm = () => {
  return (
    <form className={styles.shoopingContainer}>
     <div className={styles.shoopingContent}>
        <h2> Shopping List</h2>
       
       <div className={styles.firtList}>
        <input type="text"
         placeholder="submit"/>
        <button className={styles.viewBtn}> View</button>
        <button className={styles.delBtn}>Delete</button>

        </div>

     

     </div>
      </form>
  )
}
