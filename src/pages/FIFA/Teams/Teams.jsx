import { useEffect, useState } from 'react'
import './Teams.css'
import { CardTeam, Finder, FormTeams, Loading } from '../../../components'
import { buscarAllTeam } from '../../../services/team.service'
import { usePaginacion } from '../../../hooks/usePaginacion'
import { GaleriaReducidaTeams } from '../../../components/GaleriaReducidaTeams/GaleriaReducidaTeams'




export const Teams = () => {
  const [galleryLoading, setGalleryLoading] = useState(false);
  const [showForm, setShowForm] = useState(false); // Nuevo estado para controlar la visualización del formulario
  const [showGallery, setShowGallery] = useState(true); // Cambiado a false para no mostrar Gallery por defecto
  const [res, setRes] = useState(null);
  const [allTeams, setAllTeams] = useState();


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
      <Loading/>
    ) : (
      <div className="galeriaPreview">
        <GaleriaReducidaTeams galeriaItems={allTeams?.data}/>
      </div>
    )}
    <Finder setShowGallery={setShowGallery} setShowForm={setShowForm} setRes={setRes} res={res} page = "teams"/>
    <section className="mainPage">
      {galleryLoading ? (
       <Loading/>
      ) : (
        <> 
        <div className='galleryDiv'>
        {!showForm && <ComponentPaginacion/>}
          <div className="displayImage">
            {showForm ? <FormTeams /> : showGallery &&
            res && dataPag.map((team) => (
              <CardTeam image={team.image} name={team.name} key={team._id} id={team._id} sportPath={sportPath}/>
            ))}
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
