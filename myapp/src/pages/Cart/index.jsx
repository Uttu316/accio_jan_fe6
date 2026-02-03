import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import PageWrapper from "../../components/pageWrapper";
import styles from "./Cart.module.css";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <PageWrapper title="Your Cart">
      <div className={styles.cartContainer}>
        <div className={styles.cartItemsList}>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.itemImage}>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className={styles.itemDetails}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemDescription}>{item.description}</p>
                  <button
                    className={styles.removeBtn}
                    onClick={() => removeFromCart(item.id)}
                  >
                    <FaTrash /> Remove from Cart
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className={styles.cartSummary}>
          <h2>Cart Summary</h2>
          <div className={styles.summaryDetails}>
            <div className={styles.summaryRow}>
              <span>Total Items:</span>
              <span>{cart.length}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Total Amount:</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
          </div>
          <button className={styles.payNowBtn}>Pay Now</button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Cart;
