import Swal from "sweetalert2";

export const useErrorLogin = (res, setRes, login, setSuccessfulLogin) => {
    if (res?.status == 200) {
        const updatedUser = {     //! ----- gender ?
          token: res.data.token,
          name: res.data.user.name,
          email: res.data.user.email,
          image: res.data.user.image,
          check: res.data.user.check,
          _id: res.data.user._id,
          role: res.data.user.rol,
          interestedIn: res.data.user.interestedIn, 
          gender: res.data.user.gender,
          
        };
    
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
          title: "Wrong password",
          showConfirmButton: false,
          timer: 1500,
        });
        setRes(() => ({})); //tip acceder al estado actualizado con una callback
      }
    
      if (res?.response?.status == 500) {
        Swal.fire({
          icon: "error",
          title: "Interval Server Error",
          text: "There has been an error in our internal servers. Please try again.",
          showConfirmButton: false,
          timer: 1500,
        });
        setRes(() => ({})); //tip acceder al estado actualizado con una callback!!
      }
}
