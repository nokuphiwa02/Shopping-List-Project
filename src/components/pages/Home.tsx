import styles from './Home.module.css'
import { Navbar } from '../Navbar/Navbar'
import   SearchBar  from '../Searchbar/Searchbar'



export const Home = () => {
  return (
    <div className={styles.HomeContainer}>
     <div>
    <Navbar/>
    <SearchBar onSearch={() => {}} />
     </div>
    </div>
  )
}
