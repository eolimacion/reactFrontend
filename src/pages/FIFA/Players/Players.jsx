import { useEffect, useState } from 'react'
import './Players.css'
import { CardInTheGallery, Finder, FormPlayers } from '../../../components'
import { getAllPlayers } from '../../../services/player.service'
import { useErrorFinder } from '../../../hooks/useErrorFinder'



export const Players = () => {
  const [data, setData] = useState(null);
  const [galleryLoading, setGalleryLoading] = useState(false);
  const [mainLoading, setMainLoading] = useState(false);
  const [showForm, setShowForm] = useState(false); // Nuevo estado para controlar la visualización del formulario
  const [showGallery, setShowGallery] = useState(true); // Cambiado a false para no mostrar Gallery por defecto
  const [res, setRes] = useState(null)
  const sportPath = `/fifa/players/`

  useEffect(() => {
    console.log(res)
  }, [res]); 

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
        {showGallery ? <p>Galeria cargada</p> : 'Galería pequeña'}
      </div>
    )}
    <Finder setShowGallery={setShowGallery} setShowForm={setShowForm} setRes={setRes} res={res} page = "players"/>
    <section className="mainPage">
      {galleryLoading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <div className="displayImage">
            {showForm ? <FormPlayers /> : showGallery && 
            (res && res?.data?.map((player) => (
              <div className='singleCardPlayer'>
              <CardInTheGallery image={player.image} name={player.name} key={player._id} id={player._id} sportPath={sportPath}/>
              {console.log("player iddddddddddddddd", player._id)}
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
}
