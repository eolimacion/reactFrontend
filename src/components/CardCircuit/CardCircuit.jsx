import "./CardCircuit.css"
export const CardCircuit = ({ name, image, id, sportPath }) => {
  return (
    <>
        <section className="singleItemCardCircuit" key={id}>
          <img className="singleItemImgCircuit" src={image} alt={name} />
          <h2 className="singleItemNameCircuit">{name}</h2>
        </section>
    </>
  )
}
