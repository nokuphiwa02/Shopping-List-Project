import styles from './CategoryCard.module.css';
import type{List}  from '../../redux/features/ShoppingListSlice'

interface CategoryCardProps {
  category: List;
  onView: () => void;
  onDelete: () => void;
}

export const CategoryCard = ({ category, onView, onDelete }: CategoryCardProps) => {
  return (
    <div className={styles.categoryCard}>
     
      <div className={styles.categoryBtn}>
         <h2>{category.category}</h2>

        <button onClick={onView} className={styles.viewBtn}>
          View
        </button>

        <button onClick={onDelete} className={styles.deleteBtn}>
          Delete
        </button>
      </div>
    </div>
  );
};


