import React from "react";
import { FaRocket, FaUndo, FaLock } from "react-icons/fa";
import Header from "../../components/header";
import styles from "./Home.module.css";
import { Link } from "react-router";

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Leather Bag",
      price: "$120.00",
      image:
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      name: "Minimalist Watch",
      price: "$85.00",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      name: "Wireless Headphones",
      price: "$150.00",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      name: "Sunglasses",
      price: "$45.00",
      image:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <div className={styles.container}>
      <Header title="E-Shop" />
      <header className={styles.hero}>
        <h1 className={styles.heroTitle}>Summer Collection 2024</h1>
        <p className={styles.heroSubtitle}>
          Get up to 50% off on premium products
        </p>
        <Link to="/products" className={styles.button}>
          Shop Now
        </Link>
      </header>

      <section className={styles.features}>
        <div className={styles.featureItem}>
          <FaRocket className={styles.featureIcon} />
          <h3>Fast Shipping</h3>
          <p>Free delivery on orders over $100</p>
        </div>
        <div className={styles.featureItem}>
          <FaUndo className={styles.featureIcon} />
          <h3>Easy Returns</h3>
          <p>30-day money back guarantee</p>
        </div>
        <div className={styles.featureItem}>
          <FaLock className={styles.featureIcon} />
          <h3>Secure Payment</h3>
          <p>100% secure payment processing</p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Featured Products</h2>
        <div className={styles.productGrid}>
          {featuredProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <img
                src={product.image}
                alt={product.name}
                className={styles.productImage}
              />
              <div className={styles.productInfo}>
                <div className={styles.productName}>{product.name}</div>
                <div className={styles.productPrice}>{product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
