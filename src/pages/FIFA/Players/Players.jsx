import { useEffect, useState } from 'react'
import './Players.css'
import { CardInTheGallery, CardPlayer, ElevenContainer, Finder, FormPlayers, GaleriaReducida, Loading } from '../../../components'
import { getAllPlayers } from '../../../services/player.service'
import { useErrorFinder } from '../../../hooks/useErrorFinder'
import { usePaginacion } from '../../../hooks/usePaginacion'
import Button from '@mui/material/Button';
import { buscarAllTeam } from '../../../services/team.service'


export const Players = () => {
  const [data, setData] = useState(null);
  const [galleryLoading, setGalleryLoading] = useState(false);
  const [mainLoading, setMainLoading] = useState(false);
  const [showForm, setShowForm] = useState(false); // Nuevo estado para controlar la visualización del formulario
  const [showGallery, setShowGallery] = useState(true); // Cambiado a false para no mostrar Gallery por defecto
  const [res, setRes] = useState(null)
  const sportPath = `/fifa/players/`

  const { galeriaItems, ComponentPaginacion, setGaleriaItems, dataPag, setCurrentPage} = usePaginacion()

  useEffect(() => {
    console.log(res)
    if(res?.status == 200){
      setGaleriaItems(res?.data)
      allTeam()
    }
  }, [res]); 
  const allTeam = async () => {
    const teamsData = await buscarAllTeam();
    setAllTeams(teamsData || []);
    setGalleryLoading(false);
  }

  const handleButtonClick = () => {
    // Cambia el estado para mostrar u ocultar el formulario al hacer clic en el botón
    setShowForm(!showForm);
    setShowGallery(!showGallery)
  };
  const handleGalleryButtonClick = () => {
    setShowGallery(true);
    setShowForm(false);
  };

  const handleButtonClickEleven = () => {
    // Cambia el estado para mostrar u ocultar el formulario al hacer clic en el botón
    setShowForm(false);
    setShowGallery(false)
    setShowEleven(true)
  };

  return (
    <div className="Allpage">
    {galleryLoading ? (
      <Loading/>
    ) : (
      <div className="galeriaPreview">
          <GaleriaReducida galeriaItems={allTeams?.data} tipoCarta={"redTeams"} sportPathRED="/fifa/teams/" />
        </div>
    )}
    <Finder setShowGallery={setShowGallery} setShowForm={setShowForm} setRes={setRes} res={res} page = "players" />
    <section className="mainPage">
      {galleryLoading ? (
        <Loading/>
      ) : (
        <>
        <div className='galleryDiv'>
         {!showForm && <ComponentPaginacion/>}
          <div className="displayImage">
            {showForm ? <FormPlayers /> : showGallery ? 
            (res && dataPag?.map((player) => (
              <div className='singleCardItem'>
              <CardInTheGallery image={player.image} name={player.name} key={player._id} id={player._id} sportPath={sportPath}/>
              </div>
            ))): <ElevenContainer/>}
 </div>
          <div className="bottonButton">

          <Button size="large" style= {{backgroundColor: 'var(--color-background)', margin: '1.5rem', color: ' var(--color-h)', fontWeight: '600'}} 
              variant="contained" onClick={handleButtonClickEleven}>SHOW ELEVEN
 
</Button>

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
