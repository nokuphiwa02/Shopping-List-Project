import styles from "./Home.module.css";
import { Navbar } from "../Navbar/Navbar";
import SearchBar from "../Searchbar/Searchbar";
import { ShoppingForm } from "../shoppingForm/shoppingForm";
import { CategoryCard } from "../CategoryCard/CategoryCard";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store";
import { ShoppingItems } from "../ShoppingItems/ShoppingItems";

export const Home = () => {
  const lists = useSelector((state: RootState) => state.addCategory);
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
      </div>
    </div>
  );
};
