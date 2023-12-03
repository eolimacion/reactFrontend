import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MiniUserComponent } from "../ProfileMiniComponents/MiniUserComponent";
import { usePaginacion } from "../../hooks/usePaginacion";

export const FollowedComponent = ({ followed }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(null);
  const totalPages = Math.ceil(followed?.length / baseItemsPerPage);
  const [galleryLoading, setGalleryLoading] = useState(false);
  const { galeriaItems, ComponentPaginacion, dataPag, setGaleriaItems } =
    usePaginacion();


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
        <h2>FOLLOWING</h2>
        <div className="forwardBackward">
        {!galleryLoading && <ComponentPaginacion />}
        </div>
        </div>
      
      <div className="bottomProfileInfo">
        {dataPerPage &&
          dataPerPage?.map((item) =>
          <MiniUserComponent data={item} key={item._id} />
          )}
</div>
     
    </>
  );
};
