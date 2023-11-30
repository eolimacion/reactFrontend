import Swal from "sweetalert2/dist/sweetalert2.all";

export const useForgotPasswordError = (res, setRes, setForgotOk) => {
    //! ----------------------------- 404: 'User no register'
    if (
      res?.response?.status == 404 &&
      res?.response?.data?.includes("User no register")
    ) {
      setRes(() => ({}));
      Swal.fire({
        icon: "error",
        title: "This user does not exists",
        text: "Please, register first",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    //! ----------------------------- 404: 'dont send email and dont update user'
  
    if (
      res?.response?.status == 404 &&
      res?.response?.data?.includes("dont send email and dont update user")
    ) {
      setRes(() => ({}));
      Swal.fire({
        icon: "error",
        title: "There was a problem updating your user",
      text: "Please, try again",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    //! ----------------------------- 200: {updateUser: true,sendPassword: true}
  
    if (res?.status == 200) {
      if (res?.data?.sendPassword == true && res?.data?.updateUser == true) {
        setForgotOk(() => true);
        setRes(() => ({}));
        Swal.fire({
          icon: "success",
          title: 'We have sent you a temporary password',
          text: 'Please, check your email',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  
    //! ----------------------------- 404: {updateUser: false,sendPassword: true}
  
    if (
      res?.response?.status == 404 &&
      res?.response?.data?.sendPassword == true &&
      res?.response?.data?.updateUser == false
    ) {
      setRes(() => ({}));
      Swal.fire({
        icon: "error",
        title: "There was a problem updating your user",
        text: "The email we sent you is no longer valid. Please, try again to get a valid new password",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  
    //! ----------------------------- 500: interval server error
  
    if (res?.response?.status == 500) {
      setRes(() => ({}));
      Swal.fire({
        icon: "error",
        title: "Interval Server Error",
      text: "There was an error in our interval server. Please try again",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };