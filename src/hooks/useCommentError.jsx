import Swal from "sweetalert2"
export const useCommentError = (res, setRegisterOk, setRes) => {
  

  //! ------------------ 200 : todo ok
  if (res?.status == 200) {
    setRegisterOk(() => true);
    
Swal.fire({
      icon: "success",
      title: 'Register succesful',
      text: 'Registered successfully',
      showConfirmButton: false,
      timer: 1500,
    });
    setRes({});}

  
};
