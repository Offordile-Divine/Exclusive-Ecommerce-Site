import React, { useState } from "react";
import otpImg from "../../assets/images/form-image.png";
import "./otp.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const APIKEY = import.meta.env.VITE_API_KEY;

const Otp = () => {
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

  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  // Function to handle OTP input
  const handleOtpChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setOtp(value);
    }
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation: Check if OTP is 4 digits
    if (otp.length !== 6) {
      setError("OTP must be 4 digits");
      return;
    }

    // Clear any previous error messages
    setError("");
    setLoading(true);

    try {
      const opt = {
        header: {
          "x-api-key": APIKEY,
          "Content-Type": "application/json",
        },
      };
      const responseOtp = await axios.post(
        "https://100daysofcoding-production.up.railway.app/auth/v1/verify-otp",
        { otp },
        opt
      );
      console.log(responseOtp.data);
      if (responseOtp.data.status === "success") {
        navigate("/");
        setSuccessMessage("OTP verified successfully");
      } else {
        setError("Invalid OTP, Please try again");
      }
    } catch (err) {
      setError("Something went wrong, please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="otp">
      <img src={otpImg} />

      <div className="otp-area">
        <h1>Verify Email Adress</h1>
        <p id="write-up">Enter code sent to your Email</p>
        {/* <form className="input-field">
          {otp.map((data, i) => {
            return (
              <input
                key={i}
                type="number"
                onChange={(e) => handleChange(e, i)}
                maxLength="4"
              />
            );
          })}
        </form> */}
        <form className="input-field" onSubmit={handleSubmit}>
          <input
            type="text"
            maxLength="6"
            value={otp}
            onChange={handleOtpChange}
            placeholder="4 Digit OTP"
          />
          {/* <div className="btn">
            <button className="btn1-create">Verify</button>
          </div> */}

          {/* Show error message if validation fails */}
          {successMessage && (
            <div style={{ color: "green" }}>{successMessage}</div>
          )}
          {/* Show error message if validation fails */}
          {error && <div style={{ color: "red" }}>{setError}</div>}

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
      </div>
    </div>
  );
};

export default Otp;
