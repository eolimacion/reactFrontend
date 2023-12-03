import "./EditProfile.css";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/authContext";
import { UploadFile } from "../../components";
import { UserProfileData } from "../UserProfileData/UserProfileData";

import Swal from "sweetalert2/dist/sweetalert2.all.js";
import { useErrorChangePassword } from "../../hooks/useErrorChangePassword";
import { useErrorUpdate } from "../../hooks/useErrorUpdate";
import { useDeleteUser } from "../../hooks/useDeleteUser";
import { changePasswordAuth, updateUser } from "../../services/user.service";
import { ErrorFetch } from "../../components/ErrorFetch/ErrorFetch";

export const EditProfile = () => {
  //! ---- estados

  const [resPassword, setResPassword] = useState({});
  const [sendPassword, setSendPassword] = useState(false);
  const [resEdit, setResEdit] = useState({});
  const [sendEdit, setSendEdit] = useState(false);

  //! ----- hooks

  const { setUser, setIsDeletedUser, user, logout } = useAuth();
  const { handleSubmit, register } = useForm();

  //tengo que ponerlo aqui porque si no user no existe
  const [gender, setGender] = useState(user.gender);
  const [interestedIn, setInterestedIn] = useState(user.interestedIn);

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
        cancelButtonText: "Cancel,",
      }).then(async (resPassword) => {
        if (resPassword.isConfirmed) {
          setSendPassword(true);
          setResPassword(await changePasswordAuth({ password, newPassword }));
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

  const editProfileFormSubmit = async (formData) => {
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
        console.log(inputFile, inputFile[0], "holaaaaa");
        //!FIX ------------------------------------------------------- NO COGE LA IMAGEN
        if (inputFile.length != 0) {
          // mismo customFormData que en el login

          const customFormData = {
            ...formData,
            image: inputFile[0],
          };

          console.log("entrooooo foto nueva", customFormData);

          setSendEdit(true);
          setResEdit(await updateUser(customFormData));
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
  };
  //! ----- useEffect

  console.log(user);
  useEffect(() => {
    console.log("resPassword", resPassword);
    useErrorChangePassword(resPassword, setResPassword, setUser);
  }, [resPassword]);

  useEffect(() => {
    console.log("resEdit", resEdit);
    useErrorUpdate(resEdit, setResEdit, logout);
  }, [resEdit]);

  console.log(gender);
  console.log(interestedIn);
  return (
    <>
      {/* <div className='editProfile-div'> */}
      <div className="profileEditForm">
        <h3>Edit your information </h3>
        <form onSubmit={handleSubmit(editProfileFormSubmit)}>
          <div className="profileEditContainerColumns">
            <div className="profileEditLeft">
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
              <img src={user.image} alt={user.name}/>
              <UploadFile />
            </div>
            <div className="profileEditRight">
              <p>Interest</p>
              <div className="interest">
                <input
                  type="radio"
                  name="interest"
                  id="futbol"
                  value="fifa"
                  {...register("interestedIn", { required: true })}
                />
                <label
                  htmlFor="futbol"
                  className="labelRadio"
                  onClick={() => setInterestedIn("fifa")}
                  style={{
                    background:
                      interestedIn === "fifa"
                        ? "var(--color-background-nightmode)"
                        : "var(--color-primario)",
                    border: "solid 3px #0a334e",
                  }}
                >
                  FIFA
                </label>

                <input
                  type="radio"
                  name="interest"
                  id="motogp"
                  value="motogp"
                  {...register("interestedIn", { required: true })}
                />
                <label
                  htmlFor="motogp"
                  className="labelRadio"
                  onClick={() => setInterestedIn("motogp")}
                  style={{
                    background:
                      interestedIn === "motogp"
                        ? "var(--color-background-nightmode)"
                        : "var(--color-primario)",
                    border: "solid 3px #0a334e",
                  }}
                >
                  Moto GP
                </label>

                <input
                  type="radio"
                  name="interest"
                  id="powerlifting"
                  value="powerlifting"
                  {...register("interestedIn", { required: true })}
                />
                <label
                  htmlFor="powerlifting"
                  className="labelRadio"
                  onClick={() => setInterestedIn("powerlifting")}
                  style={{
                    background:
                      interestedIn === "powerlifting"
                        ? "var(--color-background-nightmode)"
                        : "var(--color-primario)",
                    border: "solid 3px #0a334e",
                  }}
                >
                  Powerlifting
                </label>
              </div>
              <p>Gender</p>
              <div className="gender">
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  value="hombre"
                  {...register("gender", { required: true })}
                />
                <label
                  htmlFor="male"
                  className="labelRadio male profileLabel"
                  onClick={() => setGender("hombre")}
                  style={{
                    background:
                      gender === "hombre"
                        ? "var(--color-background-nightmode)"
                        : "var(--color-primario)",
                    border: "solid 3px #0a334e",
                  }}
                >
                  Male
                </label>

                <input
                  type="radio"
                  name="gender"
                  id="female"
                  value="mujer"
                  {...register("gender", { required: true })}
                />
                <label
                  htmlFor="female"
                  onClick={() => setGender("mujer")}
                  className="labelRadio female profileLabel"
                  style={{
                    background:
                      gender === "mujer"
                        ? "var(--color-background-nightmode)"
                        : "var(--color-primario)",
                    border: "solid 3px #0a334e",
                  }}
                >
                  Female
                </label>

                <input
                  type="radio"
                  name="gender"
                  id="otros"
                  value="otros"
                  {...register("gender", { required: true })}
                />
                <label
                  htmlFor="otros"
                  className="labelRadio otros profileLabel"
                  onClick={() => setGender("otros")}
                  style={{
                    background:
                      gender === "otros"
                        ? "var(--color-background-nightmode)"
                        : "var(--color-primario)",
                    border: "solid 3px #0a334e",
                  }}
                >
                  Others
                </label>
              </div>
            </div>
          </div>
          <div className="btn-div container-div">
            <button
              className="btn"
              type="submit"
              disabled={sendEdit}
              style={{ background: sendEdit ? "#bf3a62" : "#EE5684" }}
            >
              Save changes
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
