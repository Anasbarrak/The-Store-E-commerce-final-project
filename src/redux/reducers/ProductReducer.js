import { GETPRODUCTS } from "../Actiontype/ActionProductTypes";

const initialState = {
    products: []
  }

  const Productsreducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case GETPRODUCTS:
        console.log(payload)
        return { ...state, products: payload.Many_products};
      
      default:
        return state;
    }
  };
  export default Productsreducer;