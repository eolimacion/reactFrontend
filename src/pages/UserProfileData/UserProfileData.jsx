import { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import "./UserProfileData.css";
import { getById } from "../../services/user.service";
import { FollowedComponent } from "../../components/ProfileInfoSections/FollowingComponent";
import { CommentsComponent } from "../../components/ProfileInfoSections/CommentsComponent";
import { FollowersComponent } from "../../components/ProfileInfoSections/FollowersComponent";
import Button from "@mui/material/Button";

export const UserProfileData = () => {
  const { user } = useAuth();
  const [data, setData] = useState(null);
  const [isDataReady, setIsDataReady] = useState(false);
  const [displaySection, setDisplaySection] = useState("followed"); // 'profile', 'followers', 'following', etc.
  const [isDeleted, setIsDeleted] = useState(false);

  const fetchData = async () => {
    const dataForState = await getById(user._id);
    setData(dataForState);
    setIsDataReady(true);
  };

  useEffect(() => {
    fetchData();
    console.log(isDeleted)
  }, [isDataReady, isDeleted]);
  useEffect(() => {
    fetchData();
 
  }, [ data]);

  const renderSection = () => {
    switch (displaySection) {
      case "followers":
        return <FollowersComponent followers={data?.data?.followers} />;
      case "followed":
        return <FollowedComponent followed={data?.data?.followed} />;
      case "comments":
        return <CommentsComponent comments={data?.data?.comments} setIsDeleted={setIsDeleted} />;
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
            <p className="nameUserCardProfile">{user?.name}</p>
            <p>I'm here for {user?.interestedIn}</p>
            {/* <p> {(user?.yourteam !== undefined) && `Your team ${user.yourteam}`}</p>
          <p> {(user?.yourPodium !== undefined) && `Your podium ${user.yourPodium}`}</p> */}
          </div>
        </figure>
        <div className="profileButtonsContainer">
          <Button
            onClick={() => setDisplaySection("followers")}
            autoFocus
            variant="contained"
            style={{
              backgroundColor: "white",
              color: "var(--color-boton-motogp)",
              fontWeight: "600",
              fontSize: "15px",
              margin: "2px",
              width: "100%",
              
            }}
          >
            {data?.data?.followers?.length} followers
          </Button>
          <Button
            onClick={() => setDisplaySection("followed")}
            autoFocus
            variant="contained"
            style={{
              backgroundColor: "white",
              color: "var(--color-boton-motogp)",
              fontWeight: "600",
              fontSize: "15px",
              margin: "2px",
              width: "100%",
              
            }}
          >
            {data?.data?.followed?.length} following
          </Button>
          <Button
            onClick={() => setDisplaySection("comments")}
            autoFocus
            variant="contained"
            style={{
              backgroundColor: "white",
              color: "var(--color-boton-motogp)",
              fontWeight: "600",
              fontSize: "15px",
              margin: "2px",
              width: "100%",

            }}
          >
            {data?.data?.comments?.length} comments
          </Button>

          {/* <button
            className="profileButton"
            autoFocus
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
          </button> */}
        </div>
      </div>
      <div className="followProfileGallery">{renderSection()}</div>
    </>
  );
};
