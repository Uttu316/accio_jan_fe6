import { createContext, useState } from "react";

//step 1
export const CartContext = createContext();

//step 2
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addInCart = (item) => {
    setCart((currCart) => [...currCart, item]);
  };

  const removeFromCart = (id) => {
    const leftCartItems = cart.filter((i) => i.id !== id);
    setCart(leftCartItems);
  };

  const isInCart = (id) => {
    return cart.find((i) => i.id === id);
  };

  const cartLength = cart.length;

  return (
    <CartContext
      value={{ cart, addInCart, removeFromCart, isInCart, cartLength }}
    >
      {children}
    </CartContext>
  );
};

export default CartProvider;
