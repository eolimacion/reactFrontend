import Swal from 'sweetalert2';

export const useErrorFinder = (res, setOkFindPlayer, setRes) => {
  // if (res?.status == 200) {
  //         setOkFindPlayer(() => true);
  //         Swal.fire({
  //           icon: "success",
  //           title: "Successful fetching",
  //           showConfirmButton: false,
  //           timer: 1500,
  //         });
  //         }

  if (res?.response?.status == 404 && res.response.data.includes("no se han encontrado jugadores a través de name")) {
      Swal.fire({
          icon: "error",
          title: "Error 404",
          text: "No players with the given name",
          showConfirmButton: false,
          timer: 3000,
        });
  }

  if (res?.response?.status == 404 && (res.response.data.includes("La propiedad por la que quiere ordenar no existe/está mal escrita") || res.response.data.includes("La propiedad por la que quiere filtrar no existe/está mal escrita"))) {
    Swal.fire({
        icon: "error",
        title: "Error 404",
        text: "No matching sorting stat",
        showConfirmButton: false,
        timer: 3000,
      });
  }

  if (res?.response?.status == 404 && res.response.data.includes("No se han encontrado jugadores en la DB/BackEnd")) {
    Swal.fire({
        icon: "error",
        title: "Error 404",
        text: "No players found in the database",
        showConfirmButton: false,
        timer: 3000,
      });
  }

  if (res?.response?.status == 404 && res.response.data.includes("No se han encontrado jugadores con")) {
    Swal.fire({
        icon: "error",
        title: "Error 404",
        text: "No players found with the given conditions",
        showConfirmButton: false,
        timer: 3000,
      });
  }

  if (res?.response?.status == 500) {
      Swal.fire({
          icon: "error",
          title: "Error 500",
          showConfirmButton: false,
          timer: 3000,
        });
  }
  
};