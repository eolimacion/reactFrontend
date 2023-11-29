import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export const ProtectedCheckChildren = ({children}) => {
    const {allUser, user} = useAuth(); //nos traemos el estado del usuario tanto si ha entrado por el register(allUser) como por el login(user)
    if (allUser?.data?.user?.check == true || user.check == true){
        return <Navigate to="/dashboard"/>;
    }
    if (user == null && allUser?.data?.confirmationCode === ""){ //si no hay usuario o esta en el estado inicial por haber recargado la pag de checkCode pues lo llevamos al login
        return <Navigate to="/login"/>
    }
  return children;
}
