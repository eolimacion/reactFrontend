
import"./ElevenContainer.css"

import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { Rating } from "@mui/material";
import { usePaginacion } from "../../hooks/usePaginacion";
import { Link } from "react-router-dom";
import { useCommentError } from "../../hooks/useCommentError";
import { createElevenComment, getAllElevens } from "../../services/eleven.service";

export const ElevenContainer = () => {
  const [podiumLoading, setPodiumLoading] = useState(false);
  const [allElevens, setAllElevens] = useState([]);

  const [buttonComment, setButtonComment] = useState("");
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState(false);
  const [send, setSend] = useState(false);
  const [valueStar, setValueStar] = useState(0);

  const [registerOk, setRegisterOk] = useState(false);
  //!incializar esta variable para luego poder setear 
  let idCurrent = "";
  const { galeriaItems, ComponentPaginacion, setGaleriaItems, dataPag } =
    usePaginacion(1);

  //!!Referente a comentarios sobre el podium-----------------------
 
  const handleCurrentEleven = (id) => (idCurrent = id);

  const formSubmit = async (formData) => {
    const customFormData = {
      ...formData,
      rating: valueStar,
    };

    setSend(true);
    setRes(await createElevenComment(idCurrent, customFormData));
    setSend(false);
  };

  //!!-------------------------------------------------------------------------
  //!!----------Traer y pintar el podium--------------------------------------------
  const getEleven = async () => {
    const elevensData = await getAllElevens();
    setAllElevens(elevensData);
    setPodiumLoading(false);
  };
  //este use effect gestiona los datos de la llamada
  useEffect(() => {
    getEleven();
    console.log(allElevens);
  }, []);
  //cuando es 200 envia al estado de la paginacion
  useEffect(() => {
    if (allElevens?.status == 200) {
      setGaleriaItems(allElevens?.data);
    }
  }, [allElevens]);
  //!!---------------------------------------

  useEffect(() => {
    useCommentError(res, setRegisterOk, setRes);
    getEleven();
  }, [res]);


  return (
    <div className="podiumAbel">
      {allElevens &&
        dataPag?.map((item, index) => {
          handleCurrentEleven(item._id);

          return (
            <div className="contenedorGeneralE" key={item?._id}>
              <div className="nombreYComentario">
                <h3 className="podiumCard">{item?.name}</h3>
                <Link to={`/users/${item?.owner?._id}`}>
                  <p className="byAlguienP">By: {item?.owner?.name}</p>
                </Link>
              </div>
              <ComponentPaginacion />
              <div className="contenedorEleven">
                <div className="contenedorJugadorE goalkeeperE">
                  <div className="opcionJugador">
                    <img
                      className="imagenEleven"
                      src={item?.goalkeeper.image}
                      alt={item?.goalkeeper.name}
                    />
                    <h4 className="playerElevenName">{item?.goalkeeper.name}</h4>
                  </div>
                </div>
                <div className="contenedorJugadorE centrebackE">
                  <img
                    className="imagenEleven"
                    src={item?.centreback1.image}
                    alt={item?.centreback1.name}
                  />
                  <h4 className="playerElevenName">{item?.centreback1.name}</h4>
                </div>
                <div className="contenedorJugadorE centreback2E">
                  <img
                    className="imagenEleven"
                    src={item?.centreback2.image}
                    alt={item?.centreback2.name}
                  />
                  <h4 className="playerElevenName">{item?.centreback2.name}</h4>
                </div>
                <div className="contenedorJugadorE rightbackE">
                  <img
                    className="imagenEleven"
                    src={item?.rightback.image}
                    alt={item?.rightback.name}
                  />
                  <h4 className="playerElevenName">{item?.rightback.name}</h4>
                </div>
                <div className="contenedorJugadorE leftbackE">
                  <img
                    className="imagenEleven"
                    src={item?.leftback.image}
                    alt={item?.leftback.name}
                  />
                  <h4 className="playerElevenName">{item?.leftback.name}</h4>
                </div>
                <div className="contenedorJugadorE midfielder1E">
                  <img
                    className="imagenEleven"
                    src={item?.midfielder1.image}
                    alt={item?.midfielder1.name}
                  />
                  <h4 className="playerElevenName">{item?.midfielder1.name}</h4>
                </div>
                <div className="contenedorJugadorE midfielder2E">
                  <img
                    className="imagenEleven"
                    src={item?.midfielder2.image}
                    alt={item?.midfielder2.name}
                  />
                  <h4 className="playerElevenName">{item?.midfielder2.name}</h4>
                </div>
                <div className="contenedorJugadorE midfielder3E">
                  <img
                    className="imagenEleven"
                    src={item?.midfielder3.image}
                    alt={item?.midfielder3.name}
                  />
                  <h4 className="playerElevenName">{item?.midfielder3.name}</h4>
                </div>
                <div className="contenedorJugadorE forward1E">
                  <img
                    className="imagenEleven"
                    src={item?.forward1.image}
                    alt={item?.forward1.name}
                  />
                  <h4 className="playerElevenName">{item?.forward1.name}</h4>
                </div>
                <div className="contenedorJugadorE forward2E">
                  <img
                    className="imagenEleven"
                    src={item?.forward2.image}
                    alt={item?.forward2.name}
                  />
                  <h4 className="playerElevenName">{item?.forward2.name}</h4>
                </div>
                <div className="contenedorJugadorE forward3E">
                  <img
                    className="imagenEleven"
                    src={item?.forward3.image}
                    alt={item?.forward3.name}
                  />
                  <h4 className="playerElevenName">{item?.forward3.name}</h4>
                </div>
              </div>

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
                </div>
              </div>

              <div className="cajonCommentsGeneral">
                {item?.comments?.length > 0 ? (
                 
                  item?.comments
                    .slice()
                    .reverse()
                    .map((comment, index) => (
                      <div className="miniCommentComponent" key={index}>
                  
                        <img
                          className="miniCommentComponentImage"
                          src={comment?.image}
                          alt={`User ${index + 1}`}
                        />
                        <div className="miniCommentComponentText">
                          <Link to={`/users/${comment?.creator}`}>
                            <h2>{comment?.creatorName}</h2>
                          </Link>
                          <h3>{comment?.createdAt?.slice(0, 10)}</h3>
                          <p>{comment?.comment}</p>
                        </div>
                        <Rating
                          name="read-only"
                          value={comment?.rating}
                          readOnly
                        />
                      </div>
                    ))
                ) : (
                  <div className="miniCommentComponent" key={"aaaaa"}>
                    <img
                      className="miniCommentComponentImage"
                      src={
                        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                      }
                      alt="imagen por defecto"
                    />
                    <div className="miniCommentComponentText">
                      <h2>No comments yet</h2>

                      <p>
                        This podium has no comments yet, be the first to
                        comment.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
    </div>
  )
}
