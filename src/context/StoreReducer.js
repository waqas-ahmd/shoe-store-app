// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "INIT_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_ITEM":
      return {
        ...state,
        uniqueCartItems: [...state.uniqueCartItems, action.payload],
        cartItems: [...state.cartItems, action.payload],
      };
    case "DEL_ITEM":
      return {
        ...state,
        uniqueCartItems: state.uniqueCartItems.filter(
          (item) => item !== action.payload
        ),
        cartItems: state.cartItems.filter((item) => item !== action.payload),
      };
    case "INC_ITEM":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case "DEC_ITEM":
      let tempArray = [];
      state.cartItems.map((item) => tempArray.push(item));
      for (var i = tempArray.length - 1; i >= 0; --i) {
        if (tempArray[i] === action.payload) {
          tempArray.splice(i, 1);
          break;
        }
      }
      return {
        ...state,
        cartItems: tempArray,
      };
    case "DEL_ALL":
      return { ...state, cartItems: [], uniqueCartItems: [] };
    default:
      return state;
  }
};
