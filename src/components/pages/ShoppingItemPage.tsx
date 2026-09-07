import { ShoppingItems } from "../ShoppingItems/ShoppingItems";
import { ItemCard } from "../ItemCard/ItemCard";
import styles from "./ShoppingItems.module.css";
import { useEffect } from "react";
import { getItemsThunk } from "../../redux/features/ShoppingItemSlices";
import type { AppDispatch, RootState } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemThunk } from "../../redux/features/ShoppingItemSlices";

export const ShoppingItemsPage = () => {
  const useAppDispatch = () => useDispatch<AppDispatch>();

  const dispatch = useAppDispatch();

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

  const items = useSelector((state: RootState) => state.addItem.items);

  return (
    <div className={styles.itemPgsContainer}>
      <ShoppingItems />

      {items.map((item) => (
        <ItemCard
          key={item.id}
          items={item}
          onEdit={() => ({})}
          onDelete={() => {
            dispatch(deleteItemThunk(item.id!));
          }}
        />
      ))}
    </div>
  );
};
