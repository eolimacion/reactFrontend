import { useEffect, useState } from "react";
import { lifterByID } from "../../../services/lifter.service";
import "./CardPowerById.css";
import { useNavigate, useParams } from "react-router-dom";
import {
  addFavLifter,
  getUsersFavLifters,
} from "../../../services/user.service";
import { Loading } from "../../Loading/Loading";
import { useAuth } from "../../../context/authContext";

export const CardPowerById = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useAuth();
  const idUser = user._id;
  const idLifter = id;

  const [allLifters, setAllLifters] = useState([]);
  const [userLikedLifters, setUserLikedLifters] = useState([]);
  const [updatedLikes, setUpdatedLikes] = useState(false);
  const [resLifter, setresLifter] = useState({});
  const [ok, setOk] = useState(false);

  const fetchLifters = async () => {
    setresLifter(await lifterByID(idLifter));
    setOk(true);
  };

  const addToLikes = async () => {
    console.log(idLifter)
    const response = await addFavLifter(idLifter);
    console.log('response addToLikes', response.data.userUpdate.favLifters);
    setUpdatedLikes(!updatedLikes);
  };


  const getLikes = async () => {
    console.log('ENTROOOOOO');
    const likedLiftersRes = await getUsersFavLifters(idUser); 
    console.log(likedLiftersRes.data)
    setUserLikedLifters(likedLiftersRes.data); //array de objetos ------ LIKES DEL USUARIO 
  };


  console.log('userLikedLifters', userLikedLifters) //array de objetos ------ LIKES DEL USUARIO 



  useEffect(() => {
    fetchLifters();
  }, [ok, updatedLikes]);

  useEffect(() => {
    getLikes();
  }, [updatedLikes]);

  console.log('hooooolaaaa', resLifter?.data?.likes?.includes(idUser))

  const isLiked = resLifter?.data?.likes?.includes(idUser)

  console.log()

  if (!ok) {
    return <Loading />;
  }

  console.log(resLifter);
  const {
    name,
    gender,
    birthYear,
    squat,
    benchPress,
    deadlift,
    total,
    GLPoints,
    weightCategory,
    likes,
    comments,
  } = resLifter.data;

  return (
  //   <h1>hjola</h1>
  // )
    <>
    
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,100,0,200" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      <div className="IdContainer">
      <div className="btnReturn">
          <span 
          onClick={() => navigate("/powerlifting/lifters")} className="material-symbols-outlined">
arrow_back_ios
</span><p>All Lifters</p>

      </div>
      <div className="cardByIdContainer">
      <div className="pageByidLifter pageByid">
        <figure id="figureidLifter">
          {/* <img src={src} alt={name} /> */}
          <h1 className="nameByidLifter">{name}</h1>
          <h3>
            {gender}, {birthYear}, -{weightCategory.weigth}
          </h3>
          <h2>{GLPoints} GL points</h2>
          <div>
            <h2>MAX STATS IN CHAMPIONSHIPS</h2>
            <h4>updated 2022</h4>
            <div className="powerStats">
              <h3>
                <span className="SBDspan">SQ</span> {squat}kg
              </h3>
              <h3>
                <span className="SBDspan">BP</span> {benchPress}kg
              </h3>
              <h3>
                <span className="SBDspan">DL</span> {deadlift}kg
              </h3>
              <h3>
                <span className="SBDspan">TOTAL</span> {total}kg
              </h3>
            </div>
          </div>
          <div>
            <h4>{ likes.length == 1 ? `${likes.length} like` : `${likes.length} likes` }
              
              </h4>
              <span className="material-symbols-outlined"
              style={{ fontVariationSettings: isLiked ? "'FILL' 1" : "'FILL' 0" }}
              onClick={() => addToLikes(idLifter)}
              >favorite</span>
            
          </div>
        </figure>
      </div>
      </div>
      </div>
    </>
  );
};
