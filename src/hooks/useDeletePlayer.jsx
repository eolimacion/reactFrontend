import Swal from "sweetalert2/dist/sweetalert2.all.js";

export const useDeletePlayerError = (res, setRes) => {

    //todo ------------------------- 200 Todo Correcto
    if (res?.status == 200) {
      setRes(() => ({}));
      return Swal.fire({
        icon: "success",
        title: "Player Deleted ✅",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    if (res?.response?.data.includes("Error al eliminar jugador del 11 ideal")) {
      setRes(() => ({}));
      return Swal.fire({
        icon: "error",
        title: "Error deleting player from Elevens",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    if (res?.response?.data.includes("Error al eliminar jugador del user")) {
      setRes(() => ({}));
      return Swal.fire({
        icon: "error",
        title: "Error deleting player from Elevens",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    if (res?.response?.data.includes("Error al eliminar el jugador del equipo")) {
      setRes(() => ({}));
      return Swal.fire({
        icon: "error",
        title: "Error deleting player from Teams",
        showConfirmButton: false,
        timer: 1500,
      });
    }
}