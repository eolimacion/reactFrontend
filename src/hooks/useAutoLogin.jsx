import { Navigate } from "react-router-dom";
import { autoLoginUser } from "../services/user.service";
import { useAuth } from "../context/authContext";

export const useAutoLogin = async (allUser) => {
const {login} = useAuth(); //lo traigo asi porque me gusta mas desde el mismo componente equipo
  try {
    console.log(allUser, "complete user info")
    const customFormData = {
      email: allUser?.data?.user?.email,
      password: allUser?.data?.user?.password
    };

//ex Vamos a recibir toda la info del usuario por allUser, que se
//ex settea en el register, y no pasa por el
console.log("hola!", customFormData)
    const sentAutoLoginData = await autoLoginUser(customFormData);
    if (sentAutoLoginData?.status == 200) {
      const { name, email, image, isVerified, gender, interestedIn } = sentAutoLoginData.data.user;
      console.log("Es un 200", sentAutoLoginData?.data)
        
      const customUser = {
        token: sentAutoLoginData.data.token,
        name,
        email,
        image,
        isVerified,
        _id: sentAutoLoginData.data.user._id,
        gender,
        interestedIn,
      };

      const userToJSONString = JSON.stringify(customUser)
      login(userToJSONString);
       switch (customUser.interestedIn) {
        case "motogp":
            return <Navigate to="/motogp"/>
        case "powerlifting":
            return <Navigate to="/powerlifting"/>
        case "fifa":
            return <Navigate to="/fifa"/>
        default:
            break;
       }
    } else {
        return <Navigate to="/login"/>
    }
} catch (error) {
    return (
        error.message
    )
}
}