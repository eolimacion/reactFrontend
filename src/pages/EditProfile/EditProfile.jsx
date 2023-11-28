// import './EditProfile.css'

// import { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useAuth } from "../../context/authContext";
// import { UploadFile } from '../../components';
// import { UserProfileData } from '../UserProfileData/UserProfileData';

<<<<<<< HEAD
// import Swal from "sweetalert2/dist/sweetalert2.all.js";
// import { useErrorChangePassword } from '../../hooks/useErrorChangePassword';
// import { useErrorUpdate } from '../../hooks/useErrorUpdate';
// import { useDeleteUser } from '../../hooks/useDeleteUser';
=======
import Swal from "sweetalert2/dist/sweetalert2.all.js";
import { useErrorChangePassword } from '../../hooks/useErrorChangePassword';
import { useErrorUpdate } from '../../hooks/useErrorUpdate';
import { useDeleteUser } from '../../hooks/useDeleteUser';
import { changePasswordAuth } from '../../services/user.service';
>>>>>>> c12d0e29d4cc7211faf2313f44db85e38367000c


// export const EditProfile = () => {
// //! ---- estados

// const [resPassword, setResPassword] = useState({});
// const [send, setSend] = useState(false);

// //! ----- hooks

<<<<<<< HEAD
//    const { setUser, setIsDeletedUser, user, } = useAuth();
//     const { handleSubmit, register } = useForm();
=======
   const { setUser, setIsDeletedUser, user, logout } = useAuth();
    const { handleSubmit, register } = useForm();
>>>>>>> c12d0e29d4cc7211faf2313f44db85e38367000c


// //! ---- funcion datos del formulario

// const changePasswordFormSubmit = (formData) => {
//   const { password, newPassword, confirmPassword } = formData;

<<<<<<< HEAD
//   if (newPassword == confirmPassword) {
//     Swal.fire({
//       title: "Change password?",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "rgb(73, 193, 162)",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes",
//       cancelButtonText: "Cancel,"
//     }).then(async (resPassword
//   ult) => {
//       if (resPassword
//     ult.isConfirmed) {
//         setSend(true);
//         setResPassword
//     (await changePasswordAuth({ password, newPassword }));
//         setSend(false);
//       }
//     });
//   } else {
//     Swal.fire({
//       icon: "error",
//       title: "Passwords do not match",
//       text: "Your password and confirmation password must match",
//       showConfirmButton: false,
//       timer: 3000,
//     });
//   }
// };
=======
  if (newPassword == confirmPassword) {
    Swal.fire({
      title: "Change password?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "rgb(73, 193, 162)",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "Cancel,"
    }).then(async (resPassword) => {
      if (resPassword.isConfirmed) {

        setSend(true);
        setResPassword( await changePasswordAuth({ password, newPassword }));
        setSend(false);
      }
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Passwords do not match",
      text: "Your password and confirmation password must match",
      showConfirmButton: false,
      timer: 3000,
    });
  }
};
>>>>>>> c12d0e29d4cc7211faf2313f44db85e38367000c

// //! ----- useEffect


<<<<<<< HEAD
// useEffect(() =>{
//   console.log(resPassword
// )
//   useErrorUpdate(resPassword
// , setResPassword
// , logout)
//   }, [resPassword])
=======
useEffect(() =>{
  console.log(resPassword)
  useErrorUpdate(resPassword, setResPassword, logout)
  }, [resPassword])
>>>>>>> c12d0e29d4cc7211faf2313f44db85e38367000c



// //! ---- estados de navegacion








//   return (
//     <div>EditProfile</div>
//   )
// }
