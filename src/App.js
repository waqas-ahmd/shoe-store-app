import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import CartPage from "./components/CartPage";
import ProductPage from "./components/ProductPage";
import Thanks from "./components/Thanks";
import { StoreProvider } from "./context/StoreContext";

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <div className="NavBar">
          <div className="NavTitle">Demo Shoe Store</div>
          <div className="NavLinks">
            <div>
              <Link to="/">Products</Link>
            </div>
            <div>
              <Link to="/cart">Cart</Link>
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/success" element={<Thanks />} />
          <Route path="/" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </StoreProvider>
    </div>
  );
}

export default App;
