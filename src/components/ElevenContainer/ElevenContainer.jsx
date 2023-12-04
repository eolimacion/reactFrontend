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
import { Link } from "react-router-dom";
import { useCommentError } from "../../hooks/useCommentError";
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
    const elevensData = await getAllElevens();
    setAllElevens(elevensData);
    setElevenLoading(false);
  };

  //este use effect gestiona los datos de la llamada
  useEffect(() => {
    getEleven();
   
    console.log(allElevens)
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
    useCommentError(res, setRegisterOk, setRes);
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
                  <h4 className="playerElevenName">{item.goalkeeper.name}</h4>
                </div>
              </div>
              <div className="contenedorJugadorE centrebackE">
                <img
                  className="imagenEleven"
                  src={item?.centreback1.image}
                  alt={name}
                />
                <h4 className="playerElevenName">{item.centreback1.name}</h4>
              </div>
              <div className="contenedorJugadorE centreback2E">
                <img
                  className="imagenEleven"
                  src={item?. centreback2.image}
                  alt={name}
                />
                 <h4 className="playerElevenName">{item.centreback2.name}</h4>
              </div>
              <div className="contenedorJugadorE rightbackE">
                <img
                  className="imagenEleven"
                  src={item?. rightback.image}
                  alt={name}
                />
                 <h4 className="playerElevenName">{item.rightback.name}</h4>
              </div>
              <div className="contenedorJugadorE leftbackE">
                <img
                  className="imagenEleven"
                  src={item?.leftback.image}
                  alt={name}
                />
                 <h4 className="playerElevenName">{item.leftback.name}</h4>
              </div>
              <div className="contenedorJugadorE midfielder1E">
                <img
                  className="imagenEleven"
                  src={item?.midfielder1.image}
                  alt={name}
                />
                 <h4 className="playerElevenName">{item.midfielder1.name}</h4>
              </div>
              <div className="contenedorJugadorE midfielder2E">
                <img
                  className="imagenEleven"
                  src={item?.midfielder2.image}
                  alt={name}
                />
                  <h4 className="playerElevenName">{item.midfielder2.name}</h4>
              </div>
              <div className="contenedorJugadorE midfielder3E">
                <img
                  className="imagenEleven"
                  src={item?.midfielder3.image}
                  alt={name}
                />
                  <h4 className="playerElevenName">{item.midfielder3.name}</h4>
              </div>
              <div className="contenedorJugadorE forward1E">
                <img
                  className="imagenEleven"
                  src={item?.forward1.image}
                  alt={name}
                />
                  <h4 className="playerElevenName">{item.forward1.name}</h4>
              </div>
              <div className="contenedorJugadorE forward2E">
                <img
                  className="imagenEleven"
                  src={item?.forward2.image}
                  alt={name}
                />
                 <h4 className="playerElevenName">{item.forward2.name}</h4>
              </div>
              <div className="contenedorJugadorE forward3E">
                <img
                  className="imagenEleven"
                  src={item?.forward3.image}
                  alt={name}
                  
                />
                 <h4 className="playerElevenName">{item.forward3.name}</h4>
              </div>
            
            
            </div>
            <Link to={`/users/${item?.owner?._id}`}>
              <p className="byAlguienn">By {item?.owner?.name}</p>
              </Link>
            <ComponentPaginacion handleComment={()=>handleComment(item?._id)} />
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
            
              
              
            
          </div>
        ))}

  

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
    </div>
  );
};
