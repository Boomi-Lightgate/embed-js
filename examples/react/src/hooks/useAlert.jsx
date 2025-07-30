import Swal from 'sweetalert2';

export const useAlert = () => {
  const showAlert = (icon, title, delay) => {
    const toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: delay,
      timerProgressBar: true,
      icon: icon,
      title: title,
    });
    toast.fire({});
  };
  return {
    showAlert
  };
};