import Swal from "sweetalert2";

export const useErrorLogin = (res, setRes, login, setSuccessfulLogin) => {
console.log(res, "Respuesta en useLoginError")
    if (res?.status == 200) {
        console.log(res.data)
        const updatedUser = {
          token: res.data.token,
          name: res.data.user.name,
          userEmail: res.data.user.userEmail,
          image: res.data.user.image,
          isVerified: res.data.user.isVerified,
          _id: res.data.user._id,
          role: res.data.user.role,
          interestedIn: res.data.user.interestedIn, 
        };
        console.log(updatedUser)
    
        const userString = JSON.stringify(updatedUser);
        login(userString);
        setSuccessfulLogin(() => true);
    
        Swal.fire({
          icon: "success",
          title: "Welcome back to the sports paradise.",
          text: "Succesfully logged in.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    
    
      if (res?.response?.data?.includes("User not found")) {
        setRes(() => ({}));
        Swal.fire({
          icon: "error",
          title: "Sorry!",
          text: "This user is not registered! Try making an account, it's super easy!",
          showConfirmButton: false,
          timer: 3500,
        });
      }
    
    
      if (res?.response?.data?.includes("password is incorrect (does not match)")) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Password is incorrect.",
          showConfirmButton: false,
          timer: 1500,
        });
        setRes(() => ({})); //tip acceder al estado actualizado con una callback
      }
    
      if (res?.response?.status == 500) {
        Swal.fire({
          icon: "error",
          title: "Sorry!",
          text: "We had trouble with the server. Please try again later.",
          showConfirmButton: false,
          timer: 1500,
        });
        setRes(() => ({})); //tip acceder al estado actualizado con una callback!!
      }
}
