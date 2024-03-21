import React from "react";
import "./login.css";
import { images } from "../../assets";
import PasswordInput from "../../common/inputTag/PasswordInput";
import UsernameInput from "../../common/inputTag/UsernameInput";

const Login = () => {
  return (
    <div className="wrapper">
      <div className="main-form">
        <form action="">
          <img
            id="logos"
            src={images.logo}
            alt="Image not found"
            width="226px"
            height="156px"
          ></img>
          <h2>Welcome back</h2>
          <p>Please provide user credentials to login</p>
          <UsernameInput />
          <PasswordInput />
          <br />
          <div className="remember-forget">
            <label className="forget-password-label"></label>
            <a href="#">
              <strong>Forgot Password?</strong>
            </a>
          </div>
          <button className="submitt" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
