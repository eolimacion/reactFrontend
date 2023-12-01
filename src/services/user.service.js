import { updateToken } from "../utils/updateToken"
import { extraConfig } from "./serviceApiGeneral.config";

//*---------------------favoritos----------------------------
    //! -------------------> Get Fav Players [User]
    export const getById = async (userId) => {
      const APIGeneral = extraConfig();

      return APIGeneral.get(`/users/${userId}`)
        .then((res) => res)
        .catch((error) => error);
    };
    //! -------------------> Get Fav Players [User]
    export const getUsersFavPlayers = async (userId) => {
      const APIGeneral = extraConfig();

      return APIGeneral.get(`/users/favPlayers/${userId}`)
        .then((res) => res)
        .catch((error) => error);
    };

      //! -------------------> Get Fav Teams [User]
      export const getUsersFavTeams = async (userId) => {
        const APIGeneral = extraConfig();
        return APIGeneral.get(`/users/favTeams/${userId}`)
          .then((res) => res)
          .catch((error) => error);
      };

      //! -------------------> Get Fav Elevens [User]
      export const getUsersFavElevens = async (userId) => {
        const APIGeneral = extraConfig();
        return APIGeneral.get(`/users/favElevens/${userId}`)
          .then((res) => res)
          .catch((error) => error);
      };

    //! -------------------> Get Fav Riders [User]
    export const getUsersFavRiders = async (userId) => {
      const APIGeneral = extraConfig();
      return APIGeneral.get(`/users/favRiders/${userId}`)
        .then((res) => res)
        .catch((error) => error);
    };

    //! -------------------> Get Fav Lifters [User]
    export const getUsersFavLifters = async (userId) => {
      const APIGeneral = extraConfig();
      return APIGeneral.get(`/users/favLifters/${userId}`)
        .then((res) => res)
        .catch((error) => error);
    };

      //! -------------------> Get User Eleven [User]
      export const getUsersEleven = async (elevenId) => {
    
        console.log("estoy en service eleven")
        return APIuser.get(`/eleven/${elevenId}`, {
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
  const APIGeneral = extraConfig();
  return APIGeneral.post("/users/registerRedirect", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------------- VERIFY CODE - CHECK NEW USER -------------------------------

export const verifyConfirmationCode = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.post("users/check", formData)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------------- RESEND CODE --------------------------------

export const resendConfirmationCode = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.post("/users/resend", formData)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------------- AUTOLOGIN ----------------------------------

export const autoLoginUser = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.post("users/login/autologin", formData)
    .then((res) => res)
    .catch((error) => error);
};

//! ---------------------------------- LOGIN -------------------------------

export const loginUser = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.post("users/login", formData)
    .then((res) => res)
    .catch((error) => error);
};

//! ----------------------- FORGOT PASSWORD --------------------------------

export const forgotPasswordNoAuth = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.patch("/users/forgotpassword/forgotpassword", formData)
    .then((res) => res)
    .catch((error) => error);
};

//*--------------------------------------------------------------------------------
//*---------------------------------- CON AUTH -------------------------------------
//*--------------------------------------------------------------------------------

//! ------------------------ CHANGE PASSWORD -------------------------------

export const changePasswordAuth = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.patch('/users/changepassword', formData)
    .then((res) => res)
    .catch((error) => error);
};

//! -------------------------- UPDATE USER ------------------------------

export const updateUser = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.patch("users/update/update", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => error);
};

//! -------------------------- DELETE USER ------------------------------

export const deleteUser = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.delete("/users/", formData)
    .then((res) => res)
    .catch((error) => error);
};

//* GET USER ------------------------------
  //! -------------------> Get User By Name
  export const getUserByName = async (userName) => {
    return APIuser.get(`/users/byName/${userName}`)
      .then((res) => res)
      .catch((error) => error);
  };



  //!-------- ADD FAVS ---------------



  export const addFavLifter = async(idLifter) =>{
    const APIGeneral = extraConfig();
    return APIGeneral.patch(`/users/lifter/toggleLifter/${idLifter}`)
    .then((res) => res)
    .catch((error) => error);
  }

  export const addFavPlayers = async(idPlayer) =>{
    const APIGeneral = extraConfig();
    return APIGeneral.patch(`/users/togglePlayer/${idPlayer}`)
    .then((res) => res)
    .catch((error) => error);
  }