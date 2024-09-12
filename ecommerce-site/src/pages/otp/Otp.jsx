import React, { useState } from "react";
import otpImg from "../../assets/images/form-image.png";
import "./otp.css";

const Otp = () => {
  const [otp, setOtp] = useState(new Array(1).fill(""));
  const handleChange = (e, index) => {
    if (isNaN(e.target.value)) return false;

    setOtp([
      ...otp.map((data, ix) => {
        return ix === index ? e.target.value : data;
      }),
    ]);

    if (e.target.value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  };
  return (
    <div className="otp">
      <img src={otpImg} />

      <div className="otp-area">
        <h1>Verify Email Adress</h1>
        <p id="write-up">Enter code sent to your Email</p>
        <div className="input-field">
          {otp.map((data, i) => {
            return (
              <input key={i} type="text" onChange={(e) => handleChange(e, i)} />
            );
          })}
        </div>

        <div className="btn">
          <button className="btn-create" onClick={() => alert(otp.join(""))}>
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default Otp;
