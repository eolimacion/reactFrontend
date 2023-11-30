import React, { useEffect, useState } from 'react';
import './Riders.css';
import { CardInTheGallery, FormRiders,  } from '../../../components';
import { buscarAllRider } from '../../../services/rider.service';

export const Riders = () => {
  const [data, setData] = useState(null);
  const [galleryLoading, setGalleryLoading] = useState(false);
  const [mainLoading, setMainLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showGallery, setShowGallery] = useState(true); // Cambiado a false para no mostrar Gallery por defecto
  const [allRiders, setAllRiders] = useState([]);
 
  const getAllRiders = async () => {
  
    const ridersData = await buscarAllRider();
    setAllRiders(ridersData || []);
    setGalleryLoading(false);
   
  };

  useEffect(() => {
    getAllRiders();
       console.log(allRiders);
  }, []); 
 
  const handleButtonClick = () => {
    setShowForm(!showForm);
    setShowGallery(false)
  };

  const handleGalleryButtonClick = () => {
    setShowGallery(true);
    setShowForm(false);
  };

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
              {showForm ? <FormRiders /> : showGallery &&
              allRiders?.data?.map((rider) => (
                <CardInTheGallery image={rider.image} name={rider.name} key={rider._id}/>
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