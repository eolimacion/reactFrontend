import { extraConfig } from "./serviceApiGeneral.config";




//! -------------------> Eliminar [Admin]
export const deleteComment = async (id) => {
    const APIGeneral = extraConfig();
    return APIGeneral.delete(`/comment/delete/${id}`)
      .then((res) => res)
      .catch((error) => error);
  };