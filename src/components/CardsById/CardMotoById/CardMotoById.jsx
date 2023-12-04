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
      <div>
        <button id='btnReturn' onClick={() => navigate("/motogp/riders")}>
          <span 
           className="material-symbols-outlined">
arrow_back_ios
</span><p>All Riders</p>
</button>

      </div>
      <div className="cardByIdContainer">
      <div className="pageByidRider pageByid">
        <figure id="figureidRider">
          <img className='imageById imageRider' src={image} alt={name} />
          <h1 className="nameByidRider">{name}</h1>
          <h3>
            <span className="SBDspan">Nationality:</span> {nationality}
          </h3>
          <h3>
            <span className="SBDspan">Number:</span>{number}
            </h3>
            <h3>
              <span className="SBDspan">Age:</span>{age}
            </h3>
          <h3>
            <span className="SBDspan">Team:</span>{team} 
          </h3>
          <div>
            <div className="playerStats">
              <h3>
                <span className="SBDspan">Points:</span> {points}
              </h3>
              <h3>
                <span className="SBDspan">Rating:</span> {rating}
              </h3>
              <h3>
                <span className="SBDspan">Victories season:</span> {victoriesSeason}
              </h3>
              <h3>
                <span className="SBDspan">Victories carrer:</span> {victoriesCarrer}
              </h3>
              <h3>
                <span className="SBDspan">Championships carrer:</span> {championshipsCarrer}
              </h3>
              <h3>
                <span className="SBDspan">Poles season:</span> {polesSeason}
              </h3>
            </div>
          </div>
          <div>

            
            <h4>{ likes.length == 1 ? `${likes.length} like` : `${likes.length} likes` }
              
              </h4>
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
        </figure>
        
      </div>
      </div>
      </div>
    </>
    ) 
  }
}
