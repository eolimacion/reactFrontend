import { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import "./UserProfileData.css";
import { getById } from "../../services/user.service";
import { FollowersComponent } from "./FollowersComponent";
import { FollowedComponent } from "./FollowingComponent";

export const UserProfileData = () => {
  const { user } = useAuth();
  const [data, setData] = useState(null);
  const [isDataReady, setIsDataReady] = useState(false);
  const [displaySection, setDisplaySection] = useState("followed"); // 'profile', 'followers', 'following', etc.

  const fetchData = async () => {
    const dataForState = await getById(user._id);
    setData(dataForState);
    setIsDataReady(true);
  };

  useEffect(() => {
    fetchData();
    console.log(data);
  }, [isDataReady]);

  const renderSection = () => {
    switch (displaySection) {
      case "followers":
        return <FollowersComponent followers={data?.data?.followers} />;
      case "followed":
        return <FollowedComponent followed={data?.data?.followed} />;
      case "comments":
        return <h1>Whoops, under construction!</h1>
      default:
        return <div className="info-user"></div>;
    }
  };




  return (
    <>
      <div className="infoUser">
        <figure className="profilePicture">
          <img
            src={user?.image}
            alt="user image"
            className="profilePictureUser"
          />
          <div>
            <p>{user?.name}</p>
            <p>I'm here for {user?.interestedIn}</p>
            {/* <p> {(user?.yourteam !== undefined) && `Your team ${user.yourteam}`}</p>
          <p> {(user?.yourPodium !== undefined) && `Your podium ${user.yourPodium}`}</p> */}
          </div>
        </figure>
        <div className="profileButtonsContainer">
          <button
            className="profileButton"
            onClick={() => setDisplaySection("followers")}
          >
            {data?.data?.followers?.length} followers
          </button>
          <button
            className="profileButton"
            onClick={() => setDisplaySection("followed")}
          >
            {data?.data?.followed?.length} users followed
          </button>
          
          <button
            className="profileButton"
            onClick={() => setDisplaySection("comments")}
          >
            {data?.data?.comments?.length} comments
          </button>
        </div>
      </div>
      <div className="followProfileGallery">
        {renderSection()}
      </div>
    </>
  );
};
