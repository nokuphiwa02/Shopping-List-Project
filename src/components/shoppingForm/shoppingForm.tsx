import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../store";
import styles from "./shopping.module.css";
import { addCategory, ListThunk } from "../../redux/features/ShoppingListSlice";

export const ShoppingForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { category } = useSelector((state: RootState) => state.addCategory);

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(ListThunk({ category }));
  };

  return (
    <form onSubmit={handleSave} className={styles.shopingContainer}>
      <div className={styles.shopingContent}>
        <h2> Shopping List</h2>

        <input
          className={styles.input}
          type="text"
          value={category}
          onChange={(e) => dispatch(addCategory(e.target.value))}
          placeholder="submit"/>
          
        <div className={styles.btns}>
          <button className={styles.editBtn}>Edit</button>
          <button className={styles.addBtn} onClick={() => handleSave}>
            +Add Button
          </button>
        </div>
      </div>
    </form>
  );
};

export default ShoppingForm;
