import { StoreContext } from "../context/StoreContext";
import { useContext } from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

function CartPage() {
  const { uniqueCartItems, removeAll, cartItems } = useContext(StoreContext);
  return (
    <div className="CartPage">
      <div className="CartTitle"> My Cart</div>
      <div className="ItemsList">
        {uniqueCartItems.map((cartItem) => (
          <CartItem key={cartItem.Name} cartItem={cartItem} />
        ))}
        {cartItems.length !== 0 && (
          <div className="TotalSection">
            <div className="CartTotals">
              Total Cost: Rs.{" "}
              {cartItems
                .map((item) => item.Price)
                .reduce((prev, next) => prev + next)}
            </div>
            <div className="Payment">
              <Link onClick={removeAll} to="/success">
                BUY
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
