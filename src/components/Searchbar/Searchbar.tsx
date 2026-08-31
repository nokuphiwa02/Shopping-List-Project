import styles from "./Searchbar.module.css";
import React from "react";

type SearchProps = {
  onSearch: (text: string) => void;
};

const SearchBar: React.FC<SearchProps> = ({ onSearch }) => {
  return (
    <div className={styles.searchContainer}>
      <button className={styles.filterBtn}>filter</button>
      
      <div className={styles.searchBar}>
        
        <input
          type="text"
          placeholder="Search..."
          className={styles.searchInput}
          onChange={(e) => onSearch(e.target.value)}
        />
        
      </div>
      <button className={styles.sortBtn}>sort by</button>
      
    </div>
  );
};

export default SearchBar;
