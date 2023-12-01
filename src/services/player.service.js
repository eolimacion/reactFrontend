import { extraConfig } from "./serviceApiGeneral.config";

//!!----------------------> Get All Players
export const getAllPlayers = async () => {
  const APIGeneral = extraConfig();
  console.log("entro al service de getAllPlayers");
  return APIGeneral.get("/players/", {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => error);
};

//!----------------------> GET BY ID PLAYER

export const getByID = async (id) => {
  const APIGeneral = extraConfig();
  console.log(id);
  return APIGeneral.get(`/players/${id}`)
    .then((res) => res)
    .catch((error) => error);
};

//!!----------------------> Get By Name
export const getNamePlayers = async (playerName) => {
  const APIGeneral = extraConfig();
  console.log("entro al service de getNamePlayers");
  console.log(playerName);
  return APIGeneral.get(`/players/byName/${playerName}`, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => error);
};

//!!----------------------> Sort Descending (o alfabéticamente) by Stat
export const sortDescendingPlayers = async (stat) => {
  const APIGeneral = extraConfig();
  return APIGeneral.get(`/players/sortdescending/players/${stat}`, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => error);
};

//!!----------------------> Sort Ascending (o de z - a) by Stat
export const sortAscendingPlayers = async (stat) => {
  const APIGeneral = extraConfig();
  return APIGeneral.get(`/players/sortascending/players/${stat}`, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => error);
};

//!!----------------------> Filtrar
export const filterPlayers = async (filter, gt, lt) => {
  const APIGeneral = extraConfig();
  return APIGeneral.get(`/players/filter/players/${filter}/${gt}/${lt}`, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => error);
};

//!!----------------------> Filtrar por Enums (position || preferred foot)
export const filterEnumPlayers = async (filter, value) => {
  const APIGeneral = extraConfig();
  return APIGeneral.get(`/players/filterenum/${filter}/${value}`, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => error);
};

//!!----------------------> Divisón de géneros en los likes del jugador
export const genderLikePlayers = async (playerId) => {
  const APIGeneral = extraConfig();
  return APIGeneral.get(`/players/genderlike/${playerId}`, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => error);
};

//? AUTENTICADOS ------------------------------------------------------------------------

//! -------------------> Crear Jugador [Admin]
export const createPlayerService = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.post("/players/", formData)
    .then((res) => res)
    .catch((error) => error);
};

//! -------------------> Eliminar Jugador [Admin]
export const deletePlayer = async (playerId) => {
  const APIGeneral = extraConfig();
  return APIGeneral.delete(`/players/${playerId}`)
    .then((res) => res)
    .catch((error) => error);
};
