import './CardPodiums.css'

export const CardPodiums = ({name, image}) => {
  return (
    <section className="singleItemCard" key={image}>
        <img className="singleItemImg" src={image} alt={name} />
        <h2 className="singleItemName">{name}</h2>
    </section>
  )
}
