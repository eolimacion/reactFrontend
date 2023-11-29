import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export const Protected = ({children}) => {
    const {user, isDeletedUser} = useAuth();// nos traemos el usuario que esta logado
    if(isDeletedUser){
        return <Navigate to="/register"/>
    }
    if(user == null || user?.check == false) {// si no hay usuario o no esta chequeado lo mandamos al login
        return <Navigate to="/login"/>
    }
  return children;// si todo es correcto lo dejamos entrar en las rutas que tenga en children
}
