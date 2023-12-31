import { useEffect, useState } from 'react'
import './CardFifaById'
import { getByID } from '../../../services/player.service'
import { useNavigate, useParams } from 'react-router-dom'
import { addFavPlayers, getUsersFavPlayers } from '../../../services/user.service'
import { Loading } from '../../Loading/Loading'
import { useAuth } from '../../../context/authContext'
import { DeletePlayer } from '../../DeletePlayer/DeletePlayer'


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
    const response = await addFavPlayers(idPlayer);
    setUpdatedLikes(!updatedLikes)
  }

  const getLikes = async () => {
    const likedPlayersRes = await getUsersFavPlayers(idPlayer);
  }

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

    return (
      <>
    
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,100,0,200" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      <div className="IdContainer">
      <div>
       

      </div>
      
      <div className="pageByidPlayer pageByid">
      <div className="imageIdDiv">
       
      <button id='btnReturn' onClick={() => navigate("/fifa/players")}>
          <span 
           className="material-symbols-outlined">
arrow_back_ios
</span><p>All Players</p>
</button>
          <img className='imagePlayer' src={image} alt={name} />
          
          
          
          </div>
          
          <div className="infoIdDiv">

<div className="divName">

          
          <h1 className="hClass nameByidLifter">{name}</h1>
          {team[0] && <h3>Team: {team[0]}</h3>}
          <h3 className=" hClass H3ById">
             {position}
          </h3>
          <h3 className=" hClass H3ById">Nº
            <span className="SBDspan">{number}</span>
            </h3 >
            <h3 className=" hClass H3ById">
              <span className="SBDspan">{age}</span>years old
            </h3>

            </div>


          <div className="restInfoCardId">

         
            <div className="powerStats">
              <h3 className="stats hClass H3ById">
                <span className="SBDspan">Market value:</span> {marketvalue} Mill.
              </h3>
              <h3 className="stats hClass H3ById">
                <span className="SBDspan">Rating:</span> {rating}
              </h3 >
              <h3 className="stats hClass H3ById">
                <span className="SBDspan">Goals:</span> {goals}
              </h3>
              <h3 className="stats hClass H3ById">
                <span className="SBDspan">Assists:</span> {assists}
              </h3>
              <h3 className="stats hClass H3ById">
                <span className="SBDspan">Preferred foot:</span> {preferredfoot}
              </h3>
        
          </div>
          <div>

            
            <h3 className="H3ById likeh3">{ likes.length == 1 ? `${likes.length} like` : `${likes.length} likes` }
              
              </h3>
              <div className="like">
              <span className="material-symbols-outlined"
              id={ isLiked ? "btnLiked" : "btnNotLiked" }
              
              onClick={() => addToLikes(idPlayer)}
              >favorite</span>
              </div>
            
          </div>
          <div id = "deletePlayerContainer">
            {user.role === "admin" &&  <DeletePlayer  id = "DeletePlayer" playerId = {idPlayer} playerName = {name}/>}
          </div>
       
      </div>
      </div>
      </div>
     
      </div>
      </>

    )
  }
  
  
  


  
}
