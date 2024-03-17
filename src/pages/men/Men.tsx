import Button from "../../components/button/Button";
import styles from "./Men.module.scss";

const Men: React.FC = () => {
  return (
    <div className="container">
      <div className={styles.box}>
        <Button>оформити замовлення</Button>
        <Button invert={true}>купити у кредит</Button>
      </div>
    </div>
  );
};

export default Men;
