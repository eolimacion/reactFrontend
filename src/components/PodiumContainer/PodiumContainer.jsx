import React, { useEffect, useState } from "react";
import"./PodiumContainer.css"
import {
  createPodiumComment,
  getAllPodiums,
  getpodiumByID,
} from "../../services/podium.service";
import { CardPodiums } from "../CardPodiums/CardPodiums";
import { useForm } from "react-hook-form";
import { Rating } from "@mui/material";
import { useErrorRegister } from "../../hooks/useErrorRegister";
import { usePaginacion } from "../../hooks/usePaginacion";
import { Link } from "react-router-dom";
import { useCommentError } from "../../hooks/useCommentError";

export const PodiumContainer = () => {
  const [podiumLoading, setPodiumLoading] = useState(false);
  const [allPodiums, setAllPodiums] = useState([]);

  const [buttonComment, setButtonComment] = useState("");
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState(false);
  const [send, setSend] = useState(false);
  const [valueStar, setValueStar] = useState(0);
  const [allComments, setAllComments] = useState([]);
  const [registerOk, setRegisterOk] = useState(false);
  const{galeriaItems,ComponentPaginacion,setGaleriaItems,dataPag}=usePaginacion(1)

  //!!Referente a comentarios sobre el podium-----------------------
  //?Este handle maneja el estado que setea
  useEffect(() => {
   handleComment("656cbe372003401787681e37")
  }, [])
  
  const handleComment = (id) => {
    setButtonComment(id);
  };
  const formSubmit = async (formData) => {
 
    const customFormData = {
      ...formData,
      rating: valueStar,
    };

    setSend(true);
    setRes(await createPodiumComment(buttonComment, customFormData));
    setSend(false);
    
  };

  //!!-------------------------------------------------------------------------
  //!!----------Traer y pintar el podium--------------------------------------------
  const getPodium = async () => {
  
    const podiumsData = await getAllPodiums();
    setAllPodiums(podiumsData)
    setPodiumLoading(false);
   
  };
  
//este use effect gestiona los datos de la llamada
  useEffect(() => {
    getPodium();
       console.log(res);
  }, []); 
  //cuando es 200 envia al estado de la paginacion
  useEffect(() => {if(allPodiums?.status==200){
 
    setGaleriaItems(allPodiums?.data)
  }
 
  
  }, [allPodiums])
  //!!---------------------------------------

  const getAllComments = async (buttonComment) => {
    const commentsData = await getpodiumByID(buttonComment);
  
    setAllComments(commentsData);
  };

  useEffect(() => {
    if (buttonComment) {
      getAllComments(buttonComment);
      console.log(allComments)
      console.log(buttonComment) 
    }
  }, [buttonComment,res]);

  useEffect(() => {
  
    useCommentError(res, setRegisterOk, setRes);
  
  }, [res]);



  return (
    <div className="podiumAbel">
      {allPodiums &&
      dataPag?.map(
          (item) =>
            (
              <div className="podiumCardContainer" key={item?._id}>
                <div className="nombreYComentario">
                  <h3 className="podiumCard">{item?.name}</h3>
                  {console.log(buttonComment)}
                  <Link to={`/users/${item?.owner?._id}`}>
                  <p className="byAlguienP">By: {item?.owner?.name}</p>
                  </Link>
                  <ComponentPaginacion handleComment={()=>handleComment(item?._id)} />
                </div>
<ComponentPaginacion handleComment={()=>handleComment(item?._id)} />
                <div className="podiumCartas">
                
                  <CardPodiums
                     positionClass="segundo"
                    name={item?.secondPlace?.name}
                    image={item?.secondPlace?.image}
                  />
                    <CardPodiums
                     positionClass="primero"
                    name={item?.firstPlace?.name}
                    image={item?.firstPlace?.image}
                  />
                  <CardPodiums
                    positionClass="tercero"
                    name={item?.thirdPlace?.name}
                    image={item?.thirdPlace?.image}
                  />
                </div>
                
                {buttonComment !== "" ? (
                  <div className="allForm">
                    <div className="formMain">
                      <h1 className="formTitle">CREAR COMENTARIO</h1>
                      <form
                        className="form"
                        onSubmit={handleSubmit(formSubmit)}
                      >
                        <div className="riderInfo formGroup">
                          <label
                            htmlFor="comment"
                            className="customPlaceholder"
                          >
                            comentario
                          </label>
                          <input
                            className="inputForm"
                            type="text"
                            id="comment"
                            name="comment"
                            autoComplete="false"
                            placeholder="Deja tu comentario"
                            {...register("comment", { required: true })}
                          />
                        </div>
                        <Rating
                          name="simple-controlled"
                          value={valueStar}
                          onChange={(event) => {
                            setValueStar(parseInt(event.target.value));
                          }}
                        />

                        <div className="btnContainer">
                          <button
                            className="btn"
                            type="submit"
                            disabled={send}
                            style={{
                              background: send ? "#49c1a388" : "#2f7a67",
                            }}
                          >
                            Publicar
                          </button>
                        </div>
                      </form>

                     
                    </div>
                  </div>
                ) : (
                  <button    className="btn" onClick={() => handleComment(item._id)}>
                    Comments
                  </button>
                  
                )}
              </div>
            )
        )}

 

      
      <div className="cajonCommentsGeneral">
    {allComments?.data?.comments?.length>0 ?
      
    allComments?.data?.comments
      .slice()
      .reverse()
      .map((comment,index) => (
        <div className="miniCommentComponent" key={index}>
          <img className="miniCommentComponentImage" src={comment?.image} alt={`User ${index + 1}`} />
          <div className="miniCommentComponentText">
          <Link to={`/users/${comment?.creator}`}>
            <h2>{comment?.creatorName}</h2>
            </Link>
            <h3>{comment?.createdAt?.slice(0, 10)}</h3>
            <p>{comment?.comment}</p>
          </div>
          <Rating name="read-only" value={comment?.rating} readOnly />
        </div>
      )): <div className="miniCommentComponent" key={"aaaaa"}>
      <img className="miniCommentComponentImage" src={"https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"} alt="imagen por defecto" />
      <div className="miniCommentComponentText">
    
        <h2>No comments yet</h2>
      
       
        <p>This podium has no comments yet, be the first to comment.</p>
      </div>
     
    </div>}
  </div>  
    </div>
  );
};
