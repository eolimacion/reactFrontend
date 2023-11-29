import { updateToken } from "../utils/updateToken";
import { extraConfig } from "./serviceApiGeneral.config";
const APIGeneral = extraConfig();


 //!!----------------------> Get All Players
  export const getAllPlayers = async () => {
    return APIGeneral.get("/players/", {
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => res)
      .catch((error) => error);
  };

 //!!----------------------> Get By Name
  export const getNamePlayers = async (playerName) => {
    return APIGeneral.get(`/players/byName/${playerName}`, {
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => res)
      .catch((error) => error);
  };

 //!!----------------------> Sort Descending (o alfabéticamente) by Stat
  export const sortDescendingPlayers = async (stat) => {
    return APIGeneral.get(`/players/sortdescending/players/${stat}`, {
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => res)
      .catch((error) => error);
  };

 //!!----------------------> Sort Ascending (o de z - a) by Stat
  export const sortAscendingPlayers = async (stat) => {
    return APIGeneral.get(`/players/sortascending/players/${stat}`, {
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => res)
      .catch((error) => error);
  };

 //!!----------------------> Filtrar
  export const filterPlayers = async (filter, gt, lt) => {
    return APIGeneral.get(`/players/filter/players/${filter}/${gt}/${lt}`, {
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => res)
      .catch((error) => error);
  };

 //!!----------------------> Filtrar por Enums (position || preferred foot)
  export const filterEnumPlayers = async (filter, value) => { 
    return APIGeneral.get(`/players/filterenum/${filter}/${value}`, {
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => res)
      .catch((error) => error);
  };

 //!!----------------------> Divisón de géneros en los likes del jugador
  export const genderLikePlayers = async (playerId) => {
    return APIGeneral.get(`/players/genderlike/${playerId}`, {
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => res)
      .catch((error) => error);
  };

//? AUTENTICADOS ------------------------------------------------------------------------

  //! -------------------> Crear Jugador [Admin]
  export const createPlayerService = async (formData) => {
    return APIGeneral.post("/players/", formData, {
      headers: {
        Authorization: `Bearer ${updateToken()}`,
      },
    })
      .then((res) => res)
      .catch((error) => error);
  };

  //! -------------------> Eliminar Jugador [Admin]
  export const deletePlayer = async (playerId) => {
    return APIGeneral.delete(`/players/${playerId}`, {
      headers: {
        Authorization: `Bearer ${updateToken()}`,
      },
    })
      .then((res) => res)
      .catch((error) => error);
  };