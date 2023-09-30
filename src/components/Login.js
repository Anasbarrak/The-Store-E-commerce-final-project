import React, { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, getCurrent } from "../redux/actions/ActionUser";


const Login = () => {
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const dispatch= useDispatch();
    const navigate = useNavigate();
    const handleGetCurrent= (getCurrent);
    const handleLogin = () => {
      var user = {
        Email: email,
        Password: password
      }
      console.log(user)
    dispatch(LoginUser(user, navigate));
    }
  return (
    <>
      <div className="wrapper">
    <h2 className="form-signin-heading">Please login</h2>
    <input
      type="text"
      className="form-control"
      placeholder="Email Address"
      required=""
      autoFocus=""
      onChange={(e)=>setEmail(e.target.value)}

    />
    <input
      type="password"
      className="form-control"
      placeholder="Password"
      required=""
      onChange={(e)=>setPassword(e.target.value)}
    />
    <label className="checkbox">
      <input
        type="checkbox"
        defaultValue="remember-me"
        id="rememberMe"
        name="rememberMe"
      />{" "}
      Remember me
    </label>
    <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={handleGetCurrent && handleLogin}>
      Login
    </button>
    <p className="credit" style={{ color: "greenyellow" }}>
        Developed by{" "}
        <a href="https://www.github.com/Anasbarrak" target="_blank">
          Mohamed Anas Barrak
        </a>
    </p>
</div>

    </>
  );
};

export default Login;
