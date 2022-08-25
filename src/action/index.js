export const setAllData=(data)=>{
    return {
      type: "FIRST_DUMP",
      payload:data
    };
}
export const setCartView = (data) => {
  return {
    type: "SET_CART_VIEW",
    payload: data,
  };
};
export const setLoading = (data)=>{
  return{
    type:"SET_LOADER",
    payload:data,
  }
}