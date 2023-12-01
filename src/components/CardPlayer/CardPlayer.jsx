import "./CardPlayer.css"
export const CardPlayer = ({ name, image, id, sportPath }) => {
  return (
    <>
        <section className="singleItemCardPlayer" key={id}>
          <img className="singleItemImgPlayer" src={image} alt={name} />
          <h2 className="singleItemNamePlayer">{name}</h2>
        </section>
    </>
  )
}
