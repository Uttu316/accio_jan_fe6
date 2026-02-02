import { useParams } from "react-router";
import Header from "../../components/header";
import styles from "./Product.module.css";
import { useEffect, useState } from "react";
import { API } from "../../services";

const ProductPage = () => {
  const { productId } = useParams();

  const [status, setStatus] = useState("loading");
  const [product, setProdcut] = useState(null);

  const getProduct = async () => {
    try {
      const data = await API({
        endpoint: `/products/${productId}`,
      });
      setProdcut(data);
      setStatus("success");
    } catch (e) {
      console.log(e);
      setStatus("error");
    }
  };

  useEffect(() => {
    getProduct();
  }, []); //invoke only on render

  const isLoading = status === "loading";
  const isError = status === "error";
  const isSuccess = status === "success";
  const hasProduct = isSuccess && product !== null;
  const noProduct = isSuccess && product === null;

  return (
    <div>
      <Header title={"Product"} />
      {isLoading && <h2>Loading Your Product...</h2>}
      {isError && <h2>Something Went Wrong</h2>}
      {noProduct && <h2> Product Not Available</h2>}
      {hasProduct && (
        <div className={styles.productContainer}>
          <div className={styles.imageSection}>
            <img
              src={product.image}
              alt="Product"
              className={styles.productImage}
            />
          </div>
          <div className={styles.detailsSection}>
            <h1 className={styles.title}>{product.title}</h1>
            <p className={styles.description}>{product.description}</p>
            <p className={styles.category}>Category: {product.category}</p>
            <p className={styles.price}>${product.price}</p>
            <div className={styles.rating}>
              <span className={styles.stars}>★★★★☆</span>
              <span className={styles.reviews}>
                ({product.rating.rate} / {product.rating.count} reviews)
              </span>
            </div>
            <div className={styles.buttonContainer}>
              <button className={styles.buyNowBtn}>Buy Now</button>
              <button className={styles.addToCartBtn}>Add to Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
