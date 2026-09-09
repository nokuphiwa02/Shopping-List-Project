import styles from "./Searchbar.module.css";
import React from "react";

type SearchProps = {
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSort:() =>  void;
};

const SearchBar: React.FC<SearchProps> = ({onChange, value, onSort }) => {
  return (
    <div className={styles.searchContainer}>
    
      
      <div className={styles.searchBar}>
        
        <input
          type="text"
          placeholder="Search..."
          className={styles.searchInput}
          value={value}
          onChange={onChange}
        />
      </div>
      <select className={styles.sortBtn} onClick={onSort}>
        <option value="">Sort by</option>
        <option value="date">Added Date</option>
        <option value="category">Category</option>
      </select>
      
    </div>
  );
};

export default SearchBar;
