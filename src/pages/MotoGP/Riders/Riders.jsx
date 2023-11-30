import React, { useState } from 'react';
import './Riders.css';

export const Riders=()=> {
  const [data, setData] = useState(null);
  const [galleryLoading, setGalleryLoading] = useState(false);
  const [mainLoading, setMainLoading] = useState(false);
  
    return (
      <div className="Allpage">
      {galleryLoading ? (
        <p>Cargando la galería...</p>
      ) : (
        <div className="galeriaPreview">
          Galeria pequeña
        </div>
      )}
      <div className="buscadorMario">buscador de Mario</div>
      <section className="mainPage">
        {mainLoading ? (
          <p>Cargando...</p>
        ) : (
          < >
            <div className="displayImage">
            Aqui se mostraria la galeria
            </div>
            <aside className="columnaEnlaces">
              <div className="seccionColumna seccionUno">uno</div>
              <div className="seccionColumna seccionDos">dos</div>
              <div className="seccionColumna seccionTres">tres</div>
            </aside>
          </>
        )}
      </section>
    </div>
    );
  }