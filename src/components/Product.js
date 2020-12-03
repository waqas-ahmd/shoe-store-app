import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

function Product({ product }) {
  const {
    addCartItem,
    removeCartItem,
    incrementCartItem,
    decrementCartItem,
    cartItems,
    uniqueCartItems,
  } = useContext(StoreContext);
  const addItem = () => {
    if (uniqueCartItems.includes(product)) {
      incrementCartItem(product);
    } else {
      addCartItem(product);
    }
  };
  const removeItem = () => {
    if (cartItems.filter((item) => item === product).length === 1) {
      removeCartItem(product);
    } else {
      decrementCartItem(product);
    }
  };
  return (
    <div className="Product">
      <div className="ProductCard">
        <div className="ProductImage">
          <img
            width="200"
            height="150"
            alt={product.Name}
            src={product.Image}
          />
        </div>
        <div className="ProductDetails">
          <div className="ProductInfo">
            <div className="ProductName">{product.Name}</div>
            <div className="ProductPrice">Rs. {product.Price}</div>
          </div>
          <div className="ProductFunctions">
            <div className="AddItem">Add to Cart</div>
            <div className="UpdateItems">
              <div onClick={removeItem} className="UpdateItem">
                -
              </div>
              <div className="ItemsNumber">
                {cartItems.filter((item) => item === product).length}
              </div>
              <div onClick={addItem} className="UpdateItem">
                +
              </div>
            </div>
          </div>
        </div>
        {cartItems.filter((item) => item === product).length > 0 && (
          <div className="Checked"></div>
        )}
      </div>
    </div>
  );
}

export default Product;
