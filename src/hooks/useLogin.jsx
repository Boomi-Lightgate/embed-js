import { useState, useEffect } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";
import { useAlert } from "./useAlert";

export const useLogin = () => {
  const { dispatch } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const { showAlert } = useAlert();
  const navigate = useNavigate();

  useEffect(() => {
    const loadUsers = async () => {
      const localUsers = JSON.parse(localStorage.getItem("mockUsers"));
      if (localUsers && Array.isArray(localUsers)) {
        setUsers(localUsers);
      } else {
        try {
          const res = await fetch("/data/users.json");
          const json = await res.json();
          setUsers(json.users || []);
        } catch (err) {
          console.error("Failed to load users.json", err);
        }
      }
    };
    loadUsers();
  }, []);

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const user = users.find(u => u.email === email && u.password === password);
      if (!user) {
        throw new Error("Invalid email or password");
      }
      localStorage.setItem("lgData", JSON.stringify(user));
      dispatch({
        type: "LOGIN",
        payload: user,
      });

      navigate("/dashboard");

      showAlert("success", "Login Successful", 1500);
    } catch (err) {
      setError(err.message || "Login failed.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    login,
  };
};
