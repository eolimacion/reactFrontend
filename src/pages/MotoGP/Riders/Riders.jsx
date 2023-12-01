import React, { useEffect, useState } from 'react';
import './Riders.css';
import { CardInTheGallery, CardRider, Finder, FormRiders, GaleriaReducida } from '../../../components';
import { buscarAllRider } from '../../../services/rider.service';
import { PodiumContainer } from '../../../components/PodiumContainer/PodiumContainer';
import { usePaginacion } from '../../../hooks/usePaginacion';

export const Riders = () => {
  const [galleryLoading, setGalleryLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showGallery, setShowGallery] = useState(true);
  const [allRiders, setAllRiders] = useState([]);
  const [showPodium, setShowPodium] = useState(false);
  const [res, setRes] = useState(null)

  const { galeriaItems, ComponentPaginacion, setGaleriaItems, dataPag} = usePaginacion()

  const sportPath = `/motogp/riders/`

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
    if(res?.status == 200){
      setGaleriaItems(res?.data)
    }
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
          <> {!showForm && <ComponentPaginacion/>}
            <div className="displayImage">
            {showForm ? <FormRiders /> : showGallery ? 
            (res && dataPag?.map((rider) => (
              <div className='singleCardPlayer'>
              <CardRider image={rider.image} name={rider.name} key={rider._id} id={rider._id} sportPath={sportPath}/>
              </div>
            ))): <PodiumContainer/>}
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