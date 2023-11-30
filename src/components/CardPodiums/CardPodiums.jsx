import './CardPodiums.css'

export const CardPodiums = ({name, image}) => {
  return (
    <section className="singleItemCardPodium" key={image}>
        <img className="singleItemImgPodium" src={image} alt={name} />
        <h2 className="singleItemNamePodium">{name}</h2>
    </section>
  )
}
