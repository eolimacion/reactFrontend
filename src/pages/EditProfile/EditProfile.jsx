import './EditProfile.css'

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/authContext";
import { UploadFile } from '../../components';
import { UserProfileData } from '../UserProfileData/UserProfileData';

import Swal from "sweetalert2/dist/sweetalert2.all.js";
import { useErrorChangePassword } from '../../hooks/useErrorChangePassword';
import { useErrorUpdate } from '../../hooks/useErrorUpdate';
import { useDeleteUser } from '../../hooks/useDeleteUser';
import { changePasswordAuth } from '../../services/user.service';


export const EditProfile = () => {
//! ---- estados

const [resPassword, setResPassword] = useState({});
const [send, setSend] = useState(false);

//! ----- hooks

   const { setUser, setIsDeletedUser, user, logout } = useAuth();
    const { handleSubmit, register } = useForm();


//! ---- funcion datos del formulario

const changePasswordFormSubmit = (formData) => {
  const { password, newPassword, confirmPassword } = formData;

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

//! ----- useEffect


useEffect(() =>{
  console.log(resPassword)
  useErrorUpdate(resPassword, setResPassword, logout)
  }, [resPassword])



//! ---- estados de navegacion








  return (
    <div>EditProfile</div>
  )
}
