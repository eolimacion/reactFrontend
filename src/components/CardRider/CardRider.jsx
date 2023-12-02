import "./CardRider.css"
import { Link } from 'react-router-dom'

export const CardRider = ({ name, image, id, sportPath }) => {
  const path = `${sportPath}${id}`
  return (
    <>
        <section className="singleItemCardRider riderCardGallery" key={id}>
          <Link to={path}>
            <div className="imageRiderDiv">
            <img className="singleItemImgRider" src={image} alt={name} />
            </div>
          </Link>
          <div className="riderNameDiv">
          <h2 className="riderName">{name}</h2>
          </div>
        </section>
    </>
  )
}
