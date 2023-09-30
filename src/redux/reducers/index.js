import addItem from "./addItem";
import Reducer from "./ReducerUser";
import ErrorReducer from "./ErrorReducer";
import { combineReducers } from "redux";
import Productsreducer from "./ProductReducer"

const rootReducers = combineReducers({
    addItem, Reducer, ErrorReducer, Productsreducer
})

export default rootReducers;