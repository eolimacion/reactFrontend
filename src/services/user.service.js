import { updateToken } from "../utils/updateToken"
import { APIuser } from "./serviceApiUser.config";

//*---------------------favoritos----------------------------
    
    //! -------------------> Get Fav Players [User]
    export const getUsersFavPlayers = async (userId) => {
      return APIuser.get(`/users/favPlayers/${userId}`, {
        headers: {
          Authorization: `Bearer ${updateToken()}`,
        },
      })
        .then((res) => res)
        .catch((error) => error);
    };

    //! -------------------> Get Fav Riders [User]
    export const getUsersFavRiders = async (userId) => {
      return APIuser.get(`/users/favRiders/${userId}`, {
        headers: {
          Authorization: `Bearer ${updateToken()}`,
        },
      })
        .then((res) => res)
        .catch((error) => error);
    };

    //! -------------------> Get Fav Lifters [User]
    export const getUsersFavLifters = async (userId) => {
      return APIuser.get(`/users/favLifters/${userId}`, {
        headers: {
          Authorization: `Bearer ${updateToken()}`,
        },
      })
        .then((res) => res)
        .catch((error) => error);
    };

//*--------------------- user ----------------------------

 //! ------------------------- REGISTER ----------------------------------

export const registerUser = async (formData) => {
  return APIuser.post("/registerUtil", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------------- VERIFY CODE - CHECK NEW USER -------------------------------

export const verifyConfirmationCode = async (formData) => {
  return APIuser.post("/check", formData)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------------- RESEND CODE --------------------------------

export const resendConfirmationCode = async (formData) => {
  return APIuser.post("/users/resend", formData)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------------- AUTOLOGIN ----------------------------------

export const autoLoginUser = async (formData) => {
  return APIuser.post("users/login/autologin", formData)
    .then((res) => res)
    .catch((error) => error);
};

//! ---------------------------------- LOGIN -------------------------------

export const loginUser = async (formData) => {
  return APIuser.post("users/login", formData)
    .then((res) => res)
    .catch((error) => error);
};

//! ----------------------- FORGOT PASSWORD --------------------------------

export const forgotPasswordNoAuth = async (formData) => {
  return APIuser.patch("/users/forgotpassword/forgotpassword", formData)
    .then((res) => res)
    .catch((error) => error);
};

//*--------------------------------------------------------------------------------
//*---------------------------------- CON AUTH -------------------------------------
//*--------------------------------------------------------------------------------

//! ------------------------ CHANGE PASSWORD -------------------------------

export const changePasswordAuth = async (formData) => {
  return APIuser.patch('/users/changepassword', formData, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => error);
};

//! -------------------------- UPDATE USER ------------------------------

export const updateUser = async (formData) => {
  return APIuser.patch("/update/update", formData, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => error);
};

//! -------------------------- DELETE USER ------------------------------

export const deleteUser = async (formData) => {
  return APIuser.delete("/users/", formData, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => error);
};