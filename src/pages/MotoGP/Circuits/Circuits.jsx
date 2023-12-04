import React, { useEffect, useState } from 'react';
import './Circuits.css';
import { CardCircuit, CardInTheGallery, Finder, FormCircuits, GaleriaReducida, Loading } from '../../../components';
import { buscarAllCircuit } from '../../../services/circuit.service';
import { usePaginacion } from '../../../hooks/usePaginacion';
import { GaleriaReducidaCircuits } from '../../../components/GaleriaReducidaCircuits/GaleriaReducidaCircuits';
import Button from '@mui/material/Button';
import { buscarAllRider } from '../../../services/rider.service';


export const Circuits = () => {
  const [galleryLoading, setGalleryLoading] = useState(false);
  const [showForm, setShowForm] = useState(false); // Nuevo estado para controlar la visualización del formulario
  const [showGallery, setShowGallery] = useState(true); // Cambiado a false para no mostrar Gallery por defecto
  const [allCircuits, setAllCircuits] = useState([]);
  const [res, setRes] = useState(null)
  const [allRiders, setAllRiders] = useState([]);

  const { galeriaItems, ComponentPaginacion, setGaleriaItems, dataPag} = usePaginacion()

  const sportPath = '/motogp/circuits/'

  const getAllCircuits = async () => {
    const circuitsData = await buscarAllCircuit();
    setAllCircuits(circuitsData || []);
    setGalleryLoading(false);
  }
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
    getAllCircuits();
    getAllRiders()
  }, []);

  useEffect(() => {
    if(res?.status == 200){
      setGaleriaItems(res?.data)
    }
  }, [allCircuits, res])

  const handleButtonClick = () => {
    // Cambia el estado para mostrar u ocultar el formulario al hacer clic en el botón
    setShowForm(!showForm);
    setShowGallery(!showGallery)
  };
  const handleGalleryButtonClick = () => {
    setShowGallery(true);
    setShowForm(false);
  };

  return (
    <div className="Allpage">
    {galleryLoading ? (
      <Loading/>
    ) : (
      <div className="galeriaPreview">
        <GaleriaReducida galeriaItems={allRiders?.data} tipoCarta={"redRiders"} sportPathRED="/motogp/riders/"/>
      </div>
    )}
    <Finder setShowGallery={setShowGallery} setShowForm={setShowForm} setRes={setRes} res={res} page = "circuits"/>
    <section className="mainPage">
      {galleryLoading ? (
        <Loading/>
      ) : (
        <> 
         <div className='galleryDiv'>
        {!showForm && <ComponentPaginacion/>}
          <div className="displayImage">
            {showForm ? <FormCircuits /> : showGallery && 
            (res && dataPag?.map((circuit) => (
              <div className='singleCardItem' key={circuit._id}>
              <CardCircuit image={circuit.image} name={circuit.name} key={circuit._id} id={circuit._id} sportPath={sportPath}/>
              </div>
            )))}
          </div>
          <div className="bottonButton">

          <Button size="large" style= {{backgroundColor: 'var(--color-background)', margin: '1.5rem', color: ' var(--color-h)', fontWeight: '600'}} 
              variant="contained" onClick={handleButtonClick}>CREATE FORM
 
</Button>
<Button size="large" style= {{backgroundColor: 'var(--color-background)', margin: '1.5rem', color: ' var(--color-h)', fontWeight: '600'}} 
              variant="contained" onClick={handleGalleryButtonClick}>SHOW GALLERY
 
</Button>


</div>
</div>
        </>
      )}
    </section>
  </div>
  );
};