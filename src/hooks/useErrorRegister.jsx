
import Swal from "sweetalert2"
export const useErrorRegister = (res, setRegisterOk, setRes) => {
  
  //? si la respuesta es ok ---- > directamente esta el status en la primera clave es decir: res.status
  //? si la respuesta no esta ok--> res.response.status
  //! ------------------ 200 : todo ok
  if (res?.status == 200) {
 //cuando es un 200 convierte a string los datos para setearlos en el local y que los pueda usar la funcion puente
    const dataToString = JSON.stringify(res);
    localStorage.setItem("data", dataToString);
    setRegisterOk(() => true);
    //setAllUser(() => res.data);

    Swal.fire({
      icon: "success",
      title: "Welcome to my Page 💌",
      showConfirmButton: false,
      timer: 1500,
    });
    setRes({});}
  //! ------------------- 409: user ya registrado

  if (res?.response?.status === 409) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please , your email is incorrect !❎",
      showConfirmButton: false,
      timer: 1500,
    });
    setRes({});
  }

  //! ------------------- La contraseña no esta en el formato correcto
  if (res?.response?.data?.message?.includes("User validation failed: password:")) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Min 8 characters, 1 upper case, 1 lower case and a special character ❎",
      showConfirmButton: false,
      timer: 3000,
    });
    setRes({});
  }

  //! ------------------- cuando el userName ya existe
  if (
    res?.response?.data?.message?.includes("E11000 duplicate key error collection"
    )
  ) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Sorry choose another name ❎",
      showConfirmButton: false,
      timer: 1500,
    });
    setRes({});
  }

  //! -------------------- 500 : internal server error

  if (res?.response?.status == 500) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Interval server error!❎ Please try again.",
      showConfirmButton: false,
      timer: 1500,
    });
    setRes({});
  }
};
