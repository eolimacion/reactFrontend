import { updateToken } from "../utils/updateToken";
import { extraConfig } from "./serviceApiGeneral.config";
const APIGeneral = extraConfig();


//??-------------------------------------RUTAS CIRCUITS------------------------------------------------



//! ------------------------CREAR CIRCUIT------------------------------

export const createCircuit = async (formData) => {
    return APIGeneral.post(`/circuit/`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => res)
      .catch((error) => error);
  };

//! ------------------------------- BUSCAR CIRCUIT id ---------------------------------

export const buscarCircuitId = async (id) => {
   return APIGeneral.get(`/circuit/${id}`)
      .then((res) => res)
      .catch((error) => error);}


//!  ------------------------------- BUSCAR TODOS -------------------------------

export const buscarAllCircuit = async () => {
   return APIGeneral.get(`/circuit/`)
      .then((res) => res)
      .catch((error) => error);}


//! -------------------------------- BUSCAR NOMBRE ----------------------------------

export const buscarCircuitName = async (name) => {
    return APIGeneral.get(`circuit/byName${name}`)
       .then((res) => res)
       .catch((error) => error);}
 

//! -------------------------------- ACTUALIZAR CIRCUIT -------------------------------------

export const actualizarCircuit = async (id) => {
    return APIGeneral.patch(`/circuit/${id}`)
       .then((res) => res)
       .catch((error) => error);}
 


//! ------------------------------------ BORRAR CIRCUIT-------------

export const borrarCircuit = async (id) => {
  return APIGeneral.delete(`/circuit/${id}`, formData)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------------------------FILTRAR ASCENDENTE----------------------
export const buscarCircuitAscendente = async (stat) => {
    return APIGeneral.get(`circuit/sortascending/circuits/${stat}`)
       .then((res) => res)
       .catch((error) => error);}
 

//! ------------------------------------FILTRAR DESCENDENTE----------------------

export const buscarCircuitDescendente = async (stat) => {
    return APIGeneral.get(`circuit/sortdescending/circuits/${stat}`)
       .then((res) => res)
       .catch((error) => error);}


       //! ------------------------------------FILTER----------------------

export const fitrarCircuit = async (filter,gt,lt) => {
    return APIGeneral.get(`circuit/filter/circuits/${filter}/${gt}/${lt}`)
       .then((res) => res)
       .catch((error) => error);}
       //! ------------------------------------AVERAGE----------------------

export const averageCircuit = async (stat) => {
    return APIGeneral.get(`circuit/average${stat}`)
       .then((res) => res)
       .catch((error) => error);}
