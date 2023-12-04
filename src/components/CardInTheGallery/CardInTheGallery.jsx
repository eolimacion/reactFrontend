import { Link } from 'react-router-dom'
import './CardInTheGallery.css'

export const CardInTheGallery = ({ name, image, id, sportPath }) => {
const path = `${sportPath}${id}`   //sportPath es por ej '/powerlifting/lifters/'

    return (
      
        <section className="singleItemCard" key={image}>
          <Link to={path}>
          <img className="singleItemImg" src={image} alt={name} />
          </Link>
          <h2 className="singleItemName">{name}</h2>
          
        </section>
      )
}
