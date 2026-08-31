import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store";
import styles from "./shopping.module.css";
import {
  addCategory,
  createList,
  updateList,
  // clearEditingMode,
} from "../../redux/features/ShoppingListSlice";
import type { AppDispatch } from "../../../store";

export const ShoppingForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { category, editingListId, isLoading, error } = useSelector(
    (state: RootState) => state.addCategory,
  );

  let user = useSelector((state: RootState) => state.signIn?.currentUser);
  if (!user) {
    const savedUser = localStorage.getItem("user");
    if (savedUser) user = JSON.parse(savedUser);
  }

  const userId = user?.id ? String(user.id) : " ";

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!category.trim()) return alert("Please type a category name first!");

    if (editingListId) {
      dispatch(
        updateList({
          id: editingListId,
          userId,
          category,
        }),
      );
    } else {
      dispatch(
        createList({
          userId,
          category,
        }),
      );
    }
  };

  return (
    <form onSubmit={handleSave} className={styles.shopingContainer}>
      
      <div className={styles.shopingContent}>
        <h2>Shopping List</h2>
        {error && <p>{error}</p>}
        
        <input
          className={styles.input}
          type="text"
          value={category}
          onChange={(e) => dispatch(addCategory(e.target.value))}
          placeholder="Enter category name..."
          required
        />
        
        <div className={styles.btns}>
          
          <button className={styles.addBtn} type="submit" disabled={isLoading}>
            {editingListId ? " Update List" : " Add Button"}
            
          </button>
          
        </div>
        
      </div>
      
    </form>
  );
};

export default ShoppingForm;
