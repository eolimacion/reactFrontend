import { useEffect, useState } from 'react'
import './Teams.css'
import { CardInTheGallery, Finder, FormTeams } from '../../../components'
import { buscarAllTeam } from '../../../services/team.service'
import { usePaginacion } from '../../../hooks/usePaginacion'


export const Teams = () => {
  const [data, setData] = useState(null);
  const [galleryLoading, setGalleryLoading] = useState(false);
  const [mainLoading, setMainLoading] = useState(false);
  const [showForm, setShowForm] = useState(false); // Nuevo estado para controlar la visualización del formulario
  const [showGallery, setShowGallery] = useState(true); // Cambiado a false para no mostrar Gallery por defecto
  const [res, setRes] = useState(null)

  const { galeriaItems, ComponentPaginacion, setGaleriaItems, dataPag} = usePaginacion()

  useEffect(() => {
    console.log(res)
    if(res?.status == 200){
      setGaleriaItems(res?.data)
    }
  }, [res])

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
    <Finder setShowGallery={setShowGallery} setShowForm={setShowForm} setRes={setRes} res={res} page = "teams"/>
    <section className="mainPage">
      {galleryLoading ? (
        <p>Cargando...</p>
      ) : (
        <> {!showForm && <ComponentPaginacion/>}
          <div className="displayImage">
            {showForm ? <FormTeams /> : showGallery &&
            res && dataPag.map((team) => (
              <CardInTheGallery image={team.image} name={team.name} key={team._id}/>
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
