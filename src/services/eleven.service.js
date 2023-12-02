import { extraConfig } from "./serviceApiGeneral.config";

//! ------------------------CREAR RIDER------------------------------

export const createEleven = async (formData) => {
  console.log("estoy en eleven service");
  const APIGeneral = extraConfig();
  return APIGeneral.post("/eleven/create", formData,)
    .then((res) => res)
    .catch((error) => error);
};
