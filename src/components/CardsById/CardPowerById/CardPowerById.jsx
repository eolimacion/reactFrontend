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
    console.log('response addToLikes', response);
    setUpdatedLikes(!updatedLikes);
  };

  const getLikes = async () => {
    console.log('ENTROOOOOO', likedLiftersRes);
    const likedLiftersRes = await getUsersFavLifters(idUser); // Fetch user's liked albums

    setUserLikedLifters(likedLiftersRes.data);
  };

  console.log('userLikedLifters', userLikedLifters)

// const isLiked = userLikedLifters.includes(idLifter)

  useEffect(() => {
    fetchLifters();
  }, [idLifter]);

  useEffect(() => {
    getLikes();
  }, [idLifter]);

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
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,0,-25"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      <div>
        <button
          className="btnReturnGallery"
          onClick={() => navigate("/powerlifting/lifters")}
        >
          <span className="material-symbols-outlined">keyboard_return</span>
        </button>
      </div>
      <section id="pageByidLifter">
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
              {/* <span className="material-symbols-outlined"
              style={{ fontVariationSettings: isLiked ? "'FILL' 1" : "'FILL' 0" }}
              onClick={() => addToLikes(idLifter)}
              >favorite</span>
             */}
          </div>
        </figure>
      </section>
    </>
  );
};

const Dashboard = () => {
  const [allAlbums, setAllAlbums] = useState([]);
  const [userLikedAlbums, setUserLikedAlbums] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const [updatedLikes, setUpdatedLikes] = useState(false);

  const getAlbums = async () => {
    const albumsRes = await getAllAlbumsServices();
    setAllAlbums(albumsRes.data);
    setIsReady(!isReady);
  };

  const addToLikes = async (idLifterParam) => {
    let idLifter = { idLifter: idLifterParam };
    const response = await toggleLikedAlbum(idLifter);
    console.log(response?.data);
    setUpdatedLikes(!updatedLikes);
  };

  const getLikes = async () => {
    const likedAlbumsRes = await getLikesByidLifter(); // Fetch user's liked albums
    console.log(likedAlbumsRes);

    setUserLikedAlbums(likedAlbumsRes.data);
  };

  useEffect(() => {
    getAlbums();
  }, [updatedLikes]);

  useEffect(() => {
    getLikes();
  }, [updatedLikes]);

  return (
    <div className="albumsContainer">
      {allAlbums.map((item) => {
        console.log(item);
        const isLiked = userLikedAlbums.includes(item._idLifter);
        return (
          <Card
            key={item._idLifter}
            idLifter={item._idLifter}
            name={item.albumName}
            src={
              item.image
                ? item.image
                : "https://res.cloudinary.com/drbssyzr7/image/upload/v1699200914/NODE_project/default-album-art_afjoep.png"
            }
            initialLikes={item.likedBy.length}
            year={item.year}
            className="albums"
            isLiked={isLiked} // Pass the information to Card component
            addToLikes={addToLikes}
          />
        );
      })}
    </div>
  );
};
