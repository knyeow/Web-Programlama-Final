import React, { useState } from "react";

import Axios from "axios";

function Dbapp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");

  const register = (e) => {
    e.preventDefault();
    const url = "http://localhost:3001/register";

    Axios.post(url, {
      email: email,
      username: username,
      password: password,
    })
      .then((response) => {
        if (response.data === "Error") {
          console.log("kayıt olunamadı");
        } else if (response.data === "Success") {
          console.log("kayıt olundu");
          console.log(response);
        }
      })
      .then((err) => {
        console.log(err);
      });
  };

  return (
    <div className="loginForm">
      <form>
        <h4>Register Here</h4>
        <label htmlFor="email">Email Address*</label>
        <input
          className="textInput"
          type="text"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter your Email Address"
          required
        />
        <label htmlFor="username">Username*</label>
        <input
          className="textInput"
          type="username"
          name="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="Enter your Username"
          required
        />
        <label htmlFor="password">Password*</label>
        <input
          className="textInput"
          type="password"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Enter your Password"
          required
        />
        <input
          className="button"
          type="submit"
          onClick={register}
          value="Create an account"
        />
        <h1
          style={{ fontSize: "15px", textAlign: "center", marginTop: "20px" }}
        >
          {registerStatus}
        </h1>
      </form>
    </div>
  );
}

export default Dbapp;
