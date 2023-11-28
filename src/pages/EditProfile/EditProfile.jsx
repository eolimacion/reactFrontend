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


export const EditProfile = () => {
//! ---- estados

const [res, setRes] = useState({});
const [send, setSend] = useState(false);

//! ----- hooks

const { setUser, setDeleteUser } = useAuth();
    const { handleSubmit, register } = useForm();


//! ---- funcion datos del formulario



//! ----- useEffect



//! ---- estados de navegacion








  return (
    <div>EditProfile</div>
  )
}
