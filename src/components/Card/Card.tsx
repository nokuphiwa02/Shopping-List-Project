import styles from "./Card.module.css";

interface CategoryCardProps {
  category: string;
  onView: () => void;
  onDelete: () => void;
}

const CategoryCard = ({ category, onView, onDelete }: CategoryCardProps) => {
  return (
    <div className={styles.categoryCard}>
      <h2>{category}</h2>

      <div className={styles.categoryBtn}>
        <button onClick={onView} className="view-btn">
          View
        </button>

        <button onClick={onDelete} className={styles.deleteBtn}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
