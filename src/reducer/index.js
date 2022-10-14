import { combineReducers } from "redux";

import fullDataReducer from './fullData'
import cartReducer from "./cart";

const Reducers  = combineReducers({
  fullDataReducer,
  cartReducer
})
export default Reducers


