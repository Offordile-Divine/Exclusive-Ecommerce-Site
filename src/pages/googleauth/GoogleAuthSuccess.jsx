import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GoogleAuthSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // const queryParams = new URLSearchParams(window.location.search);
    // const token = queryParams.get("accessToken");
    // const firstname = queryParams.get("firstname");
    // const lastname = queryParams.get("lastname");
    // const email = queryParams.get("email");
    // const phoneNumber = queryParams.get("phoneNumber");
    // const profileProfile = queryParams.get("profileProfile");

    const handleGoogleSuccess = async () => {
      try {
        const response = await axios.get(
          "https://one00daysofcoding.onrender.com/auth/v1/google/success"
        );

        if (response.status === "success") {
          const { accessToken, user } = response.data;

          localStorage.setItem("accessToken", accessToken);

          localStorage.setItem("user", JSON.stringify(user));
        }
      } catch (err) {
        navigate("/googleFailure");
      }
    };

    handleGoogleSuccess();
  }, [navigate]);
  return (
    <div>
      <p>Laoding...</p>
    </div>
  );
};

export default GoogleAuthSuccess;
