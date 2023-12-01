import React, { useEffect, useState } from 'react';
import './Circuits.css';
import { CardInTheGallery, Finder, FormCircuits, GaleriaReducida } from '../../../components';
import { buscarAllCircuit } from '../../../services/circuit.service';
import { usePaginacion } from '../../../hooks/usePaginacion';


export const Circuits = () => {
  const [galleryLoading, setGalleryLoading] = useState(false);
  const [showForm, setShowForm] = useState(false); // Nuevo estado para controlar la visualización del formulario
  const [showGallery, setShowGallery] = useState(true); // Cambiado a false para no mostrar Gallery por defecto
  const [allCircuits, setAllCircuits] = useState([]);
  const [res, setRes] = useState(null)

  const { galeriaItems, ComponentPaginacion, setGaleriaItems, dataPag} = usePaginacion()

  const sportPath = '/motogp/circuits/'

  const getAllCircuits = async () => {
    const circuitsData = await buscarAllCircuit();
    setAllCircuits(circuitsData || []);
    setGalleryLoading(false);
  }

  useEffect(() => {
    getAllCircuits();
    console.log(allCircuits)
  }, []);

  useEffect(() => {
    if(res?.status == 200){
      setGaleriaItems(res?.data)
    }
  }, [res])

  const handleButtonClick = () => {
    // Cambia el estado para mostrar u ocultar el formulario al hacer clic en el botón
    setShowForm(!showForm);
    setShowGallery(false)
  };


  return (
    <div className="Allpage">
    {galleryLoading ? (
      <p>Cargando la galería...</p>
    ) : (
      <div className="galeriaPreview">
        {showGallery ? <GaleriaReducida galeriaItems={allCircuits?.data} />: 'Galería pequeña'}
      </div>
    )}
    <Finder setShowGallery={setShowGallery} setShowForm={setShowForm} setRes={setRes} res={res} page = "circuits"/>
    <section className="mainPage">
      {galleryLoading ? (
        <p>Cargando...</p>
      ) : (
        <> {!showForm && <ComponentPaginacion/>}
          <div className="displayImage">
            {showForm ? <FormCircuits /> : showGallery && 
            (res && dataPag?.map((circuit) => (
              <div className='singleCardPlayer'>
              <CardInTheGallery image={circuit.image} name={circuit.name} key={circuit._id} id={circuit._id} sportPath={sportPath}/>
              </div>
            )))}
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