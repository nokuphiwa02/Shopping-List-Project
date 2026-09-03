import React, { useEffect } from "react";
import styles from "./ShoppingItems.module.css";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store";
import { useNavigate } from "react-router";
import { ItemCard } from "../ItemCard/ItemCard";
import {
  addName,
  addQuantity,
  addOptionalnote,
  ItemsThunk,
  getItemsThunk,
  deleteItemThunk,
  setEditingItem,
  updateItemThunk,
} from "../../redux/features/ShoppingItemSlices";
import type { AppDispatch } from "../../../store";

export const ShoppingItems = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const {name,quantity,optionalNote,items,editingItemId,isLoading,error,}
   = useSelector((state: RootState) => state.addItem);

  let user = useSelector((state: RootState) => state.signIn?.currentUser);
  if (!user) {
    const savedUser = localStorage.getItem("user");
    if (savedUser) user = JSON.parse(savedUser);
  }

  const userId = user?.id ? String(user.id) : "";

  useEffect(() => {
    if (userId.trim() !== "") {
      dispatch(getItemsThunk(userId));
    }
  }, [dispatch, userId]);

  const back = () => {
    navigate("/homepage");
  };

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim()) return alert("Item name is required!");

    if (editingItemId) {
      dispatch(
        updateItemThunk({
          id: editingItemId,
          userId,
          name,
          quantity,
          optionalNote,
        }),
      );
    } else {
      dispatch(ItemsThunk({ userId, name, quantity, optionalNote }));
    }
  };

  return (
    <div className={styles.itemWrapper}>
      
      <form onSubmit={handleSave} className={styles.itemContainer}>
        
        <div className={styles.itemContent}>
          <h1>Shopping Items</h1>
          {error && <p className={styles.errorField}>{error}</p>}
          
          <div>
            <label>Item Name:</label>
            
            <input
              className={styles.name}
              type="text"
              placeholder="Item name..."
              value={name}
              onChange={(e) => dispatch(addName(e.target.value))}
              required
            />
            
          </div>
          
          <div>
            <label>Quantity:</label>
            
            <input
              className={styles.quantity}
              type="number"
              placeholder="0"
              value={quantity === 0 ? "" : quantity}
              onChange={(e) => dispatch(addQuantity(Number(e.target.value)))}
              min="1"
              required
            />
            
          </div>
          
          <div>
            <label>Optional Note:</label>
            
            <input
              className={styles.optional}
              type="text"
              placeholder="Optional note..."
              value={optionalNote}
              onChange={(e) => dispatch(addOptionalnote(e.target.value))}
            />
            
          </div>
          
          <div className={styles.buttons}>
            
            <button
              className={styles.addBtn}
              type="submit"
              disabled={isLoading}
            >
              {editingItemId ? "Update" : "Add Item"}
              
            </button>
            
            <button type="button" className={styles.back} onClick={back}>
              Back 
            </button>
            
          </div>
          
        </div>
        
      </form>
      
      <div className={styles.itemsDisplayList}>
        
        {items.length > 0 && (
          <div>
            
            {items.map((item) => (
              <ItemCard
                key={item.id}
                items={item}
                onEdit={() => dispatch(setEditingItem(item))}
                onDelete={() => {
                  if (item.id) dispatch(deleteItemThunk(item.id));
                }}
              />
            ))}
            
          </div>
        )}
        
      </div>
      
    </div>
  );
};
