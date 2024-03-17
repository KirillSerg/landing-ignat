import { useState } from "react";
import Button from "../../components/button/Button";
import product1 from "../../assets/images/product0.png";
import product2 from "../../assets/images/product1.png";
import product3 from "../../assets/images/product2.png";
// import product4 from "../../assets/images/product2.png";
import styles from "./Product.module.scss";
import { Link } from "react-router-dom";
import { ArrowDown, BasketIcon, HeartIcon } from "../../assets/icons";
import { colors, productInfo, sizes } from "../../assets/mockData";

const images = [product1, product2, product3];

const Product: React.FC = () => {
  const [activeImg, setActiveImg] = useState<string>(images[0]);
  const [activeSize, setActiveSize] = useState<number | undefined>();
  const [activeColor, setActiveColor] = useState<string | undefined>();

  return (
    <div className="container">
      <div className={styles.box}>
        <p className={styles.url}>
          головна - чоловіки - одяг - термобілизна - atlantic
          <span className={styles.url_active}>
            {" "}
            - чоловічий термокостюм atlantic MW0MW32780
          </span>
        </p>
        <section className={styles.product}>
          <div className={styles.img_box}>
            <img src={activeImg} alt="product" />
            <div className={styles.small_img_box}>
              {images.map(img => (
                <img
                  key={crypto.randomUUID()}
                  onClick={() => setActiveImg(img)}
                  src={img}
                  alt="product"
                />
              ))}
            </div>
          </div>

          <div className={styles.data}>
            <div className={styles.data_box}>
              <h3 className={styles.name}>чоловічий термокостюм atlantic</h3>
              <p className={styles.category}>термокостюм</p>
              <span className={styles.price}>{`${"3700"} грн`}</span>

              <div className={styles.sizes}>
                <p>оберіть розмір:</p>
                <ul className={styles.size_box}>
                  {sizes.map((size, i) => (
                    <li
                      key={i}
                      onClick={() => setActiveSize(i)}
                      className={`${styles.size} ${
                        i === activeSize ? styles.active : ""
                      }`}
                    >
                      {size}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.colors}>
                <p>оберіть колір:</p>
                <ul className={styles.color_box}>
                  {colors.map(color => (
                    <li key={color} onClick={() => setActiveColor(color)}>
                      <div
                        style={{ backgroundColor: color, color: color }}
                        className={styles.color}
                      ></div>
                      <ArrowDown
                        style={`${styles.arrow} ${
                          color === activeColor ? styles.active : ""
                        }`}
                      />
                    </li>
                  ))}
                </ul>
              </div>

              <h3 className={styles.info_title}>інформація про товар</h3>
              <div className={styles.info_box}>
                {productInfo.map(inf => (
                  <div key={crypto.randomUUID()} className={styles.info_group}>
                    <h3 className={styles.info_group_title}>{inf.title}</h3>
                    <p className={styles.info_group_text}>{inf.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.btn_group}>
              <Button>оформити замовлення</Button>
              <div className={styles.btn_group_group}>
                <Button invert={true}>купити у кредит</Button>
                <Link to={"#"}>
                  <HeartIcon style="" />
                </Link>
                <Link to={"#"}>
                  <BasketIcon style="" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product;
