import "./CardRider.css"
import { Link } from 'react-router-dom'

export const CardRider = ({ name, image, id, sportPath }) => {
  const path = `${sportPath}${id}`
  return (
    <>
        <section className="singleItemCardRider" key={id}>
          <Link to={path}>
            <img className="singleItemImgRider" src={image} alt={name} />
          </Link>
          <h2 className="singleItemNameRider">{name}</h2>
        </section>
    </>
  )
}
