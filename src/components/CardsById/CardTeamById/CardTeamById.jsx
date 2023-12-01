import { useEffect, useState } from 'react'
import './CardTeamById.css'
import { buscarTeamId } from '../../../services/team.service'
import { useNavigate, useParams } from 'react-router'
import { addFavTeams, getUsersFavTeams } from '../../../services/user.service'
import { Loading } from '../../Loading/Loading'
import { useAuth } from '../../../context/authContext'

export const CardTeamById = () => {
    const navigate = useNavigate();
    const {id} = useParams();
  const {user} = useAuth();
  const idUser = user._id;
  const idCircuit = id;

  const [userLikedTeams, setUserLikedTeams] = useState([]);
  const [updatedLikes, setUpdatedLikes] = useState();
  const [resTeam, setResTeam] = useState();
  const [ok, setOk] = useState();
  const [dataTeam, setDataTeam] = useState(null);

  const fetchTeams = async () => {
    setResTeam(await buscarTeamId(idTeam));
    setOk(true);
  }

  const addToLikes = async () => {
    console.log(idTeam)
    const response = await addFavTeams(idTeam);
    console.log('response addToLikes', response.data.userUpdate.favTeams);
    setUpdatedLikes(!updatedLikes)
  }

  const getLikes = async () => {
    console.log('ENTROOOOOOO');
    const likedTeamsRes = await getUsersFavTeams(idTeam);
    console.log(likedTeamsRes.data);
  }

  console.log('resCircuits', resTeam)
  console.log('userLikedCircuits', userLikedTeams)

  useEffect(() => {
    fetchTeams();
  }, [updatedLikes]);

  useEffect(() => {
    resTeam?.status == 200 && setDataTeam(resTeam.data)
  }, [resTeam])

  useEffect(() => {
    getLikes();
  }, [updatedLikes]);

  if(resTeam?.response?.status == 404 || resTeam?.response?.status == 500) {
    return (
        <>
        <div className='errorDiv'>
          <h1>ERROR</h1>
          <h2>{resTeam?.response?.status}</h2>
          <h2>{resTeam?.response?.data}</h2>
        </div>
        </>
      )
  }

  if (!ok) {
    return <Loading/>
  }

  if (dataTeam) {
    const isLiked = dataTeam?.likes?.includes(idUser)

    const {
        name,
        league,
        ranking,
        points,
        overalltrophies,
        seasontrophies,
        networth,
        stadium,
        image,
        likes,
    } = dataTeam
  

  return (
    <>
    
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,100,0,200" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      <div className="IdContainer">
      <div>
        <button id='btnReturn' onClick={() => navigate("/fifa/teams")}>
          <span 
           className="material-symbols-outlined">
arrow_back_ios
</span><p>All Teams</p>
</button>

      </div>
      <div className="cardByIdContainer">
      <div className="pageByidTeam pageByid">
        <figure id="figureidTeam">
          <img className='imageById imageTeam' src={image} alt={name} />
          <h1 className="nameByidTeam">{name}</h1>
          <h3>
            <span className="SBDspan">League:</span> {league}
          </h3>
          <h3>
            <span className="SBDspan">Ranking:</span>{ranking} 
            </h3>
            <h3>
              <span className="SBDspan">Points:</span>{points} 
            </h3>
          <h3>
            <span className="SBDspan">Overall Trhopies:</span>{overalltrophies} 
          </h3>
          <h3>
            <span className="SBDspan">Season Trhopies:</span>{seasontrophies} 
          </h3>
          <h3>
            <span className="SBDspan">Networth:</span>{networth} Bill.
          </h3>
          <h3>
            <span className="SBDspan">Stadium:</span>{stadium} 
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