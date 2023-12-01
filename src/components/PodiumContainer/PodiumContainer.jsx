import React, { useEffect, useState } from "react";
import"./PodiumContainer.css"
import {
  createPodiumComment,
  getAllComentsByID,
  getAllPodiums,
  getpodiumByID,
} from "../../services/podium.service";
import { CardPodiums } from "../CardPodiums/CardPodiums";
import { useForm } from "react-hook-form";
import { Paginacion } from "../../utils/paginacion";
import { Rating } from "@mui/material";
import { useErrorRegister } from "../../hooks/useErrorRegister";

export const PodiumContainer = () => {
  const [podiumLoading, setPodiumLoading] = useState(false);
  const [allPodiums, setAllPodiums] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
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
    // guarda todos lo que manden por register
    // en este caso no hay imagen y nos quedamos con lo que tenemos en el form data
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
  const getPodiums = async () => {
    setPodiumLoading(true);
    const podiumData = await getAllPodiums();
    setAllPodiums(podiumData);

    setPodiumLoading(false);
  };
  useEffect(() => {
    getPodiums();
  }, []);

  //!!-------------------------------------------------------------------------
  //!!--------------------PAginacion-------------------------------------
  const nextPage = () => {
    if (currentPage < allPodiums?.data?.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  //!!---------------------------------------

  const getAllComments = async (buttonComment) => {
    const commentsData = await getpodiumByID(buttonComment);
  
    setAllComments(commentsData);
  };

  useEffect(() => {
    if (buttonComment) {
      getAllComments(buttonComment);
    }
  }, [buttonComment,res]);

  useEffect(() => {
    useErrorRegister(res, setRegisterOk, setRes);
    
  }, [res]);



  return (
    <div className="podiumAbel">
      {allPodiums &&
        allPodiums?.data?.map(
          (item, index) =>
            index + 1 === currentPage && (
              <div className="podiumCardContainer" key={item._id}>
                <div className="nombreYComentario">
                  <h3 className="podiumCard">{item?.name}</h3>
                </div>

                <div className="podiumCartas">
                  <CardPodiums
                    className="primerPuesto"
                    name={item?.firstPlace?.name}
                    image={item?.firstPlace?.image}
                  />
                  <CardPodiums
                    className="segundoPuesto"
                    name={item?.secondPlace?.name}
                    image={item?.secondPlace?.image}
                  />
                  <CardPodiums
                    className="tercerPuesto"
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
                      { buttonComment !== ""&&<button onClick={() => handleComment("")}>Volver</button>}
                     
                    </div>
                  </div>
                ) : (
                  <button onClick={() => handleComment(item._id)}>
                    Comments
                  </button>
                )}
              </div>
            )
        )}

      {buttonComment == "" && (
        <Paginacion
          currentPage={currentPage}
          totalPages={allPodiums?.data?.length}
          onNextPage={nextPage}
          onPrevPage={prevPage}
        />
      )}
      
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
