import "./CardPlayer.css"
import { Link } from 'react-router-dom'

export const CardPlayer = ({ name, image, id, sportPath }) => {
  const path = `${sportPath}${id}`
  return (
    <>
        <section className="singleItemCardPlayer" key={id}>
          <Link to={path}>
            <img className="singleItemImgPlayer" src={image} alt={name} />
          </Link>
          <h2 className="singleItemNamePlayer">{name}</h2>
        </section>
    </>
  )
}
