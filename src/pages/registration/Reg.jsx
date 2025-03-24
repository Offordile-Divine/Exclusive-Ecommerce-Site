import React, { useContext, useState } from "react";
import formImg from "../../assets/images/form-image.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./reg.css";
import { CiSquareCheck } from "react-icons/ci";
import LoginNav from "../../components/navigation/login-nav/LoginNav";
import { json, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AppContext } from "../../App";
import axios from "axios";
import Reg_nav from "../../components/navigation/register-nav/Reg_nav";
import { EmailContext } from "../../context/EmailContext";

// const APIKEY = import.meta.env.VITE_API_KEY;

const Reg = () => {
  const { setEmail } = useContext(EmailContext);
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  console.log(useContext(EmailContext));
  // const { name } = useContext(AppContext);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const schema = yup.object().shape({
    firstName: yup.string().max(30).required("Your first name is required"),
    lastName: yup.string().max(30).required("Your last name is required"),
    email: yup.string().email().required("Email does not exist"),
    state: yup.string().max(15).uppercase(1).required("Your state is required"),
    passWord: yup
      .string()
      .min(8, "Should be more than 8 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .required(),
    confirmPassword: yup
      .string()
      .required("Please confirm your password")
      .oneOf([yup.ref("passWord"), null], "Password don't match"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    setErrorMessage("");

    const formData = {
      firstname: data.firstName,
      lastname: data.lastName,
      email: data.email,
      state: data.state,
      password: data.passWord,
      confirmPassword: data.confirmPassword,
    };
    console.log(data, formData);

    // console.log(APIKEY);
    const opt = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    setEmail(data.email);
    try {
      const response = await axios.post(
        "https://one00daysofcoding.onrender.com/auth/v1/register",
        formData,
        opt
      );
      console.log("Response...", response.data);
      if (response.data.status === "success") {
        navigate("/otp");
      }
    } catch (err) {
      if (err.response) {
        if (err.response.status === 409) {
          setPopupMessage("An account with this email already exists.");
          setShowPopup(true);
        } else {
          setPopupMessage("An error occurred. Please try again.");
          setShowPopup(true);
        }
      } else if (err.request) {
        console.error(err.request, "Error request message....");
        setPopupMessage("Network error. Please check your connection.");
        setShowPopup(true);
      } else {
        console.error(err.message, "Error message");
        setPopupMessage("Something went wrong. Please try again.");
        setShowPopup(true);
      }
    }
  };

  return (
    <div className="Form">
      <LoginNav />
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>{popupMessage}</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
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
              // onChange​={(e) => setName(e.target.value)}
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
              onChange={handlePasswordChange}
            />
            <p className="err">{errors.passWord?.message}</p>

            <input
              type="password"
              placeholder="confirm password"
              {...register("confirmPassword")}
            />
            <p className="err">{errors.confirmPassword?.message}</p>
            {/* <input type="submit" className="submit-btn" /> */}

            <div className="createAnAcct">
              <button className="btn-create" type="submit">
                Create an account
              </button>
            </div>

            <div className="googleSignin">
              <button>
                <FcGoogle /> Sign in with Google
              </button>
            </div>
          </form>
          <div className="exist_log">
            <p>Already have an account?</p>
            <a href="#">Log in</a>
          </div>

          <div className="terms">
            <a href="#">Terms & conditions</a>
            <CiSquareCheck id="check" />
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Reg;
