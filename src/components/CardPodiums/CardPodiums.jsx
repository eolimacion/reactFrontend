import './CardPodiums.css'

export const CardPodiums = ({name, image,positionClass}) => {
  return (
    <section className="sectionPodiumAbel" key={image}>
        <img className={`claseFija ${positionClass}` }src={image} alt={name} />
        <h2 className="singleItemNamePodium">{name}</h2>
    </section>
  )
}
