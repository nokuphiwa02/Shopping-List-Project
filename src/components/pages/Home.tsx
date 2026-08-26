import styles from "./Home.module.css";
import { Navbar } from "../Navbar/Navbar";
import SearchBar from "../Searchbar/Searchbar";
import { ShoppingForm } from "../shoppingForm/shoppingForm";
import { CategoryCard } from "../CategoryCard/CategoryCard";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../store";
import { ShoppingItems } from "../ShoppingItems/ShoppingItems";
import { ItemCard } from "../ItemCard/ItemCard";
import { getItemsThunk } from "../../redux/features/ShoppingItemSlices";
import { useEffect } from "react";
import { getListThunk } from "../../redux/features/ShoppingListSlice";

export const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getItemsThunk());
  }, []);
  useEffect(() => {
    dispatch(getListThunk());
  }, []);
  const lists = useSelector((state: RootState) => state.addCategory);
  const items = useSelector((state: RootState) => state.addItem.items);

  return (
    <div className={styles.HomeContainer}>
      <div>
        <Navbar />
        <SearchBar onSearch={() => {}} />
        <ShoppingForm />
        {lists.lists.map((item) => (
          <CategoryCard
            key={item.id}
            category={item}
            onView={() => ({})}
            onDelete={() => ({})}
          />
        ))}
        <ShoppingItems />
        {/* <div> */}
        {items.map((item) => (
          <ItemCard
            key={item.id}
            items={item}
            onEdit={() => ({})}
            onDelete={() => ({})}
          />
        ))}
        {/* </div> */}
      </div>
    </div>
  );
};
