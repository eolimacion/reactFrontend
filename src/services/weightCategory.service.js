import { extraConfig } from "./serviceApiGeneral.config";

//??-------------------------------------RUTAS WEIGHTCATEGORYS------------------------------------------------

//! ------------------------CREAR WEIGHTCATEGORY------------------------------

export const createweightCategory = async (formData) => {
  const APIGeneral = extraConfig();

  return APIGeneral.post("/weightCategory/create", formData)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------------------- BUSCAR WEIGHTCATEGORY id ---------------------------------

export const buscarweightCategoryId = async (id) => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/weightCategory/${id}`)
    .then((res) => res)
    .catch((error) => error);
};

//!  ------------------------------- BUSCAR TODOS -------------------------------

export const buscarAllweightCategory = async () => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/weightCategory/`)
    .then((res) => res)
    .catch((error) => error);
};

//! -------------------------------- ACTUALIZAR WEIGHTCATEGORY -------------------------------------

export const actualizarweightCategory = async (id) => {
  const APIGeneral = extraConfig();

  return APIGeneral.patch(`/weightCategory/update/${id}`)
    .then((res) => res)
    .catch((error) => error);
};

//! -------------------------------- ACTUALIZAR WEIGHTCATEGORY -------------------------------------

export const addLifters = async (id) => {
  const APIGeneral = extraConfig();

  return APIGeneral.patch(`/weightCategory/addLifters/${id}`)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------------------------ BORRAR WEIGHTCATEGORY-------------

export const borrarweightCategory = async (id) => {
  const APIGeneral = extraConfig();

  return APIGeneral.delete(`/weightCategory/${id}`)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------------------------ORDENAR GENERO----------------------
export const ordenarWeightGenero = async (gender) => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`weightCategory/sort/${gender}`)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------------------------LIFTERS IN CATEGORY----------------------

export const liftersInCategory = async (id) => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`weightCategory/LiftersInCategory/${id}`)
    .then((res) => res)
    .catch((error) => error);
};
