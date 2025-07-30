import { useState } from "react";
import { useAuthContext } from "./useAuthContext"; // Corrected import path
import { useNavigate } from "react-router-dom";
import { useAlert } from "./useAlert";

export const useSignup = () => {
  const { dispatch } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { showAlert } = useAlert();
  
  const signup = async (email, password, firstName, lastName) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(import.meta.env.VITE_SERVER_URL+"/api/v1/users/signup", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
          "language": localStorage.getItem("language") || "English",
          "voice_of": localStorage.getItem("voice_of") || "Albert Einstein",
          "first_name": firstName,
          "last_name": lastName,
        }),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": "Bearer "+import.meta.env.VITE_API_REQUEST_TOKEN,
        },
      });

      const data = await response.json();
      if (!response.ok) {
        console.log(data.message);
        throw new Error(data.message || "Signup failed"); // Provide a default error message
      }

      // save the email to local storage
      localStorage.setItem("lgData", JSON.stringify(data));

      setIsLoading(false);
      dispatch({
        type: "LOGIN",
        payload: data,
      });

      // navigate to the home page
      navigate("/", { replace: true });

      // show the success alert
      showAlert("success", "Your account has been successfully created. You are now logged in.", 3000);
    } catch (error) {
      setError(error.message || "An error occurred"); // Provide a default error message
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    signup,
  };
};