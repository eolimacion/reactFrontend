import { useEffect, useState } from 'react'
import './CardMotoById.css'
import { buscarRiderId } from '../../../services/rider.service'
import { useNavigate, useParams } from 'react-router-dom'
import { addFavRiders, getUsersFavRiders } from '../../../services/user.service'
import { Loading } from '../../Loading/Loading'
import { useAuth } from '../../../context/authContext'
import { DeletePlayer } from '../../DeletePlayer/DeletePlayer'

export const CardMotoById = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const {user} = useAuth();
  const idUser = user._id;
  const idRider = id;

  const [userLikedRiders, setUserLikedRiders] = useState([]);
  const [updatedLikes, setUpdatedLikes] = useState();
  const [resRider, setResRider] = useState();
  const [ok, setOk] = useState();
  const [dataRider, setDataRider] = useState(null);

  const fetchRiders = async () => {
    setResRider(await buscarRiderId(idRider));
    setOk(true);
  }

  const addToLikes = async () => {
    const response = await addFavRiders(idRider);
    setUpdatedLikes(!updatedLikes)
  }

  const getLikes = async () => {
    const likedRidersRes = await getUsersFavRiders(idRider);
  }


  useEffect(() => {
    fetchRiders();
  }, [updatedLikes]);

  useEffect(() => {
    resRider?.status == 200 && setDataRider(resRider.data)
  }, [resRider])

  useEffect(() => {
    getLikes();
  }, [updatedLikes]);
  
  if(resRider?.response?.status == 404 || resRider?.response?.status == 500) {
    return (
      <>
      <div className='errorDiv'>
        <h1>ERROR</h1>
        <h2>{resRider?.response?.status}</h2>
        <h2>{resRider?.response?.data}</h2>
      </div>
      </>
    )
  }
  
  if (!ok) {
    return <Loading/>
  }

  if (dataRider) {
    const isLiked = dataRider?.likes?.includes(idUser)

    const {
      name,
      number,
      nationality,
      age,
      rating,
      points,
      image,
      victoriesSeason,
      victoriesCarrer,
      championshipsCarrer,
      team,
      polesSeason,
      circuits,
      likes,
      comments,
    } = dataRider

    return (
      <>
    
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,100,0,200" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      <div className="IdContainer">
  
      
      <div className="pageByidRider pageByid">
      <div className="imageIdDiv">

        <button id='btnReturn' onClick={() => navigate("/motogp/riders")}>
          <span 
           className="material-symbols-outlined">
arrow_back_ios
</span><p>All Riders</p>
</button>

          <img className='imageById imageRider' src={image} alt={name} />

          </div>
          <div className="infoIdDiv">

<div className="divName">

          <h1 className="nameByidRider">{name}</h1>
          <h3>
             {nationality}
          </h3>
          <h3>#
            <span className="SBDspan">{number}</span>
            </h3>
  
          <h3>
            <span className="SBDspan">{team}</span> 
          </h3>
          </div>

          <div className="restInfoCardId">
          <h2 >
                <span className="SBDspan">{points}</span> points
              </h2>
            <div className="powerStats">
           
              <h3 className="H3ById hClass ">
                <span className="SBDspan">{victoriesSeason}</span>  victories this season
              </h3>
              <h3 className="H3ById hClass ">
                <span className="SBDspan">{victoriesCarrer}</span> victories on his entire career
              </h3>
              <h3 className="H3ById hClass ">
                <span className="SBDspan">{championshipsCarrer}</span> championships
              </h3>
              <h3 className="H3ById hClass ">
                <span className="SBDspan">{polesSeason}</span> poles season
              </h3>
              </div>
            </div>
          
          

            
            <h3>{ likes.length == 1 ? `${likes.length} like` : `${likes.length} likes` }
              
              </h3>
              <div className="like">
              <span className="material-symbols-outlined"
              id={ isLiked ? "btnLiked" : "btnNotLiked" }
              
              onClick={() => addToLikes(idRider)}
              >favorite</span>
              </div>
          </div>
          <div id = "deletePlayerContainer">
            {user.role === "admin" &&  <DeletePlayer  id = "DeletePlayer" playerId = {idRider} playerName = {name}/>}
          </div>
     
          </div>
      </div>
      
      </>
    
    ) 
  }
}
