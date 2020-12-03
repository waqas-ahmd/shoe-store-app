import React, { createContext, useReducer } from "react";
import StoreReducer from "./StoreReducer";

const initialState = {
  products: [],
  cartItems: [],
  uniqueCartItems: [],
};

export const StoreContext = createContext(initialState);

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(StoreReducer, initialState);

  function initializeProducts(products) {
    dispatch({
      type: "INIT_PRODUCTS",
      payload: products,
    });
  }

  function addCartItem(product) {
    dispatch({
      type: "ADD_ITEM",
      payload: product,
    });
  }

  function removeCartItem(product) {
    dispatch({
      type: "DEL_ITEM",
      payload: product,
    });
  }

  function incrementCartItem(product) {
    dispatch({
      type: "INC_ITEM",
      payload: product,
    });
  }

  function decrementCartItem(product) {
    dispatch({
      type: "DEC_ITEM",
      payload: product,
    });
  }

  function removeAll() {
    dispatch({
      type: "DEL_ALL",
    });
  }

  return (
    <StoreContext.Provider
      value={{
        products: state.products,
        cartItems: state.cartItems,
        uniqueCartItems: state.uniqueCartItems,
        initializeProducts,
        addCartItem,
        removeCartItem,
        incrementCartItem,
        decrementCartItem,
        removeAll,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
