import styles from "./Searchbar.module.css";
import React from "react";

type SearchProps = {
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar: React.FC<SearchProps> = ({onChange, value }) => {
  return (
    <div className={styles.searchContainer}>
      <button className={styles.filterBtn}>filter</button>
      
      <div className={styles.searchBar}>
        
        <input
          type="text"
          placeholder="Search..."
          className={styles.searchInput}
          value={value}
          onChange={onChange}
        />
        
      </div>
      <button className={styles.sortBtn}>sort by</button>
      
    </div>
  );
};

export default SearchBar;
