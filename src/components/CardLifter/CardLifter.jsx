import { Link } from 'react-router-dom'
import './CardLifter.css'

export const CardLifter = ({ name, image, id, sportPath }) => {
    // console.log(id, sportPath)
    const path = `${sportPath}${id}`   //sportPath es por ej '/powerlifting/lifters/'
    
        return (
          
            <section className="lifterCardSection" key={image}>
              <Link to={path}>
              <img className="singleItemImgLifter" src={image} alt={name} />
              </Link>
              <div className='lifterInfo'>
              <h2 className="singleItemNameLifter">{name}</h2>
              </div>
            </section>
          )
    }
    
