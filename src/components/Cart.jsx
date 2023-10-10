import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delItem } from "../redux/actions";
import { NavLink } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "react-bootstrap";
import axios from "axios";


const Cart = () => {
  const state = useSelector((state) => state.addItem);
  const dispatch = useDispatch();
  console.log(state)
  const handleClose = (item) => {
    dispatch(delItem(item));
  };
  const handleCheckout = () => { 
    axios.post('/stripe/create-checkout-session',{state})
    .then((res)=> {
      if(res.data.url){
        window.location.href = res.data.url
      }
    }).catch((error)=>console.log(error.message));
  };
  const cartItems = (cartItem) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={cartItem.product.id}>
        <div className="container py-4">
          <button
            onClick={() => handleClose(cartItem.product)}
            className="btn-close float-end"
            aria-label="Close"
          ></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={cartItem.product.img}
                alt={cartItem.product.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.product.title}</h3>
              <p className="lead fw-bold">TND{cartItem.product.price}</p>
              <p className="lead fw-bold">Quantity: {cartItem.quantity}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  const button = () => {
    return (
      <div className="container">
        <div className="row">
          <Button
            className="btn btn-outline-primary mb-5 w-25 mx-auto"
            onClick={handleCheckout}
          >
            Proceed To checkout
          </Button>
        </div>
      </div>
    );
  };

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}
    </>
  );
};

export default Cart;
