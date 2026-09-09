import styles from "./ItemCard.module.css";
import type { Items } from "../../redux/features/ShoppingItemSlices";
import shareIcon from "../../assets/shareIcon.jpg"


interface itemCardProps {
  items: Items;
  onEdit: () => void;
  onDelete: () => void;
}

export const ItemCard = ({ items, onEdit, onDelete }: itemCardProps) => {
  return (
    <div className={styles.itemCard}>
      <div className={styles.itemContent}>
        <h2 className={styles.h2}>{items.name}</h2>
        <h2  className={styles.h2}>{items.quantity}</h2>
        <h2  className={styles.h2}>{items.optionalNote}</h2>

        <div className={styles.btnContent}>
        <button onClick={onEdit} className={styles.editBtn}>
          Edit
        </button>

        <button onClick={onDelete} className={styles.deleteBtn}>
          Delete
        </button>
        <button className={styles.shareBtn}>
          <img src={shareIcon} alt="shareIcon" className={styles.shareicon}/>
        </button>
        </div>
      </div>
    </div>
  );
};
