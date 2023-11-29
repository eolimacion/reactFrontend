import React from 'react'
import Swal from 'sweetalert2';

export const useErrorCreate = (res, setRegisterOk, setRes) => {
    if (res?.status == 200) {
        //cuando es un 200 convierte a string los datos para setearlos en el local y que los pueda usar la funcion puente
           setRegisterOk(() => true);
           //setAllUser(() => res.data);
           Swal.fire({
             icon: "success",
             title: "Welcome to my Page 💌",
             showConfirmButton: false,
             timer: 1500,
           });
           setRes({});}

    if (res?.response?.status == 404) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ha habido un error al rellenar el formulario",
            showConfirmButton: false,
            timer: 3000,
          });
          setRes({});
    }

    if (res?.response?.status == 500) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ha habido un error al rellenar el formulario",
            showConfirmButton: false,
            timer: 3000,
          });
          setRes({});
    }
    
  };