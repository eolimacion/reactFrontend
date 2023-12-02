import { extraConfig } from "./serviceApiGeneral.config";


export const createEleven = async (formData) => {
  console.log("estoy en eleven service");
  const APIGeneral = extraConfig();
  return APIGeneral.post("/eleven/create", formData,)
    .then((res) => res)
    .catch((error) => error);
};
//!------------------------GET ALL ------------------------

export const getAllElevens = async () => {
  const APIGeneral = extraConfig();
  return APIGeneral.get("/eleven/", {})
    .then((res) => res)
    .catch((error) => error);
};

//!--------------------POST COMMENT ------------------------

export const createElevenComment = async (location, formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.post(`/comment/create/${location}`, formData)
    .then((res) => res)
    .catch((error) => error);
};
//!--------------------POST COMMENT ALL ------------------------

export const getAllComentsElevenByID = async (id) => {
  const APIGeneral = extraConfig();
  return APIGeneral.get(`/comment/getbyid/${id}`)
    .then((res) => res)
    .catch((error) => error);
};
export const getelevenByID = async (id) => {
  const APIGeneral = extraConfig();
  return APIGeneral.get(`/eleven/${id}`)
    .then((res) => res)
    .catch((error) => error);
};