import { useEffect, useState } from 'react'
import './Lifters.css'
import {  CardInTheGallery, CardLifter, Finder, FormLifters, Loading } from '../../../components'
import { getAllLifters } from '../../../services/lifter.service'
import { usePaginacion } from '../../../hooks/usePaginacion'
import { GaleriaReducidaLifters } from '../../../components/GaleriaReducidaLifters/GaleriaReducidaLifters'
import Button from '@mui/material/Button';
import { CardLifterGaleriaReducida } from '../../../components/CardLifter/CardLifterGaleriaReducida'
import { Link } from 'react-router-dom'

export const Lifters = () => {
  const [data, setData] = useState(null);
  const [galleryLoading, setGalleryLoading] = useState(false);
  const [mainLoading, setMainLoading] = useState(false);
  const [showForm, setShowForm] = useState(false); // Nuevo estado para controlar la visualización del formulario
  const [showGallery, setShowGallery] = useState(true); // Cambiado a false para no mostrar Gallery por defecto
  const [allLifters, setAllLifters] = useState([]);
  const [res, setRes] = useState(null)


  const sportPath = `/powerlifting/lifters/`
  const{galeriaItems,ComponentPaginacion,setGaleriaItems,dataPag}=usePaginacion()
 

  useEffect(() => {
    console.log(res)
    if(res?.status == 200){
      setGaleriaItems(res?.data)
    }
  }, [res]); 
  
 
  

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
    {/* {galleryLoading ? (
      <Loading/>
    ) : (
      <div className="galeriaPreview">
        <GaleriaReducidaLifters galeriaItems={allLifters?.data}/>
      </div>
    )} */}
 <Finder setShowGallery={setShowGallery} setShowForm={setShowForm} setRes={setRes} res={res} page = "powerlifters"/>
    <section className="mainPage">
      {galleryLoading ? (
        <Loading/>
      ) : (
        <>  
        <div className='galleryDiv'>
        {!showForm && <ComponentPaginacion/>}
          <div className="displayImage displayImageLifters">
            {showForm ? <FormLifters /> : showGallery &&  dataPag?.map((item)=>(
              <div className='singleCardPlayer'>
  <CardLifter name={item?.name} image={item?.image} key={item._id} sportPath={sportPath}
  id={item._id}/>
  </div>
         ))
           }
          </div>
          <div className="bottonButton">

          <Button size="large" style= {{backgroundColor: 'var(--color-background)', margin: '1.5rem', color: ' var(--color-h)', fontWeight: '600'}} 
              variant="contained" onClick={handleButtonClick}>Create Form
 
</Button>
<Button size="large" style= {{backgroundColor: 'var(--color-background)', margin: '1.5rem', color: ' var(--color-h)', fontWeight: '600'}} 
              variant="contained" onClick={handleGalleryButtonClick}>Show Gallery
 
</Button>

</div>
</div>
</>
      )}
    </section>
  </div>
  );
}
 
