import Swal from 'sweetalert2';

export const useErrorFinder = (res, setOkFindPlayer, setRes) => {
    if (res?.status == 200) {
           setOkFindPlayer(() => true);
           Swal.fire({
             icon: "success",
             title: "Successful fetching",
             showConfirmButton: false,
             timer: 1500,
           });
           setRes({});}

    if (res?.response?.status == 404) {
        Swal.fire({
            icon: "error",
            title: "Error 404",
            showConfirmButton: false,
            timer: 3000,
          });
          setRes({});
    }

    if (res?.response?.status == 500) {
        Swal.fire({
            icon: "error",
            title: "Error 500",
            showConfirmButton: false,
            timer: 3000,
          });
          setRes({});
    }
    
  };