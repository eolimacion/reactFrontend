import { Link } from "react-router-dom"
import "./MiniUserComponent.css"

export const MiniUserComponent = ({data}) => {
  return (
    <div className="miniUserComponent">
        <Link to={`/users/${data._id}`}><img className="miniUserComponentImage" src={data.image}/></Link>
        <div className="miniUserComponentText">
        <h3>{data.name}</h3>
        <small>{data.followers.length} followers</small>
        </div>
    </div>
  )
}
