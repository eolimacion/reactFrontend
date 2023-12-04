import { useState } from "react";

export const usePaginacion = (num) => {
  const [galeriaItems, setGaleriaItems] = useState([]);
  const itemsPerPage = num||6;
  const [currentPage, setCurrentPage] = useState(1);

  const currentItems = galeriaItems?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  //? Calcular el número total de páginas => elementos en la res / elementos que queremos x pagina = paginas que necesitamos
  const totalPages = Math.ceil((galeriaItems?.length || 0) / itemsPerPage);

  //? nextPage => pasa de página cuando le das al botón (siempre que no estemos en la última)
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  //? prevPage => vuelve a la página anterior cuando le das al botón (siempre que no estés en la 1a)
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return {
    ComponentPaginacion: () => (
      <>
        <div className="botonesPaginacion">
          <button
            className={`previewButton ${currentPage === 1 ? "disabled" : ""}`}
            id={`${currentPage === 1 ? "disabled" : "active"}`}
            onClick={() => {
              prevPage();
              // Llama a la función proporcionada por la prop
            }}
            disabled={currentPage === 1}
          >
            <span className="material-symbols-outlined arrow">
              arrow_back
            </span>
          </button>
          <p>{currentPage}</p>
          <button
            className={`previewButton ${
              currentPage === totalPages ? "disabled" : ""
            }`}
            id={`${currentPage === totalPages ? "disabled" : "active"}`}
            onClick={() => {
              nextPage();
             
            }}
            disabled={currentPage === totalPages}
          >
            <span className="material-symbols-outlined arrow">
              arrow_forward
            </span>
          </button>
        </div>
      </>
    ),
    dataPag: currentItems,
    setGaleriaItems,
    itemsPerPage
  };}