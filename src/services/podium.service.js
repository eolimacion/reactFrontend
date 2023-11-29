import { updateToken } from "../utils/updateToken";
import { extraConfig } from "./serviceApiGeneral.config";
const APIGeneral = extraConfig();

//! ------------------------CREAR RIDER------------------------------

export const createPodium = async (formData) => {
  return APIGeneral.post("/podium/create", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => error);
};
