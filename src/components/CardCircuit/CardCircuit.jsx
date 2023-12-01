import "./CardCircuit.css"
import { Link } from 'react-router-dom'

export const CardCircuit = ({ name, image, id, sportPath }) => {
  const path = `${sportPath}${id}`
  return (
    <>
        <section className="singleItemCardCircuit" key={id}>
          <Link to={path}>
            <img className="singleItemImgCircuit" src={image} alt={name} />
          </Link>
          <h2 className="singleItemNameCircuit">{name}</h2>
        </section>
    </>
  )
}
