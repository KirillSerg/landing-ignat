// import { Link } from "react-router-dom";
// import Nav from "../nav/Nav";
import Nav from "../nav/Nav";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer_wrap}>
      <footer>
        <div className={styles.group}>
          <h3>Контакт - центр</h3>
          <div className={styles.subgroup}>
            <a>098 900 09 09</a>
            <a>Пн - Пт 09:00 - 21:00</a>
            <a>Пн - Пт 09:00 - 21:00</a>
          </div>
        </div>
        <div className={styles.group}>
          <h3>Покупцям</h3>
          <div className={styles.subgroup}>
            <a>Оплата і доставка</a>
            <a>Повернення</a>
            <a>Питання та відповіді</a>
          </div>
        </div>
        <div className={styles.group}>
          <h3>Особистий кабінет</h3>
          <div className={styles.subgroup}>
            <a>Мої дані</a>
            <a>Історія замовлень</a>
            <a>Улюблені</a>
            <a>Розсилки</a>
          </div>
        </div>
        <div className={styles.group}>
          <h3>Про компанію</h3>
          <div className={styles.subgroup}>
            <a>Про нас</a>
            <a>Новини</a>
            <a>Стати партнером</a>
            <a>Угода користувача</a>
          </div>
        </div>
      </footer>
      <div className={styles.subfooter}>
        <Nav />
        <p>© 2022 — 2023 IGNAT. Усі права захищені.</p>
      </div>
    </div>
  );
};

export default Footer;
