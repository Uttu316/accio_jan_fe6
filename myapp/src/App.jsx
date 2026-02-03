import PracticePage from "./pages/practice";
import ProductsPage from "./pages/Products";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import { BrowserRouter, Route, Routes } from "react-router";
import ProductPage from "./pages/product";
import CartProvider from "./contexts/cartContext";
import Cart from "./pages/Cart";
// import GlobalProvider from "./contexts/globalContext";
const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};
export default App;
