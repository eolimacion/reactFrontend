import { useEffect, useState } from "react";
import { MiniCommentComponent } from "../ProfileMiniComponents/MiniCommentComponent";
import { NothingHereComponent } from "../NothingHereComponent/NothingHereComponent";
import { usePaginacion } from "../../hooks/usePaginacion";
import { Navigate, useNavigate } from "react-router-dom";






export const CommentsComponent = ({ comments }) => {
  const [galleryLoading, setGalleryLoading] = useState(true);
  const [noItems, setNoItems] = useState(false);
  const [res, setRes] = useState(null);
  const [isDeleted, setIsDeleted] = useState(false)

const navigate = useNavigate()

  const { galeriaItems, ComponentPaginacion, dataPag, setGaleriaItems } =
    usePaginacion(3);

  useEffect(() => {
    if(comments?.length > 0) {
      setGaleriaItems(comments)
    setGalleryLoading(false);
    setNoItems(false);
    } else setNoItems(true)
    console.log(isDeleted)
  }, [comments, isDeleted]);



if(isDeleted){
  // return <Navigate to="/profile/user" />;

}



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
            <MiniCommentComponent data={item} key={item._id} setIsDeleted={setIsDeleted} />
          ))}
      </div>
    </>
  );
};
