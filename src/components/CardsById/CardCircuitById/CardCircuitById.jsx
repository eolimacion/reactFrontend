import { useEffect, useState } from 'react'
import './CardCircuitById.css'
import { buscarCircuitId, buscarCircuitIdNotPopulated } from '../../../services/circuit.service'
import { useNavigate, useParams } from 'react-router-dom'
import { addFavCircuits, getUsersFavCircuits } from '../../../services/user.service'
import { Loading } from '../../Loading/Loading'
import { useAuth } from '../../../context/authContext'
import { ErrorFetch } from '../../ErrorFetch/ErrorFetch'
import { DeletePlayer } from '../../DeletePlayer/DeletePlayer'

export const CardCircuitById = () => {
    const navigate = useNavigate();

    const {id} = useParams();
  const idCircuit = id;

  const {user} = useAuth();
  const idUser = user._id;

  const [updatedLikes, setUpdatedLikes] = useState();
  const [resCircuit, setResCircuit] = useState();
  const [ok, setOk] = useState();
  const [dataCircuit, setDataCircuit] = useState(null);
  const [likesArray, setLikesArray] = useState([])


  const fetchCircuits = async () => {
    const data = await buscarCircuitId(idCircuit);
    setDataCircuit(data.data);
    setOk(true);
  }

  const addToLikes = async (idCircuit) => {
    const response = await addFavCircuits(idCircuit);
    setUpdatedLikes(!updatedLikes)
  }

  const getLikes = async () => {
    const likesArray =await buscarCircuitIdNotPopulated(idCircuit);
    setLikesArray(likesArray.data.likes)
  }


  useEffect(() => {
    fetchCircuits();
    getLikes();
  }, [updatedLikes]);

  if(dataCircuit?.response?.status == 404 || dataCircuit?.response?.status == 500) {
    return (
        <ErrorFetch/>
      )
  }

  if (!ok) {
    return <Loading/>
  }

  if (dataCircuit) {
    const isLiked = likesArray.includes(idUser)

    const {
        name,
        location,
        totalLength,
        capacity,
        topSpeed,
        image,
        likes,
    } = dataCircuit

  return (
    <>
    
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,100,0,200" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      <div className="IdContainer">
      <div>
        <button id='btnReturn' onClick={() => navigate("/motogp/circuits")}>
          <span 
           className="material-symbols-outlined">
arrow_back_ios
</span><p>All Circuits</p>
</button>

      </div>
      <div className="cardByIdContainer">
      <div className="pageByidCircuit pageByid">
        <figure id="figureidCircuit">
          <img className='imageById imageCircuit' src={image} alt={name} />
          <h1 className="nameByidCircuit">{name}</h1>
          <h3>
            <span className="SBDspan">Location:</span> {location}
          </h3>
          <h3>
            <span className="SBDspan">Total length:</span>{totalLength} km
            </h3>
            <h3>
              <span className="SBDspan">Capacity:</span>{capacity} people
            </h3>
          <h3>
            <span className="SBDspan">Top speed:</span>{topSpeed} km/h
          </h3>
          <div>
          </div>
          <div>
            <h4>{ likes.length == 1 ? `${likes.length} like` : `${likes.length} likes` }
              
              </h4>
              <div className="like">
              <span className="material-symbols-outlined"
              id={ isLiked ? "btnLiked" : "btnNotLiked" }
              
              onClick={() => addToLikes(idCircuit)}
              >favorite</span>
              </div>
            
          </div>
          <div id = "deletePlayerContainer">
            {user.role === "admin" &&  <DeletePlayer  id = "DeletePlayer" playerId = {idCircuit} playerName = {name}/>}
          </div>
        </figure>
      </div>
      </div>
      </div>
    </>
  )
}
}
