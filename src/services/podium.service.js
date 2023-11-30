import { updateToken } from "../utils/updateToken";
import { extraConfig } from "./serviceApiGeneral.config";
const APIGeneral = extraConfig();

//! ------------------------CREAR RIDER------------------------------

export const createPodium = async (formData) => {
  return APIGeneral.post("/podium/create", formData,{
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  } )
    .then((res) => res)
    .catch((error) => error);
};


//!------------------------GET ALL PODIUMS------------------------

export const getAllPodiums = async () => {
  console.log("entro al service de getAllPodiums")
  return APIGeneral.get("/podium/", {
  })
    .then((res) => res)
    .catch((error) => error);
};

//!--------------------POST COMMENT ------------------------

export const createPodiumComment = async (locationMoto) => {
  return APIGeneral.post(`/comment/${locationMoto}`,{
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  } )
    .then((res) => res)
    .catch((error) => error);
};

