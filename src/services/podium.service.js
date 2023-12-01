import { extraConfig } from "./serviceApiGeneral.config";

//! ------------------------CREAR RIDER------------------------------

export const createPodium = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.post("/podium/create", formData)
    .then((res) => res)
    .catch((error) => error);
};

//!------------------------GET ALL PODIUMS------------------------

export const getAllPodiums = async () => {
  console.log("entro al service de getAllPodiums");
  const APIGeneral = extraConfig();
  return APIGeneral.get("/podium/", {})
    .then((res) => res)
    .catch((error) => error);
};

//!--------------------POST COMMENT ------------------------

export const createPodiumComment = async (locationMoto, formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.post(`/comment/createpodium/${locationMoto}`, formData)
    .then((res) => res)
    .catch((error) => error);
};
