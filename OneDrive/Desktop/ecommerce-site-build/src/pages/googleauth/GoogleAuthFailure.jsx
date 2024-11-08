import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GoogleAuthFailure = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const handleGoogleFailure = async () => {
      try {
        const response = await axios.get(
          "https://one00daysofcoding.onrender.com/auth/v1/google/failure"
        );

        if (response.status === 401) {
          console.error("Google Auth Failed:", response.data.message);
          alert(response.data.message);
        }
      } catch (err) {
        console.error("Error during Google auth failure callback:", err);
        alert(
          "An error occurred while handling the failure. Please try again."
        );
      }
    };
    handleGoogleFailure();
  }, [navigate]);
  return (
    <div>
      <h1>Authentication Failed</h1>
      <p>Unfortunately, the authentication process failed. Please try again.</p>
      <button onClick={() => navigate("/login")}>Go to Login</button>
    </div>
  );
};

export default GoogleAuthFailure;
