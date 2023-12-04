import Swal from "sweetalert2/dist/sweetalert2.all.js";

export const useDeleteError = (res, setRes) => {

  
    if (res?.status == 200) {
      setRes(() => ({}));
      return Swal.fire({
        icon: "success",
        title: "Deleted!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    if (res?.response?.status == 404 || res?.response?.status == 500 ) {
      setRes(() => ({}));
      return Swal.fire({
        icon: "error",
        title: "Error deleting",
        text: "Please, try again",
        showConfirmButton: false,
        timer: 1500,
      });

}
}