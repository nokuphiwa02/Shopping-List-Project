import styles from "./ItemCard.module.css";
import type { Items } from "../../redux/features/ShoppingItemSlices";

interface itemCardProps {
  items: Items;
  onEdit: () => void;
  onDelete: () => void;
}

export const ItemCard = ({ items, onEdit, onDelete }: itemCardProps) => {
  return (
    <div className={styles.itemCard}>
      <div className={styles.itemBtn}>
        <h2>{items.name}</h2>
        <h2>{items.quantity}</h2>
        <h2>{items.optionalNote}</h2>

        <button onClick={onEdit} className={styles.editBtn}>
          Edit
        </button>

        <button onClick={onDelete} className={styles.deleteBtn}>
          Delete
        </button>
      </div>
    </div>
  );
};
