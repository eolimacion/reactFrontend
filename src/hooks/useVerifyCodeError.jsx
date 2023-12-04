import Swal from "sweetalert2";



export const useVerifyCodeError = (
  res,
  setRes,
  setOkCheck,
  setOkDeleteUser,
  userlogin,
  setUserNotFound
) => {

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


  if (res?.data?.check == false && res?.data?.delete.includes('El usuario se ha borrado correctamente')) {
    setRes(() => ({}));
    setOkDeleteUser(() => true)
    Swal.fire({
      icon: "error",
      title: "Code incorrect.",
      text: "Your user was deleted as a security measure. Please register again.",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  // -------------- 200 test = false
  if (res?.data?.check == false && res?.data?.delete.includes('El usuario no se ha podido borrar')) {
    setRes(() => ({}));
    Swal.fire({
      icon: "error",
      title: "Interval server error ❎.",
      text: "Please login again.",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  

//'El usuario no se ha podido borrar''El usuario se ha borrado correctamente'

  if (res?.response?.data?.includes('error al comprobar el check user ❌')) {
    setUserNotFound(() => true);
    setRes(() => ({}));
    Swal.fire({
      icon: "error",
      title: "Interval server error ❎.",
      text: "User not found, please register.",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  
 // ------------- userNoFound ---> 404

  if (res?.response?.data.includes('User not found/is not registered 🔎❌')) {
    setUserNotFound(() => true);
    setRes(() => ({}));
    Swal.fire({
      icon: "error",
      title: "Interval server error ❎.",
      text: "User not found, please register.",
      showConfirmButton: false,
      timer: 1500,
    });
  }

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
  

};

