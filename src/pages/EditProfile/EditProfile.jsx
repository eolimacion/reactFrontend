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
import { changePasswordAuth, updateUser } from '../../services/user.service';


export const EditProfile = () => {
//! ---- estados

const [resPassword, setResPassword] = useState({});
const [sendPassword, setSendPassword] = useState(false);
const [resEdit, setResEdit] = useState({});
const [sendEdit, setSendEdit] = useState(false);

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

        setSendPassword(true);
        setResPassword( await changePasswordAuth({ password, newPassword }));
        setSendPassword(false);
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




const editProfileFormSubmit = async (formData) =>{
  Swal.fire({
    title: "Save changes?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "rgb(73, 193, 162)",
    cancelButtonColor: "#DB3236",
    cancelButtonText: "Cancel",
    confirmButtonText: "Save",
  }).then(async (result) => {
    if (result.isConfirmed) {
      const inputFile = document.getElementById("file-upload").files;
      console.log(inputFile, inputFile[0], "holaaaaa")
//!FIX ------------------------------------------------------- NO COGE LA IMAGEN
      if (inputFile.length != 0) {  // mismo customFormData que en el login

        const customFormData = {
        ...formData,
        image: inputFile[0],
      };

        console.log('entrooooo foto nueva', customFormData)

        setSendEdit(true);
        setResEdit( await updateUser(customFormData));
        setSendEdit(false);
      } else {
        const customFormData = {
          ...formData,
          image: user.image,
        };
        setSendEdit(true);
        setResEdit(await updateUser(customFormData));
        setSendEdit(false);
      }
    }
  });
}
//! ----- useEffect


useEffect(() =>{
  console.log('resPassword', resPassword)
  useErrorChangePassword(resPassword, setResPassword, setUser)
  }, [resPassword])


  useEffect(() =>{
    console.log('resEdit', resEdit)
    useErrorUpdate(resEdit, setResEdit, logout)
    }, [resEdit])
  
  


//! ---- estados de navegacion




  return (
    <>
    {/* <div className='editProfile-div'> */}
    <div className="form form-div">
          <div className='container-div profile-data'>
        <h3>Edit your information </h3>

          </div>

          <div className="form-wrap formProfile">
        <form onSubmit={handleSubmit(editProfileFormSubmit)}>
        <div className="user_container form-group">
          <label htmlFor="custom-input" className="label name">
              Name
            </label>
            <input
              className="input_user"
              type="text"
              id="name"
              name="name"
              autoComplete="false"
              // LO NUEVOOOOOOOO------>
              defaultValue={user?.name}
              {...register("name")}
            />
          </div>
          <p>Interest</p>
            <div className="formGroup">
            <div className="interest">
              <input
                type="radio"
                name="interest"
                id="futbol"
                value="fifa"
                {...register("interestedIn", {required: true})}
              />
              <label htmlFor="futbol" className="labelRadio">
                FIFA
              </label>

              <input
                type="radio"
                name="interest"
                id="motogp"
                value="motogp"
                {...register("interestedIn", {required: true})}
              />
              <label htmlFor="motogp" className="labelRadio ">
                Moto GP
              </label>
              <input
                type="radio"
                name="interest"
                id="powerlifting"
                value="powerlifting"
                {...register("interestedIn", {required: true})}
              />
              <label htmlFor="powerlifting" className="labelRadio ">Powerlifting
              </label>
            </div>
            </div>

            <p>Gender</p>
           <div className="formGroup">
           <div className="gender">
           
              <input
                type="radio"
                name="gender"
                id="male"
                value="hombre"
                {...register("gender", {required: true})}
              />
              <label htmlFor="male" className="labelRadio male">
                Male
              </label>

              <input
                type="radio"
                name="gender"
                id="female"
                value="mujer"
                {...register("gender", {required: true})}
              />
              <label htmlFor="female" className="labelRadio female">
                Female
              </label>

              <input
                type="radio"
                name="gender"
                id="otros"
                value="otros"
                {...register("gender", {required: true})}
              />
              <label htmlFor="otros" className="labelRadio otros">
                Otros
              </label>
            </div>
           </div>

            
          <UploadFile />
          <div className="btn-div container-div">
            <button
              className="btn"
              type="submit"
              disabled={sendEdit}
              style={{ background: sendEdit ? "#bf3a62" : "#EE5684"  }}>
              Save changes
            </button>
          </div>
        </form>
          <div className="btn_container">
          </div>
      </div>
    </div>

    
  </>
  )
}
