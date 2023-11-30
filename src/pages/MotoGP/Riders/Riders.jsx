import React, { useState } from 'react';
import './Riders.css';
import { FormRiders } from '../../../components';

export const Riders = () => {
  const [data, setData] = useState(null);
  const [galleryLoading, setGalleryLoading] = useState(false);
  const [mainLoading, setMainLoading] = useState(false);
  const [showForm, setShowForm] = useState(false); // Nuevo estado para controlar la visualización del formulario

  const handleButtonClick = () => {
    // Cambia el estado para mostrar u ocultar el formulario al hacer clic en el botón
    setShowForm(!showForm);
  };

  return (
   <div className="Allpage">
      {galleryLoading ? (
        <p>Cargando la galería...</p>
      ) : (
        <div className="galeriaPreview">
          Galería pequeña
        </div>
      )}
      <div className="buscadorMario">Buscador de Mario</div>
      <section className="mainPage">
        {mainLoading ? (
          <p>Cargando...</p>
        ) : (
          <>
            <div className="displayImage">
              {showForm ? <FormRiders /> : 'Aquí se mostraría la galería'}
            </div>
            <aside className="columnaEnlaces">
              <div className="seccionColumna seccionUno">Uno</div>
              <div className="seccionColumna seccionDos">Dos</div>
              <div className="seccionColumna seccionTres">
                <button onClick={handleButtonClick}>Mostrar/ocultar formulario</button>
              </div>
            </aside>
          </>
        )}
      </section>
    </div>
  );
};