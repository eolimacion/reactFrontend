import { useEffect, useState } from 'react'
import './CardFifaById'
import { getByID } from '../../../services/player.service'
import { useNavigate, useParams } from 'react-router-dom'
import { addFavPlayers, getUsersFavPlayers } from '../../../services/user.service'
import { Loading } from '../../Loading/Loading'
import { useAuth } from '../../../context/authContext'


export const CardFifaById = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const {user} = useAuth();
  const idUser = user._id;
  const idPlayer = id;

  const [userLikedPlayers, setUserLikedPlayers] = useState([]);
  const [updatedLikes, setUpdatedLikes] = useState();
  const [resPlayer, setResPlayer] = useState();
  const [ok, setOk] = useState();
  const [dataPlayer, setDataPlayer] = useState(null);


  const fetchPlayers = async () => {
    setResPlayer(await getByID(idPlayer));
    setOk(true);
  }

  const addToLikes = async () => {
    console.log(idPlayer)
    const response = await addFavPlayers(idPlayer);
    console.log('response addToLikes', response.data.userUpdate.favPlayers);
    setUpdatedLikes(!updatedLikes)
  }

  const getLikes = async () => {
    console.log('ENTROOOOOOOOOO');
    const likedPlayersRes = await getUsersFavPlayers(idPlayer);
    console.log(likedPlayersRes.data);
  }

  console.log('resPlayers', resPlayer)
  console.log('userLikedPlayers', userLikedPlayers)

  useEffect(() => {
    fetchPlayers();
  }, [updatedLikes]);

  useEffect(() => {
    resPlayer?.status == 200 && setDataPlayer(resPlayer.data)
  }, [resPlayer])

  useEffect(() => {
    getLikes();
  }, [updatedLikes]);

  if (resPlayer?.response?.status == 404 || resPlayer?.response?.status == 500) {
    return (
      <>
      <div className='errorDiv'>
        <h1>ERROR</h1>
        <h2>{resPlayer?.response?.status}</h2>
        <h2>{resPlayer?.response?.data}</h2>
      </div>
      </>
    )
  }

  if (!ok) {
    return <Loading/>;
  }

  if(dataPlayer) {
    const isLiked = dataPlayer?.likes?.includes(idUser)

    const {
      name,
      position,
      number,
      age,
      marketvalue,
      goals,
      assists,
      rating,
      preferredfoot,
      image,
      team,
      likes,
      comments,
    } = dataPlayer

    console.log('team',team)

    return (
      <>
    
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,100,0,200" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      <div className="IdContainer">
      <div>
        <button id='btnReturn' onClick={() => navigate("/fifa/players")}>
          <span 
           className="material-symbols-outlined">
arrow_back_ios
</span><p>All Players</p>
</button>

      </div>
      <div className="cardByIdContainer">
      <div className="pageByidPlayer pageByid">
        <figure id="figureidPlayer">
          <img className='imageById imagePlayer' src={image} alt={name} />
          <h1 className="nameByidPlayer">{name}</h1>
          <h3>
            <span className="SBDspan">Position:</span> {position}
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
                <span className="SBDspan">Market value:</span> {marketvalue} Mill.
              </h3>
              <h3>
                <span className="SBDspan">Rating:</span> {rating}
              </h3>
              <h3>
                <span className="SBDspan">Goals:</span> {goals}
              </h3>
              <h3>
                <span className="SBDspan">Assists:</span> {assists}
              </h3>
              <h3>
                <span className="SBDspan">Preferred foot:</span> {preferredfoot}
              </h3>
            </div>
          </div>
          <div>

            
            <h4>{ likes.length == 1 ? `${likes.length} like` : `${likes.length} likes` }
              
              </h4>
              <div className="like">
              <span className="material-symbols-outlined"
              id={ isLiked ? "btnLiked" : "btnNotLiked" }
              
              onClick={() => addToLikes(idLifter)}
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
