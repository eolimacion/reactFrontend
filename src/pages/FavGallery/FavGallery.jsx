import { useAuth } from "../../context/authContext";
import { useEffect, useState } from "react";
import { getById } from "../../services/user.service";
import { NavFav } from "../../components/Nav/NavFav/NavFav";
import "./FavGallery.css";
import { CardInTheGallery, NavFavChildren } from "../../components";
import { usePaginacion } from "../../hooks/usePaginacion";
import { pathWithId } from "../../utils/pathWithId";
import { ProfileFavsCard } from "../../components/ProfileFavsCard/ProfileFavsCard";

export const FavGallery = ({ id, page}) => {
  const { user } = useAuth();
  const [galleryLoading, setGalleryLoading] = useState(true);
  const [res, setRes] = useState(null);
  const [mainFav, setMainFav] = useState("fifa");
  const [childrenFav, setChildrenFav] = useState("favPlayers");
  const [data, setData] = useState(null);
  const { galeriaItems, ComponentPaginacion, dataPag, setGaleriaItems } =
    usePaginacion();

  const fetchData = async () => {
    setGalleryLoading(true);
    setRes(await getById(user._id));
    setGalleryLoading(false);
    if (page == "userpage") {
      setGalleryLoading(true);
      setRes(await getById(id));
      setGalleryLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    res?.status == 200 && setGaleriaItems(res?.data[childrenFav]);
  }, [res]);

  useEffect(() => {
    setGaleriaItems(res?.data[childrenFav]);
  }, [childrenFav]);


  return (
    <>
      <div className="favsTab">
        <div className="favNavTop">
          <NavFav setFav={setMainFav} setFavChildren={setChildrenFav} favChildren={childrenFav}/>
          <NavFavChildren fav={mainFav} setFavChildren={setChildrenFav} />
          <div>{!galleryLoading && <ComponentPaginacion />}</div>
        </div>
        <section className="favGallery">
          {galleryLoading ? (
            <h1> Loading...</h1>
          ) : (
            dataPag?.map((item) => (
              <ProfileFavsCard
                path={pathWithId(item._id, childrenFav) 
                  // esto es un switch que juzga el children fav para ver que tipo de 
                  //favorito es, y les asigna una ruta que le vamos a pasar para crearlo link
                }
                key={JSON.stringify(item)}
                data={item}
              />
            ))
          )}
        </section>
      </div>
    </>
  );
};
