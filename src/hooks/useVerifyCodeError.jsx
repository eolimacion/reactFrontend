import Swal from "sweetalert2";



export const useVerifyCodeError = (
  res,
  setRes,
  setOkCheck,
  setOkDeleteUser,
  userlogin,
  setUserNotFound
) => {
  // ---------------------> 500
  if (res?.response?.status == 500) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Internal Server Error ❎!",
      showConfirmButton: false,
      timer: 1500,
    });
    setRes(() => ({}));
  }

  // ------------------------- 200 test todo correcto
//convertir a string por seguridad
  if (res?.data?.testCheckUser?.toString() == "true") {
   
    /// si viene del login modificamos el estado de user del contexto para poner el check en true
    //este viene del login
    if (localStorage.getItem("user")) {
      const currentUser = localStorage.getItem("user");
      const parseUser = JSON.parse(currentUser);
      const customUser = {
        ...parseUser,
        check: true,
      };

      const stringUser = JSON.stringify(customUser);
      // llamamos a la funcion de login para resetear que el check esta a true
      userlogin(stringUser);
    }
    setOkCheck(() => true);
    setRes(() => ({}));
    Swal.fire({
      icon: "success",
      title: "Correct code! ✅",
      showConfirmButton: false,
      timer: 1500,
    });
  }


  // -------------- 200 test = false

  if (res?.data?.testCheckOk?.toString() == "false") {
    // el codigo si era correcto pero el actualizar en el back el check no se ha producido correctamente
    setRes(() => ({}));
    Swal.fire({
      icon: "error",
      title: "Internal server error ❎.",
      text: "Try again, please.",
      showConfirmButton: false,
      timer: 2500,
    });
  }

  // -------------- 200: delete: 'ok delete user'
  if (res?.response?.data?.delete?.includes("Usuario borrado")) {
    // esto le enviamos al register porque le henmos borrrado el usuario
    setOkDeleteUser(() => true);
    setRes(() => ({}));
    Swal.fire({
      icon: "error",
      title: "Inorrect Code ❎.",
      text: "Your account has been deleted. Please register again.",
      showConfirmButton: false,
      timer: 2500,
    });
  }

  // ------------- 200: delete: 'error delete user'
  if (res?.response?.data?.delete?.includes("Error al borrar usuario")) {
    setRes(() => ({}));
    Swal.fire({
      icon: "error",
      title: "No correct Code ❎.",
      text: "Incorrect code. Try again, please.",
      showConfirmButton: false,
      timer: 2500,
    });
  }

 // ------------- userNoFound ---> 404

  if (res?.response?.status == 404) {
    setUserNotFound(() => true);
    setRes(() => ({}));
    Swal.fire({
      icon: "error",
      title: "Interval server error ❎.",
      text: "No delete user. Try again, please.",
      showConfirmButton: false,
      timer: 1500,
    });
  }
};
