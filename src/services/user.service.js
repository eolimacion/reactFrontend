import { updateToken } from "../utils/updateToken"
import { APIuser } from "./serviceApiUser.config";
    
    //! -------------------> Get Fav Players [User]
    export const getUsersFavPlayers = async (userId) => {
      return APIuser.get(`/users/favPlayers/${userId}`, {
        headers: {
          Authorization: `Bearer ${updateToken()}`,
        },
      })
        .then((res) => res)
        .catch((error) => error);
    };

    //! -------------------> Get Fav Riders [User]
    export const getUsersFavRiders = async (userId) => {
      return APIuser.get(`/users/favRiders/${userId}`, {
        headers: {
          Authorization: `Bearer ${updateToken()}`,
        },
      })
        .then((res) => res)
        .catch((error) => error);
    };

    //! -------------------> Get Fav Lifters [User]
    export const getUsersFavLifters = async (userId) => {
      return APIuser.get(`/users/favLifters/${userId}`, {
        headers: {
          Authorization: `Bearer ${updateToken()}`,
        },
      })
        .then((res) => res)
        .catch((error) => error);
    };