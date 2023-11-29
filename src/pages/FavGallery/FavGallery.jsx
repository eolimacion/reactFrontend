import { useAuth } from "../../context/authContext";
import { useEffect, useState } from "react";
import { getById } from "../../services/user.service";
import { NavFav } from "../../components/Nav/NavFav/NavFav";
import { CardInTheGallery, NavFavChildren } from "../../components";

export const FavGallery = () => {
  const { user } = useAuth();
  const [res, setRes] = useState(null);
  const [controller, setController] = useState();
  const [mainFav, setMainFav] = useState("fifa");
  const [childrenFav, setChildrenFav] = useState("favPlayers");
  const [data, setData] = useState(null)

  const fetchData = async () => {
    setRes(await getById(user._id));
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    res?.status == 200 && setData(res?.data[childrenFav])
    
  }, [res]);

  useEffect(() => {
    setData(res?.data[childrenFav])
  }, [childrenFav]);



  return (
    <>
      <NavFav setFav={setMainFav} favChildren={setChildrenFav} />
      <NavFavChildren fav={mainFav} favChildren={setChildrenFav} />

      <section className="favGallery">
        {
          data && data.map((item)=>(<CardInTheGallery key={JSON.stringify(item)} name={item.name} image={item.image} />))
         }
      </section>
    </>
  );
};