import React, { useState } from "react";
import "./Register.css";
import { useDispatch } from "react-redux";
import { RegisterUser } from "../redux/actions/ActionUser";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Date_Of_Birth, setDateofbirth] = useState("");
  const [Phone_Number, setPhoneNumber] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegister = () => {
    var data={
      name: name,
      Email: Email,
      Password: Password,
      Date_Of_Birth: Date_Of_Birth,
      Phone_Number: Phone_Number
    }
    console.log(data)
    dispatch(RegisterUser(data, navigate));
  }
  return (
    <>
      <div className="form_wrapper">
        <div className="form_container">
          <div className="title_container">
            <h3>Register Now</h3>
          </div>
          <div className="row clearfix">
            <div className="">
              
                <div className="row clearfix">
                  <div className="col_half">
                    <div className="input_field">
                      {" "}
                      <span>
                        <i aria-hidden="true" className="fa fa-user" />
                      </span>
                      <input
                        type="text"
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <br />
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-envelope" />
                  </span>
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <br />
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-lock" />
                  </span>
                  <input
                    type="text"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <br />
                <div className="input_field">
                  <span>
                    <i aria-hidden="true" className="fa fa-phone" />
                  </span>
                  <input
                    type="number"
                    placeholder="Put your phone number here"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <br />
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-calendar" />
                  </span>
                  <input
                    type="date"
                    onChange={(e) => setDateofbirth(e.target.value)}
                  />
                </div>
                <br />
                <div
                  style={{
                    borderRadius: "35%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <button onClick={handleRegister}>Register</button>
                </div>
              
            </div>
          </div>
        </div>
      </div>
      <p className="credit" style={{ color: "greenyellow" }}>
        Developed by{" "}
        <a href="https://www.github.com/Anasbarrak" target="_blank">
          Mohamed Anas Barrak
        </a>
      </p>
    </>
  );
}

export default Register;
