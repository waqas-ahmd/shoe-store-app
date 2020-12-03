import { useContext, useEffect } from "react";
import productList from "../assets/ProductList";
import { StoreContext } from "../context/StoreContext";
import Product from "./Product";

function ProductPage() {
  const { products, initializeProducts } = useContext(StoreContext);
  useEffect(() => {
    initializeProducts(productList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="ProductPage">
      <div className="ProductsContainer">
        {products.map((product) => (
          <Product key={product.ID} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
