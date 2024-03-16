import styles from "./NotFound.module.scss";

const NotFound: React.FC = () => {
  return (
    <div className="container">
      <div className={styles.box}>
        <h2>Ooops!</h2>
        <p>This page not found.</p>
      </div>
    </div>
  );
};

export default NotFound;
