import ProductItem from "./productitem";
import styles from "./productlist.module.css";

const ProductList = ({ products, currFilter }) => {
  const visibleFilter =
    currFilter === "all"
      ? products
      : products.filter((item) => item.category === currFilter);
  return (
    <div className={styles.productListGrid}>
      {visibleFilter.map((item) => (
        <ProductItem product={item} key={item.id} />
      ))}
    </div>
  );
};
export default ProductList;
