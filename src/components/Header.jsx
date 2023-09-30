import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CartBtn from "./buttons/CartBtn";
import LogoutBtn from "../components/LogoutBtn"
import { useDispatch, useSelector } from "react-redux";
import {  getCurrent, LoginUser, logout } from "../redux/actions/ActionUser";



const Header = () => {
  const navigate=useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
   dispatch(getCurrent())
  }, []);
  const user=useSelector(state=>state.Reducer.user)
 console.log(user)
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid py-2">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <NavLink className="navbar-brand mx-auto fw-bold" to="/">
              The Store
            </NavLink>
            {!(user.name)?
            <>
            <NavLink to='/login'>
            <button
        type="button"
        className="btn btn-outline-dark ms-2"
      ><span className="fa fa-sign-in me-1"></span> Login
      </button>
            </NavLink>
            <NavLink to='/register'>
            <button
        type="button"
        className="btn btn-outline-dark ms-2"  
      >
        <span className="fa fa-user-plus me-1"></span> Register
      </button>
            </NavLink>
            </>
            :
            <NavLink to='/'>
            <button
        type="button"
        className="btn btn-outline-dark ms-2" 
        onClick={()=>dispatch(logout(navigate))
        }
      >

        <span className="fa fa-user-plus me-1"></span> Logout
      </button>
            </NavLink>}
          </div>
            <CartBtn  />
           
          </div>
      </nav>
    </>
  );
};

export default Header;
