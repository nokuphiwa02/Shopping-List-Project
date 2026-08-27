import React from 'react'
import styles from './ShoppingItems.module.css'
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../store";
import { useNavigate } from 'react-router';
import { addName, addQuantity, addOptionalnote ,ItemsThunk } from '../../redux/features/ShoppingItemSlices'

export const ShoppingItems = () => {
 const navigate = useNavigate();
  const back = () => {
    navigate("/homepage");
  };

const dispatch = useDispatch<AppDispatch>();
const { name, quantity,optionalNote } =useSelector((state: RootState) => state.addItem); 

const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(ItemsThunk({ name, quantity,optionalNote }));
};


  return (
    <form onSubmit={handleSave} className={styles.itemContainer}>
    <div className={styles.itemContainer}>
        <div className={styles.itemContent}>
          
        <h1>Shopping Items</h1>

        <input className={styles.name}
        type="text"
        placeholder='item name'
        value={name}
        onChange={(e) => dispatch(addName(e.target.value))}/>

        <input  className={styles.quantity}
         type="number"
         placeholder='0'
         value={quantity}
         onChange={(e) => dispatch(addQuantity(Number(e.target.value)))}/>

       <input  className={styles.optional}
       type="text"
       placeholder='optional note'
       value={optionalNote}
       onChange={(e) => dispatch(addOptionalnote(e.target.value))}/>

        <div className={styles.buttons}>
        <button className={styles.addBtn} onClick={() => handleSave}>
            +Add Button
        </button>
         <button className={styles.back} onClick={back}>
          Back
        </button>
        </div>
    </div>
    </div>
    </form>
  )
}
