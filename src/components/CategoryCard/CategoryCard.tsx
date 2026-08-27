import styles from './CategoryCard.module.css';
import type{List}  from '../../redux/features/ShoppingListSlice'
import { useNavigate } from 'react-router';

interface CategoryCardProps {
  category: List;
  onView: () => void;
  onDelete: () => void;
  onUpdate: () => void;
}

export const CategoryCard = ({ category, onDelete }: CategoryCardProps) => {
 const navigate = useNavigate();
 const view = () => {
  navigate("/ShoppingItemPage")
 }

  return (
    <div className={styles.categoryCard}>
     
      <div className={styles.categoryBtn}>
         <h2>{category.category}</h2>

        <button onClick={view} className={styles.viewBtn}>
          View
        </button>

        <button onClick={onDelete} className={styles.deleteBtn}>
          Delete
        </button>
         <button onClick={onDelete} className={styles.deleteBtn}>
         Update
        </button>
      </div>
    </div>
  );
};


