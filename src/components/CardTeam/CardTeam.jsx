import "./CardTeam.css"
export const CardTeam = ({ name, image, id }) => {
  return (
    <>
        <section className="singleItemCardTeam" key={id}>
          <img className="singleItemImgTeam" src={image} alt={name} />
          <h2 className="singleItemNameTeam">{name}</h2>
        </section>
    </>
  )
}
