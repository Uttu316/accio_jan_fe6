import { useEffect, useState } from "react";
import { API } from "../../services";
import ProductFilters from "./productFilters";
import ProductList from "./productlist";
import styles from "./productsContainer.module.css";

const ProductsContainer = () => {
  const [status, setStatus] = useState("loading"); // api status
  const [products, setProducts] = useState([]); // store products

  const [currFilter, setCurrFilter] = useState("all");

  const getProducts = async () => {
    try {
      const data = await API({
        endpoint: "/products",
      });
      setProducts(data);
      setStatus("success");
    } catch (e) {
      console.log(e);
      setStatus("error");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const isLoading = status === "loading";
  const isError = status === "error";
  const isProducts = status === "success" && products.length !== 0;
  const noProducts = status === "success" && products.length === 0;

  return (
    <div className={styles.mainContainer}>
      <header className={styles.header}>
        <h1 className={styles.mainTitle}>Explore Our Products</h1>
        <p className={styles.subTitle}>Find the best items tailored for you</p>
      </header>

      {isLoading && (
        <div className={styles.statusMessage}>
          <div className={styles.loader}></div>
          <h4>Loading products...</h4>
        </div>
      )}

      {isError && (
        <div className={`${styles.statusMessage} ${styles.error}`}>
          <h4>Something went wrong. Please try again later.</h4>
        </div>
      )}

      {noProducts && (
        <div className={styles.statusMessage}>
          <h4>No Products Available</h4>
        </div>
      )}

      {isProducts && (
        <div className={styles.contentWrapper}>
          <aside className={styles.sidebar}>
            <ProductFilters
              setCurrFilter={setCurrFilter}
              currFilter={currFilter}
            />
          </aside>
          <main className={styles.productMain}>
            <ProductList products={products} />
          </main>
        </div>
      )}
    </div>
  );
};
export default ProductsContainer;
