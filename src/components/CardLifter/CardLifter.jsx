import { Link } from 'react-router-dom'
import './CardLifter.css'

export const CardLifter = ({ name, image, id, sportPath }) => {
    const path = `${sportPath}${id}`   //sportPath es por ej '/powerlifting/lifters/'
    
        return (
          <Link style={{ textDecoration: 'none', color: 'var(--color-h)' }} to={path}>
            <section className="lifterCardSection" key={image}>
             
              <img className="singleItemImgLifter" src={image} alt={name} />
              
              <div className='lifterInfo'>
              <h2 className="singleItemNameLifter">{name}</h2>
              </div>
            </section>
            </Link>
          )
    }
    
