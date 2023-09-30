import axios from 'axios'
import { GETPRODUCTS } from '../Actiontype/ActionProductTypes';
//getProducts
export const get_products = () => async (dispatch) => {
    try {
      const res = await axios.get("/product/allproducts");
      dispatch({ type: GETPRODUCTS, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
  export const add_product = (data) => async (dispatch) => {
    const config = {
      headers: {
        token: localStorage.getItem("token")
      }
    }
    try {
      await axios.post("/product/addproduct", data, config);
      dispatch(get_products());
    } catch (error) {
      console.log(error);
    }
  };
  //update product
  export const update_product = (id, data) => async (dispatch) => {
    try {
      await axios.put(`/product/updateproduct/${id}`, data);
      dispatch(get_products());
    } catch (error) {
      console.log(error);
    }
  };
  //delete product
  export const delete_product = (id) => async (dispatch) => {
    try {
      await axios.delete(`/product/deleteproduct/${id}`);
      dispatch(get_products());
    } catch (error) {
      console.log(error);
    }
  };