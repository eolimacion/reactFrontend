import { useEffect, useState } from 'react'
import './CardCircuitById.css'
import { buscarCircuitId } from '../../../services/circuit.service'
import { useNavigate, useParams } from 'react-router-dom'
import { addFavCircuits, getUsersFavCircuits } from '../../../services/user.service'
import { Loading } from '../../Loading/Loading'
import { useAuth } from '../../../context/authContext'

export const CardCircuitById = () => {
    const navigate = useNavigate();
    const {id} = useParams();
  const {user} = useAuth();
  const idUser = user._id;
  const idCircuit = id;

  const [userLikedCircuits, setUserLikedCircuits] = useState([]);
  const [updatedLikes, setUpdatedLikes] = useState();
  const [resCircuit, setResCircuit] = useState();
  const [ok, setOk] = useState();
  const [dataCircuit, setDataCircuit] = useState(null);

  const fetchCircuits = async () => {
    setResCircuit(await buscarCircuitId(idCircuit));
    setOk(true);
  }

  const addToLikes = async () => {
    console.log(idCircuit)
    const response = await addFavCircuits(idCircuit);
    console.log('response addToLikes', response.data.userUpdate.favCircuits);
    setUpdatedLikes(!updatedLikes)
  }

  const getLikes = async () => {
    console.log('ENTROOOOOOO');
    const likedCircuitsRes = await getUsersFavCircuits(idCircuit);
    console.log(likedCircuitsRes.data);
  }

  console.log('resCircuits', resCircuit)
  console.log('userLikedCircuits', userLikedCircuits)

  useEffect(() => {
    fetchCircuits();
  }, [updatedLikes]);

  useEffect(() => {
    resCircuit?.status == 200 && setDataCircuit(resCircuit.data)
  }, [resCircuit])

  useEffect(() => {
    getLikes();
  }, [updatedLikes]);

  if(resCircuit?.response?.status == 404 || resCircuit?.response?.status == 500) {
    return (
        <>
        <div className='errorDiv'>
          <h1>ERROR</h1>
          <h2>{resCircuit?.response?.status}</h2>
          <h2>{resCircuit?.response?.data}</h2>
        </div>
        </>
      )
  }

  if (!ok) {
    return <Loading/>
  }

  if (dataCircuit) {
    const isLiked = dataCircuit?.likes?.includes(idUser)

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
        </figure>
      </div>
      </div>
      </div>
    </>
  )
}
}
