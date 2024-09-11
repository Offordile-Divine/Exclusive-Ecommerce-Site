import React from "react";
import formImg from "../../assets/images/form-image.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./reg.css";
import { CiSquareCheck } from "react-icons/ci";
import LoginNav from "../../components/navigation/login-nav/LoginNav";
// import Otp from "../otp/Otp";

const Reg = () => {
  const schema = yup.object().shape({
    firstName: yup.string().max(30).required("Your first name is required"),
    lastName: yup.string().max(30).required("Your last name is required"),
    email: yup.string().email().required("Email does not exist"),
    state: yup.string().max(15).required("Your state is required"),
    passWord: yup
      .string()
      .min(4, "Should be more than 4 characters")
      .max(20)
      .required(),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref("passWord"), null], "Password don't match"),
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
    <div className="Form">
      <LoginNav />
      {/* <Otp /> */}
      <div className="reg">
        <img src={formImg} />

        <div className="form-label">
          <h1>Create an account</h1>
          <p id="enter">Enter your details</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="First Name"
              {...register("firstName")}
            />
            <p className="err">{errors.firstName?.message}</p>
            <input
              type="text"
              placeholder="Last Name"
              {...register("lastName")}
            />
            <p className="err">{errors.lastName?.message}</p>
            <input type="text" placeholder="State" {...register("state")} />
            <p className="err">{errors.state?.message}</p>
            <input type="text" placeholder="Email" {...register("email")} />
            <p className="err">{errors.email?.message}</p>
            <input
              type="password"
              placeholder="Password"
              {...register("passWord")}
            />
            <p className="err">{errors.passWord?.message}</p>

            <input
              type="password"
              placeholder="confirm password"
              {...register("confirmPassword")}
            />
            <p className="err">{errors.confirmPassword?.message}</p>
            {/* <input type="submit" className="submit-btn" /> */}

            <button
              className="btn-create"
              onClick={() => handleSubmit(onSubmit)}
            >
              Create an account
            </button>
          </form>
          <div className="exist_log">
            <p>Already have an account?</p>
            <a href="#">Log in</a>
          </div>

          <div className="terms">
            <a href="#">Terms & conditions</a>
            <CiSquareCheck id="check" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reg;
