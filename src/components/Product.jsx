import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get_products } from "../redux/actions/ActionProduct";

const Product = () => {
  const dispatch= useDispatch()
  useEffect(()=>{
dispatch(get_products())
  },[])
  const products=useSelector(state=>state.Productsreducer.products)
  console.log(products)
  const cardItem = (item) => {
       
    return (
      <div class="card my-5 py-4" key={item.id} style={{ width: "18rem" }}>
        <img src={item.img} class="card-img-top" alt={item.title} />
        <div class="card-body text-center">
          <h5 class="card-title">{item.title}</h5>
          <h6 class="card-description" style={{textAlign: 'left'}}>{item.desc}</h6>
          <p className="lead">TND{item.price}</p>
         
          <NavLink to={`/products/${item._id}`} class="btn btn-outline-primary" variant="primary" >
            Add to Cart
          </NavLink>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Products</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">{products.map(cardItem)}</div>
      </div>
    </div>
  );
};

export default Product;
