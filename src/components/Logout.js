import React, { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Logout = (user) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
  return (
    <>
      <div className="wrapper">
    <h2 className="form-signout-heading">Logout</h2>
    <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={navigate} >
    </button>
 </div>
    </>
  );
};

export default Logout;
