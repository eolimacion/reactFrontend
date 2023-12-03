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
  
    useErrorRegister(res, setRegisterOk, setRes);
    
  }, [res]);



  return (
    <div className="podiumAbel">
      {allPodiums &&
      dataPag?.map(
          (item) =>
            (
              <div className="podiumCardContainer" key={item._id}>
                <div className="nombreYComentario">
                  <h3 className="podiumCard">{item?.name}</h3>
                </div>

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
                      { buttonComment !== ""&&<button   className="btn" onClick={() => handleComment("")}>Volver</button>}
                     
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

 {buttonComment=="" &&
  <ComponentPaginacion/>}
      
      {allComments && buttonComment !== "" &&
  allComments?.data?.comments
    .slice() 
    .reverse() 
    .map((comment, index) => (
      <div className="miniCommentComponent">

      <img className="miniCommentComponentImage" src={comment.image} />
    
    
    <div className="miniCommentComponentText">
      <h2>{comment.creatorName}</h2>
      <h3>{comment.createdAt.slice(0, 10)}</h3>
      <p>{comment.comment}</p>
    </div>
    <Rating name="read-only" value={comment.rating} readOnly />
    </div>
    ))
}
      
    </div>
  );
};
