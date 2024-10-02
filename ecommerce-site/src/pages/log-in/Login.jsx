import React from "react";
import loginImg from "../../assets/images/form-image.png";
import "./login.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Reg_nav from "../../components/navigation/register-nav/Reg_nav";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import LoginNav from "../../components/navigation/login-nav/LoginNav";

const APIKEY = import.meta.env.VITE_API_KEY;

const Login = () => {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    const loginData = {
      email: data.email,
      password: data.password,
    };

    const opt = {
      headers: {
        "x-api-key": APIKEY,
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        "https://100daysofcoding-production.up.railway.app/auth/v1/login",
        loginData,
        opt
      );

      if (res.data.status === "success") {
        navigate("/");
      }
    } catch (err) {
      console.error(err);
      // toast.warning("Please enter the right input");
    }
  };
  return (
    <div className="Login">
      <LoginNav />
      <div className="login_content">
        <img src={loginImg} />
        <div className="login_form">
          <h1>Log In</h1>
          <p>Enter your details below</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="xxxx@gmail.com"
              {...register("email")}
            />
            <p className="err">{errors.email?.message}</p>
            <input
              type="password"
              placeholder="#########"
              {...register("password")}
            />
            <p className="err">{errors.password?.message}</p>
            <div className="log_forget">
              <button id="login_btn" type="submit">
                Log In
              </button>
              <a href="">Forget password?</a>
            </div>
            <p id="or">or</p>
            <div className="googleSignin">
              <button>
                <FcGoogle /> Sign in with Google
              </button>
            </div>
          </form>
          <div className="acctForgetSignIn">
            <p>
              Don't have an account?
              <Link to="/registration">
                <b>Sign up</b>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
