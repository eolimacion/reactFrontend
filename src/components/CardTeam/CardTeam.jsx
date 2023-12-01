import "./CardTeam.css"
import { Link } from 'react-router-dom'

export const CardTeam = ({ name, image, id }) => {
  const path = `${sportPath}${id}`
  return (
    <>
        <section className="singleItemCardTeam" key={id}>
          <Link to={path}>
            <img className="singleItemImgTeam" src={image} alt={name} />
          </Link>
          <h2 className="singleItemNameTeam">{name}</h2>
        </section>
    </>
  )
}
