import { Link } from "react-router-dom";
import "./ProfileFavsCard.css";

export const ProfileFavsCard = ({ data, path }) => {
  const imageUrl = data?.image;
  const name = data?.name;
  const likesCount = data?.likes?.length;

  return (
    <Link to={path} className="profileFavsCard">
      <div className="favImageContainer">
        <img src={imageUrl} alt={name} className="favCardImage" />
      </div>
      <div className="overlay"> {/* Add the overlay class here */}
        <div className="favCardDetails">
          <h3>{name}</h3>
          <small>Liked By {likesCount}</small>
        </div>
      </div>
    </Link>
  );
};
