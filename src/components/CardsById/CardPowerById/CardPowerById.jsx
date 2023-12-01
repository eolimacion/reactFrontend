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

  const [userLikedLifters, setUserLikedLifters] = useState([]);
  const [updatedLikes, setUpdatedLikes] = useState(false);
  const [resLifter, setresLifter] = useState({});
  const [ok, setOk] = useState(false);
  const [dataLifter, setDataLifter] = useState(null)

  const fetchLifters = async () => {
    setresLifter(await lifterByID(idLifter));
    console.log('resLifter',resLifter)
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
    console.log('liked', likedLiftersRes)
    setUserLikedLifters(likedLiftersRes.data); //array de objetos ------ LIKES DEL USUARIO 
  };



console.log('resLifter',resLifter)
  console.log('userLikedLifters', userLikedLifters) //array de objetos ------ LIKES DEL USUARIO 


  useEffect(() => {
    fetchLifters();
  }, [updatedLikes]);

  useEffect(() => {
    resLifter?.status == 200 && setDataLifter(resLifter.data)
  }, [resLifter])
  

  useEffect(() => {
    getLikes();
  }, [updatedLikes]);


  

if (resLifter?.response?.status == 404 || resLifter?.response?.status == 500){
  return (
    <>
    <div className="errorDiv">
  <h1>ERROR</h1>
  <h2>{resLifter?.response?.status}</h2>
  <h2>{resLifter?.response?.data}</h2>
  </div>
  </>
  )
}


  if (!ok) {
    return <Loading />;
  }


if(dataLifter){

  const isLiked = dataLifter?.likes?.includes(idUser)
  console.log(dataLifter)

  const {
    name,
    gender,
    image,
    birthYear,
    squat,
    benchPress,
    deadlift,
    total,
    GLPoints,
    weightCategory,
    likes,
    comments,
  } = dataLifter

 
console.log('weight', weightCategory[0])

  return (

    <>
    
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,100,0,200" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      <div className="IdContainer">
      <div>
        <button id='btnReturn' onClick={() => navigate("/powerlifting/lifters")}>
          <span 
           className="material-symbols-outlined logoId">
arrow_back_ios
</span><p>All Lifters</p>
</button>

      </div>
      <div className="cardByIdContainer">
      <div className="pageByidLifter pageByid">
        <figure id="figureidLifter">
          <img className='imageById imageLifter' src={image} alt={name} />
          <div className="divName">
          <h1 className="nameByidLifter">{name}</h1>
          <h3 className="H3ById">
            {gender}, {birthYear}
          </h3>
          <h2 className="H2ById"> <span className="SBDspan">{GLPoints}</span>{" "}GL points</h2>
          </div>
          <div>
            <h2 className="H2ById">MAX STATS IN CHAMPIONSHIPS</h2>
            <h4>updated 2022</h4>
            { weightCategory[0] &&  <h3>Category: -{weightCategory[0].weight} {weightCategory[0].age}</h3> }
            
            <div className="powerStats">
              <h3 className="stats H3ById">SQ {" "}
                <span className="SBDspan">{squat}</span> 
              </h3>
              <h3 className="stats H3ById">BP {" "}
                <span className="SBDspan">{benchPress}</span> 
              </h3>
              <h3 className="stats H3ById">DL{" "}
                <span className="SBDspan">{deadlift}</span> 
              </h3>
              </div>
              <h3 className="H3ById">TOTAL {" "}
                <span className="SBDspan">{total}</span> kg
              </h3>
            
          </div>
          <div>

            
            <h3 className="H3ById likeh3">{ likes.length == 1 ? `${likes.length} like` : `${likes.length} likes` }
              
              </h3>
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
  );
}
};
