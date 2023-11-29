import { extraConfig } from "./serviceApiGeneral.config";
const APIGeneral = extraConfig();


//??-------------------------------------RUTAS WEIGHTCATEGORYS------------------------------------------------



//! ------------------------CREAR WEIGHTCATEGORY------------------------------

export const createweightCategory = async (formData) => {
    return APIGeneral.post("/weightCategory/", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => res)
      .catch((error) => error);
  };

//! ------------------------------- BUSCAR WEIGHTCATEGORY id ---------------------------------

export const buscarweightCategoryId = async (id) => {
   return APIGeneral.get(`/weightCategory/${id}`)
      .then((res) => res)
      .catch((error) => error);}


//!  ------------------------------- BUSCAR TODOS -------------------------------

export const buscarAllweightCategory = async () => {
   return APIGeneral.get(`/weightCategory/`)
      .then((res) => res)
      .catch((error) => error);}



//! -------------------------------- ACTUALIZAR WEIGHTCATEGORY -------------------------------------

export const actualizarweightCategory = async (id) => {
    return APIGeneral.patch(`/weightCategory/update/${id}`)
       .then((res) => res)
       .catch((error) => error);}

       //! -------------------------------- ACTUALIZAR WEIGHTCATEGORY -------------------------------------

export const addLifters = async (id) => {
    return APIGeneral.patch(`/weightCategory/addLifters/${id}`)
       .then((res) => res)
       .catch((error) => error);}
 


//! ------------------------------------ BORRAR WEIGHTCATEGORY-------------

export const borrarweightCategory = async (id) => {
  return APIGeneral.delete("/weightCategory/${id}", formData)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------------------------ORDENAR GENERO----------------------
export const ordenarWeightGenero = async (gender) => {
    return APIGeneral.get(`weightCategory/sort/${gender}`)
       .then((res) => res)
       .catch((error) => error);}
 

//! ------------------------------------LIFTERS IN CATEGORY----------------------

export const liftersInCategory = async (id) => {
    return APIGeneral.get(`weightCategory/LiftersInCategory/${id}`)
       .then((res) => res)
       .catch((error) => error);}
