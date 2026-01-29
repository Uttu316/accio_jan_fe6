import { FaStar, FaShoppingCart } from "react-icons/fa";
import styles from "./productitem.module.css";

const ProductItem = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.title} className={styles.productImage} />
        <span className={styles.categoryTag}>{product.category}</span>
      </div>
      <div className={styles.productInfo}>
        <h2 className={styles.productTitle}>{product.title}</h2>
        <p className={styles.productDescription}>{product.description}</p>
        <div className={styles.ratingPriceContainer}>
          <div className={styles.rating}>
            <span className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={i < Math.round(product.rating.rate) ? styles.starFilled : styles.starEmpty}
                />
              ))}
            </span>
            <span className={styles.count}>({product.rating.count} reviews)</span>
          </div>
          <div className={styles.price}>${product.price}</div>
        </div>
        <button className={styles.addToCartBtn}>
          <FaShoppingCart />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
