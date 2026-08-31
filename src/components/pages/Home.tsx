import { useEffect} from 'react';
import styles from './Home.module.css';
import { Navbar } from '../Navbar/Navbar';
import SearchBar from '../Searchbar/Searchbar';
import { ShoppingForm } from '../shoppingForm/shoppingForm';
import { CategoryCard } from '../CategoryCard/CategoryCard';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../store';
import { getList, deleteList, setEditingList } from '../../redux/features/ShoppingListSlice';
import type { AppDispatch } from '../../../store';
import { useLocation, useNavigate } from 'react-router'; 

export const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const navigate = useNavigate(); 

 const queryParams = new URLSearchParams(location.search);
 const searchInput = queryParams.get('search') || '';

const handleSearhChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    
    const params = new URLSearchParams(location.search);
    if (val) {
      params.set('search', val);
    } else {
      params.delete('search');
    }
    navigate({ search: params.toString() }, { replace: true });
  };

  let user = useSelector((state: RootState) => state.signIn.currentUser);
  if (!user) {
    const savedUser = localStorage.getItem('user');
    if (savedUser) user = JSON.parse(savedUser);
  }

  const userId = user?.id ? String(user.id) : '';

  useEffect(() => {
    if (userId.trim() !== '') {
      dispatch(getList(userId));
    }
  }, [dispatch, userId]);

  const lists = useSelector((state: RootState) => state.addCategory.lists);

  return (
    <div className={styles.HomeContainer}>
      <div>
        <Navbar />
        <SearchBar value={searchInput} onChange={handleSearhChange} />
        <ShoppingForm />
        <div className={styles.cardsContainer}>
          {lists.length === 0 ? (
            <p>No shopping lists found. Create one above!</p>
          ) : (
            lists.map((item) => (
              <CategoryCard 
                key={item.id} 
                category={item} 
                onView={() => ({})} 
                onDelete={() => { 
                  if (item.id) dispatch(deleteList(item.id)); 
                }} 
                onUpdate={() => { 
                  dispatch(setEditingList(item)); 
                }} 
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
