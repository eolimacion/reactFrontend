import { updateToken } from "../utils/updateToken";
import { extraConfig } from "./serviceApiGeneral.config";
const APIGeneral = extraConfig();


//??-------------------------------------RUTAS RIDERS------------------------------------------------



//! ------------------------CREAR RIDER------------------------------

export const createRider = async (formData) => {
    return APIGeneral.post("/rider/", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => res)
      .catch((error) => error);
  };

//! ------------------------------- BUSCAR RIDER id ---------------------------------

export const buscarRiderId = async (id) => {
   return APIGeneral.get(`/rider/${id}`)
      .then((res) => res)
      .catch((error) => error);}


//!  ------------------------------- BUSCAR TODOS -------------------------------

export const buscarAllRider = async () => {
   return APIGeneral.get(`/rider/`)
      .then((res) => res)
      .catch((error) => error);}


//! -------------------------------- BUSCAR NOMBRE ----------------------------------

export const buscarRiderName = async (name) => {
    return APIGeneral.get(`rider/byName${name}`)
       .then((res) => res)
       .catch((error) => error);}
 

//! -------------------------------- ACTUALIZAR RIDER -------------------------------------

export const actualizarRider = async (id) => {
    return APIGeneral.patch(`/rider/${id}`)
       .then((res) => res)
       .catch((error) => error);}
 


//! ------------------------------------ BORRAR RIDER-------------

export const borrarRider = async (id) => {
  return APIGeneral.delete("/rider/${id}", formData)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------------------------FILTRAR ASCENDENTE----------------------
export const buscarRiderAscendente = async (stat) => {
    return APIGeneral.get(`rider/sortascending/riders/${stat}`)
       .then((res) => res)
       .catch((error) => error);}
 

//! ------------------------------------FILTRAR DESCENDENTE----------------------

export const buscarRiderDescendente = async (stat) => {
    return APIGeneral.get(`rider/descendcending/riders/${stat}`)
       .then((res) => res)
       .catch((error) => error);}


       //! ------------------------------------FILTER----------------------

export const fitrarRider = async (filter,gt,lt) => {
    return APIGeneral.get(`rider/filter/riders/${filter,gt,lt}`)
       .then((res) => res)
       .catch((error) => error);}
