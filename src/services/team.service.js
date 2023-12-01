import { updateToken } from "../utils/updateToken";
import { extraConfig } from "./serviceApiGeneral.config";
const APIGeneral = extraConfig();


//??-------------------------------------RUTAS TEAMS------------------------------------



//! ------------------------CREAR TEAM------------------------------

export const createTeam = async (formData) => {
    return APIGeneral.post("/teams/", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => res)
      .catch((error) => error);
  };

//! ------------------------------- BUSCAR TEAM id ---------------------------------

export const buscarTeamId = async (id) => {
   return APIGeneral.get(`/teams/${id}`)
      .then((res) => res)
      .catch((error) => error);}


//!  ------------------------------- BUSCAR TODOS -------------------------------

export const buscarAllTeam = async () => {
   return APIGeneral.get(`/teams/`)
      .then((res) => res)
      .catch((error) => error);}


//! -------------------------------- BUSCAR NOMBRE ----------------------------------

export const buscarTeamName = async (name) => {
    return APIGeneral.get(`teams/byName/${name}`)
       .then((res) => res)
       .catch((error) => error);}
 

//! -------------------------------- ACTUALIZAR TEAM -------------------------------------

export const actualizarTeam = async (id) => {
    return APIGeneral.patch(`/teams/${id}`)
       .then((res) => res)
       .catch((error) => error);}
 


//! ------------------------------------ BORRAR TEAM-------------

export const borrarTeam = async (id) => {
  return APIGeneral.delete(`/teams/${id}`, formData)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------------------------FILTRAR ASCENDENTE----------------------
export const buscarTeamAscendente = async (stat) => {
    return APIGeneral.get(`teams/sortascending/teams/${stat}`)
       .then((res) => res)
       .catch((error) => error);}
 

//! ------------------------------------FILTRAR DESCENDENTE----------------------

export const buscarTeamDescendente = async (stat) => {
    return APIGeneral.get(`teams/descendcending/teams/${stat}`)
       .then((res) => res)
       .catch((error) => error);}


       //! ------------------------------------FILTER----------------------

export const fitrarTeam = async (filter,gt,lt) => {
    return APIGeneral.get(`teams/filter/teams/${filter,gt,lt}`)
       .then((res) => res)
       .catch((error) => error);}
       //! ------------------------------------AVERAGE----------------------

export const averageTeam = async (stat,teamId) => {
    return APIGeneral.get(`teams/average${stat,teamId}`)
       .then((res) => res)
       .catch((error) => error);}
