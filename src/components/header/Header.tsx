import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "/Logo.svg";
import Nav from "../nav/Nav";

const Header: React.FC = () => {
  return (
    <div className={styles.header_wrap}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <Nav />
    </div>
  );
};

export default Header;
