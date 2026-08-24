import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../store";
import styles from "./shopping.module.css";
import { updateCategory } from "../../redux/features/ShoppingListSlice";

export const ShoppingForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { category } = useSelector((state: RootState) => state.addCategory);

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateCategory(category));
  };


  return (
    <form onSubmit={handleSave} className={styles.shopingContainer}>
      <div className={styles.shopingContent}>
        <h2> Shopping List</h2>

        <button className={styles.addBtn}>+Add Button</button>
          <input className={styles.input}
            type="text"
            value={category}
            onChange={(e) => dispatch(updateCategory(e.target.value))}
            placeholder="submit"
          />
          <button className={styles.editBtn}>Edit</button>
          {/* <button className={styles.delBtn}>Delete</button> */}
         
      </div>
    </form>
  );
};

export default ShoppingForm;