import { useEffect, useState } from "react";
import { MiniUserComponent } from "./MiniUserComponent";

export const FollowedComponent = ({ followed }) => {
  const baseItemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(null);
  const totalPages = Math.ceil(followed?.length / baseItemsPerPage);
  const [isReady, setIsReady] = useState(false);

  //al slice le tengo que pasar el punto de partida y el punto de salida,
  //asi que necesito tener el numero de pagina * baseItems para saber el ultimo, y
  //el numero de pagina * baseItems menos 10 para saber el primero

  const changePagination = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      updateDataPerPage(newPage);
    }
  };

  const updateDataPerPage = (newPage) => {
    //le tengo que pasar el array de cosas que voy a pintar,
    //tambien un setState para que almacene lo que hay en cada pagina, y un setState
    //que le indica cuantos elementos por pagina va a pintar (la base)
    let lastItem = baseItemsPerPage * newPage;
    let firstItem = baseItemsPerPage * newPage - baseItemsPerPage;
    const slicedItems = followed?.slice(firstItem, lastItem);
    setDataPerPage(slicedItems);
  };

  useEffect(() => {
    updateDataPerPage(currentPage);
  }, [currentPage, followed]);

  return (
    <>
      <div className="topProfileInfo">
        <h2>followers</h2>
        <div className="forwardBackward">
          <button
            className="profileButton"
            onClick={() => changePagination(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Backward
          </button>

          {/* Forward Button */}
          <button
            className="profileButton"
            onClick={() => changePagination(currentPage + 1)}
            disabled={
              currentPage === totalPages || followed?.length < baseItemsPerPage
            }
          >
            Forward
          </button>
        </div>
      </div>
      <div className="bottomProfileInfo">
        {dataPerPage &&
          dataPerPage?.map((item) => (
            <MiniUserComponent data={item} key={item._id} />
          ))}
      </div>
    </>
  );
};
