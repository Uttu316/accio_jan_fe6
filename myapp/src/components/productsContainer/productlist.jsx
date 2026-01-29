import ProductItem from "./productitem";
import styles from "./productlist.module.css";

const ProductList = ({ products }) => {
  return (
    <div className={styles.productListGrid}>
      {products.map((item) => (
        <ProductItem product={item} key={item.id} />
      ))}
    </div>
  );
};
export default ProductList;
