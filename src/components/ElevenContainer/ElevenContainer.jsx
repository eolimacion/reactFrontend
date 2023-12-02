import React, { useEffect, useState } from "react";
import"./ElevenContainer.css"
import { useForm } from "react-hook-form";
import { Rating } from "@mui/material";
import { useErrorRegister } from "../../hooks/useErrorRegister";
import { usePaginacion } from "../../hooks/usePaginacion";
import {
  createElevenComment,
  getAllElevens,
  getelevenByID,
} from "../../services/eleven.service";
import { Loading } from "../Loading/Loading";
export const ElevenContainer = () => {
  const [elevenLoading, setElevenLoading] = useState(false);
  const [allElevens, setAllElevens] = useState([]);

  const [buttonComment, setButtonComment] = useState("");
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState(false);
  const [send, setSend] = useState(false);
  const [valueStar, setValueStar] = useState(0);
  const [allComments, setAllComments] = useState([]);
  const [registerOk, setRegisterOk] = useState(false);
  const { galeriaItems, ComponentPaginacion, setGaleriaItems, dataPag } =
    usePaginacion(1);

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
    setRes(await createElevenComment(buttonComment, customFormData));
    setSend(false);
  };

  //!!-------------------------------------------------------------------------
  //!!----------Traer y pintar el podium--------------------------------------------
  const getEleven = async () => {
    const elevensData = await getAllElevens();
    setAllElevens(elevensData);
    setElevenLoading(false);
  };

  //este use effect gestiona los datos de la llamada
  useEffect(() => {
    getEleven();
   
    console.log(allComments)
  }, []);
  //cuando es 200 envia al estado de la paginacion
  useEffect(() => {
    if (allElevens?.status == 200) {
      setGaleriaItems(allElevens?.data);
    }
  }, [allElevens]);
  //!!---------------------------------------

  const getAllComments = async (buttonComment) => {
    const commentsData = await getelevenByID(buttonComment);

    setAllComments(commentsData);
  };

  useEffect(() => {
    if (buttonComment) {
      getAllComments(buttonComment);
     
      console.log(allComments)
    }
  }, [buttonComment, res]);

  useEffect(() => {
    useErrorRegister(res, setRegisterOk, setRes);
  }, [res]);

  return (
    <div className="todoElEleven">
    <div className=" formMainDataDos">
        <div className="espacio"></div>
      {allElevens &&
        dataPag?.map((item) => (
          <div className="podiumCardContainer" key={item._id}>
            <div className="nombreYComentario">
              <h3 className="podiumCard">{item?.name}</h3>
            </div>

            <div className="contenedorEleven">
              <div className="contenedorJugadorE goalkeeperE">
                <div className="opcionJugador">
                  <img
                    className="imagenEleven"
                    src={item?.goalkeeper.image}
                    alt={name}
                  />
                </div>
              </div>
              <div className="contenedorJugadorE centrebackE">
                <img
                  className="imagenEleven"
                  src={item?.centreback1.image}
                  alt={name}
                />
              </div>
              <div className="contenedorJugadorE centreback2E">
                <img
                  className="imagenEleven"
                  src={item?. centreback2.image}
                  alt={name}
                />
              </div>
              <div className="contenedorJugadorE rightbackE">
                <img
                  className="imagenEleven"
                  src={item?. rightback.image}
                  alt={name}
                />
              </div>
              <div className="contenedorJugadorE leftbackE">
                <img
                  className="imagenEleven"
                  src={item?.leftback.image}
                  alt={name}
                />
              </div>
              <div className="contenedorJugadorE midfielder1E">
                <img
                  className="imagenEleven"
                  src={item?.midfielder1.image}
                  alt={name}
                />
              </div>
              <div className="contenedorJugadorE midfielder2E">
                <img
                  className="imagenEleven"
                  src={item?.midfielder2.image}
                  alt={name}
                />
              </div>
              <div className="contenedorJugadorE midfielder3E">
                <img
                  className="imagenEleven"
                  src={item?.midfielder3.image}
                  alt={name}
                />
              </div>
              <div className="contenedorJugadorE forward1E">
                <img
                  className="imagenEleven"
                  src={item?.forward1.image}
                  alt={name}
                />
              </div>
              <div className="contenedorJugadorE forward2E">
                <img
                  className="imagenEleven"
                  src={item?.forward2.image}
                  alt={name}
                />
              </div>
              <div className="contenedorJugadorE forward3E">
                <img
                  className="imagenEleven"
                  src={item?.forward3.image}
                  alt={name}
                />
              </div>
            </div>
            {buttonComment !== "" ? (
              <div className="allForm">
                <div className="formMain">
                  <h1 className="formTitle">CREAR COMENTARIO</h1>
                  <form className="form" onSubmit={handleSubmit(formSubmit)}>
                    <div className="riderInfo formGroup">
                      <label htmlFor="comment" className="customPlaceholder">
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
                  {buttonComment !== "" && (
                    <button className="btn" onClick={() => handleComment("")}>
                      Volver
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <button className="btn" onClick={() => handleComment(item._id)}>
                Comments
              </button>
            )}
          </div>
        ))}

      {buttonComment == "" && <ComponentPaginacion />}

      {allComments &&
        buttonComment !== "" &&
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
          ))}
    </div>
    </div>
  );
};
