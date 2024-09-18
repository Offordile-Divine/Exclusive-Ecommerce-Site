import React from "react";
import loginImg from "../../assets/images/form-image.png";
import "./login.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Reg_nav from "../../components/navigation/register-nav/Reg_nav";

const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="Login">
      <Reg_nav />
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
              <button onClick={() => handleSubmit(onSubmit)} id="login_btn">
                Log In
              </button>
              <a href="">Forget password?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
