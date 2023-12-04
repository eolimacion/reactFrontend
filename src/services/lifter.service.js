import { extraConfig } from "./serviceApiGeneral.config";

//!!----------------------> Get All Lifters
export const getAllLifters = async () => {
  const APIGeneral = extraConfig();
  return APIGeneral.get(`/lifter/`)
    .then((res) => res)
    .catch((error) => error);
};

//!!----------------------> Get By Name
export const getNameLifters = async (name) => {
  const APIGeneral = extraConfig();
  return APIGeneral.get(`/lifter/sort/${name}`, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => error);
};

//!!---------------------->get my GL
export const getByGL = async (stat) => {
  const APIGeneral = extraConfig();
  return APIGeneral.get(`/lifter/getByGL/`)
    .then((res) => res)
    .catch((error) => error);
};
//!!---------------------->get my ID
export const lifterByID = async (id) => {
  const APIGeneral = extraConfig();
  return APIGeneral.get(`/lifter/${id}`)
    .then((res) => res)
    .catch((error) => error);
};


//!!----------------------> Filtrar
export const filterLifters = async (filter, gt, lt) => {
  const APIGeneral = extraConfig();
  return APIGeneral.get(`/lifter/filter/lifter/${filter}/${gt}/${lt}`, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => error);
};

//!!----------------------> Sort Descending (o alfabéticamente) by Stat
export const sortDescendingLifters = async (stat) => {
  const APIGeneral = extraConfig();
  return APIGeneral.get(`/lifter/sortdescending/lifter/${stat}`, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => error);

};


//!!----------------------> Sort Ascending (o de z - a) by Stat
export const sortAscendingLifters = async (stat) => {
  const APIGeneral = extraConfig();
  return APIGeneral.get(`/lifter/sortascending/lifter/${stat}`, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => error);
};



//? AUTENTICADOS ------------------------------------------------------------------------

//! -------------------> Crear  [Admin]
export const createLifterService = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.post(`/lifter/`, formData)
    .then((res) => res)
    .catch((error) => error);
};

//! -------------------> Eliminar [Admin]
export const deleteLifter = async (id) => {
  const APIGeneral = extraConfig();
  return APIGeneral.delete(`/lifter/${id}`)
    .then((res) => res)
    .catch((error) => error);
};

//! -------------------------------- ACTUALIZAR WEIGHTCATEGORY -------------------------------------

export const updateLifter = async (id) => {
  const APIGeneral = extraConfig();
  return APIGeneral.patch(`/lifter/update/${id}`)
    .then((res) => res)
    .catch((error) => error);
};
//! -------------------------------- ACTUALIZAR WEIGHTCATEGORY -------------------------------------

export const addLifters = async (id) => {
  const APIGeneral = extraConfig();
  return APIGeneral.patch(`/lifter/addWeightCategory/${id}`)
    .then((res) => res)
    .catch((error) => error);
};
