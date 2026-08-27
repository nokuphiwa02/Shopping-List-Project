import { ShoppingItems } from '../ShoppingItems/ShoppingItems';
import { ItemCard } from '../ItemCard/ItemCard';
import styles from './ShoppingItemPage.module.css';

import { useEffect } from 'react';
import { getItemsThunk } from '../../redux/features/ShoppingItemSlices';
import type { AppDispatch, RootState } from '../../../store';
import { useDispatch, useSelector } from 'react-redux';

export const ShoppingItemsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  
  useEffect(() => {
    dispatch(getItemsThunk());
  }, [dispatch]);

  const items = useSelector((state: RootState) => state.addItem.items);

  return (
    <div className={styles.itemPgsContainer}>
      <ShoppingItems />
      {items.map((item) => (
        <ItemCard 
          key={item.id} 
          items={item} 
          onEdit={() => ({})} 
          onDelete={() => ({})} 
        />
      ))}
    </div>
  );
};
