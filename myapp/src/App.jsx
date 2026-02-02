import PracticePage from "./pages/practice";
import ProductsPage from "./pages/Products";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import { BrowserRouter, Route, Routes } from "react-router";
import ProductPage from "./pages/product";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/practice" element={<PracticePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
