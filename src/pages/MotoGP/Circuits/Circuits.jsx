import React, { useEffect, useState } from 'react';
import './Circuits.css';
import { CardInTheGallery, FormCircuits } from '../../../components';
import { buscarAllCircuit } from '../../../services/circuit.service';


export const Circuits = () => {
  const [data, setData] = useState(null);
  const [galleryLoading, setGalleryLoading] = useState(false);
  const [mainLoading, setMainLoading] = useState(false);
  const [showForm, setShowForm] = useState(false); // Nuevo estado para controlar la visualización del formulario
  const [showGallery, setShowGallery] = useState(true); // Cambiado a false para no mostrar Gallery por defecto
  const [allCircuits, setAllCircuits] = useState([]);

  const getAllCircuits = async () => {
    const circuitsData = await buscarAllCircuit();
    setAllCircuits(circuitsData || []);
    setGalleryLoading(false);
  }

  useEffect(() => {
    getAllCircuits();
    console.log(allCircuits)
  }, []);

  const handleButtonClick = () => {
    // Cambia el estado para mostrar u ocultar el formulario al hacer clic en el botón
    setShowForm(!showForm);
    setShowGallery(false)
  };

  const handleGalleryButtonClick = () => {
    setShowGallery(true);
    setShowForm(false)
  }

  return (
    <div className="Allpage">
    {galleryLoading ? (
      <p>Cargando la galería...</p>
    ) : (
      <div className="galeriaPreview">
        {showGallery ? <p>Galeria cargada</p> : 'Galería pequeña'}
      </div>
    )}
    <div className="buscadorMario">
      <button onClick={handleGalleryButtonClick}>Mostrar Galería</button>
    </div>
    <section className="mainPage">
      {galleryLoading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <div className="displayImage">
            {showForm ? <FormCircuits /> : showGallery &&
            allCircuits?.data?.map((circuit) => (
              <CardInTheGallery image={circuit.image} name={circuit.name} key={circuit._id}/>
            ))}
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