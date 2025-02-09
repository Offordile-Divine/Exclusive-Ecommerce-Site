import React, { useContext, useEffect, useState } from "react";
import otpImg from "../../assets/images/form-image.png";
import "./otp.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { EmailContext } from "../../context/EmailContext";

// const APIKEY = import.meta.env.VITE_API_KEY;

const Otp = () => {
  const { email } = useContext(EmailContext);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [timer, setTimer] = useState(60);

  const navigate = useNavigate();

  useEffect(() => {
    if (timer > 0) {
      const countDown = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(countDown);
    }
  }, [timer]);

  // Function to handle OTP input
  const handleOtpChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setOtp(value);
    }
  };

  // console.log(APIKEY)

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation: Check if OTP is 4 digits
    if (otp.length !== 6) {
      setError("OTP must be 6 digits");
      return;
    }

    // Clear any previous error messages
    setError("");
    setLoading(true);

    try {
      // const opt = {
      //   withCredentials: true,
      //   headers: {
      //     // "x-api-key": APIKEY,
      //     "Content-Type": "application/json",
      //   },
      // };
      const responseOtp = await axios.post(
        "https://one00daysofcoding.onrender.com/auth/v1/verify-otp",
        { otp, email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(responseOtp);
      if (responseOtp.status === 200) {
        const { accessToken, user } = responseOtp.data.data;

        // Store the access token in localStorage
        localStorage.setItem("accessToken", accessToken);

        // Optional: Store user info if needed
        localStorage.setItem("user", JSON.stringify(user));

        setTimeout(() => navigate("/getStarted"), 2000);
        setSuccessMessage("OTP verified successfully");
      } else {
        setError("Invalid OTP, Please try again");
      }
    } catch (err) {
      if (err.response) {
        console.error("Error response:", err.response);
        setError(err.response.data.message || "Failed to verify OTP");
      } else if (err.request) {
        console.error("Error request:", err.request);
        setError("Network error. Please try again.");
      } else {
        console.error("Error message:", err.message);
        setError("An error occurred. Please try again.");
      }
    }
    console.log(error);
    setLoading(false);
  };

  const resendOTP = () => {
    setTimer(60);
  };
  return (
    <div className="otp">
      <img src={otpImg} />

      <div className="otp-area">
        <h1>Verify Email Adress</h1>
        <p id="write-up">Enter code sent to your Email</p>

        <form className="input-field" onSubmit={handleSubmit}>
          <input
            type="text"
            maxLength="6"
            value={otp}
            onChange={handleOtpChange}
            placeholder="Enter 6 Digit OTP"
          />

          {/* Show error message if validation fails */}
          {successMessage && (
            <div style={{ color: "green" }}>{successMessage}</div>
          )}
          {/* Show error message if validation fails */}
          {error && <div style={{ color: "red" }}>{error}</div>}

          {/* Show loading state */}
          {loading ? (
            <div className="btn">
              <button className="btn1-create">Verifying...</button>
            </div>
          ) : (
            <div className="btn">
              <button className="btn1-create">Verify OTP</button>
            </div>
          )}
        </form>

        <div className="otpTimer">
          {timer > 0 ? (
            <p>Resend OTP in: {timer} seconds</p>
          ) : (
            <button onClick={resendOTP}>ResendOTP</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Otp;

// const [otp, setOtp] = useState(new Array(1).fill(""));
// const handleChange = (e, index) => {
//   if (isNaN(e.target.value)) return false;

//   setOtp([
//     ...otp.map((data, ix) => {
//       return ix === index ? e.target.value : data;
//     }),
//   ]);

//   if (e.target.value && e.target.nextSibling) {
//     e.target.nextSibling.focus();
//   }
// };
