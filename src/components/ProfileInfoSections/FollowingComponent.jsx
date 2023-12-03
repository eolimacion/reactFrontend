import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MiniUserComponent } from "../ProfileMiniComponents/MiniUserComponent";
import { usePaginacion } from "../../hooks/usePaginacion";
import { NothingHereComponent } from "../NothingHereComponent/NothingHereComponent";

export const FollowedComponent = ({ followed }) => {
  const [galleryLoading, setGalleryLoading] = useState(true);
  const [noItems, setNoItems] = useState(false);
  const [res, setRes] = useState(null);
  const { galeriaItems, ComponentPaginacion, dataPag, setGaleriaItems } =
    usePaginacion();

  useEffect(() => {
    if(followed?.length > 0) {
      setGaleriaItems(followed)
      setGalleryLoading(false)
      setNoItems(false)
    } else setNoItems(true)
  }, [followed]);

  return (
    <>
      <div className="topProfileInfo">
        <div className="forwardBackward">
          {!galleryLoading && <ComponentPaginacion />}
          {noItems && <NothingHereComponent />}
        </div>
      </div>
      <div className="bottomProfileInfo">
        {dataPag &&
          dataPag?.map((item) => (
            <MiniUserComponent data={item} key={item._id} />
          ))}
      </div>
    </>
  );
};
