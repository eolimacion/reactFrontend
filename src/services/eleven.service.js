import { updateToken } from "../utils/updateToken";
import { extraConfig } from "./serviceApiGeneral.config";
const APIGeneral = extraConfig();

//! ------------------------CREAR RIDER------------------------------

export const createEleven = async (formData) => {
  console.log("estoy en eleven service")
  return APIGeneral.post("/eleven/create", formData,{
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  } )
    .then((res) => res)
    .catch((error) => error);
};
