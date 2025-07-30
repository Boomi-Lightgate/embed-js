import { AiOutlineLogout } from "react-icons/ai";
import { useLogout } from "../hooks/useLogout";
import Swal from 'sweetalert2';

export default function LogoutButton({title}) {
  const { logout }  = useLogout();

  const onLogout = (res) => {
    localStorage.removeItem("user");
    logout();
  };

  const showLogoutSwal = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to logout from the system?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: menu.logout_confirm_button,
      cancelButtonText: menu.logout_cancel_button,
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
      }
    })
  };
  return (
    <button onClick={onLogout} className="w-full flex items-center justify-between pr-2 text-gray-400 group-hover:text-gray-600 group">
      <div><span className="block px-3 py-1 text-sm leading-6 text-gray-400 group-hover:text-gray-600">{title}</span></div>
      <div><AiOutlineLogout className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-600" aria-hidden="true" /></div>
    </button>
  );
}    