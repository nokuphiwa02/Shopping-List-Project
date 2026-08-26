import React from 'react'
import styles from './ShoppingItems.module.css'

export const ShoppingItems = () => {
  return (
    <div className={styles.itemContainer}>
        <div className={styles.itemContent}>
        <h1>Shopping Items</h1>

        <input className={styles.name}
        type="text"
        placeholder='name'/>

        <input  className={styles.quantity}
         type="text"
         placeholder='quantity'/>

       <input  className={styles.optional}
       type="text"
       placeholder='optional note'/>

       </div>
    </div>
  )
}
