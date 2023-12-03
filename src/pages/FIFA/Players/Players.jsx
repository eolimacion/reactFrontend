import { useEffect, useState } from 'react'
import './Players.css'
import { CardInTheGallery, CardPlayer, Finder, FormPlayers, GaleriaReducida, Loading } from '../../../components'
import { getAllPlayers } from '../../../services/player.service'
import { useErrorFinder } from '../../../hooks/useErrorFinder'
import { usePaginacion } from '../../../hooks/usePaginacion'
import { GaleriaReducidaPlayers } from '../../../components/GaleriaReducidaPlayers/GaleriaReducidaPlayers'



export const Players = () => {
  const [data, setData] = useState(null);
  const [galleryLoading, setGalleryLoading] = useState(false);
  const [mainLoading, setMainLoading] = useState(false);
  const [showForm, setShowForm] = useState(false); // Nuevo estado para controlar la visualización del formulario
  const [showGallery, setShowGallery] = useState(true); // Cambiado a false para no mostrar Gallery por defecto
  const [res, setRes] = useState(null)
  const sportPath = `/fifa/players/`

  const { galeriaItems, ComponentPaginacion, setGaleriaItems, dataPag} = usePaginacion()

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
    {galleryLoading ? (
      <Loading/>
    ) : (
      <div className="galeriaPreview">
          <GaleriaReducidaPlayers galeriaItems={res?.data} />
        </div>
    )}
    <Finder setShowGallery={setShowGallery} setShowForm={setShowForm} setRes={setRes} res={res} page = "players"/>
    <section className="mainPage">
      {galleryLoading ? (
        <Loading/>
      ) : (
        <>
        <div className='galleryDiv'>
         {!showForm && <ComponentPaginacion/>}
          <div className="displayImage">
            {showForm ? <FormPlayers /> : showGallery && 
            (res && dataPag?.map((player) => (
              <div className='singleCardItem'>
              <CardInTheGallery image={player.image} name={player.name} key={player._id} id={player._id} sportPath={sportPath}/>
              </div>
            )))}
 </div>
          <div className="bottonButton">

<button className='btn btnGallery' onClick={handleButtonClick}>
  Create Form
</button>
<button className='btn btnGallery' onClick={handleGalleryButtonClick}>
  Show Gallery
</button>
</div>
</div>
</>
      )}
    </section>
  </div>
  );
}
