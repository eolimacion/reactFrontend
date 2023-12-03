import { extraConfig } from "./serviceApiGeneral.config";

//??-------------------------------------RUTAS TEAMS------------------------------------

//! ------------------------CREAR TEAM------------------------------

export const createTeam = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.post("/teams/", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------------------- BUSCAR TEAM id ---------------------------------

export const buscarTeamId = async (id) => {
  const APIGeneral = extraConfig();
  return APIGeneral.get(`/teams/${id}`)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------------------- BUSCAR TEAM id ---------------------------------

export const buscarTeamIdNotPopulated = async (id) => {
  const APIGeneral = extraConfig();
  return APIGeneral.get(`/teams/notPopulated/${id}`)
    .then((res) => res)
    .catch((error) => error);
};

//!  ------------------------------- BUSCAR TODOS -------------------------------

export const buscarAllTeam = async () => {
  const APIGeneral = extraConfig();
  return APIGeneral.get(`/teams/`)
    .then((res) => res)
    .catch((error) => error);
};

//! -------------------------------- BUSCAR NOMBRE ----------------------------------

export const buscarTeamName = async (name) => {
  const APIGeneral = extraConfig();
  return APIGeneral.get(`teams/byName/${name}`)
    .then((res) => res)
    .catch((error) => error);
};

//! -------------------------------- ACTUALIZAR TEAM -------------------------------------

export const actualizarTeam = async (id) => {
  const APIGeneral = extraConfig();
  return APIGeneral.patch(`/teams/${id}`)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------------------------ BORRAR TEAM-------------

export const borrarTeam = async (id) => {
  const APIGeneral = extraConfig();
  return APIGeneral.delete(`/teams/${id}`, formData)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------------------------FILTRAR ASCENDENTE----------------------
export const buscarTeamAscendente = async (stat) => {
  const APIGeneral = extraConfig();
  return APIGeneral.get(`teams/sortascending/teams/${stat}`)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------------------------FILTRAR DESCENDENTE----------------------

export const buscarTeamDescendente = async (stat) => {
  const APIGeneral = extraConfig();
  return APIGeneral.get(`teams/sortdescending/teams/${stat}`)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------------------------FILTER----------------------

export const fitrarTeam = async (filter, gt, lt) => {
  const APIGeneral = extraConfig();
  return APIGeneral.get(`teams/filter/teams/${filter}/${gt}/${lt}`)
    .then((res) => res)
    .catch((error) => error);
};
//! ------------------------------------AVERAGE----------------------

export const averageTeam = async (stat, teamId) => {
  const APIGeneral = extraConfig();
  return APIGeneral.get(`teams/average${(stat, teamId)}`)
    .then((res) => res)
    .catch((error) => error);
};
