import { useEffect, useState } from 'react'
import './Lifters.css'
import { CardInTheGallery, FormLifters } from '../../../components'
import { getAllLifters } from '../../../services/lifter.service'
import { usePaginacion } from '../../../hooks/usePaginacion'

export const Lifters = () => {
  const [data, setData] = useState(null);
  const [galleryLoading, setGalleryLoading] = useState(false);
  const [mainLoading, setMainLoading] = useState(false);
  const [showForm, setShowForm] = useState(false); // Nuevo estado para controlar la visualización del formulario
  const [showGallery, setShowGallery] = useState(true); // Cambiado a false para no mostrar Gallery por defecto
  const [allLifters, setAllLifters] = useState([]);
  const sportPath = `/powerlifting/lifters/`
  const{galeriaItems,ComponentPaginacion,setGaleriaItems}=usePaginacion()
 
  const getLifters = async () => {
  
    const liftersData = await getAllLifters();
    setGalleryLoading(false);
   
  };
  

  useEffect(() => {
    getLifters();
       console.log(allLifters);
  }, []); 
  useEffect(() => {if(liftersData?.status==200){
    setAllLifters(liftersData );
    setGaleriaItems(allLifters?.data)
  }
 
  
  }, [liftersData])
  

  const handleButtonClick = () => {
    // Cambia el estado para mostrar u ocultar el formulario al hacer clic en el botón
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
}
