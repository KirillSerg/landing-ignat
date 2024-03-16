import { SearchIcon } from "../../assets/icons";
import styles from "./Search.module.scss";

const Search = () => {
  return (
    <div className={styles.search_wrap}>
      <input type="text" />
      <SearchIcon style={styles.search_icon} />
    </div>
  );
};

export default Search;
