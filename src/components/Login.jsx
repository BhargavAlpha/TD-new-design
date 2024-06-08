import React from "react";
import { useState } from "react";
import "./Login.css";
import Cookies from "js-cookie";

const Login = ({loading,initChakra,setData,setShowLogin,setName }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onLogin = (email, password) => {

    fetch("https://api.tutedude.com/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === "true" || data.success === true) {
          Cookies.set("user_email", email);
          Cookies.set("user_pass", password);
          setShowLogin(false);
          setData(data.dashboard)
          setName(data.dashboard.studentName);
          // initChakra(data.dashboard.studentName, data.dashboard.email);
        } else {
          window.alert("Invalid Email or Password");
        }
      })
      .catch((err) => {
        console.log(err);
        window.alert("Something went wrong");
      });
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onLogin(email.trim(), password.trim());
      }}
      className="login_form"
    >
      <h2>Login</h2>
      <div>
        <label className='label'>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button disabled={loading} type="submit">
        Login
      </button>
    </form>
  );
};

export default Login;