import { Link } from 'react-router-dom'
import './CardLifterGaleriaReducida.css'

export const CardLifterGaleriaReducida = ({ name, image, id, sportPath }) => {
    const path = `${sportPath}${id}`   //sportPath es por ej '/powerlifting/lifters/'
    
        return (
          
            <section className="SectionCardLiftersGaleriaReducida" key={id}>
              <Link to={path}>
              <img className="ImgCardLiftersGaleriaReducida" src={image} alt={name} />
              </Link>
              <h2 className="singleItemNameGaleriaReducidaLifter">{name}</h2>
              
            </section>
          )
    }