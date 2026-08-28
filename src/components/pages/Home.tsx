import styles from "./Home.module.css";
import { Navbar } from "../Navbar/Navbar";
import SearchBar from "../Searchbar/Searchbar";
import { ShoppingForm } from "../shoppingForm/shoppingForm";
import { CategoryCard } from "../CategoryCard/CategoryCard";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../store";
import { useEffect } from "react";
import { getList } from "../../redux/features/ShoppingListSlice";
import { deleteList } from "../../redux/features/ShoppingListSlice";
import { updateList } from "../../redux/features/ShoppingListSlice"

export const Home = () => {
  const dispatch = useDispatch<AppDispatch>();

  const user = useSelector((state: RootState) => state.signIn.currentUser);

  useEffect(() => {
    if (user?.id) {
      dispatch(getList(user.id));
    }
  }, []);

  const lists = useSelector((state: RootState) => state.addCategory.lists);

  console.log(lists);
  return (
    <div className={styles.HomeContainer}>
      <div>
        <Navbar />
        <SearchBar onSearch={() => {}} />
        <ShoppingForm />
        {lists.map((item) => (
          <CategoryCard
            key={item.id}
            category={item}
            onView={() => ({})}
            onDelete={() => {dispatch(deleteList(item.id!));
            }}
            onUpdate={() => {dispatch(updateList(item))

            }}
          />
        ))}
      </div>
    </div>
  );
};
