import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "/Logo.svg";
import Nav from "../nav/Nav";
import Search from "../search/Search";
import { BasketIcon, HeartIcon } from "../../assets/icons";

const Header: React.FC = () => {
  return (
    <div className={styles.header_wrap}>
      <div className={styles.subheader}>
        <div className={styles.help}>
          <p>098 900 09 09</p>
          <p>Допомога</p>
        </div>
        <button>Увійти / Зареєструватися</button>
      </div>
      <header>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Nav />
        <div className={styles.control_group}>
          <Search />
          <Link to={"#"}>
            <HeartIcon style="" />
          </Link>
          <Link to={"#"}>
            <BasketIcon style="" />
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
