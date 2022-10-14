const productDetails = {
  fullData: {},
  isCartOpen: false,
  isLoading: true,
};
const dataReducer = (state = productDetails, action) => {
  switch (action.type) {
    case "FIRST_DUMP":
      return { ...state, fullData: action.payload };
    case "SET_CART_VIEW":
      return { ...state, isCartOpen: action.payload };
    case "SET_LOADER":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export default dataReducer;
