// import { useEffect, useState } from "react";
// import "./Dashboard.css";
// import { getAllAlbumsServices } from "../../services/AlbumService/albums.service";
// import { Card } from "../../components";
// import { getLikesById, toggleLikedAlbum } from "../../services";
/*


export const Dashboard = () => {
  const [allAlbums, setAllAlbums] = useState([]); //PAra llamar a todos los albums
  const [userLikedAlbums, setUserLikedAlbums] = useState([]); 
  //esto  pilla un array con el array de ids de likes del usuario, yo tenia uno que traia directamente los likes
  const [isReady, setIsReady] = useState(false);  //para que cuando fetchee los albumes actualice
  const [updatedLikes, setUpdatedLikes] = useState(false);  //para cambiar el estado cada vez que se anada un like

  const getAlbums = async () => {
    const albumsRes = await getAllAlbumsServices();
    setAllAlbums(albumsRes.data);
    setIsReady(!isReady); 
    /hemos seteado el servicio que pilla todos los albumes, set del estado a lo que nos devuelve, y set de un estado adicional de isReady
    /para que cambie de nuevo y se renderice el estado actualizado de AllAlbums
  };

  const addToLikes = async (idParam) => {
    //eventoOClick del corazoncito
    let id = { id: idParam }; //podia meter directamente idPAram al servicio pero queria cambiarlo en la card
    const response = await toggleLikedAlbum(id);
    console.log(response?.data);
    setUpdatedLikes(!updatedLikes); //actualizamos un estado diferente cada vez que metamos un like!!!
    //est va a hacer que se re renderice la pagina cada vez que 
  };

  const getLikes = async () => {
    const likedAlbumsRes = await getLikesById(); // Fetch user's liked albums
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
        console.log(item)
        const isLiked = userLikedAlbums.includes(item._id);
        return (
          <Card
            key={item._id}
            id={item._id}
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


*/