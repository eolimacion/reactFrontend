import "./AccountSettings.css";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/authContext";

import Swal from "sweetalert2/dist/sweetalert2.all.js";
import { useErrorChangePassword } from "../../hooks/useErrorChangePassword";
import { useDeleteUser } from "../../hooks/useDeleteUser";
import { changePasswordAuth, updateUser } from "../../services/user.service";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export const AccountSettings = () => {
  //! ---- estados

  const [resPassword, setResPassword] = useState({});
  const [sendPassword, setSendPassword] = useState(false);

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

  //! ----- useEffect

  useEffect(() => {
    console.log("resPassword", resPassword);
    useErrorChangePassword(resPassword, setResPassword, setUser);
  }, [resPassword]);

  //! ---- estados de navegacion


  return (
    <>

      <div className="allForm">
        <div className="formMain">
          <h3 className="titleFormH1">Change your password</h3>
          <form onSubmit={handleSubmit(changePasswordFormSubmit)}>
            <div className="profileSettingsContainerDiv profileSettingsFormDiv">
              <label htmlFor="custom-input" className="customPlaceholder">
                Current password
              </label>
              <input
                className="profileSettingsInputUser"
                type="password"
                id="password"
                name="password"
                autoComplete="false"
                {...register("password", { required: true })}
              />
            </div>
            <div className="profileSettingsContainerDiv profileSettingsFormDiv">
              <label htmlFor="custom-input" className="customPlaceholder">
                New password
              </label>
              <input
                className="profileSettingsInputUser"
                type="password"
                id="newPassword"
                name="newPassword"
                autoComplete="false"
                {...register("newPassword", { required: true })}
              />
            </div>
            <div className="profileSettingsContainerDiv profileSettingsFormDiv">
              <label htmlFor="custom-input" className="customPlaceholder">
                Confirm new password
              </label>
              <input
                className="profileSettingsInputUser"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                autoComplete="false"
                {...register("confirmPassword", { required: true })}
              />
            </div>
            <div className="profileSettingsButtonContainer">
            <Button size="large" style= {{backgroundColor: 'var(--color-boton-motogp)', margin: '1.5rem'}}  type="submit"
              variant="contained" disabled={sendPassword} >
Change Password
</Button>

            </div>
          </form>
        </div>
        <div>
        <Button startIcon={<DeleteIcon />} variant="contained" color="error" onClick={() => useDeleteUser(setUser, setIsDeletedUser)}>
        Delete account
      </Button>

        </div>
      </div>
    </>
  );
};
