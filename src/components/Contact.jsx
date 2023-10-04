import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Contact = () => {
   const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
       
    const dispatch= useDispatch();
    const navigate = useNavigate();
    const sendEmail = async () => {
      var dataSend = {
        email: email,
        subject: subject,
        message: message,
      };
      console.log(dataSend)
      const res = await fetch ("/email/contact", {
        method: "POST",
        body: JSON.stringify(dataSend),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        // HANDLING ERRORS
        .then((res) => {
          console.log(res);
          if (res.status > 199 && res.status < 300) {
            alert("Send Successfully !");
          }
        });
    };
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1> Have Some Questions ?</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md 5 d-flex justify-content-center">
            <img
              src="/assets/images/contact.png"
              alt="Contact Us"
              height="300px"
              width="300px"
            />
          </div>
          <div className="col-md-6">
              <div class="mb-3">
                <label for="exampleForm" class="form-label" >
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleForm"
                  placeholder="John Smith"
                  onChange={(e)=>setSubject(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label" >
                  Type here your suggestions or claims
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  onChange={(e)=>setMessage(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" class="btn btn-outline-primary" onClick={sendEmail}>
                Send Message
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
