import "./MiniUserComponent.css"

export const MiniUserComponent = ({data}) => {
  return (
    <div className="miniUserComponent">
        <img className="miniUserComponentImage" src={data.image}/>
        <div className="miniUserComponentText">
        <h3>{data.name}</h3>
        <small>{data.followers.length} followers</small>
        </div>
    </div>
  )
}
