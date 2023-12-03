import React, { useState } from "react";
import { CardInTheGallery } from "../CardInTheGallery/CardInTheGallery";
import "./GaleriaReducida.css";
import { CardRider } from "../CardRider/CardRider";
import { Link } from "react-router-dom";

export const GaleriaReducida = ({ galeriaItems,tipoCarta,id,sportPathRED }) => {
  const path = `${sportPathRED}`
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const sportPath = `/motogp/riders/`
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

  return (
    <>
    <div className="galeriaReducida">
        <button
          className={`previewButton ${currentPage === 1 ? "disabled" : ""}`}
          onClick={prevPage}
          disabled={currentPage === 1}
        >
<span class="material-symbols-outlined arrow">
arrow_back
</span>
        </button>
      <div className="noSe">
        {currentItems?.map((item) => (
            <Link to={path}>
          <img className={tipoCarta} src={item.image} alt={item.name} id={item._id}/>
          </Link>
        ))}
      </div>
      <button
          className={`previewButton ${
            currentPage === totalPages ? "disabled" : ""
          }`}
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
<span class="material-symbols-outlined arrow">
arrow_forward
</span>
        </button>
     
      </div>
    </>
  );
};
