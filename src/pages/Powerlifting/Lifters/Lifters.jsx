import { useState } from 'react'
import './Lifters.css'
import { FormLifters } from '../../../components'

export const Lifters = () => {
  const [data, setData] = useState(null);
  const [galleryLoading, setGalleryLoading] = useState(false);
  const [mainLoading, setMainLoading] = useState(false);
  const [showForm, setShowForm] = useState(false); // Nuevo estado para controlar la visualización del formulario
  const [showGallery, setShowGallery] = useState(true); // Cambiado a false para no mostrar Gallery por defecto
  const [allLifters, setAllLifters] = useState([]);
 
  const getAllLifters = async () => {
  
    const liftersData = await buscarAllLifters();
    setAllLifters(liftersData || []);
    setGalleryLoading(false);
   
  };

  useEffect(() => {
    getAllLifters();
       console.log(allLifters);
  }, []); 

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
          <div className="displayImage">
            {showForm ? <FormLifters /> : showGallery &&
            allRiders?.data?.map((lifter) => (
              <CardInTheGallery image={lifter.image} name={lifter.name} key={lifter._id}/>
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
}
