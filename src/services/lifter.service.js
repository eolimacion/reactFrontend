import { updateToken } from "../utils/updateToken";
import { extraConfig } from "./serviceApiGeneral.config";
const APIGeneral = extraConfig();


 //!!----------------------> Get All Lifters
  export const getAllLifters = async () => {
    return APIGeneral.get("/lifter/",)
      .then((res) => res)
      .catch((error) => error);
  };

 //!!----------------------> Get By Name
  export const getNameLifters = async (name) => {
    return APIGeneral.get(`/lifter/sort/${name}`, {
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => res)
      .catch((error) => error);
  };

 //!!---------------------->get my GL
  export const sortDescendingLifters = async (stat) => {
    return APIGeneral.get(`/lifter/getByGL/`, )
      .then((res) => res)
      .catch((error) => error);
  };
 //!!---------------------->get my ID
  export const lifterByID = async (id) => {
    return APIGeneral.get(`/lifter/${id}/`, )
      .then((res) => res)
      .catch((error) => error);
  };



//? AUTENTICADOS ------------------------------------------------------------------------

  //! -------------------> Crear  [Admin]
  export const createLifterService = async (formData) => {
    return APIGeneral.post("/lifter/", formData, {
      headers: {
        Authorization: `Bearer ${updateToken()}`,
      },
    })
      .then((res) => res)
      .catch((error) => error);
  };

  //! -------------------> Eliminar [Admin]
  export const deleteLifter = async (id) => {
    return APIGeneral.delete(`/lifter/${id}`, {
      headers: {
        Authorization: `Bearer ${updateToken()}`,
      },
    })
      .then((res) => res)
      .catch((error) => error);
  };

   //! -------------------------------- ACTUALIZAR WEIGHTCATEGORY -------------------------------------

export const updateLifter = async (id) => {
    return APIGeneral.patch(`/lifter/update/${id}`,{
      headers: {
        Authorization: `Bearer ${updateToken()}`,
      },
    })
       .then((res) => res)
       .catch((error) => error);}
        //! -------------------------------- ACTUALIZAR WEIGHTCATEGORY -------------------------------------

export const addLifters = async (id) => {
    return APIGeneral.patch(`/lifter/addWeightCategory/${id}`,{
      headers: {
        Authorization: `Bearer ${updateToken()}`,
      },
    })
       .then((res) => res)
       .catch((error) => error);}