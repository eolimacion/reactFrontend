import React, { useEffect, useState } from "react";
// import"./PodiumContainer.css"
import {
  createPodiumComment,
  getAllPodiums,
  getPodiumById,
  getpodiumByID,
} from "../../services/podium.service";
import { CardPodiums } from "../CardPodiums/CardPodiums";
import { useForm } from "react-hook-form";
import { Rating } from "@mui/material";
import { useErrorRegister } from "../../hooks/useErrorRegister";
import { usePaginacion } from "../../hooks/usePaginacion";

export const UserPodium = ({ page, podiumId }) => {
  const [podiumLoading, setPodiumLoading] = useState(false);
  const [allPodiums, setAllPodiums] = useState([]);

  const [buttonComment, setButtonComment] = useState("");
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState(false);
  const [send, setSend] = useState(false);
  const [valueStar, setValueStar] = useState(0);
  const [allComments, setAllComments] = useState([]);
  const [registerOk, setRegisterOk] = useState(false);

  //!!Referente a comentarios sobre el podium-----------------------
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
    let podiumsData = await getPodiumById(podiumId)
      console.log(podiumsData)
      setAllPodiums(podiumsData)
      setAllComments(podiumsData);
      setPodiumLoading(false);
  };
  
//este use effect gestiona los datos de la llamada
  useEffect(() => {
    getPodium();
  }, []); 

  //!!---------------------------------------

  useEffect(() => {
  
    useErrorRegister(res, setRegisterOk, setRes);
    
  }, [res]);



  return (
    <div className="podiumAbel">
      { allPodiums.status == 200 &&
            (
              <div className="podiumCardContainer" key={allPodiums.data._id}>
                <div className="nombreYComentario">
                  <h3 className="podiumCard">{allPodiums?.data?.name}</h3>
                </div>

                <div className="podiumCartas">
                
                  <CardPodiums
                     positionClass="segundo"
                    name={allPodiums?.data?.secondPlace?.name}
                    image={allPodiums?.data?.secondPlace?.image}
                  />
                    <CardPodiums
                     positionClass="primero"
                    name={allPodiums?.data?.firstPlace?.name}
                    image={allPodiums?.data?.firstPlace?.image}
                  />
                  <CardPodiums
                    positionClass="tercero"
                    name={allPodiums?.data?.thirdPlace?.name}
                    image={allPodiums?.data?.thirdPlace?.image}
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
                          onChange={(event, newValue) => {
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
                  <button    className="btn" onClick={() => handleComment(allPodiums?.data?._id)}>
                    Comments
                  </button>
                )}
              </div>
            )
        }
      
      {allComments && buttonComment !== "" &&
  allComments?.data?.comments
    .slice() 
    .reverse() 
    .map((comment, index) => (
      <div className="comentarioCaja" key={comment._id}>
        <div className="comentarioHeader">
          <img className="comentarioImagen" src={comment.image} alt="" />
          <h3 className="comentarioCreador">{comment.creatorName}</h3>
          <Rating name="read-only" value={comment.rating} readOnly />
        </div>
        <p>{comment.comment}</p>
      </div>
    ))
}
      
    </div>
  );
};
