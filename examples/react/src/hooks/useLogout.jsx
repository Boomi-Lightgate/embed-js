import { useAuthContext } from "./useAuthContext";
import { useAlert } from "./useAlert";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { showAlert } = useAlert();
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("lgData");
    dispatch({
      type: "LOGOUT",
    });
    navigate("/login");
    showAlert("success", "Logout Successful", 1000);
  };
  return { logout };
};