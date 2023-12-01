import { useState } from "react";

export const usePaginacion = () => {
  const [galeriaItems, setGaleriaItems] = useState([]);
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const currentItems = galeriaItems?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  // Calcular el número total de páginas
  const totalPages = Math.ceil((galeriaItems?.length || 0) / itemsPerPage);
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return {
    ComponentPaginacion: () => (
      <>
        <div className="botones">
          <button
            className={`previewButton ${currentPage === 1 ? "disabled" : ""}`}
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            A
          </button>
          <button
            className={`previewButton ${
              currentPage === totalPages ? "disabled" : ""
            }`}
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            S
          </button>
        </div>
      </>
    ),
    dataPag: currentItems,
    setGaleriaItems,
  };
};
