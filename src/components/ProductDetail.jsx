import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, delItem } from "../redux/actions";
import { get_products } from "../redux/actions/ActionProduct";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const [cartBtn, setCartBtn] = useState("Add to Cart");
  const [count, setCount] = useState(0);
  /* Now we need a product id which is pass from the product page. */
  const proid = useParams();
  useEffect(() => {
    dispatch(get_products());
  }, []);
  const products = useSelector((state) => state.Productsreducer.products);
  console.log(products);
  const proDetail = products.filter((x) => x._id === proid.id);
  console.log(proDetail);
  const product = proDetail[0];
  console.log(product);

  // We need to store useDispatch in a variable

  const handleCart = (product) => {
    if (cartBtn === "Add to Cart") {
      dispatch(addItem({ product, quantity: count }));
      setCartBtn("Remove from Cart");
    } else {
      dispatch(delItem(product));
      setCartBtn("Add to Cart");
    }
  };

  return (
    <>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img src={product.img} alt={product.title} height="400px" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold">{product.title}</h1>
            <hr />
            <h2 className="my-4">TND{product.price}</h2>
            <p className="lead">{product.desc}</p>
            <button
              class="btn btn-outline-primary"
              variant="primary"
              onClick={() => setCount(count + 1)}
            >
              +
            </button>
            <span>{count}</span>
            <button
              class="btn btn-outline-primary"
              variant="primary"
              onClick={() => (count > 0 ? setCount(count - 1) : setCount(0))}
            >
              -
            </button>
            <button
              onClick={() => handleCart(product)}
              className="btn btn-outline-primary my-5"
            >
              {cartBtn}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
