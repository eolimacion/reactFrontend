import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Rating } from "@mui/material";
import { useErrorRegister } from "../../hooks/useErrorRegister";
import { usePaginacion } from "../../hooks/usePaginacion";
import {
  createElevenComment,
  getAllElevens,
  getElevenById,
  getelevenByID,
} from "../../services/eleven.service";
import { Loading } from "../Loading/Loading";
export const UserEleven = ({ elevenId }) => {
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

  //!!Referente a comentarios sobre el eleven-----------------------
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
  //!!----------Traer y pintar el eleven--------------------------------------------
  const getEleven = async () => {
    const elevensData = await getElevenById(elevenId);
    setAllElevens(elevensData);
    setAllComments(elevensData)
    setElevenLoading(false);
  };

  //este use effect gestiona los datos de la llamada
  useEffect(() => {
    getEleven();
  }, []);

  //!!---------------------------------------


  useEffect(() => {
    useErrorRegister(res, setRegisterOk, setRes);
  }, [res]);

  return (
    <div className="todoElEleven">
    <div className=" formMainDataDos">
        <div className="espacio"></div>
      {allElevens &&
          <div className="podiumCardContainer" key={allElevens?.data?._id}>
            <div className="nombreYComentario">
              <h3 className="podiumCard">{allElevens?.data?.name}</h3>
            </div>

            <div className="contenedorEleven">
              <div className="contenedorJugadorE goalkeeperE">
                <div className="opcionJugador">
                  <img
                    className="imagenEleven"
                    src={allElevens?.data?.goalkeeper.image}
                    alt={name}
                  />
                  <h4 className="playerElevenName">{allElevens?.data?.goalkeeper.name}</h4>
                </div>
              </div>
              <div className="contenedorJugadorE centrebackE">
                <img
                  className="imagenEleven"
                  src={allElevens?.data?.centreback1.image}
                  alt={name}
                />
                <h4 className="playerElevenName">{allElevens?.data?.centreback1.name}</h4>
              </div>
              <div className="contenedorJugadorE centreback2E">
                <img
                  className="imagenEleven"
                  src={allElevens?.data?.centreback2.image}
                  alt={name}
                />
                 <h4 className="playerElevenName">{allElevens?.data?.centreback2.name}</h4>
              </div>
              <div className="contenedorJugadorE rightbackE">
                <img
                  className="imagenEleven"
                  src={allElevens?.data?.rightback.image}
                  alt={name}
                />
                 <h4 className="playerElevenName">{allElevens?.data?.rightback.name}</h4>
              </div>
              <div className="contenedorJugadorE leftbackE">
                <img
                  className="imagenEleven"
                  src={allElevens?.data?.leftback.image}
                  alt={name}
                />
                 <h4 className="playerElevenName">{allElevens?.data?.leftback.name}</h4>
              </div>
              <div className="contenedorJugadorE midfielder1E">
                <img
                  className="imagenEleven"
                  src={allElevens?.data?.midfielder1.image}
                  alt={name}
                />
                 <h4 className="playerElevenName">{allElevens?.data?.midfielder1.name}</h4>
              </div>
              <div className="contenedorJugadorE midfielder2E">
                <img
                  className="imagenEleven"
                  src={allElevens?.data?.midfielder2.image}
                  alt={name}
                />
                  <h4 className="playerElevenName">{allElevens?.data?.midfielder2.name}</h4>
              </div>
              <div className="contenedorJugadorE midfielder3E">
                <img
                  className="imagenEleven"
                  src={allElevens?.data?.midfielder3.image}
                  alt={name}
                />
                  <h4 className="playerElevenName">{allElevens?.data?.midfielder3.name}</h4>
              </div>
              <div className="contenedorJugadorE forward1E">
                <img
                  className="imagenEleven"
                  src={allElevens?.data?.forward1.image}
                  alt={name}
                />
                  <h4 className="playerElevenName">{allElevens?.data?.forward1.name}</h4>
              </div>
              <div className="contenedorJugadorE forward2E">
                <img
                  className="imagenEleven"
                  src={allElevens?.data?.forward2.image}
                  alt={name}
                />
                 <h4 className="playerElevenName">{allElevens?.data?.forward2.name}</h4>
              </div>
              <div className="contenedorJugadorE forward3E">
                <img
                  className="imagenEleven"
                  src={allElevens?.data?.forward3.image}
                  alt={name}
                />
                 <h4 className="playerElevenName">{allElevens?.data?.forward3.name}</h4>
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
              <button className="btn" onClick={() => handleComment(allElevens?.data?._id)}>
                Comments
              </button>
            )}
          </div>
        }

      {/* {buttonComment == "" && <ComponentPaginacion />} */}

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
