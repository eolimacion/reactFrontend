import { updateToken } from "../utils/updateToken"
import { extraConfig } from "./serviceApiGeneral.config";

//*---------------------favoritos----------------------------
    
    //! -------------------> Get Fav Players [User]
    export const getUsersFavPlayers = async (userId) => {
      const APIGeneral = extraConfig();
      return APIGeneral.get(`/users/favPlayers/${userId}`, {
        headers: {
          Authorization: `Bearer ${updateToken()}`,
        },
      })
        .then((res) => res)
        .catch((error) => error);
    };

      //! -------------------> Get Fav Teams [User]
      export const getUsersFavTeams = async (userId) => {
        return APIGeneral.get(`/users/favTeams/${userId}`, {
          headers: {
            Authorization: `Bearer ${updateToken()}`,
          },
        })
          .then((res) => res)
          .catch((error) => error);
      };

      //! -------------------> Get Fav Elevens [User]
      export const getUsersFavElevens = async (userId) => {
        return APIGeneral.get(`/users/favElevens/${userId}`, {
          headers: {
            Authorization: `Bearer ${updateToken()}`,
          },
        })
          .then((res) => res)
          .catch((error) => error);
      };

    //! -------------------> Get Fav Riders [User]
    export const getUsersFavRiders = async (userId) => {
      return APIGeneral.get(`/users/favRiders/${userId}`, {
        headers: {
          Authorization: `Bearer ${updateToken()}`,
        },
      })
        .then((res) => res)
        .catch((error) => error);
    };

    //! -------------------> Get Fav Lifters [User]
    export const getUsersFavLifters = async (userId) => {
      return APIGeneral.get(`/users/favLifters/${userId}`, {
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
  return APIGeneral.post("/users/registerRedirect", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------------- VERIFY CODE - CHECK NEW USER -------------------------------

export const verifyConfirmationCode = async (formData) => {
  return APIGeneral.post("users/check", formData)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------------- RESEND CODE --------------------------------

export const resendConfirmationCode = async (formData) => {
  return APIGeneral.post("/users/resend", formData)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------------- AUTOLOGIN ----------------------------------

export const autoLoginUser = async (formData) => {
  return APIGeneral.post("users/login/autologin", formData)
    .then((res) => res)
    .catch((error) => error);
};

//! ---------------------------------- LOGIN -------------------------------

export const loginUser = async (formData) => {
  return APIGeneral.post("users/login", formData)
    .then((res) => res)
    .catch((error) => error);
};

//! ----------------------- FORGOT PASSWORD --------------------------------

export const forgotPasswordNoAuth = async (formData) => {
  return APIGeneral.patch("/users/forgotpassword/forgotpassword", formData)
    .then((res) => res)
    .catch((error) => error);
};

//*--------------------------------------------------------------------------------
//*---------------------------------- CON AUTH -------------------------------------
//*--------------------------------------------------------------------------------

//! ------------------------ CHANGE PASSWORD -------------------------------

export const changePasswordAuth = async (formData) => {
  return APIGeneral.patch('/users/changepassword', formData, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => error);
};

//! -------------------------- UPDATE USER ------------------------------

export const updateUser = async (formData) => {
  return APIGeneral.patch("users/update/update", formData, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => error);
};

//! -------------------------- DELETE USER ------------------------------

export const deleteUser = async (formData) => {
  return APIGeneral.delete("/users/", formData, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => error);
};