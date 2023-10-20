import Swal from "sweetalert2"

export const API_BASE_URL = 'https://tame-handkerchief-cod.cyclic.app'

export const getHeaders = () => {
    const token = localStorage.getItem('token');
      return {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    };

export const showAlert = (icon, title, html) => {
  Swal.fire({
      icon,
      title,
      html,
    });
   };

