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

      <div className={styles.itemContent}>
        <p><strong>Name:</strong> {items.name}</p>
        <p><strong>Quantity:</strong> {items.quantity}</p>
        <p><strong>Shop:</strong> {items.optionalNote || "Not specified"}</p>
      <div className={styles.btnContent}>

        <button onClick={onEdit} className={styles.editBtn}>
          Edit
        </button>

        <button onClick={onDelete} className={styles.deleteBtn}>
          Delete
        </button>
        </div>
      </div>
    </div>
  );
};
