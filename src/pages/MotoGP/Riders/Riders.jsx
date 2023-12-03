import React, { useEffect, useState } from 'react';
import './Riders.css';
import { CardInTheGallery, CardRider, Finder, FormRiders, GaleriaReducida, Loading } from '../../../components';
import { buscarAllRider } from '../../../services/rider.service';
import { PodiumContainer } from '../../../components/PodiumContainer/PodiumContainer';
import { usePaginacion } from '../../../hooks/usePaginacion';
import Button from '@mui/material/Button';

import SendIcon from '@mui/icons-material/Send';



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

  const handleButtonGallery = () =>{
    setShowGallery(true)
    setShowForm(false)
    setShowPodium(false)
  }


  return (
    <div className="Allpage">
      {galleryLoading ? (
        <Loading />
      ) : (
        <div className="galeriaPreview">
          {/* <GaleriaReducida galeriaItems={allRiders?.data} /> */}
        </div>
      )}
      <Finder setShowGallery={setShowGallery} setShowForm={setShowForm} setRes={setRes} res={res} page = "riders"/>
      <section className="mainPage">
        {galleryLoading ? (
          <Loading />
        ) : (
          <> 
          <div className='galleryDiv'>
          {showGallery && <ComponentPaginacion/>}
            <div className="displayImage">
            {showForm ? <FormRiders /> : showGallery ? 
            (res && dataPag?.map((rider) => (
              <div className='singleCardPlayer'>
              <CardRider image={rider.image} name={rider.name} key={rider._id} id={rider._id} sportPath={sportPath}/>
              </div>
            ))): <PodiumContainer/>}
          </div>
            <div className="bottonButton">

            <Button size="large" style= {{backgroundColor: 'var(--color-background)', margin: '1.5rem', color: ' var(--color-h)', fontWeight: '600'}} 
              variant="contained" onClick={handlebuttonPodiumClick}>Show Podiums
 
</Button>
                
<Button size="large" style= {{backgroundColor: 'var(--color-background)', margin: '1.5rem', color: ' var(--color-h)', fontWeight: '600'}} 
              variant="contained" onClick={handleButtonClick}>Create Form
 
</Button>
<Button size="large" style= {{backgroundColor: 'var(--color-background)', margin: '1.5rem', color: ' var(--color-h)', fontWeight: '600'}} 
              variant="contained" onClick={handleButtonGallery}>Show Gallery
 
</Button>


            </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
};