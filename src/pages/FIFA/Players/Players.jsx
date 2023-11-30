import { useState } from 'react'
import './Players.css'
import { FormPlayers } from '../../../components'


export const Players = () => {
  const [data, setData] = useState(null);
  const [galleryLoading, setGalleryLoading] = useState(false);
  const [mainLoading, setMainLoading] = useState(false);
  const [showForm, setShowForm] = useState(false); // Nuevo estado para controlar la visualización del formulario
  const [showGallery, setShowGallery] = useState(true); // Cambiado a false para no mostrar Gallery por defecto
  const [allPlayers, setAllPlayers] = useState([]);

  const getAllPlayers = async () => {
  
    const playersData = await buscarAllPlayers();
    setAllPlayers(playersData || []);
    setGalleryLoading(false);
   
  };

  useEffect(() => {
    getAllPlayers();
       console.log(allPlayers);
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
            {showForm ? <FormPlayers /> : showGallery &&
            allRiders?.data?.map((player) => (
              <CardInTheGallery image={player.image} name={player.name} key={player._id}/>
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
