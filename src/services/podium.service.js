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
