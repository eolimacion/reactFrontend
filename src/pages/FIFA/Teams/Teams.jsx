import { useEffect, useState } from 'react'
import './Teams.css'
import { CardTeam, ElevenContainer, Finder, FormTeams, Loading } from '../../../components'
import { buscarAllTeam } from '../../../services/team.service'
import { usePaginacion } from '../../../hooks/usePaginacion'
import { GaleriaReducidaTeams } from '../../../components/GaleriaReducidaTeams/GaleriaReducidaTeams'
import Button from '@mui/material/Button';



export const Teams = () => {
  const [galleryLoading, setGalleryLoading] = useState(false);
  const [showForm, setShowForm] = useState(false); // Nuevo estado para controlar la visualización del formulario
  const [showGallery, setShowGallery] = useState(true); // Cambiado a false para no mostrar Gallery por defecto
  const [res, setRes] = useState(null);
  const [allTeams, setAllTeams] = useState();
  const [showEleven, setShowEleven] = useState(false);


  const { galeriaItems, ComponentPaginacion, setGaleriaItems, dataPag} = usePaginacion()
  const sportPath = '/fifa/teams/'


  const allTeam = async () => {
    const teamsData = await buscarAllTeam();
    setAllTeams(teamsData || []);
    setGalleryLoading(false);
  }


  useEffect(() => {
    allTeam();
    console.log(allTeams)
  }, [])
 


  useEffect(() => {
    if(res?.status == 200){
      setGaleriaItems(res?.data)
    }
  }, [allTeams, res])


  const handleButtonClick = () => {
  
    setShowForm(true);
    setShowGallery(false)
    setShowEleven(false)
  };
  const handleButtonClickGallery = () => {
  setShowEleven(false)
    setShowForm(false);
    setShowGallery(true)
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
        <Loading />
      ) : (
        <div className="galeriaPreview">
          {/* <GaleriaReducida galeriaItems={allRiders?.data} /> */}
        </div>
      )}
      <Finder setShowGallery={setShowGallery} setShowForm={setShowForm} setRes={setRes} res={res} page = "teams"/>
      <section className="mainPage">
        {galleryLoading ? (
          <Loading />
        ) : (
          <> 
          <div className='galleryDiv'>
          {showGallery && <ComponentPaginacion/>}
            <div className="displayImage">
            {showForm ? <FormTeams /> : showGallery ? 
            (res && dataPag?.map((team) => (
              <div className='singleCardPlayer'>
              <CardTeam image={team.image} name={team.name} key={team._id} id={team._id} sportPath={sportPath}/>
              </div>
            ))): <ElevenContainer/>}
          </div>
            <div className="bottonButton">

            <Button size="large" style= {{backgroundColor: 'var(--color-background)', margin: '1.5rem', color: ' var(--color-h)', fontWeight: '600'}} 
              variant="contained" onClick={handleButtonClickEleven}>SHOW ELEVEN
 
</Button>
                
<Button size="large" style= {{backgroundColor: 'var(--color-background)', margin: '1.5rem', color: ' var(--color-h)', fontWeight: '600'}} 
              variant="contained" onClick={handleButtonClick}>CREATE FORM
 
</Button>
<Button size="large" style= {{backgroundColor: 'var(--color-background)', margin: '1.5rem', color: ' var(--color-h)', fontWeight: '600'}} 
              variant="contained" onClick={handleButtonClickGallery}>SHOW GALLERY
 
</Button>


            </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
};