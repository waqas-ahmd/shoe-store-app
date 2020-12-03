import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

function CartItem({ cartItem }) {
  const {
    cartItems,
    uniqueCartItems,
    removeCartItem,
    addCartItem,
    incrementCartItem,
    decrementCartItem,
  } = useContext(StoreContext);
  const addItem = () => {
    if (uniqueCartItems.includes(cartItem)) {
      incrementCartItem(cartItem);
    } else {
      addCartItem(cartItem);
    }
  };
  const removeItem = () => {
    if (cartItems.filter((item) => item === cartItem).length === 1) {
      removeCartItem(cartItem);
    } else {
      decrementCartItem(cartItem);
    }
  };
  return (
    <div className="CartItem">
      <div className="CartItemImage">
        <img width="100" height="75" alt={cartItem.Name} src={cartItem.Image} />
      </div>
      <div className="CartItemDetails">
        <div className="CartItemInfo">
          <div className="CartItemTitle">{cartItem.Name}</div>
          <div className="add-remove-items">
            <div className="UpdateItems">
              <div onClick={removeItem} className="UpdateItem">
                -
              </div>
              <div className="ItemsNumber">
                {cartItems.filter((item) => item === cartItem).length}
              </div>
              <div onClick={addItem} className="UpdateItem">
                +
              </div>
            </div>
          </div>
        </div>
        <div className="ItemCost">
          Cost: Rs.
          {cartItems.filter((item) => item === cartItem).length *
            cartItem.Price}
        </div>
      </div>
    </div>
  );
}

export default CartItem;
