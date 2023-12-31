import { useEffect, useState } from "react";
import "./CardTeamById.css";
import { buscarTeamId, buscarTeamIdNotPopulated } from "../../../services/team.service";
import { useNavigate, useParams } from "react-router";
import { addFavTeams, getUsersFavTeams } from "../../../services/user.service";
import { Loading } from "../../Loading/Loading";
import { useAuth } from "../../../context/authContext";
import { ErrorFetch } from "../../ErrorFetch/ErrorFetch";
import { DeletePlayer } from "../../DeletePlayer/DeletePlayer";

export const CardTeamById = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const { user } = useAuth();

  const idUser = user._id;
  const idTeam = id;

  const [updatedLikes, setUpdatedLikes] = useState();
  const [resTeam, setResTeam] = useState({});
  const [ok, setOk] = useState();
  const [dataTeam, setDataTeam] = useState(null);
  const [likesArray, setLikesArray] = useState();

  const fetchTeams = async () => {
    const resTeamHCD = await buscarTeamId(idTeam); //hcd significa hardcodded
    setResTeam(resTeamHCD)
    resTeamHCD?.status == 200 && setOk(true);
  };

  const addToLikes = async () => {
    const response = await addFavTeams(idTeam);
    setUpdatedLikes(!updatedLikes);
  };

  const getLikes = async () => {
    const data = await buscarTeamIdNotPopulated(idTeam);
    setLikesArray(data?.data?.likes);
  };

  useEffect(() => {
    fetchTeams();
  }, [updatedLikes]);

  useEffect(() => {
    resTeam?.status == 200 && setDataTeam(resTeam.data);
  }, [resTeam]);

  useEffect(() => {
    getLikes();
  }, [updatedLikes]);

  if (resTeam?.response?.status == 404 || resTeam?.response?.status == 500) {
    return (
      <>
        <ErrorFetch/>
      </>
    );
  }

  if (!ok) {
    return <Loading />;
  }

  if (dataTeam) {
    const isLiked = likesArray?.includes(idUser);

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
    } = dataTeam;

    return (
      <>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,100,0,200"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
        <div className="IdContainer">
          <div>
    
          </div>


    
            <div className="pageByidTeam pageByidLifter pageByid">
            <div className="imageIdDiv">
            <button id="btnReturn" onClick={() => navigate("/fifa/teams")}>
              <span className="material-symbols-outlined">arrow_back_ios</span>
              <p>All Teams</p>
            </button>
                <img className="imageById imageTeam" src={image} alt={name} />
                
                
                </div> 

                <div className="infoIdDiv">

          <div className="divName">
                <h1 className="nameByidTeam">{name}</h1>
                <h3>
                  <span className="SBDspan">League:</span> {league}
                </h3>
                <h3>
                  <span className="SBDspan">Ranking:</span>
                  {ranking}
                </h3>

                </div>
                <div className="restInfoCardId">
                <h2>{stadium}
                  
                  
                </h2>
                <div className="powerStats">
                <h3 className="stats hClass H3ById">
                  <span className="SBDspan">{points}</span>{" "}points
                  
                </h3>
                <h3 className="stats hClass H3ById">Overall Thropies:
                  <span className="SBDspan">{overalltrophies}</span>
                  
                </h3>
                <h3 className="stats hClass H3ById">Season Thropies:
                  <span className="SBDspan">{seasontrophies}</span>
                  
                </h3>
                <h3 className="stats hClass H3ById">Networth:
                  <span className="SBDspan">{networth} </span>
                  Bill.
                </h3>
                
                </div>
                </div>


                <div>
                  <h4>
                    {likes.length == 1
                      ? `${likes.length} like`
                      : `${likes.length} likes`}
                  </h4>
                  <div className="like">
                    <span
                      className="material-symbols-outlined"
                      id={isLiked ? "btnLiked" : "btnNotLiked"}
                      onClick={() => addToLikes(idTeam)}
                    >
                      favorite
                    </span>
                  </div>
                </div>
                <div id = "deletePlayerContainer">
            {user.role === "admin" && <DeletePlayer  id = "DeletePlayer" playerId = {idTeam} playerName = {name}/>}
          </div>
            
            </div>
          </div>
        </div>
      </>
    );
  }
};
