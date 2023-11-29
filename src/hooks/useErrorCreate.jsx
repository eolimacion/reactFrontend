import React from 'react'
import Swal from 'sweetalert2';

export const useErrorCreate = (res, setRegisterOk, setRes) => {
    if (res?.status == 200) {
        //cuando es un 200 convierte a string los datos para setearlos en el local y que los pueda usar la funcion puente
           setRegisterOk(() => true);
           //setAllUser(() => res.data);
           Swal.fire({
             icon: "success",
             title: "Successful creation!✅",
             showConfirmButton: false,
             timer: 1500,
           });
           setRes({});}

    if (res?.response?.status == 404) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "There was an error filling out the form ❌",
            showConfirmButton: false,
            timer: 3000,
          });
          setRes({});
    }

    if (res?.response?.status == 500) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "There was an error filling out the form ❌",
            showConfirmButton: false,
            timer: 3000,
          });
          setRes({});
    }
    
  };