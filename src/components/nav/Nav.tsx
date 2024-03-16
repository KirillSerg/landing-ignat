import { Link, useLocation } from "react-router-dom";
import { navTarget } from "../../assets/mockData";
import styles from "./Nav.module.scss";

const Nav: React.FC = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/");
  const activeNav = navTarget.find(nav => nav.en === path[1]);

  return (
    <nav>
      {navTarget.map(nav => (
        <Link
          key={nav.en}
          to={`/${nav.en}`}
          className={`${styles.nav_link} ${
            nav.en === activeNav?.en ? styles.active : ""
          }`}
        >
          {nav.ua}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
