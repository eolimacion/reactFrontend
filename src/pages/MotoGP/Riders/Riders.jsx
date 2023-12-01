import React, { useEffect, useState } from 'react';
import './Riders.css';
import { CardInTheGallery, Finder, FormRiders, GaleriaReducida } from '../../../components';
import { buscarAllRider } from '../../../services/rider.service';
import { PodiumContainer } from '../../../components/PodiumContainer/PodiumContainer';


export const Riders = () => {
  const [galleryLoading, setGalleryLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showGallery, setShowGallery] = useState(true);
  const [allRiders, setAllRiders] = useState([]);
  const [showPodium, setShowPodium] = useState(false);
  const [res, setRes] = useState(null)

  const getAllRiders = async () => {
    try {
      setGalleryLoading(true);
      const ridersData = await buscarAllRider();
      setAllRiders(ridersData || []);
    } catch (error) {
      console.error('Error al obtener datos de riders:', error);
    } finally {
      setGalleryLoading(false);
    }
  };

  useEffect(() => {
    getAllRiders();
  }, []);

  useEffect(() => {
    console.log(allRiders);
    console.log(res)
  }, [allRiders, res]);

  const handlebuttonPodiumClick = () => {
    setShowGallery(false)
    setShowForm(false)
    setShowPodium(true)
  }

  const handleButtonClick = () => {
    setShowForm(!showForm);
    setShowGallery(false);
  };



  return (
    <div className="Allpage">
      {galleryLoading ? (
        <p>Cargando la galería...</p>
      ) : (
        <div className="galeriaPreview">
          <GaleriaReducida galeriaItems={allRiders?.data} />
        </div>
      )}
      <Finder setShowGallery={setShowGallery} setShowForm={setShowForm} setRes={setRes} res={res} page = "riders"/>
      <section className="mainPage">
        {galleryLoading ? (
          <p>Cargando...</p>
        ) : (
          <>
            <div className="displayImage">
            {showForm ? <FormPlayers /> : showGallery && 
            (res && res?.data?.map((player) => (
              <div className='singleCardPlayer'>
              <CardInTheGallery image={player.image} name={player.name} key={player._id}/>
              </div>
            )))}
          </div>
            <aside className="columnaEnlaces">
              <div className="seccionColumna seccionUno">
                <button onClick={handlebuttonPodiumClick}>Show Podiums</button>
              </div>
              <div className="seccionColumna seccionDos">Dos</div>
              <div className="seccionColumna seccionTres">
                <button onClick={handleButtonClick}>
                  Mostrar/ocultar formulario
                </button>
              </div>
            </aside>
          </>
        )}
      </section>
    </div>
  );
};